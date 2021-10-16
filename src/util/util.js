function inputBlur () {
    let u = navigator.userAgent
    let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
    if (isIOS) {
      setTimeout(() => {
        const scrollHeight = document.documentElement.scrollTop || document.body.scrollTop || 0
        window.scrollTo(0, Math.max(scrollHeight - 1, 0))
      }, 200)
    }
  }

export function isEmpty(obj) {
  for (let i in obj){
      return true
  }
  return false
}

export function isWeChat() {
  var ua = window.navigator.userAgent.toLowerCase();
  if (ua.match(/MicroMessenger/i) == 'micromessenger') {
    return true;
  } else {
    return false;
  }
}

export function isPC() {
  var userAgentInfo = navigator.userAgent;
  var Agents = ["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"];
  var flag = true;
  for(var v=0; v<Agents.length; v++){
    if(userAgentInfo.indexOf(Agents[v]) >0 ){
      flag=false;
      break;
    }
  }
  return flag;
}

export function isAndroid(){
  var userAgentInfo = navigator.userAgent;
  return userAgentInfo.indexOf("Android") >0;
}