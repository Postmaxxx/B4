/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/content.js":
/*!***********************************!*\
  !*** ./src/components/content.js ***!
  \***********************************/
/*! namespace exports */
/*! export contentAbout [provided] [no usage info] [missing usage info prevents renaming] */
/*! export contentBoughtTickets [provided] [no usage info] [missing usage info prevents renaming] */
/*! export contentBuyTicketHead [provided] [no usage info] [missing usage info prevents renaming] */
/*! export contentMainPage [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contentAbout\": () => /* binding */ contentAbout,\n/* harmony export */   \"contentBuyTicketHead\": () => /* binding */ contentBuyTicketHead,\n/* harmony export */   \"contentBoughtTickets\": () => /* binding */ contentBoughtTickets,\n/* harmony export */   \"contentMainPage\": () => /* binding */ contentMainPage\n/* harmony export */ });\nlet contentAbout = `\r\n<h1> Иркутский академический драматический театр имени Н.П. Охлопкова </h1>\r\n    <img src=\"../media/About_1.jpg\" alt=\"Фото театра\" style=\"height: 100%; width: 100%;\"></img>\r\n    <p>Иркутский академический драматический театр имени Н.П. Охлопкова — старейший театр Восточной Сибири, в своей творческой деятельности опирающийся на лучшие классические образцы и качественную современную драматургию, пропагандирующий культурное наследие своих земляков: П.Маляревского, М.Сергеева, А.Вампилова, В.Распутина и других.</p>\r\n    <p>Это не просто театр в привычном понимании данного слова. Это флагман, творческого движения и развития Иркутской области. Сибирский форпост лучших культурных традиций отечественной театральной школы. Мощный социокультурный, просветительский центр, привлекающий к участию в интересных проектных инициативах неравнодушных к искусству людей, тем самым формирующий культурное пространство города и области.</p>\r\n    <p>Театр-Дом, в котором каждый сотрудник чувствует себя частью большой и дружной семьи, нужным звеном в увлекательном и непрерывном творческом процессе созидания.</p>\r\n    <p>Театр семейный, путём развития духовного, нравственного и культурного потенциала человека выявляющий в зрителе его лучшие черты.</p>\r\n    <p>Театр, посредством активной работы с молодёжью взращивающий новое поколение зрителей; находящийся в постоянном поиске современных средств общения с потенциальной и постоянной аудиторией, при этом неизменно призывающий человека к сопереживанию и глубоким жизненным размышлениям. Театр, который объединяет поколения, нации, сердца. </p>\r\n    <h2>История театра</h2>\r\n    <p>Мысль «завести свой театр со всеми принадлежностями» возникла в иркутском обществе на рубеже XVIII-XIX веков, когда в городе разместился административный штаб освоения русского бассейна Тихого океана.</p>\r\n    <p>В конце XVIII в. Восточной Сибирью управлял генерал-губернатор Б.Леццано. За покровительство сценическим увлечениям горожан его по праву можно считать основоположником театральных традиций города. Одна из них - постоянный патронаж театру со стороны губернских властей. Почти каждый из преемников Леццано внес вклад в развитие театрального дела в Иркутске.</p>\r\n    <p>Статус профессионального театр приобрел в 1850 году, когда странствующая труппа актеров осталась в Иркутске для постоянной работы. Первые спектакли профессионалов были даны в Благородном собрании. В 1851 г. при попечительстве генерал-губернатора Николая Муравьева-Амурского завершилось строительство здания для театра, которое торжественно открылось 22 сентября. В этот вечер шла пьеса Н. Полевого (уроженца Иркутска) «Русский человек добро помнит».</p>\r\n    <p>Губернской администрацией была учреждена театральная дирекция во главе со старшим чиновником по особым поручениям А.Н.Похвисневым, гвардейским офицером и драматургом, пьесы которого шли на сценах Москвы и Петербурга. Антрепренером первой актерской труппы стал Иосиф Маркевич.</p>\r\n    </br></br></br></br>\r\n`;\r\n\r\nlet contentBuyTicketHead = `\r\n<h2>Покупка билетов</h2>\r\n<p class=\"legend1\"></p>\r\n<p>Пожалуйста, выберите интересующее вас место:</p>\r\n<p>СЦЕНА</p>\r\n</br>\r\n<div class=\"placesDiv\"></div>\r\n<button id=\"buyTicketButton\">Купить билет</button>\r\n`;\r\n\r\nlet contentBoughtTickets = `\r\n<h2>Купленные ранее билеты</h2>\r\n<p2>Список приобретенных ранее билетов:</p2>\r\n<div class=\"ticketsDiv\"></div>\r\n`;\r\n\r\nlet contentMainPage = `\r\n<h2>Выберите интересующий Вас раздел:</h2>\r\n<div class=\"ticket\">\r\n    <div class=\"mainMenu mainMenu1\"><div class=\"mainMenuLogo\" style=\"background-image: url(../media/tickets.png)\"></div>Купленные билеты</div>\r\n    <div class=\"mainMenu mainMenu2\"><div class=\"mainMenuLogo\" style=\"background-image: url(../media/kassa-2.png)\"></div>Купить билет</div>\r\n    <div class=\"mainMenu mainMenu3\"><div class=\"mainMenuLogo\" style=\"background-image: url(../media/mask1.png)\"></div>О театре</div>\r\n</div>\r\n`;\r\n\r\n\r\n\n\n//# sourceURL=webpack://theatre/./src/components/content.js?");

