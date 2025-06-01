const express = require("express");
const { message } = require("statuses");
const app = express();
const db = require("./db");
const bcrypt = require("bcrypt");
app.use(express.json());

app.get('/', (req, res) => {

    res.send("Course selling app backend is listening ")
})

//                      user

function userAuth(req, res, next) {
    next()
}
app.post('/api/v1/user/login', userAuth, async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await db.User.findOne({ email })
        if (!user) {
            return res.status(400).json({ message: "Invalid email or password" })
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid email or password" })
        }
        const token = jwt.sign(
            { id: user._id, username: user.username },
            process.env.SECRET_KEY, { expiresIn: '1h' }
        )
        res.json({ token })
    } catch (error) {
        res.status(5000).json({ message: "invalid ", error })
    }
})
app.post('/api/v1/user/signin', userAuth, async(req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await db.User.findOne({ email })
        if (user) {
            return res.status(400).json({ message: "Email already exist" })
        }
        const hashpassword= await bcrypt.hash(password,10)
        const newUser = db.insert({ name, email, hashpassword })
        res.json({ message: "User created successfully" })

    } catch (err) {
        res.status(500).json({ message: "Error creating user", error: err })

    }


}
)
app.get("/api/v1/user/seecourse", userAuth, (req, res) => {

})
app.post('/api/v1/user/purchsecourse', userAuth, (req, res) => {

})

//                       admin

function adminAuth(req, res, next) {

    next()
}
app.post("/api/v1/admin/login", adminAuth, (req, res) => {

})
app.post("/api/v1/admin/signup", adminAuth, (req, res) => {

})

app.post("/api/v1/admin/create", adminAuth, (req, res) => {

})

app.post("/api/v1/admin/add/course", adminAuth, (req, res) => {

})


app.delete("/api/v1/admin/delete/:courseId", adminAuth, (req, res) => {

})




app.listen(3000, () => {
    console.log("server is running on port :http://localhost:3000/")
})