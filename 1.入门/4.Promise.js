/*
    静态方法
        Promise.resolve()   创建一个立即完成的Promise

        Promise.reject()    创建一个立即拒绝的Promise

        Promise.all([...])  同时返回多个Promise的执行结果
            - 其中有一个报错，就返回错误
                要么全都要，要么全不要
        
        Promise.allSettled([{}{}{}...])  同时返回多个Promise的执行结果
            - 无论成功与否
            但是返回的是对象
                {status:'fulfilled',value:xxx}
                {status:'rejected',reason:xxx}
        
        Promise.race([...])  返回一个执行最快的Promise,无论成功与否

        Promise.any([...])   返回一个执行最快的Promise,但是只要成功的
            - 当所有都失败了，才会返回一个错误
*/
