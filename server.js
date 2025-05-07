const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('/home/runner/workspace/src'));

app.get('/*', function(req,res) {
  res.sendFile(path.join('/home/runner/workspace/src/index.html'));
});

app.listen(process.env.PORT || 8080);
