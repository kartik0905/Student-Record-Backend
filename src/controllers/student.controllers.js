import {Student} from "../models/student.models.js";


// Creating the Studens
export const createStudent = async (req, res) => {
  try {
    console.log("REQ BODY:", req.body);
    const {
      studentId,
      name,
      age,
      department,
      marks,
      email,
      phone,
      address,
      gender
    } = req.body;

    const student = await Student.create({
      studentId,
      name,
      age,
      department,
      marks,
      email,
      phone,
      address,
      gender
    });

   res.status(200).json({
     success: true,
     message: "Student created successfully",
     student, 
   });
  } catch (error) {
    res.status(400).json({message:error.message});
  }
};


// Get all the students
export const getAllStudent = async (req,res) => {
    try {
        const student = await Student.find();

       res.status(200).json({
         message: "Students fetched successfully",
         students: student,
       });
    } catch (error) {
        res.status(400).json({message:error.message});
    }
} 


// Get Student by ID
export const getStudentById = async (req,res) => {
    try {
        const studentId = await Student.findById(req.params.id);
        if(!studentId)
        {
            return res.status(404).json("Please enter the ID of the Student");
        }
        res.json(studentId);
    } catch (error) {
        res.status(400).json({message:error.message});
    }
}


// Updating the student
export const updateStudent = async(req,res) => {
    try {
        const updated = await Student.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
            runValidations:true
        });

        if(!updated)
        {
            res.status(404).json("Student Not Found");
        }
        res.status(200).json("Student Updated successfully");
    } catch (error) {
        res.status(400).json({message:error.message});
    }
}

// Deleting the student 
export const deleteStudent = async(req,res) => {
    try {
        const deleted = await Student.findByIdAndDelete(req.params.id);
        if(!deleted)
        {
            res.status(404).json("Plese enter the StudentId");
        }
        res.status(200).json("Student Deleted successfully");
    } catch (error) {
        res.status(400).json({message:error.message});
    }
}