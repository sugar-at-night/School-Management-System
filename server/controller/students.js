import StudentData from '../models/students.js';

export const getStudents = async (req, res) => {
    try {
        const allStudents = await StudentData.find();
        res.status(200).json(allStudents);
    } catch (error) {
        res.status(404).json({ message: error.message});

    }
};

export const createStudents = async (req, res) => {
    const student = req.body;

    const newStudent = new StudentData(student);

    try {
        await newStudent.save();
        res.status(201).json(newStudent);
    
    } catch (error) {
        res.status(409).json({message: error.message});
        
    }
};

export const deleteStudents = async (req, res) => {
    const id = req.params.id;
    try {
        await ( await StudentData.findByIdAndRemove(id).exec() );
        res.send('Sucessfully deleted!');
    
    } catch (error) {
        console.log(error);
        
    }
};