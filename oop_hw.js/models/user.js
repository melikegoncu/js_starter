export default class User{

    constructor(id,name,email,password){
        this.id=id;
        this.name=name;
        this.email=email;
        this.password=password;
    }
    
    get getName() {
        return this.name;
    }
}

class Instructor extends User {
    constructor( id, name, email, password) {
      super( id, name, email, password );
      this.coursesGiven = [];
    }
    
    set setGivenCourse(courseName){
        this.coursesGiven.push(courseName);
    }

    get getInstructorInfo(){
        let info =`Name: ${song} \n Given Courses: ${this.coursesGiven}`;
        return info;
    }
}

class Student extends User {
    constructor( id, name, email, password ) {
      super( id, name, email, password );
      this.coursesTaken = [];
    }
    
    set setTakenCourse(courseName){
        this.coursesTaken.push(courseName);
    }
}