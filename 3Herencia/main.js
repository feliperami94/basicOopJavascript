class Comment {
    constructor({
        content,
        studentName,
        studentRole = "estudiante"

    }) {
        this.content = content;
        this.studentName = studentName;
        this.studentRole = studentRole;
        this.likes = 0;
    }
    
    publicar() {
        console.log(this.studentName + " (" + this.studentRole + ")");
        console.log(this.likes + "likes");
        console.log(this.content);
    }
}

function videoPlay(id) {
    const urlVideo = "https://platziultrasecretomasquelanasa.com/" + id;
    console.log("Se esta reproduciendo desde la url" + urlVideo);
}

function videoStop(id) {
    const urlVideo = "https://platziultrasecretomasquelanasa.com/" + id;
    console.log("Se esta reproduciendo desde la url" + urlVideo);
}

class PlatziClass { //Con export se designan cuales son los bloques de codigo que debemos poder ejecutar desde cualquier otro script de nuestra aplicacion.
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
        classes = [],
        isFree = false,
        lang = "spanish"
    }) {
        this._name = name; //Por convención, cuando se inicia un atributo con _ se le dice al equipo que no acceda a ese metodo desde afuera.
        this.classes = classes;
        this.isFree = isFree;
        this.lang = lang;
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
    isFree: true,
})

const cursoDefinitivoHTML = new Course ({
    name: "Curso Definitivo de HTML y CSS",
    isFree: false,
})

const cursoPracticoHTML = new Course ({
    name: "Curso Practico de HTML y CSS",
    lang: "english"
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

    publicarComentario(commentContent) {
        const comment = new Comment ({
            content: commentContent,
            studentName: this.name,

        });
        comment.publicar();
    }
};

class FreeStudent extends Student{
    constructor(props) {
        super(props);
    }

    approveCourse(newCourse) {
        if (newCourse.isFree) {
            this.approvedCourses.push(newCourse);
        } else {
            console.warn("Lo sentimos, " + this.name + "Solo puedes tomar cursos abiertos")
        }
    }
}

class BasicStudent extends Student{
    constructor(props) {
        super(props);
    }

    approveCourse(newCourse) {
        if (newCourse.lang !== "english") {
            this.approvedCourses.push(newCourse);
        } else {
            console.warn("Lo sentimos, " + this.name + "No puedes tomar cursos en ingles")
        }
    }
}

class ExpertStudent extends Student{
    constructor(props) {
        super(props);
    }

    approveCourse(newCourse) {
            this.approvedCourses.push(newCourse);
    }
}

class TeacherStudent extends Student{
    constructor(props) {
        super(props);
    }

    approveCourse(newCourse) {
            this.approvedCourses.push(newCourse);
    }

    publicarComentario(commentContent) {
        const comment = new Comment ({
            content: commentContent,
            studentName: this.name,
            studentRole: "Profe Platzi"
        });
        comment.publicar();
    }
}

const juan2 = new FreeStudent({
    name: "Juan",
    username: "juandc",
    email: "juanito@juanito.com",
    twitter: "fjuandc",
    learningPaths: [
        escuelaWeb,
        escuelaVgs
    ]
})

const miguelito = new BasicStudent({
    name: "Miguelito",
    username: "miguelitosad",
    email: "miguel@migue.com",
    twitter: "miguelox",
    learningPaths: [
        escuelaWeb,
        escuelaData
    ]
})

const freddy = new TeacherStudent({
    name: "Freddy Vega",
    username: "freddier",
    email: "freddy@platzi.com",
    twitter: "freddiervega",
})