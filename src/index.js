import  * as cont from './components/content';
import { performance } from './components/data';
import './main.css';

let currentPage = 0; /**выбранный пункт меню, страница. Нумерация с 0*/

let navArray = document.querySelectorAll('.menu_link'); /**Элементы меню задаются как массив */
let mainSection = document.querySelector('.mainSection'); /**главная секция */
let insertDiv = document.createElement('div'); /**Вставляемый блок */
let myTickets = []; /**список купленных билетов */
let currPlace = { /**Данные выбранного места */
    raw: 0,
    column: 0,
    rawNumber: 0, /**Сквозной номер, для удобства, чтобы не расчитывать */
    price: 0 ,
    date: "",
    title: ""
}


function drawMenu(selected) { /**Отрисовка меню, передается, какой пункт выбран */
    navArray.forEach(function(item, num) {
        if (num == currentPage) {item.classList.add('selected') 
        } else {item.classList.remove('selected')}
    });

};



function drawContent(selectedPage) { /**Отрисовка главной секции переданной страницы */
    clearContentStyles();
    switch (selectedPage) { /** В зависимости от номера страницы рисуется контент */
        case 0:
        	drawMainPage();
        break;
        case 1:
        	drawBoughtTickets();
        break;
        case 2:
            drawBuyTicket(); 
        break;
        case 3:
            drawAboutTheatre();
        break;
    }
};

function clearContentStyles() { /**удаление всех лишних классов с основной секции, подготовка к перерисовке*/
    mainSection.classList.remove(...mainSection.classList);
};



/**============================================================= */
function drawMainPage() { /**отрисовка главной страницы */
    insertDiv.innerHTML = cont.contentMainPage;
    mainSection.appendChild(insertDiv);
    mainSection.classList.add('mainPage');
    let mainMenuDiv = document.querySelector('.mainMenu');


    let navArray2 = document.querySelectorAll('.mainMenu');
    navArray2.forEach(function(item, num) {
        item.addEventListener('click', function(event) {
            currentPage = num+1; /**Задается номер выбранной страницы , но т.к. На главную нет, то +1*/
            drawMenu(currentPage);
            drawContent(currentPage);
        } );
    });

};



function drawTickets() {
    let ticketsDiv = document.querySelector('.ticketsDiv');
    ticketsDiv.innerHTML = "";
    if (myTickets.length > 0) { /**Если билеты есть */
		myTickets.forEach(function(item, num) {                 /**Вывод всех билетов по очереди */
			let insertDivTicket = document.createElement('div'); /**Вставляемый блок */
			insertDivTicket.innerHTML = `<div class="ticket">
				<p class="ticketBase ticketTitle">${item.title}</p>
				<p class="ticketBase ticketRaw">${item.raw+1}</p>
				<p class="ticketBase ticketColumn">${item.column+1}</p>
				<p class="ticketBase ticketPrice">${item.price}р.</p>
				<p class="ticketBase ticketDatePlace">${item.date}, ${item.hall}</p>

				<p class="ticketBase ticketRawVertical">${item.raw+1}</p>
				<p class="ticketBase ticketColumnVertical">${item.column+1}</p>
				<p class="ticketBase ticketPriceVertical">${item.price}</p>
				</div>`;
			insertDivTicket.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(../media/ticket3.jpg)"; /** Установка фона билета. Через CSS не работает, dev-server вываливается с ошибкой*/
			insertDivTicket.style.backgroundSize = "100%";
			ticketsDiv.appendChild(insertDivTicket);
		})
	} else { /**Если билетов нет */ 
        let insertDivTicket = document.createElement('div'); /**Вставляемый блок */
        insertDivTicket.innerHTML = `<p class="ticketNone">Купленные билеты не обнаружены!</p>`;
        ticketsDiv.appendChild(insertDivTicket);
    }
};

function loadingTicketsAnimation() {
    let ticketsDiv = document.querySelector('.ticketsDiv');
    let insertDivTicket = document.createElement('div'); /**Вставляемый блок */
    insertDivTicket.innerHTML = `<p class="timer">Загрузка данных с сайта, пожалуйста, подождите...</p>`;    
    ticketsDiv.appendChild(insertDivTicket);
};

async function fakeLoadTickets(timeToLoad) {
    let promise = new Promise((resolve,reject) => { /**Фейковая загрузка билетов с сайта... */
		setTimeout(() => resolve(true), timeToLoad)
	});
    loadingTicketsAnimation();
	await promise;
	promise.then(drawTickets());
};



function drawBoughtTickets() { /**Список купленных билетов */
    insertDiv.innerHTML = cont.contentBoughtTickets; /**Заполнение шапки формы */
    mainSection.appendChild(insertDiv);
    mainSection.classList.add('boughtTickets');
	fakeLoadTickets(3000); /**Число - сколько секунд "загружать" билеты */
};



