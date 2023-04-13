/*
    cookie的不足
        - cookie是由服务器创建，浏览器保存
            每次浏览器访问服务器时都要将cookie发回
            这就导致我们不能在cookie存放较多的数据
            并且cookie是直接存储在客户端的，容易被篡改盗用
        - 注意：
            我们在使用cookie一定不会在cookie存储敏感数据

        - 所以为了解决cookie的不足，我们希望可以这样
            将用户的数据统一存储在服务器中，
                每一个用户的数据都有一个对应的id
                我们只需要通过cookie将id发送给浏览器
                浏览器只需要每次访问时将id发回，即可读取到服务器中存储的数据

                这个技术就是session
    session
        - 是服务器中的一个对象，这个对象用来存储用户的数据
        - 每一个session对象都有一个唯一的id，id会通过cookie的形式发送给客户端
        - 客户端每次访问时只需要将存储有id的cookie发回即可获取他在服务器中存储的数据
        - 在express中可以通过 express-session 组件来实现session功能
        - 使用步骤：
            1.安装
                yarn add express-session
            2.引入
                const session = require("express-session")
            3.设置中间件
                app.use(session({
                    secret:"hello"
                }))
        session是有有效期的
        - 默认情况下，session的有效期就是一次会话，session
            会话就是一次从打开到关闭浏览器的过程
        - 服务器中的session对象没了
            服务器重启

            如何持久化（文件或者数据库）

            文件：
                需要引入一个中间件session-file-store
                使用步骤：
                    1.安装
                        yarn add session-file-store
                    2.引入
                        const FileStore = require("session-file-store")(session)
                    3.设置中间件
                    app.use(session({
                        store: new FileStore({})
                        secret:"hello"
                    }))
                
*/