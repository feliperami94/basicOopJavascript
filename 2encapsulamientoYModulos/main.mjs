function videoPlay(id) {
    const urlVideo = "https://platziultrasecretomasquelanasa.com/" + id;
    console.log("Se esta reproduciendo desde la url" + urlVideo);
}

function videoStop(id) {
    const urlVideo = "https://platziultrasecretomasquelanasa.com/" + id;
    console.log("Se esta reproduciendo desde la url" + urlVideo);
}

export class PlatziClass { //Con export se designan cuales son los bloques de codigo que debemos poder ejecutar desde cualquier otro script de nuestra aplicacion.
    constructor({
        name,
        videoID
    }) {
        this.name = name;
        this.videoID = videoID;
    }

    reproducir() {
        videoPlay(this.videoID);

    }

    pausar() {
        videoPlay(this.videoID);
    }
}
 
class Course {  
    constructor({
        name,
        classes = []
    }) {
        this._name = name; //Por convención, cuando se inicia un atributo con _ se le dice al equipo que no acceda a ese metodo desde afuera.
        this.classes = classes;
    }

    get name() { //Con get no es necesario llamar al método con paréntesis, es decir, puedo llamar cursoProgBasica.name sin parentesis y sin argumentos.
        return this._name
    }

    // changeName(newName) { Trabajar con este método es valido pero se puede trabajar con set como se muestra abajo
    //     this._name = newName;
    // }

    set name(newName) { //Para llamar al metodo no se usan parentesis sino con = (asignacion)
        if (newName === "Curso Malito de Programación Basica") {
            console.error("No es posible")
        } else {
            this._name = newName;
        }

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