/*--------------------------------------------------*/
function drawTheHall(id) { /**Отрисовка блока сцены */
    let placesDiv = document.querySelector('.placesDiv');
    let maxRaws = performance.raws; /**Сцена может быть разной, в зависимости от зала */
    let maxCols = performance.columns;
   
    /*Заполнение блока placesDiv ценами на билеты*/
    placesDiv.innerHTML = ``; /**Очистка сцены */
    for (let currRaw = 0;currRaw<maxRaws;currRaw++) { /**формирование содержимого одного ряда */
        let insertDivPlaces = document.createElement('div');
        insertDivPlaces.innerHTML = ``;
        for (let currCol = 0;currCol<maxCols;currCol++) {
            if (performance.freePlaces[currRaw][currCol] > 0) { /**Если цена места больше 0, значит место свободно, меньше 0  - занято */
                insertDivPlaces.innerHTML += `
                <div class="place freePlace">${performance.freePlaces[currRaw][currCol]}</div>
                `;
            } else if (performance.freePlaces[currRaw][currCol] < 0) {
                insertDivPlaces.innerHTML += `
                <div class="place soldPlace">${performance.freePlaces[currRaw][currCol]}</div>
                `;
            }
        };
        placesDiv.appendChild(insertDivPlaces); /**Добавление ряда */
    };
};

let successBought = (braw,bcol,btitle,bdate) => {
    alert(`Билет на представление "${btitle}" на ${bdate}, место ${bcol+1} на ряду ${braw+1} успешно приобретен!`)
};

let falseCheck = (braw,bcol) => {
    alert(`К сожалению, место ${bcol+1} на ряду ${braw+1} нельзя приобрести. Выберите,пожалуйста, другое место.`)
};

function makePlaceListeners() { /**Установка детекции кликов в окне покупки билетов */
    let placeCollection = document.querySelectorAll('.place');
    placeCollection.forEach(function(item, num) {
        item.addEventListener('click', function(event) {
            /*Calculator of place Расчет места в рядах и столбцах от начала мест, т.к. нумерация сквозная*/
            currPlace.raw = Math.floor(num / performance.columns);
            currPlace.column = num % performance.columns;
            currPlace.price = performance.freePlaces[currPlace.raw][currPlace.column];
            /*finish-------------------Calculator of place*/

            placeCollection[currPlace.rawNumber].classList.remove('selectedPlace'); /**Удаление старого класса выбранного места, пока в currPlace.rawNumber номер старого места (в сквозной нумерации)*/
            currPlace.rawNumber = num; /**обновление текущего места (в сквозной нумерации) */
            currPlace.date = performance.date;
            currPlace.title = performance.title;
            currPlace.place = performance.place;
            currPlace.hall = performance.hall;
            

            if (currPlace.price > 0) { /**Если цена места >0, значит место можно выбрать */
                placeCollection[currPlace.rawNumber].classList.add('selectedPlace');
            } else if (currPlace.price < 0) {
                falseCheck(currPlace.raw,currPlace.column);
            };

        } );
    });

};

/* Drawing page Купить билеты*/
function drawBuyTicket() {
    insertDiv.innerHTML = cont.contentBuyTicketHead; /**Отрисовка шапки, которая не меняется */
    mainSection.appendChild(insertDiv);
    mainSection.classList.add('pageBuyTicket');
    
    let legend1Place = document.querySelector('.legend1'); /**Вывод легенды */
    let Legend1InsertDiv = document.createElement('div');   
    Legend1InsertDiv.innerHTML = `${performance.title} / ${performance.date} / ${performance.hall}  
                                    `;
    legend1Place.appendChild(Legend1InsertDiv);

    drawTheHall(); /**Отрисовка главного окна */
    makePlaceListeners(); /**Установка детекции кликов в этом окне */
    
    let buttonBuy = document.getElementById('buyTicketButton');
    buttonBuy.addEventListener('click', function(event) {  /* Установка детекции кликов  для кнопки Купить билет */
    if (performance.freePlaces[currPlace.raw][currPlace.column] > 0) {
        let currPlaceClone = {}; /**Создаем клон для копирования */
        Object.assign(currPlaceClone, currPlace);
        myTickets.push(currPlaceClone); /**Добавление купленного билета в корзину */

        performance.buy(currPlace.raw,currPlace.column); /**Сама покупка */
        successBought(currPlace.raw,currPlace.column,performance.title,performance.date);
        drawTheHall(); /**Перерисовка окна   */
        makePlaceListeners(); /**Установка детекции кликов в этом окне, т.к. содержимое окна новое, старые детекторы удалены */
    };

    })

};


/* Drawing page   О театре */
function drawAboutTheatre() {
    insertDiv.innerHTML = cont.contentAbout;
    mainSection.appendChild(insertDiv);
    mainSection.classList.add('pageAbout');
};



/* Установка детекции кликов для всех элементов меню */
navArray.forEach(function(item, num) {
    item.addEventListener('click', function(event) {
        currentPage = num; /**Задается номер выбранной страницы */
        drawMenu(currentPage);
        drawContent(currentPage);
    } );
});

drawMainPage();


