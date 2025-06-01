require('dotenv').config({ path: '../.env' });
const mongoose = require('mongoose');
const { title } = require('process');
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to mongoose DB'))
    .catch((err) => {
        console.error('Error connecting to mongoose DB:', err);
    });
const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true, },
    email: { type: String, required: true, unique: true, },
    password: { type: String, required: true, }
})
const AdminSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true, },
    email: { type: String, required: true },
    password: { type: String, requireed: true }
})
const CourseSchema = new mongoose.Schema({
    title: { type: String, required: true, },
    description: { type: String },
    price: { type: Number, required: true, },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Admin', required: true },
})

const PurchaseSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', require: true, },
    course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', require: true, },
    purchaseDate: { type: Date, default: Date.now },
    amount: { type: Number, required: true }
});
const Course = mongoose.model('Course', CourseSchema);
const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Purchase = mongoose.model('Purchase', PurchaseSchema);
module.exports = { Course, Admin, User, Purchase };