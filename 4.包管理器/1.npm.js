/*
    package.json
        - 是包的描述文件
        - node中通过该文件对项目进行描述
        - 每个node项目必须有package.json

    创建package.json
        初始化项目
            npm init
            然后会提示填写初始化包的一些信息
            npm init -y
            不用一个一个填写，默认都是yes，但是根据目录的起名，导致name属性会报错
        下载指定包
            npm install 包名
            npm i 包名
                install时发生了什么？
                    1.将包下载到当前项目的node_modules目录下
                    2.会在package.json的dependencies（依赖）属性中添加一个新属性
                        "lodash":"^4.17.21"
                        ^表示更新到4.之后的最新版本
                    3.会自动添加package-lock.json文件
                        帮助npm下载的，不用动它

            npm i (不加包名)
                - 自动安装所有依赖

            引入从npm下载的包时，不需要书写路径，直接写包名即可
            const _ = require("lodash")


*/