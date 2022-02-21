///////////////////////////////////////OBJETO LITERAL EN JAVASCRIPT
const natalia = {   //Esto es un objeto literal
    name: "Natalia", //Estos son atributos del objeto literal
    age: 20,
    cursosAprobados: [
        "Curso Definitivo de HTML y CSS",
        "Curso Práctico de HTML y CSS"
    ],
    aprobarCurso(nuevoCurso) {  //De esta manera se puede crear un método del objeto literal. Otra forma es nombreDelMetodo: function(argumentos){};
        this.cursosAprobados.push(nuevoCurso);
    }
};

natalia.cursosAprobados.push("Curso de Responsive Design");


//////////////////////////////////PROTOTIPOS EN JAVASCRIPT
function Student(name, age, cursosAprobados){ //Sintaxis para crear un prototipo
 this.name = name;
 this.age = age;
 this.cursosAprobados = cursosAprobados;
//  this.aprobarCurso = function (nuevoCurso) { //Una forma para hacer métodos de un prototipo
//      this.cursosAprobados.push(nuevoCurso);
//  };
}

////////////////////////////////////CREAR METODOS PARA PROTOTIPOS POR FUERA DE  LA DEFINICION DEL PROTOTIPO
Student.prototype.aprobarCurso = function (nuevoCurso) { //Otra forma para crear un método de un prototipo POR FUERA de la definición del prototipo.
    this.cursosAprobados.push(nuevoCurso);
};

const juanita = new Student(    //Asi se crea una instancia de un prototipo en Javascript
    "Juanita Alejandra",
    15,
    ["Curso de introducción a la producción de videojuegos", "Curso de creación de personajes"]
);

/////////////////////////////////////////////CLASES EN JAVASCRIPT: SOLO SON UNA SINTAXIS PARA TRABAJAR CON PROTOTIPOS.

class Student2 {
    constructor(name, age, cursosAprobados) { // Este es el método que se ejecuta cuando se crea una instancia de la clase
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
    }

    aprobarCurso(nuevoCurso) {
        this.cursosAprobados.push(nuevoCurso);
    }
};

const miguel = new Student2(
    "Miguel",
    28,
    [
        "Curso de Análisis de Negocios para Ciencia de Datos",
        "Principios de visualización de Datos para Business Intelligence"
    ]
)

/////////////////////////////////////////////////OTRA OPCION DE TRABAJAR CON PARAMETROS DE CLASES COMO OBJETO LITERAL, evita tener que aprenderse el orden de los argumentos cuando tenemos una clase con muchos parámetros.

class Student3 {
    constructor({ //De esta manera no es necesario agregar los atributos en orden ni agregarlos todos, no importa si no se agrega un atributo nunca
        name, 
        age, 
        cursosAprobados = [], //Así se crea un valor por defecto para el atributo
        email,
        twitter,
        facebook
    }) {
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
        this.email;
        this.twitter;
        this.facebook;
    }


    aprobarCurso(nuevoCurso) {
        this.cursosAprobados.push(nuevoCurso);
    }
};

const waffle = new Student3({
    name: "Waffle",
    age: 16,
    cursosAprobados: [
        "Curso de Análisis de Negocios para Ciencia de Datos",
        "Principios de visualización de Datos para Business Intelligence"
    ]
})


