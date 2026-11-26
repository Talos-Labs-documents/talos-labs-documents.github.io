// Read-only public dataset adapter; no DOM or engine dependencies.
const BASE='https://talos-labs-documents.github.io/observatory/';
const text=(x)=>typeof x==='string'&&x.length>0;
function safeLink(s,host){try{const u=new URL(s);return u.protocol==='https:'&&u.hostname===host&&!u.username&&!u.password}catch{return false}}
export function normalize(kind,d){
 if(!d||d.schemaVersion!==1)throw Error('Unsupported schema');
 if(kind==='evidence'){if(!Array.isArray(d.records)||!d.records.every(x=>['id','classification','question','method','result','limitations'].every(k=>text(x[k]))&&safeLink(x.source,'github.com')&&/\/blob\/[a-f0-9]{40}\//.test(new URL(x.source).pathname)))throw Error('Invalid evidence');if(new Set(d.records.map(x=>x.id)).size!==d.records.length)throw Error('Duplicate evidence');return d.records.map(x=>({id:x.id,title:x.id,classification:x.classification,question:x.question,method:x.method,result:x.result,limitations:x.limitations,url:x.source}))}
 if(kind==='publications'){if(!Array.isArray(d.entries)||!Array.isArray(d.relationships)||!d.entries.every(x=>text(x.title)&&safeLink(x.url,'taloslabs.substack.com')&&Number.isFinite(Date.parse(x.date))))throw Error('Invalid catalog');const ids=new Set(d.entries.map(x=>x.url));if(ids.size!==d.entries.length||!d.relationships.every(x=>ids.has(x.publication)&&safeLink(x.target,'github.com')&&text(x.type)))throw Error('Invalid relationships');return {entries:d.entries.map(x=>({id:x.url,title:x.title,date:x.date,url:x.url})),relationships:d.relationships.map(x=>({publication:x.publication,target:x.target,type:x.type})),provenance:d.relationshipProvenance}}
 if(kind==='telemetry'){if(d.mode!=='not-connected'||d.asOf!==null||!Array.isArray(d.events)||d.events.length)throw Error('Unsupported telemetry');return {mode:'not-connected',workerCount:null,events:[]}}
 throw Error('Unknown dataset')
}
export async function loadObservatory(fetcher=globalThis.fetch){const kinds=['evidence','publications','telemetry'];const pairs=await Promise.all(kinds.map(async kind=>{try{const r=await fetcher(BASE+kind+'.json',{credentials:'omit',redirect:'error',signal:AbortSignal.timeout(10000)});if(!r.ok)throw Error('Unavailable');return [kind,{status:'available',data:normalize(kind,await r.json())}]}catch{return [kind,{status:'unavailable',data:null}]}}));return Object.fromEntries(pairs)}
