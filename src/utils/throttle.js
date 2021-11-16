export default (cb, limit) => {
  let timeoutId = null
  let lastRan = null
  return (args) => {
    if (!lastRan) {
      cb(args)
      lastRan = Date.now()
    } else {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        if ((Date.now() - lastRan) >= limit) {
          cb(args)
          lastRan = Date.now()
        }
      }, limit - (Date.now() - lastRan))
    }

  }
}