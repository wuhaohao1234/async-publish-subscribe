let modelEve = require('../dist').modelEve

let modelEvent = modelEve()

modelEvent.addEvent(() => {
    console.log(1)
}, '第一个函数')
.then((res) => {
    return res.addEvent(() => {
        console.log(2)
    }, '第二个函数')
})
.catch((err) => {
    return  err
})
.then((res) => {
    return res.startEvent('第一个函数')
})
.catch((err) => {
    return  err
})
.then((res) => {
    return res.startEvent('第二个函数')
})
.catch((err) => {
    return  err
})
.then((res) => {
    return res.delElement('第一个函数')
})
.catch((err) => {
    console.log(err)
})
.then((res) => {
    res.startEvent('第一个函数')
})
.catch((err) => {
    console.log(err)
})