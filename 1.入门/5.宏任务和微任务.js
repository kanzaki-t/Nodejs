/*
    JS是单线程的，它的运行是基于事件循环机制（event loop）
        - 调用栈
            - 栈
                是一种数据结构，后进先出
            - 调用栈中，放的是要执行的代码
        - 任务队列
            - 队列
                - 队列是一种数据结构，先进先出
            - 放的是将要执行的代码
            - 队列有两种：
                宏：大部分代码都去宏任务队列
                微：Promise的回调函数，then，catch，finally

        整个流程：
            1.先执行调用栈中的代码
            2.执行微任务队列中的代码
            3.执行宏任务队列中的代码
        
        queueMicrotask() 用来向微任务队列中添加一个任务

        同时两个微任务的执行顺序取决与写的顺序而已
*/
