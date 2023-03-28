/*
    默认情况下，nodejs中的模块化标准时CommonJS
        要想使用ES的模块化，可以采用以下两种方案
            1.使用mjs作为扩展名
            2.修改package.json将模块化规范设置为ES模块
                "type": "module"   ES模块
                "type": "CommonJS"   CommonJS模块

    ES模块化
        向外导出内容
            export let a = 10
            export const b = {name:"aaaa"}

            默认导出
            export default function sum(){}
        导入模块
            import {} from "./xxxx"
            ES模块不能省略扩展名

            导入默认导出的内容可以随便起名
            import sum from "./xxxx" 
            import aaaa from "./xxxx"
        通过ES模块化，导入的内容都是常量，不能修改，
            常量并不影响对象的修改 
 */