/*
    express 是node中的服务器软件
        通过express可以快速的在node中搭建一个web服务器
    - 使用步骤：
        1.创建并初始化项目
            yarn init -y
        2.安装express
            yarn add express
        3.创建index.js入口文件

    引入express
    const express = require("express")

    获取服务器的实例对象
    const app = express()

    启动服务器
        - 3000 是端口号
    app.listen(3000，() =>  {
        console.log("服务器已经启动")
    })

    访问服务器
    格式：
        协议名://ip地址：端口号/路径
        http://localhost:3000
        http://127.0.0.1:3000

    localhost=127.0.0.1

    如果希望服务器可以正常访问，则需要为服务器设置路由
        路由可以根据不同的请求方式和请求地址来处理用户的请求
        app.get(路径，回调函数)
        app.post(路径，回调函数)

        路由应该做两件事
            1.读取用户的请求 request req
            2.根据用户的请求返回响应 response res

        路由的回调函数执行时，会接收到三个参数
        app.get("/"，(req,res,next) =>  {
        
        })

        向客户端发送响应状态码
        res.sendStatus()

        用来设置响应状态码，但是并不发送
        res.status()

        设置并发送响应体
        res.send()

    中间件
        - 在express中，我们使用app.use来定义一个中间件
            客户端 --> 中间件 --> 路由

            用法跟路由很像,但是不区分get或者post方法
            app.use("/"，(req,res,next) =>  {
        
            })

            中间件的url是模糊匹配，只要请求的url中包含中间件的url，就可以访问
            next() 是回调函数的第三个参数，他是一个函数，调用函数后，可以触发后续的中间件
                - next()不能在响应处理完毕后调用

*/