import Lecture from "../models/lecture.js";

export class LectureService{
    addLecture(){
        console.log("Course added.");
    }
    deleteLecture(){
        console.log("Course deleted.");
    }
    getAll(){
        console.log("All courses.")
    }
    getByCategoryName(){
        console.log("Courses based on category.")
    }
}