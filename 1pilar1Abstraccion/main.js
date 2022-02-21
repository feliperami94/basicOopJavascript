//ABSTRACCION - PRIMER PILAR PROGRAMACION ORIENTADA A OBJETOS

class Course {  
    constructor({
        name,
        classes = []
    }) {
        this._name = name; //Por convención, cuando se inicia un atributo con _ se le dice al equipo que no acceda a ese metodo desde afuera.
        this.classes = classes;
    }
}

const cursoProgBasica = new Course ({
    name: "Curso Gratis de Programación Básica",
})

const cursoDefinitivoHTML = new Course ({
    name: "Curso Definitivo de HTML y CSS",
})

const cursoPracticoHTML = new Course ({
    name: "Curso Practico de HTML y CSS",
})

class LearningPath {
    constructor({
        name,
        courses = []
    }) {
        this.name = name;
        this.courses = courses;
    }

}

const escuelaWeb = new LearningPath({
    name: "Escuela de Desarrollo Web",
    courses: [
        cursoProgBasica,
        "Curso de DataBusiness",
        cursoPracticoHTML
    ]
})

const escuelaData = new LearningPath({
    name: "Escuela de Data Science",
    courses: [
        cursoProgBasica,
        "Curso de DataBusiness",
        "Curso de DataViz",

    ]
})

const escuelaVgs = new LearningPath({
    name: "Escuela de Videojuegos",
    courses: [
        cursoProgBasica,
        "Curso de Unity",
        "Curso de Unreal",
        
    ]
})

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
    twitter: "fjuandc",
    learningPaths: [
        escuelaWeb,
        escuelaVgs
    ]
})

const miguelito = new Student({
    name: "Miguelito",
    username: "miguelitosad",
    email: "miguel@migue.com",
    twitter: "miguelox",
    learningPaths: [
        escuelaWeb,
        escuelaData
    ]
})