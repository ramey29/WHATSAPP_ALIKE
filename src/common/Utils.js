window.btoa = window.btoa || $.base64.encode;
export const isAndroid = () => navigator.userAgent.match(/Android/i);

export const isIOS = () => (
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i)
);

export const isTouchDevice =()=>{
    return (
        !!(typeof window !== 'undefined' &&
            ('ontouchstart' in window ||
                (window.DocumentTouch &&
                    typeof document !== 'undefined' &&
                    document instanceof window.DocumentTouch))) ||
        !!(typeof navigator !== 'undefined' &&
            (navigator.maxTouchPoints || navigator.msMaxTouchPoints))
    );
};
  
export const calculateExpiry=(date)=>{
    let day = 24*60*60*1000;
    let today = new Date();
    let endDate = new Date(date);
    let expiryDay = Math.round(Math.abs((today.getTime() - endDate.getTime())/(day)));
    return expiryDay+1;
  };

  export const ravenLogging=(exceptionFrom,level,logger)=> {
    Raven.captureException(exceptionFrom, {
      level: level,
      logger: logger
    });
  };
  export const timestampToDate = (timestamp) => {
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let currDate = new Date(timestamp);
    return currDate.getDate() + ' ' + months[currDate.getMonth()] + ' ' + currDate.getFullYear();
};
export const debounce = function (func, delay) {
    let timer;
    return function () {
        const args = arguments;
        const context = this;
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(context, args), delay);
    }
};
