declare class ModelEvent {
    private modelArr;
    /**
     * addEvent 添加事件函数
     * @param callback 事件函数
     * @param eventName 事件名
     */
    addEvent(callback: <T>(str?: T) => T | void, eventName: string): Promise<this>;
    /**
     * startEvent
     * @param elementName 事件名
     */
    startEvent<T>(elementName: string, str?: T): Promise<this>;
    /**
     * delElement
     */
    delElement(elementName: string): Promise<this>;
}
export declare function modelEve(): ModelEvent;
export {};
