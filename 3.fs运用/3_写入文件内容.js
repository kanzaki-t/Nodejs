const fs = require('fs')


// 2.调用fs.writeFile()方法读取文件
//   参数1:文件的存放路径
//   参数2:写入的内容
//   参数3:回调函数
fs.writeFile('./2.txt', 'cccc', function (err) {
    // 如果写入成功，则 err 的值为 null
    // 如果写入失败，则 err 的值为 错误对象
    console.log(err)
})