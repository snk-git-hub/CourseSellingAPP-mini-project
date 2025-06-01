const express = require("express");
const app = express();
ppid.use(express.json());
app.get('/', (req, res) => {

    res.send("Course selling app backend is listening ")
})

//                      user

function userAuth(req,res,next){
    
    next()
}

app.post('/api/v1/user/login',userAuth, (req, res) => {

})
app.post('/api/v1/user/signin', userAuth,(req, res) => {

})
app.get("/api/v1/user/seecourse", userAuth,(req, res) => {

})
app.post('/api/v1/user/purchsecourse', userAuth,(req, res) => {

})

//                       admin

function adminAuth(req,res,next){

next()
}
app.post("/api/v1/admin/login",adminAuth,(req,res)=>{

})
app.post("/api/v1/admin/signup",adminAuth,(req,res)=>{
    
})

app.post("/api/v1/admin/create",adminAuth,(req,res)=>{
    
})

app.post("/api/v1/admin/add/course",adminAuth,(req,res)=>{
    
})


app.delete("/api/v1/admin/delete/:courseId",adminAuth,(req,res)=>{
    
})




app.listen(3000, () => {
    console.log("server is running on port :http://localhost:3000/")
})