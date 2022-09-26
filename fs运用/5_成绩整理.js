const fs = require('fs')

fs.readFile('./成绩.txt','utf-8',function (err,data) {
    if(err) {
        return console.log('读取失败',err)
    }
    // console.log('读取成功',data)
    
    // 先把成绩的数据，按照空格进行分割
    const arrOld = data.split(' ')

    // 循环分割后的数组，对每一项数据，进行字符串的替换
    const arrNew = []

    arrOld.forEach(item => {
        arrNew.push(item.replace('=',':'))
    })

    // 把新数组中的每一项，进行合并，得到一个新的字符串
    const newDate = arrNew.join('\r\n')

    //console.log(newDate)

    fs.writeFile('./成绩ok.txt',newDate,function (err) {
        if(err) {
            return console.log('写入失败',err.message)
        }
        console.log('写入成功')
    })
})