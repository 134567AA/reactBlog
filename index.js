const express = require('express');
const router = express();
const mysql = require('mysql');

// db 설정
const database = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'carpediem1.',
    port : '3306',
    database: 'react_blog',
});

// db와 접속
database.connect();

// db에 있는 정보를 불러오기

router.get('/list',(req,res)=>{
    let boardquery = 'select * from listBoard where date_format(listDate,"%yy/%mm/%dd")';
    database.query(boardquery,(err,rows,fields)=>{
        if(err){res.send(err)};
        res.send(rows);
        
    });
});

// 새로 입력하는 정보를 db에 추가하기
// router.post('/contact',(req,res)=>{
//     let boardquery = 'select * from writeboard ';
//     database.query( boardquery, (err,rows,fields)=>{
//         if(err){console.log('error',err)};
//         res.send(rows);
//     });
// });


module.exports = router;