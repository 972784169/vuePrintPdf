/**
 * Created by Administrator on 2019/7/1.
 */
var express = require('express');
var router = express.Router();

const pool = require("../pool");


router.get("/",(req,res)=>{
    let uid = req.query.uid;
    let uname=req.query.uname;
console.log(uid,uname);
pool.getConnection((err,conn)=>{
    if(err) throw err;
let sql = `select uid,uname,upwd,email from xz_user where uid=?`;

conn.query(sql,[uid],(err,result)=>{
    if(err) throw err;
console.log(sql);
res.json({status:1,data:result});
conn.release();
});
})
})
module.exports = router;




