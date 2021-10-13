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