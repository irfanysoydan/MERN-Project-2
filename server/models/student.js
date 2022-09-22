import mongoose from "mongoose";

const StudentSchema = mongoose.Schema({
    regNo: Number,
    studentName: String,
    grade: String,
    section: {
        type: String,
        default: "A"
    },
});

const student = mongoose.model("student", StudentSchema);

export default student;