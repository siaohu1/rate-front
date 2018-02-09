let express = require('express');
let app = express();
app.listen(8000);
let fs = require('fs');
let list = require('./list');
let bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.static(__dirname));
//read
function read(cb) { //用来读取数据的
  fs.readFile('./list.json','utf8',function (err,data) {
    if(err || data.length === 0){
      cb([]); // 如果有错误 或者文件没长度 就是空数组
    }else{
      cb(JSON.parse(data)); // 将读出来的内容转化成对象
    }
  })
}
//write
function write(data,cb) { // 写入内容
  fs.writeFile('./list.json',JSON.stringify(data),cb)
}
// 跨域
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1');
  if(req.method=="OPTIONS") res.send(200);/*让options请求快速返回*/
  else  next();
});
//获取list
app.get('/list',function (req,res) {
  res.json(list);
});
//获取hit
// app.get('/project/updateClick',function (req,res) {
//   res.json(hit);
// });
// //获取vote
// app.get('/projectPoll/updatePollByid',function (req,res) {
//   res.json(vote);
// });

