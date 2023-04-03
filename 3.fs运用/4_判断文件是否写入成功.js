const fs = require('fs')

fs.writeFile('./2.txt','22222',function(err){


    if(err){
        return console.log('写入失败！',err.message)
    }
    // 打印成功的结果
    console.log('写入成功！')
})