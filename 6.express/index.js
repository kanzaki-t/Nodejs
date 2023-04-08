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
    
    目前，服务器代码修改后必须要重启，
            我们希望有一种方式，可以自动监听代码的修改
            代码修改以后可以自动重启服务器
    
    要实现这个功能，需要安装一个模块 nodemon
            - 使用方式：
                1.全局安装
                    npm i nodemon -g
                    yarn global add nodemon
                        - 通过yarn进行全局安装时，默认yarn的目录并不在环境变量中
                          需要手动将路径添加到环境变量中
                - 启动
                    nodemon // 运行index.js
                    nodemon xxx // 运行指定的js

                2.项目安装
                    npm i nodemon -D // 开发依赖安装
                    yarn add nodemon -D
                - 启动
                    npx nodemon

    渲染网页
        服务器中的代码，对于外部来说都是不可见的，
            所以我们写的html页面，浏览器无法直接访问
            如果希望浏览器可以访问，则需要将页面所在的目录设置成静态资源目录
        
        app.use(express.static(path.resolve(__dirname,"./html所在文件夹名")))
        设置static中间件后，浏览器访问时，会自动去文件夹名

        get
            app.get("/login"，(req,res,next) =>  {
                req.query // 表示查询字符串中的请求参数
            })

            /login/:id 表示当用户访问/login/xxx 时就会触发
            在路径中以冒号命名的部分我们称为param，在get请求中被解析为请求参数
            app.get("/login/:id"，(req,res,next) =>  {
                可以通过req.params属性来读取请求参数
                
            })

        post
            引入解析请求体的中间件
            app.use(express.urlencoded()) // 貌似这种方法已经被弃用
            app.use(express.urlencoded({ extended: true })) // 现在需要添加配置

            app.post("/login"，(req,res,next) =>  {
                不能用req.query获取请求的参数
                通过req.body来获取
                默认情况下，express不会自动解析请求体，
                需要通过中间件来为其增加功能
            })

    可以在所有路由的后边配置错误路由

        app.use((req,res) => {
            只要这个中间件一执行，说明上边的地址都没有匹配
            res.status(404)
            res.send("访问的地址不存在")
        })

    希望用户在访问students路由时，可以给用户返回一个显示data信息的页面
        html页面属于静态页面，创建的时候什么样子，用户看到的就是什么样子
            不会动态显示数据

        希望有这么一个东西，长得像网页，但是里面可以嵌入变量
            这个东西在node中被称为 模板
        
        在node中存在有很多个模板引擎，都各具特色，推荐 EJS
            ejs是node中的一款模板引擎，使用步骤：
                1.安装EJS
                2.配置express的模板引擎为ejs
                    app.set("view engine","ejs")
                注意：不用require，模板引擎需要被express渲染后才能使用

                用来渲染一个模板引擎
                可以将一个对象作为render的第二个参数传递，这样在模板中就可以访问到这个对象
                res.render("views文件夹中的ejs文件的文件名",{}) 


                res.redirect("路径")
                用来向某个路径请求重定向，避免重复提交表单
*/