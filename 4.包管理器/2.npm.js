/*
    package.json
        scripts
            - 可以自定义一些命令
            - 定义以后可以直接通过npm来执行这些命令
            - start 和 test 可以直接通过 npm start npm test执行
            - 其他命令需要通过npm run xxx 执行

    npm镜像
        - npm的仓管的服务器位于国外，有时候并不是那么的好使
        - 为了解决这个问题，可以在npm中配置一个镜像服务器
        - 镜像的配置：
            1.阿里云cnpm（不太推荐）
            2.彻底修改npm仓库地址（推荐）
                修改：npm set registry https://registry.npmmirror.com
                还原：npm config delete registry


*/