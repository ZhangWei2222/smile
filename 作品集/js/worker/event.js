var eventUtil = {
    // 添加事件句柄
    addEventHandler:function (element,type,handler) {
        if (element.addEventListener) {
            element.addEventListener(type, handler,false);
        }else if(element.attachEvent){
            element.attachEvent("on"+type,handler);
        }else {
            element["on"+type]=handler;
        }
    },
    // 删除事件句柄
    removeEventHandler:function (element,type,handler) {
        if (element.removeEventListener) {
            element.removeEventListener(type, handler,false);
        }else if(element.detachEvent){
            element.detachEvent("on"+type,handler);
        }else {
            element["on"+type]=null;
        }
    },
    // 获取事件对象
    getEvent:function (event) {
        return event?event:window.event;
    },
    // 获取事件的类型
    getType:function (event) {
        return event.type;
    },
    // 获取事件对象目标
    getTarget:function (event) {
        if (event.target) {
            return event.target;
        }else{
            return event.srcElement;
        }
    },
    // 阻止事件冒泡
    stopPropagation:function (event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        }else{
            event.cancelBubble=true;
        }
    },
    // 阻止事件默认行为
    preventDefault:function (event) {
        if (event.preventDefault) {
            event.preventDefault();
        }else{
            event.returnValue=false;
        }
    }
}