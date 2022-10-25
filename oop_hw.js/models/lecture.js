export default class Lecture{

    constructor(id,title,description,lecturer,category){
        this.id=id;
        this.title=title;
        this.description=description;
        this.lecturer=lecturer;
        this.category=category;
    }

    get getLectureInfo(){
        let info =
        `Course Name: ${this.title} \n 
        Description: ${this.description} \n 
        Lecturer: ${this.lecturer} \n 
        Category: ${this.category}`;
        return info;
    }
}
