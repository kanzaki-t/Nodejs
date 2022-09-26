const fs = require('fs')

// 2.调用fs.readFile()方法读取文件
//   参数1:读取文件的存放路径
//   参数2:读取文件时候采用的编码格式，一般默认指定utf-8
//   参数3:回调函数，拿到读取失败和成功的结果 err data

fs.readFile('./2.txt','utf-8',function(err,data){
    // 打印失败的结果
    // 如果读取成功，则 err 的值为 null
    // 如果读取失败，则 err 的值为 错误对象，data 的值为 undefined

    if(err){
        return console.log('读取失败！',err.message)
    }
    // 打印成功的结果
    console.log('读取成功！',data)
})