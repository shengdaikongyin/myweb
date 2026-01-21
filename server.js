const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// 提供静态文件
app.use(express.static(path.join(__dirname, 'src')));

// 处理所有请求，返回index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`服务器运行在 http://localhost:${port}`);
});