/***/ }),

/***/ "./src/components/data.js":
/*!********************************!*\
  !*** ./src/components/data.js ***!
  \********************************/
/*! namespace exports */
/*! export performance [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"performance\": () => /* binding */ performance\n/* harmony export */ });\n\r\n\r\nlet places = [\r\n  [300, 300, 400, 600, 600, 500, 400, 50],\r\n  [300, -300, 500, 500, 500, 500, 300, 300],\r\n  [200, 200, 300, 500, 500, 400, 200, 200],\r\n  [100, 200, 300, 300, 400, 300, 200, 100],\r\n  [100, 200, 300, 300, 400, 300, -200, 100],\r\n  [100, -200, 300, 300, 400, 300, 200, 100],\r\n  [100, 200, 300, 300, 300, 200, 200, 100],\r\n];\r\n\r\nlet performance = {\r\n  title: 'Опера-минуэт: \"Пёс да лис\"',\r\n  date: \"20-10-2020\",\r\n  place: \"Наш театр\",\r\n  hall: \"Малый зал\",\r\n  raws: 7,\r\n  columns: 8,\r\n  id: \"Svinopas 20-10-2020\",\r\n  freePlaces: places,\r\n};\r\n\r\nperformance.buy = function (raw, column) {\r\n  this.freePlaces[raw][column] = 0 - this.freePlaces[raw][column];\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://theatre/./src/components/data.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/content */ \"./src/components/content.js\");\n/* harmony import */ var _components_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/data */ \"./src/components/data.js\");\n\r\n\r\n\r\n\r\nlet currentPage = 0; /**выбранный пункт меню, страница. Нумерация с 0*/\r\n\r\nlet navArray = document.querySelectorAll('.menu_link'); /**Элементы меню задаются как массив */\r\nlet mainSection = document.querySelector('.mainSection'); /**главная секция */\r\nlet insertDiv = document.createElement('div'); /**Вставляемый блок */\r\nlet myTickets = []; /**список купленных билетов */\r\nlet currPlace = { /**Данные выбранного места */\r\n    raw: 0,\r\n    column: 0,\r\n    rawNumber: 0, /**Сквозной номер, для удобства, чтобы не расчитывать */\r\n    price: 0 ,\r\n    date: \"\",\r\n    title: \"\"\r\n}\r\n\r\n\r\nfunction drawMenu(selected) { /**Отрисовка меню, передается, какой пункт выбран */\r\n    navArray.forEach(function(item, num) {\r\n        if (num == currentPage) {item.classList.add('selected') \r\n        } else {item.classList.remove('selected')}\r\n    });\r\n\r\n};\r\n\r\n\r\n\r\nfunction drawContent(selectedPage) { /**Отрисовка главной секции переданной страницы */\r\n    clearContentStyles();\r\n    switch (selectedPage) { /** В зависимости от номера страницы рисуется контент */\r\n        case 0:\r\n        \tdrawMainPage();\r\n        break;\r\n        case 1:\r\n        \tdrawBoughtTickets();\r\n        break;\r\n        case 2:\r\n            drawBuyTicket(); \r\n        break;\r\n        case 3:\r\n            drawAboutTheatre();\r\n        break;\r\n    }\r\n};\r\n\r\nfunction clearContentStyles() { /**удаление всех лишних классов с основной секции, подготовка к перерисовке*/\r\n    mainSection.classList.remove(...mainSection.classList);\r\n};\r\n\r\n\r\n\r\n/**============================================================= */\r\nfunction drawMainPage() { /**отрисовка главной страницы */\r\n    insertDiv.innerHTML = _components_content__WEBPACK_IMPORTED_MODULE_1__.contentMainPage;\r\n    mainSection.appendChild(insertDiv);\r\n    mainSection.classList.add('mainPage');\r\n    let mainMenuDiv = document.querySelector('.mainMenu');\r\n\r\n\r\n    let navArray2 = document.querySelectorAll('.mainMenu');\r\n    navArray2.forEach(function(item, num) {\r\n        item.addEventListener('click', function(event) {\r\n            currentPage = num+1; /**Задается номер выбранной страницы , но т.к. На главную нет, то +1*/\r\n            drawMenu(currentPage);\r\n            drawContent(currentPage);\r\n        } );\r\n    });\r\n\r\n};\r\n\r\n\r\n\r\nfunction drawTickets() {\r\n    let ticketsDiv = document.querySelector('.ticketsDiv');\r\n    ticketsDiv.innerHTML = \"\";\r\n    if (myTickets.length > 0) { /**Если билеты есть */\r\n\t\tmyTickets.forEach(function(item, num) {                 /**Вывод всех билетов по очереди */\r\n\t\t\tlet insertDivTicket = document.createElement('div'); /**Вставляемый блок */\r\n\t\t\tinsertDivTicket.innerHTML = `<div class=\"ticket\">\r\n\t\t\t\t<p class=\"ticketBase ticketTitle\">${item.title}</p>\r\n\t\t\t\t<p class=\"ticketBase ticketRaw\">${item.raw+1}</p>\r\n\t\t\t\t<p class=\"ticketBase ticketColumn\">${item.column+1}</p>\r\n\t\t\t\t<p class=\"ticketBase ticketPrice\">${item.price}р.</p>\r\n\t\t\t\t<p class=\"ticketBase ticketDatePlace\">${item.date}, ${item.hall}</p>\r\n\r\n\t\t\t\t<p class=\"ticketBase ticketRawVertical\">${item.raw+1}</p>\r\n\t\t\t\t<p class=\"ticketBase ticketColumnVertical\">${item.column+1}</p>\r\n\t\t\t\t<p class=\"ticketBase ticketPriceVertical\">${item.price}</p>\r\n\t\t\t\t</div>`;\r\n\t\t\tinsertDivTicket.style.backgroundImage = \"linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(../media/ticket3.jpg)\"; /** Установка фона билета. Через CSS не работает, dev-server вываливается с ошибкой*/\r\n\t\t\tinsertDivTicket.style.backgroundSize = \"100%\";\r\n\t\t\tticketsDiv.appendChild(insertDivTicket);\r\n\t\t})\r\n\t} else { /**Если билетов нет */ \r\n        let insertDivTicket = document.createElement('div'); /**Вставляемый блок */\r\n        insertDivTicket.innerHTML = `<p class=\"ticketNone\">Купленные билеты не обнаружены!</p>`;\r\n        ticketsDiv.appendChild(insertDivTicket);\r\n    }\r\n};\r\n\r\nfunction loadingTicketsAnimation() {\r\n    let ticketsDiv = document.querySelector('.ticketsDiv');\r\n    let insertDivTicket = document.createElement('div'); /**Вставляемый блок */\r\n    insertDivTicket.innerHTML = `<p class=\"timer\">Загрузка данных с сайта, пожалуйста, подождите...</p>`;    \r\n    ticketsDiv.appendChild(insertDivTicket);\r\n};\r\n\r\nasync function fakeLoadTickets(timeToLoad) {\r\n    let promise = new Promise((resolve,reject) => { /**Фейковая загрузка билетов с сайта... */\r\n\t\tsetTimeout(() => resolve(true), timeToLoad)\r\n\t});\r\n    loadingTicketsAnimation();\r\n\tawait promise;\r\n\tpromise.then(drawTickets());\r\n};\r\n\r\n\r\n\r\nfunction drawBoughtTickets() { /**Список купленных билетов */\r\n    insertDiv.innerHTML = _components_content__WEBPACK_IMPORTED_MODULE_1__.contentBoughtTickets; /**Заполнение шапки формы */\r\n    mainSection.appendChild(insertDiv);\r\n    mainSection.classList.add('boughtTickets');\r\n\tfakeLoadTickets(3000); /**Число - сколько секунд \"загружать\" билеты */\r\n};\r\n\r\n\r\n\r\n/*--------------------------------------------------*/\r\nfunction drawTheHall(id) { /**Отрисовка блока сцены */\r\n    let placesDiv = document.querySelector('.placesDiv');\r\n    let maxRaws = _components_data__WEBPACK_IMPORTED_MODULE_0__.performance.raws; /**Сцена может быть разной, в зависимости от зала */\r\n    let maxCols = _components_data__WEBPACK_IMPORTED_MODULE_0__.performance.columns;\r\n   \r\n    /*Заполнение блока placesDiv ценами на билеты*/\r\n    placesDiv.innerHTML = ``; /**Очистка сцены */\r\n    for (let currRaw = 0;currRaw<maxRaws;currRaw++) { /**формирование содержимого одного ряда */\r\n        let insertDivPlaces = document.createElement('div');\r\n        insertDivPlaces.innerHTML = ``;\r\n        for (let currCol = 0;currCol<maxCols;currCol++) {\r\n            if (_components_data__WEBPACK_IMPORTED_MODULE_0__.performance.freePlaces[currRaw][currCol] > 0) { /**Если цена места больше 0, значит место свободно, меньше 0  - занято */\r\n                insertDivPlaces.innerHTML += `\r\n                <div class=\"place freePlace\">${_components_data__WEBPACK_IMPORTED_MODULE_0__.performance.freePlaces[currRaw][currCol]}</div>\r\n                `;\r\n            } else if (_components_data__WEBPACK_IMPORTED_MODULE_0__.performance.freePlaces[currRaw][currCol] < 0) {\r\n                insertDivPlaces.innerHTML += `\r\n                <div class=\"place soldPlace\">${_components_data__WEBPACK_IMPORTED_MODULE_0__.performance.freePlaces[currRaw][currCol]}</div>\r\n                `;\r\n            }\r\n        };\r\n        placesDiv.appendChild(insertDivPlaces); /**Добавление ряда */\r\n    };\r\n};\r\n\r\nlet successBought = (braw,bcol,btitle,bdate) => {\r\n    alert(`Билет на представление \"${btitle}\" на ${bdate}, место ${bcol+1} на ряду ${braw+1} успешно приобретен!`)\r\n};\r\n\r\nlet falseCheck = (braw,bcol) => {\r\n    alert(`К сожалению, место ${bcol+1} на ряду ${braw+1} нельзя приобрести. Выберите,пожалуйста, другое место.`)\r\n};\r\n\r\nfunction makePlaceListeners() { /**Установка детекции кликов в окне покупки билетов */\r\n    let placeCollection = document.querySelectorAll('.place');\r\n    placeCollection.forEach(function(item, num) {\r\n        item.addEventListener('click', function(event) {\r\n            /*Calculator of place Расчет места в рядах и столбцах от начала мест, т.к. нумерация сквозная*/\r\n            currPlace.raw = Math.floor(num / _components_data__WEBPACK_IMPORTED_MODULE_0__.performance.columns);\r\n            currPlace.column = num % _components_data__WEBPACK_IMPORTED_MODULE_0__.performance.columns;\r\n            currPlace.price = _components_data__WEBPACK_IMPORTED_MODULE_0__.performance.freePlaces[currPlace.raw][currPlace.column];\r\n            /*finish-------------------Calculator of place*/\r\n\r\n            placeCollection[currPlace.rawNumber].classList.remove('selectedPlace'); /**Удаление старого класса выбранного места, пока в currPlace.rawNumber номер старого места (в сквозной нумерации)*/\r\n            currPlace.rawNumber = num; /**обновление текущего места (в сквозной нумерации) */\r\n            currPlace.date = _components_data__WEBPACK_IMPORTED_MODULE_0__.performance.date;\r\n            currPlace.title = _components_data__WEBPACK_IMPORTED_MODULE_0__.performance.title;\r\n            currPlace.place = _components_data__WEBPACK_IMPORTED_MODULE_0__.performance.place;\r\n            currPlace.hall = _components_data__WEBPACK_IMPORTED_MODULE_0__.performance.hall;\r\n            \r\n\r\n            if (currPlace.price > 0) { /**Если цена места >0, значит место можно выбрать */\r\n                placeCollection[currPlace.rawNumber].classList.add('selectedPlace');\r\n            } else if (currPlace.price < 0) {\r\n                falseCheck(currPlace.raw,currPlace.column);\r\n            };\r\n\r\n        } );\r\n    });\r\n\r\n};\r\n\r\n/* Drawing page Купить билеты*/\r\nfunction drawBuyTicket() {\r\n    insertDiv.innerHTML = _components_content__WEBPACK_IMPORTED_MODULE_1__.contentBuyTicketHead; /**Отрисовка шапки, которая не меняется */\r\n    mainSection.appendChild(insertDiv);\r\n    mainSection.classList.add('pageBuyTicket');\r\n    \r\n    let legend1Place = document.querySelector('.legend1'); /**Вывод легенды */\r\n    let Legend1InsertDiv = document.createElement('div');   \r\n    Legend1InsertDiv.innerHTML = `${_components_data__WEBPACK_IMPORTED_MODULE_0__.performance.title} / ${_components_data__WEBPACK_IMPORTED_MODULE_0__.performance.date} / ${_components_data__WEBPACK_IMPORTED_MODULE_0__.performance.hall}  \r\n                                    `;\r\n    legend1Place.appendChild(Legend1InsertDiv);\r\n\r\n    drawTheHall(); /**Отрисовка главного окна */\r\n    makePlaceListeners(); /**Установка детекции кликов в этом окне */\r\n    \r\n    let buttonBuy = document.getElementById('buyTicketButton');\r\n    buttonBuy.addEventListener('click', function(event) {  /* Установка детекции кликов  для кнопки Купить билет */\r\n    if (_components_data__WEBPACK_IMPORTED_MODULE_0__.performance.freePlaces[currPlace.raw][currPlace.column] > 0) {\r\n        let currPlaceClone = {}; /**Создаем клон для копирования */\r\n        Object.assign(currPlaceClone, currPlace);\r\n        myTickets.push(currPlaceClone); /**Добавление купленного билета в корзину */\r\n\r\n        _components_data__WEBPACK_IMPORTED_MODULE_0__.performance.buy(currPlace.raw,currPlace.column); /**Сама покупка */\r\n        successBought(currPlace.raw,currPlace.column,_components_data__WEBPACK_IMPORTED_MODULE_0__.performance.title,_components_data__WEBPACK_IMPORTED_MODULE_0__.performance.date);\r\n        drawTheHall(); /**Перерисовка окна   */\r\n        makePlaceListeners(); /**Установка детекции кликов в этом окне, т.к. содержимое окна новое, старые детекторы удалены */\r\n    };\r\n\r\n    })\r\n\r\n};\r\n\r\n\r\n/* Drawing page   О театре */\r\nfunction drawAboutTheatre() {\r\n    insertDiv.innerHTML = _components_content__WEBPACK_IMPORTED_MODULE_1__.contentAbout;\r\n    mainSection.appendChild(insertDiv);\r\n    mainSection.classList.add('pageAbout');\r\n};\r\n\r\n\r\n\r\n/* Установка детекции кликов для всех элементов меню */\r\nnavArray.forEach(function(item, num) {\r\n    item.addEventListener('click', function(event) {\r\n        currentPage = num; /**Задается номер выбранной страницы */\r\n        drawMenu(currentPage);\r\n        drawContent(currentPage);\r\n    } );\r\n});\r\n\r\ndrawMainPage();\r\n\r\n\r\n\n\n//# sourceURL=webpack://theatre/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;