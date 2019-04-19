/*
    ModelEvent 存储容器
    addEvent 添加事件方法
*/
interface IcallbackEvent {
    eventName: string
    callback: <T>(str?: T) => T | void
}
class ModelEvent {
    private modelArr: IcallbackEvent[] = []
    /**
     * addEvent 添加事件函数
     * @param callback 事件函数
     * @param eventName 事件名
     */
    public addEvent(callback: <T>(str?: T ) => T | void , eventName: string): Promise<this> {
        return Promise.resolve().then(() => {
            try {
                this.modelArr.push({
                    eventName,
                    callback
                })
                return this
            } catch (error) {
                return error
            }
        })
    }
    /**
     * startEvent
     * @param elementName 事件名
     */
    public startEvent<T>(elementName: string, str?: T): Promise<this> {
        let newElement: boolean = false
        return Promise.resolve().then(() => {
            try {
                this.modelArr.forEach((element: IcallbackEvent) => {
                    if (element.eventName === elementName) {
                        newElement = true
                        if (str) {
                            element.callback(str)    
                        }else {
                            element.callback()
                        }
                    }
                });
                return this
            } catch (error) {
                return error
            }
        })
    }
    /**
     * delElement
     */
    public delElement(elementName: string): Promise<this> {
        return Promise.resolve().then(() => {
            try {
                let result: string
                this.modelArr.forEach((element) => {
                    if (element.eventName === elementName) {
                        element.callback = () => {
                            console.log('这个函数为Null')
                        }
                        result = '删除成功'
                    } else {
                        result = '此函数没有找到无法删除'
                    }
                })
                return this
            } catch (error) {
                return error                
            }
        })
    }
}

export function modelEve(): ModelEvent {
    return new ModelEvent()
}
