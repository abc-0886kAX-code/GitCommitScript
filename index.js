/*
 * @FilePath: \GitCommitScript\index.js
 * @Author: zhangxin
 * @Date: 2023-04-19 13:04:20
 * @LastEditors: zhangxin
 * @LastEditTime: 2023-04-19 13:17:05
 * @Description:
 */
const fs = require('fs');
const path = require('path');
const FileName = 'file.txt';
const date = +new Date();

// 写入文件
function execute() {
    fs.writeFile(path.join(__dirname, FileName), String(date), 'utf8', err => {
        if (err) throw err;
    });
}

execute();
