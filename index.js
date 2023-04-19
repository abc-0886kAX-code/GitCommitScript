/*
 * @FilePath: \GitCommitScript\index.js
 * @Author: zhangxin
 * @Date: 2023-04-19 13:04:20
 * @LastEditors: zhangxin
 * @LastEditTime: 2023-04-19 15:29:24
 * @Description:
 */
const fs = require('fs');
const path = require('path');
const child_process = require('child_process');
const FileName = 'file.txt';
const filePath = path.join(__dirname, FileName);
const date = +new Date();
// 写入文件
function writeFile() {
    fs.writeFile(filePath, String(date), 'utf8', err => {
        if (err) throw err;
    });
}

function submitTo() {
    child_process.exec('git add .', { cwd: filePath }, function (error, stdout, stderr) {
        console.log(error, stdout, stderr);
    });
}

async function execute() {
    await writeFile();
    await submitTo();
}

execute();
