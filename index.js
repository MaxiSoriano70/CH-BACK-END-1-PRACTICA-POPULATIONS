import mongoose from "mongoose";
import dotenv from "dotenv";
import Student from "./models/student.model.js";
import Course from "./models/course.model.js";
dotenv.config();

const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.URI_MONGODB, {
            serverSelectionTimeoutMS: 5000,
            socketTimeoutMS: 45000,
            family: 4
        });
        /* Agregando estudiante */
        /*const response = await Student.insertOne({
            first_name: "Emilia",
            last_name: "Garcia",
            email: "emily@gmail.com",
            password: "123456"
        })*/
        /*Agregando curso */
        /*const response = await Course.insertOne({
            title: "Back End Modulo 2",
            description: "Curso de Back End modulo 2 Coder House",
            topics: ["Node.js", "Express", "MongoDB", "Handlebars", "Websockets", "api"],
            professor: "Alejandro Huertas"
        });*/

        /* Agregando el id del curso en un estrudiante */
        /*const studentId = "67c770a2fb79a904b99fe083";
        const courseID = "67c772d63b4d6efe6d193e6b";
        const response = await Student.findByIdAndUpdate(
            studentId,
            {
                $push: {
                    courses: { course: courseID}
                }
            },
            {
                new: true,
            }
        )
        console.log(response);*/

        /*const student = await Student.findById("67c770a2fb79a904b99fe083").populate("courses.course");
        console.log(JSON.stringify(student, null , 2));*/

        /*const students = await Student.find();
        console.log(JSON.stringify(students, null , 2));*/

        const student = new Student({
            first_name: "Celeste",
            last_name: "Severich",
            email: "cele@gmail.com",
            password: "peluquera"
        });

        await student.save();
        console.log(JSON.stringify(student, null , 2));

        console.log("Conectado correctamente a MONGODB");
    } catch (error) {
        console.log("Error al conectar MONGODB: ", error.message);
    }
};

connectMongoDB()