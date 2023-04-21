/*
 * @FilePath: \GitCommitScript\bin\script.js
 * @Author: zhangxin
 * @Date: 2023-04-19 21:15:59
 * @LastEditors: zhangxin
 * @LastEditTime: 2023-04-20 21:46:43
 * @Description
 */
const fs = require('fs');
const axios = require('axios');
const schedule = require('node-schedule');
const date = +new Date();

// GitHub API 相关信息
const GITHUB_API_TOKEN = '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';
const GITHUB_REPO_OWNER = 'abc088_6kAX_code';
const GITHUB_REPO_NAME = 'abc-0886kAX-code';
const GITHUB_FILE_PATH = 'https://github.com/abc-0886kAX-code/GitCommitScript/blob/master/file.txt';
const GITHUB_COMMIT_MESSAGE = 'F:/individual/Projects/GitCommitScript/file.txt';
// 定义定时任务，每天中午 12 点执行
schedule.scheduleJob('0 12 * * *', () => {
    // 发送 PUT 请求到 GitHub API 更新文件内容
    axios({
        method: 'put',
        url: `https://api.github.com/repos/${GITHUB_REPO_OWNER}/${GITHUB_REPO_NAME}/contents/${GITHUB_FILE_PATH}`,
        headers: {
            Authorization: `token ${GITHUB_API_TOKEN}`,
            'Content-Type': 'application/json',
            'User-Agent': 'Node.js',
        },
        data: {
            message: GITHUB_COMMIT_MESSAGE,
            content: String(date),
        },
    })
        .then(response => {
            console.log('File updated:', response.data.content.html_url);
        })
        .catch(error => {
            console.error('Failed to update file:', error.message);
        });
});
