const fs = require('fs')

// 如果出现路径拼接的问题，是因为提供了 ./ 或 ../ 开头的相对路径
// 如果要解决这个问题，可以直接提供一个完整的文件存放路径就行

// fs.readFile('./2.txt','utf-8',function(err,data){

//     if(err){
//         return console.log('读取失败！',err.message)
//     }
//     // 打印成功的结果
//     console.log('读取成功！',data)
// })

// 解决方案1：移植性非常差，不利于维护
// fs.readFile('C:\\code\\Nodejs\\fs运用\\2.txt','utf-8',function(err,data){

//     if(err){
//         return console.log('读取失败！',err.message)
//     }
//     // 打印成功的结果
//     console.log('读取成功！',data)
// })

// 解决方案2：__dirname
fs.readFile(__dirname + '/2.txt','utf-8',function(err,data){

    if(err){
        return console.log('读取失败！',err.message)
    }
    // 打印成功的结果
    console.log('读取成功！',data)
})