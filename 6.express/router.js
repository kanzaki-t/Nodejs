/*
    Router是express中创建的一个对象
    const router = express.Router()

    router实际上是一个中间件，可以在该中间件上去绑定各种路由以及其他的中间件
    router.get("/hello",(req,res)=>{

    })
    但是没有办法直接使用，需要用use
    app.use(router)

    实际用法：
            通常在根目录下创建一个routers的文件夹，在这个文件夹内创建各个路由

            const router = express.Router()

            router.get("/hello",(req,res)=>{

            })

            module.export = router

            然后在index文件中引入

            const helloRouter = require("./routers/xxx/js")

            app.use(helloRouter)

            可以在use里面加上一个路径，可以区分同为hello的路径

            app.use("/a",helloRouter)  // 实际访问时url是 /a/hello
*/