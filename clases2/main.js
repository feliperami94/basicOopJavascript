class LearningPath {
    constructor({
        name,
        courses = []
    }) {
        this.name = name;
        this.courses = courses;
    }

}



class Student {
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = []
    }) {
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter, //Es igual a escribir twitter: twitter, sintaxis de Javascript
            instagram,
            facebook,
        };
        this.approvedCourses = [] = approvedCourses;
        this.learningPaths = [] = learningPaths
    }
};

const juan2 = new Student({
    name: "Juan",
    username: "juandc",
    email: "juanito@juanito.com",
    twitter: "fjuandc"
})

const miguelito = new Student({
    name: "Miguelito",
    username: "miguelitosad",
    email: "miguel@migue.com",
    twitter: "miguelox"
})