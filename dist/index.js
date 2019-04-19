"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ModelEvent {
    constructor() {
        this.modelArr = [];
    }
    /**
     * addEvent 添加事件函数
     * @param callback 事件函数
     * @param eventName 事件名
     */
    addEvent(callback, eventName) {
        return Promise.resolve().then(() => {
            try {
                this.modelArr.push({
                    eventName,
                    callback
                });
                return this;
            }
            catch (error) {
                return error;
            }
        });
    }
    /**
     * startEvent
     * @param elementName 事件名
     */
    startEvent(elementName, str) {
        let newElement = false;
        return Promise.resolve().then(() => {
            try {
                this.modelArr.forEach((element) => {
                    if (element.eventName === elementName) {
                        newElement = true;
                        if (str) {
                            element.callback(str);
                        }
                        else {
                            element.callback();
                        }
                    }
                });
                return this;
            }
            catch (error) {
                return error;
            }
        });
    }
    /**
     * delElement
     */
    delElement(elementName) {
        return Promise.resolve().then(() => {
            try {
                let result;
                this.modelArr.forEach((element) => {
                    if (element.eventName === elementName) {
                        element.callback = () => {
                            console.log('这个函数为Null');
                        };
                        result = '删除成功';
                    }
                    else {
                        result = '此函数没有找到无法删除';
                    }
                });
                return this;
            }
            catch (error) {
                return error;
            }
        });
    }
}
function modelEve() {
    return new ModelEvent();
}
exports.modelEve = modelEve;
//# sourceMappingURL=index.js.map