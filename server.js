let express=require("express");
let app=express();
let db=require("./db_connection");
let reg=require("./user_data_insertion")
let log=require("./login_data_insertion");
let port=1000;
app.use(express.json());
app.use("/api",reg);
app.use("/ap",log);
app.listen(port,()=>{
    console.log(`server created ${port}`);
});