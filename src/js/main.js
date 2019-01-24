/* VARIABLES */

const name6 = 'Jane Smith';
let age6 = 23;
name6 = 'Jane Miller';
console.log(name6);

/***********************************************/
/* BLOQUES Y IIFES */

{
    const a = 1;
    let b = 2;
    var c = 3;
}

/***********************************************/
/* STRINGS */

let firstName = 'John';
let lastName = 'Smith';

//separacion
var arr1 = "john".split('');
var arr2 = arr1.reverse();
var arr3 = "jones".split('');

/* IMPRIMIR EN CONSOLA */

console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old.`);

/***********************************************/
/* FUNCIONES FLECHA */

const years = [1990, 1965, 1982, 1937];

let ages6 = years.map(el => 2016 - el);
console.log(ages6);

ages6 = years.map((el, index) => `Age element ${index + 1}: ${2016 - el}.`);
console.log(ages6);

/***********************************************/
/* SELECTORES */
const box66 = {
    color: 'green',
    position: 1,
    clickMe: () => {
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
}
box66.clickMe();

/***********************************************/
/* DESTRUCTURAR */
const [name, age] = ['John', 26];
console.log(name);
console.log(age);


function calcAgeRetirement(year) {
    const age = new Date().getFullYear() - year;
    return [age, 65 - age];
}

/***********************************************/
/* ARREGLOS */

const boxes = document.querySelectorAll('.box');

const boxesArr6 = Array.from(boxes);
Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue');

/***********************************************/
/* FOR CON NODOS HTML */
for (const cur of boxesArr6) {
    if (cur.className.includes('blue')) {
        continue;
    }
    cur.textContent = 'I changed to blue!';
}

// FILTRO
var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);


/***********************************************/
/* SEPARADORES */

function isFullAge5() {
    //console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments);

    argsArr.forEach(function (cur) {
        console.log((2016 - cur) >= 18);
    })
}

isFullAge5(1990, 1999, 1965, 2016, 1987);

// USO DE ...
function isFullAge6(...years) {
    years.forEach(cur => console.log((2016 - cur) >= 18));
}

isFullAge6(1990, 1999, 1965, 2016, 1987);

/***********************************************/
/* CLASES */

class Person6 {
    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge() {
        var age = new Date().getFullYear - this.yearOfBirth;
        console.log(age);
    }

    static greeting() {
        console.log('Hey there!');
    }
}

const john6 = new Person6('John', 1990, 'teacher');

Person6.greeting();

// SUB CLASES

class Athlete6 extends Person6 {
    constructor(name, yearOfBirth, job, olympicGames, medals) {
        super(name, yearOfBirth, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }

    wonMedal() {
        this.medals++;
        console.log(this.medals);
    }
}

const johnAthlete6 = new Athlete6('John', 1990, 'swimmer', 3, 10);
johnAthlete6.wonMedal();
johnAthlete6.calculateAge();

/***********************************************/


/***********************************************/
/* EVENTOS */

// DOCUMENT READY
document.addEventListener('DOMContentLoaded', function () {
    // CODIGO
});

// EVENTO CLICK EN VARIOS
[].forEach.call(document.querySelectorAll('a'), function (el) {
    el.addEventListener('click', function () {
        // CODIGO
    })
})

/***********************************************/
/* SELECTORES */

var divs = document.querySelectorAll('div');
// CREAR ELEMENTO
var newDiv = document.createElement('div');

var n = document.getElementById("comments");

var c = document.getElementsByClassName("comment");


var c = document.getElementsByClassName("comment");


document.getElementById("container").innerHTML += "<p>more content</p>";

document.getElementById("container").innerHTML = null;

/***********************************************/
/* ATRIBUTOS */

document.querySelector('img').setAttribute('alt', 'My image');

/***********************************************/
/* CLASES */

newDiv.classList.add('foo');

// 'INTERCAMBIAR'
newDiv.classList.toggle('foo');

// QUITAR
newDiv.classList.remove('foo');


/***********************************************/
/* MANIPULACION */

var clonedElement = document.getElementById('about').cloneNode(true);

// QUITAR ELEMENTOS
var wrap = document.getElementById('wrap');
while (wrap.firstChild) wrap.removeChild(wrap.firstChild);

/***********************************************/
/* TRANSVERSAR - transversing */
// PADRE
var parent = document.getElementById('about').parentNode;

// HERMANO
var nextElement = document.getElementById('wrap').nextSibling;




/***********************************************/
/* AJAX */

// POST
var httpRequest = new XMLHttpRequest()
httpRequest.onreadystatechange = function (data) {
    // code
}
httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded') //application/json
httpRequest.open('POST', url)
httpRequest.send('username=' + encodeURIComponent(username))


//GET
var httpRequest = new XMLHttpRequest()
httpRequest.onreadystatechange = function (data) {
    // code
}
httpRequest.open('GET', url)
httpRequest.send()

/***********************************************/
/* PROMESAS */
const getRelated = publisher => {
    return new Promise((resolve, reject) => {
        setTimeout(pub => {
            const recipe = { title: 'Italian Pizza', publisher: 'Jonas' };
            resolve(`${pub}: ${recipe.title}`);
        }, 1500, publisher);
    });
};


/***********************************************/
/* FETCH */

function getWeather(woeid) {
    fetch(`https://crossorigin.me/https://www.metaweather.com/api/location/${woeid}/`)
        .then(result => {
            // console.log(result);
            return result.json();
        })
        .then(data => {
            // console.log(data);
            const today = data.consolidated_weather[0];
            console.log(`Temperatures today in ${data.title} stay between ${today.min_temp} and ${today.max_temp}.`);
        })
        .catch(error => console.log(error));
}
getWeather(2487956);
getWeather(44418);

/***********************************************/
/* ASYNC */

async function getWeatherAW(woeid) {
    try {
        const result = await fetch(`https://crossorigin.me/https://www.metaweather.com/api/location/${woeid}/`);
        const data = await result.json();
        const tomorrow = data.consolidated_weather[1];
        console.log(`Temperatures tomorrow in ${data.title} stay between ${tomorrow.min_temp} and ${tomorrow.max_temp}.`);
        return data;
    } catch(error) {
        alert(error);
    }
}
getWeatherAW(2487956);

let dataLondon;
getWeatherAW(44418).then(data => {
    dataLondon = data
    console.log(dataLondon);
});


/***********************************************/
/* ANIMACIONES */

let tunnel = document.getElementById("tunnel");


tunnel.animate([
    { transform: 'translate3D(0, 0, 0)' },
    { transform: 'translate3D(0, -300px, 0)' }
], {
        duration: 1000,
        iterations: Infinity
    })

let aliceTumbling = [
    { transform: 'rotate(0) translate3D(-50%, -50%, 0', color: '#000' },
    { color: '#431236', offset: 0.3 },
    { transform: 'rotate(360deg) translate3D(-50%, -50%, 0)', color: '#000' }
];

let aliceTiming = {
    duration: 3000,
    iterations: Infinity
}

let alice = document.getElementById("alice").animate(
    aliceTumbling,
    aliceTiming
);


const stop = () => {
    console.log('click')
    aliceTiming.duration = 0;
    aliceTiming.iterations = 0;
    console.log(aliceTiming)
    alice.pause();

}

var hero = {
    _name: 'John Doe',
    getSecretIdentity: function () {
        return this._name;
    }
};

