import{d as n,l as h}from"./index-11f1cd8c.js";const d=n({id:"common",state:()=>({websocket:null,log_cache:[],log_cache_max_len:1e3,startTime:-1,tutorial_map:{qq_official_webhook:"https://astrbot.app/deploy/platform/qqofficial/webhook.html",qq_official:"https://astrbot.app/deploy/platform/qqofficial/websockets.html",aiocqhttp:"https://astrbot.app/deploy/platform/aiocqhttp/napcat.html",wecom:"https://astrbot.app/deploy/platform/wecom.html",gewechat:"https://astrbot.app/deploy/platform/gewechat.html",lark:"https://astrbot.app/deploy/platform/lark.html",telegram:"https://astrbot.app/deploy/platform/telegram.html",dingtalk:"https://astrbot.app/deploy/platform/dingtalk.html"},pluginMarketData:[]}),actions:{createWebSocket(){if(this.websocket)return;let o=window.location.protocol==="https:"?"wss":"ws",t="/api/live-log",e=window.location.port,l=`${o}://${window.location.hostname}:${e}${t}`;console.log("websocket url:",l),this.websocket=new WebSocket(l),this.websocket.onmessage=i=>{this.log_cache.push(i.data),this.log_cache.length>this.log_cache_max_len&&this.log_cache.shift()}},getLogCache(){return this.log_cache},getStartTime(){if(this.startTime!==-1)return this.startTime;h.get("/api/stat/start-time").then(o=>{this.startTime=o.data.data.start_time})},getTutorialLink(o){return this.tutorial_map[o]},async getPluginCollections(o=!1){return!o&&this.pluginMarketData.length>0?Promise.resolve(this.pluginMarketData):h.get("/api/plugin/market_list").then(t=>{var l,i,s,p,r;let e=[];for(let a in t.data.data)e.push({name:a,desc:t.data.data[a].desc,author:t.data.data[a].author,repo:t.data.data[a].repo,installed:!1,version:(l=t.data.data[a])!=null&&l.version?t.data.data[a].version:"未知",social_link:(i=t.data.data[a])==null?void 0:i.social_link,tags:(s=t.data.data[a])!=null&&s.tags?t.data.data[a].tags:[],logo:(p=t.data.data[a])!=null&&p.logo?t.data.data[a].logo:"",pinned:(r=t.data.data[a])!=null&&r.pinned?t.data.data[a].pinned:!1});return this.pluginMarketData=e,e}).catch(t=>(this.toast("获取插件市场数据失败: "+t,"error"),Promise.reject(t)))}}});export{d as u};
