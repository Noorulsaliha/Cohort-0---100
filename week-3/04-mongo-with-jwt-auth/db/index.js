const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://...@cluster0.7vmqawp.mongodb.net/');

// Define schemas
const AdminSchema = new mongoose.Schema({
    username : String,
    password : Number
});

const UserSchema = new mongoose.Schema({
    username : String,
    password : Number,
    purchasedCourses : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Course'
    }]
});

const CourseSchema = new mongoose.Schema({
    title : String,
    description : String,
    price : Number,
    imageLink : String
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}