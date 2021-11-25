/**
 * Created by Administrator on 2019/6/14.
 */
const mysql = require("mysql");
const pool = mysql.createPool({
    host:"127.0.0.1",
    user:"root",
    password:"",
    database:"xz",
    port:3306,
    connectionLimit:15
})

module.exports = pool;


