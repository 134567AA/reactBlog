const express = require("express");
const bodyParser = require('body-parser');
const router = require('./index');
const path = require('path');
const cors = require('cors');



const app = express();
const PORT = process.env.PORT || 5000;


app.use('/api',router); //db 연결을 위한 router 설정
// app.use(cors()); // cors 충돌오류 막기위해 cors 설정

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use('/', express.static(path.join(__dirname,'./client/public')));


app.listen(PORT,()=>{
    console.log(PORT,'에서 기다리는 중..');
});