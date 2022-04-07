// node_modules 에 있는 express 관련 파일을 가져온다.
var express = require('express')
var port = process.env.PORT;

// express 는 함수이므로, 반환값을 변수에 저장한다.
var app = express()

var static = require('serve-static');
var path = require('path');
app.use(static(path.join(__dirname, 'public')));

app.get('/', function(req,res) {
    //res.sendFile(__dirname + "/public/index.html")
	console.log("aaaaaaaaaaaa");
    res.sendFile(__dirname + "/public/location.html")
})

// localhost:80/main 브라우저에 res.sendFile() 내부의 파일이 띄워진다.
app.get('/RTF_LOC_MST', function(req,res) {
    
	//res.json([{ loc_cd: 'Flavio' }])
	var mysql = require('mysql');

	var con = mysql.createConnection({
	  host: "retofarm88.cafe24.com",
	  user: "retofarm88",
	  password: "retofarm8!"
	});

	con.connect(function(err) {
	  if (err) throw err;
	  console.log("Connected!");
	  var sql = "SELECT * FROM retofarm88.rtf_loc_mst";
	  con.query(sql, function (err, result, fields) {
		if (err) throw err;
		console.log("Result: " + result);
		//console.log(fields);
	res.json(result);
	  });
	});
})
// 80 포트로 서버 오픈
app.listen(port, function() {
    console.log("start! express server on port ")
})
