/*
    CommonJS
        - 在nojs中，默认支持的模块化规范叫做CommonJS
            在CommonJS中，一个js文件就是一个模块
        - 引入模块
            - 使用require("模块的路径")函数来引入模块
            - 引入自定义模块时
                - 模块名要以./ 或 ../开头
                - 扩展名可以省略
                    - 在CommonJS中，如果省略了js文件的扩展名
                        nodejs会自动为文件补全扩展名
                        寻找顺序为：优先找js文件，没有js文件找json文件

            - 在定义模块时，模块中的内容默认是不能被外部看到的
                - 可以通过 exports 来设置要向外部暴露的内容
            访问exports的方式有两种：
                - 当我们在其它模块中引入当前模块时，require函数返回的就是exports
                - exports是一个对象
                1.exports
                    - 单一导出时使用
                2.module.exports
                    - 多个导出时使用
            - 引入核心模块
                - 直接写核心模块的名字即可
                - 也可以在核心模块前添加 node:
 */