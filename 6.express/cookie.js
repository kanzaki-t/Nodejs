/*
    HTTP协议是一个无状态的协议
        服务器无法区分请求是否发送自同一个客户端

    cookie
        是HTTP协议中用来解决无状态问题的技术
        本质就是一个头
            服务器以响应头的形式将cookie发送给客户端
            客户端收到以后会将其存储，并在下次向服务器发送请求时将其传回
            这样服务器就可以根据cookie来识别客户端了

    app.get("/get-cookie",(req,res)=>{
        // 给客户端发送一个cookie,第三个参数是配置对象
        res.cookie("username","admin",{
            expires:new Date(2022,11,7)  // 不好用

            // 用来设置cookie有效时间，单位是毫秒 1秒=1000毫秒
            maxAge:10000  // 10秒
        })
    })

    app.get("/hello",(req,res)=>{

        需要安装中间件来使得express可以解析cookie
        1.安装cookie-parser
            yarn add cookie-parser
        2.引入
            const cookieParser = require("cookie-parser")
        3.设置为中间件
            app.use(cookieParser())


        // 用来读取客户端发回的cookie
        req.cookies
    })

    cookie是有有效期的
        - 默认情况下，cookie的有效期就是一次会话，session
            会话就是一次从打开到关闭浏览器的过程

        - cookie一旦发送给浏览器就不能再修改了
            但是可以通过发送新的同名的cookie来替换旧cookie，从而达到修改的目的
*/