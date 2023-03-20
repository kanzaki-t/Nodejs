/*

*/

// 创建Promise
// 创建时，构造函数中需要一个函数作为参数
// 构造函数的回调函数，会在创建Promise时调用，调用时会有两个参数
// resolve,reject是两个函数，通过这两个函数可以向Promise中存储数据
// resolve：执行正常时存储数据
// reject：执行错误时存储数据
const promise = new Promise((resolve, reject) => {
    //resolve("哈哈")
    reject('sssssss')
})
console.log(promise);


/*
    从Promise中读取数据
        - 可以通过Promise的实例方法then来读取Promise中存储的数据
        - then需要两个回调函数作为参数
            通过resolve存储的数据，会调用第一个函数返回
                可以在第一个函数中编写处理数据的代码
            通过reject存储的数据或者出现异常的时候，会调用第二个函数返回
                可以在第二个函数中编写处理异常的代码
*/

promise.then((result) => {
    console.log(result);
},(err) => {
    console.log(err);
})

/*
    Promise中维护了两个隐藏属性：
        PromiseResult
            - 用来存储数据

        PromiseState
            - 记录Promise的状态（三种状态）
                fulfilled（完成）
                reject（拒绝，出错了）
                pending（进行中）
            - state只能变一次，一次之后永远不会再变
                const promise = new Promise((resolve, reject) => {
                    resolve("哈哈")
                    reject('sssssss')
                })
                resolve("哈哈")
                reject('sssssss')这两行代码放一起只会执行一个
        流程：
            当Promise创建时，PromiseState初始值是pending，
                当通过resolve存储数据时， PromiseState 变为 fulfilled（完成）
                    PromiseResult变为存储的数据
                当通过reject存储数据时， PromiseState 变为 reject（拒绝，出错了）

            当通过then读取数据时，相当于为Promise设置了回调函数
                如果PromiseState变为fulfilled（完成），则调用then的第一个回调函数
                如果PromiseState变为reject（拒绝，出错了），则调用then的第二个回调函数
*/

/*
    catch() 用法和then类似，但是只有一个回调函数，和reject一个意思，
    只在出现错误的时候调用
*/

promise.catch((err) => {
    
})

/*
    finally()
        无论时正常还是出错了，都会执行
        但是finally的回调函数中不会接受到数据
*/