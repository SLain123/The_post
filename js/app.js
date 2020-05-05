"use strict";

function _createForOfIteratorHelperLoose(o) { var i = 0; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } i = o[Symbol.iterator](); return i.next.bind(i); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// Search form ============================================
var iconSearch = document.querySelector('.search__main'),
    strSearch = document.querySelector('.search__string'),
    btnSearch = document.querySelector('.search__btn'),
    hideSearchIcon = function hideSearchIcon(event) {
  event.preventDefault();
  iconSearch.style.display = 'none';
  strSearch.style.display = 'flex';
},
    visibleSearchIcon = function visibleSearchIcon(event) {
  event.preventDefault();
  strSearch.style.display = 'none';
  iconSearch.style.display = 'flex';
};

iconSearch.addEventListener('click', hideSearchIcon);
btnSearch.addEventListener('click', visibleSearchIcon); // Learn more btn ======= Post worldwide btn ========= Youtube btn

var learnMoreBtn = document.querySelector('.learn-more'),
    learnMoreBtn2 = document.querySelector('.delivery__more-btn'),
    bodyHTML = document.querySelector('body'),
    mainModalWindow = document.querySelector('.modal'),
    learnMoreModalWindow = document.querySelector('.modal__learn-more'),
    closeBtnLearn = document.querySelector('.learn-more__close-btn'),
    worldWideBtn = document.querySelector('.worldwide'),
    worldWideModalWindow = document.querySelector('.modal__map'),
    youtubeBtn = document.querySelector('.video__play-btn'),
    youtubeModalWindow = document.querySelector('.modal__youtube'),
    closeBtnYoutube = document.querySelector('.close-btn-youtube'),
    iframeYoutube = document.querySelector('#you'),
    displayLearnMoreWindow = function displayLearnMoreWindow(event) {
  event.preventDefault();
  mainModalWindow.style.display = 'flex';
  learnMoreModalWindow.style.display = 'flex';
  bodyHTML.classList.add('no-scroll');
},
    displayWorldwideWindow = function displayWorldwideWindow(event) {
  event.preventDefault();
  mainModalWindow.style.display = 'flex';
  worldWideModalWindow.style.display = 'flex';
  bodyHTML.classList.add('no-scroll');
},
    displayYoutubeWindow = function displayYoutubeWindow(event) {
  event.preventDefault();
  mainModalWindow.style.display = 'flex';
  youtubeModalWindow.style.display = 'flex';
  bodyHTML.classList.add('no-scroll');
  youtubeModalWindow.insertAdjacentHTML("afterbegin", '<iframe id="you" width="100%" height="100%" src="https://www.youtube.com/embed/DsPRwzOF7_I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
  youtubeModalWindow.insertAdjacentHTML('beforeend', '<div class="learn-more__close-btn close-btn-youtube" onclick="hideModalWindowYoutube()"><i class="fa fa-times-circle" aria-hidden="true"></i></div>');
},
    hideModalWindowLearn = function hideModalWindowLearn(event) {
  event.preventDefault();
  mainModalWindow.style.display = 'none';
  learnMoreModalWindow.style.display = 'none';
  bodyHTML.classList.remove('no-scroll');
},
    hideModalWindowMap = function hideModalWindowMap(event) {
  event.preventDefault();
  mainModalWindow.style.display = 'none';
  worldWideModalWindow.style.display = 'none';
  bodyHTML.classList.remove('no-scroll');
},
    hideModalWindowYoutube = function hideModalWindowYoutube(event) {
  mainModalWindow.style.display = 'none';
  youtubeModalWindow.style.display = 'none';
  bodyHTML.classList.remove('no-scroll');
  youtubeModalWindow.removeChild(youtubeModalWindow.firstChild);
},
    hideModalWindowOut = function hideModalWindowOut(event) {
  event.preventDefault();
  var target = event.target;

  if (!learnMoreModalWindow.contains(target) && !worldWideModalWindow.contains(target) && !youtubeModalWindow.contains(target)) {
    mainModalWindow.style.display = 'none';
    learnMoreModalWindow.style.display = 'none';
    worldWideModalWindow.style.display = 'none';
    youtubeModalWindow.style.display = 'none';
    bodyHTML.classList.remove('no-scroll');
    youtubeModalWindow.removeChild(youtubeModalWindow.firstChild);
  }
};

learnMoreBtn.addEventListener('click', displayLearnMoreWindow);
learnMoreBtn2.addEventListener('click', displayLearnMoreWindow);
closeBtnLearn.addEventListener('click', hideModalWindowLearn);
mainModalWindow.addEventListener('click', hideModalWindowOut);
worldWideBtn.addEventListener('click', displayWorldwideWindow);
youtubeBtn.addEventListener('click', displayYoutubeWindow); // Select location =================================================

var selectList = document.querySelector('#location'),
    selectLocBtn = document.querySelector('.btn-panel__send-btn'),
    usa = 'https://www.google.ru/maps/d/viewer?hl=ru&mid=1_jxBIxJCP0Jvw2m9xN3pz9iFJ7o&ll=37.169547886908305%2C-95.66499999999996&z=4',
    russia = 'https://yandex.ru/maps/?ll=105.306383%2C69.674040&mode=search&sll=37.622504%2C55.753215&sspn=1.444702%2C0.491023&text=hjccbz&z=3.07',
    europe = 'http://svspb.net/html/google_map.php?cntr=eu',
    checkLocation = function checkLocation(event) {
  if (selectList.options.selectedIndex == 1) {
    window.open(usa, '_blank');
  } else if (selectList.options.selectedIndex == 2) {
    window.open(russia, '_blank');
  } else if (selectList.options.selectedIndex == 3) {
    window.open(europe, '_blank');
  }
};

selectLocBtn.addEventListener('click', checkLocation); // Express - Logistic forms ================================

var mainForm = document.querySelector('.logistic__form'),
    expressBtn = document.querySelector('.logistic__btn-express'),
    logiscitBtn = document.querySelector('.logistic__btn-logistics'),
    inputs = document.querySelectorAll('.logistic__main-inputs input'),
    selects = document.querySelectorAll('.logistic__main-inputs select'),
    options = document.querySelectorAll('.logistic__main-inputs select option'),
    formBtn = document.querySelectorAll('.logistic__form-send-btn button'), 
    blockWithSelects = document.querySelectorAll('.logistic__main-selects'), 
    red = '#ba0000', yellow = '#ffcc00', white = 'white', yellowDark = '#9B7C00', redDark = '#9d0000', displayExpressForm = function displayExpressForm() {
    mainForm.style.background = red;
    inputs[0].placeholder = 'Track your shipment';
    inputs[1].placeholder = 'Find POST point';
    selects[0].options.selectedIndex = 0;
    selects[1].options.selectedIndex = 0;

  for (var _iterator = _createForOfIteratorHelperLoose(inputs), _step; !(_step = _iterator()).done;) {
    input = _step.value;
    input.value = '';
    input.style.background = redDark;
    input.style.borderColor = white;
    input.style.borderRightColor = red;
    input.style.color = yellow;
    input.style.outline = 'none';
  }

  ;

  for (var _iterator2 = _createForOfIteratorHelperLoose(selects), _step2; !(_step2 = _iterator2()).done;) {
    select = _step2.value;
    select.style.width = '100%';
    select.style.background = redDark;
    select.style.borderColor = white;
  }

  ;

  for (var _iterator3 = _createForOfIteratorHelperLoose(formBtn), _step3; !(_step3 = _iterator3()).done;) {
    btn = _step3.value;
    btn.style.background = yellow;
    btn.style.color = red;
  }

  ;
  options[0].innerHTML = 'New login';
  options[1].innerHTML = 'sing in';
  options[6].innerHTML = 'Find a service';
  options[7].innerHTML = 'express service';
  options[8].innerHTML = 'import service';
  options[9].innerHTML = 'domestic service';
  options[0].removeAttribute('hidden', '');
  options[2].setAttribute('hidden', '');
  options[3].setAttribute('hidden', '');
  options[4].setAttribute('hidden', '');
  options[5].setAttribute('hidden', '');
  var forDelete = document.querySelectorAll('.btn-for-delete');

  for (var _iterator4 = _createForOfIteratorHelperLoose(forDelete), _step4; !(_step4 = _iterator4()).done;) {
    btn = _step4.value;
    btn.parentNode.removeChild(btn);
  }
}, displayLogisticForm = function displayLogisticForm() {
  mainForm.style.background = yellow;
  inputs[0].placeholder = 'Air Freight Tracking';
  inputs[1].placeholder = 'Ocean Freight Tracking';
  selects[0].options.selectedIndex = 0;
  selects[1].options.selectedIndex = 0;

  for (var _iterator5 = _createForOfIteratorHelperLoose(inputs), _step5; !(_step5 = _iterator5()).done;) {
    input = _step5.value;
    input.value = '';
    input.style.background = yellowDark;
    input.style.borderColor = red;
    input.style.color = red;
    input.style.outline = 'none';
  }

  ;

  for (var _iterator6 = _createForOfIteratorHelperLoose(selects), _step6; !(_step6 = _iterator6()).done;) {
    select = _step6.value;
    select.style.width = '85%';
    select.style.background = yellowDark;
    select.style.borderColor = red;
  }

  ;

  for (var _iterator7 = _createForOfIteratorHelperLoose(formBtn), _step7; !(_step7 = _iterator7()).done;) {
    btn = _step7.value;
    btn.style.background = red;
    btn.style.color = yellow;
  }

  ;
  options[0].innerHTML = need;
  options[1].innerHTML = air;
  options[6].innerHTML = solution;
  options[7].innerHTML = aero;
  options[8].innerHTML = chemic;
  options[9].innerHTML = fash;
  options[0].setAttribute('hidden', '');
  options[2].removeAttribute('hidden');
  options[3].removeAttribute('hidden');
  options[4].removeAttribute('hidden');
  options[5].removeAttribute('hidden');
  options[10].removeAttribute('hidden');
  options[11].removeAttribute('hidden');

  for (var _iterator8 = _createForOfIteratorHelperLoose(blockWithSelects), _step8; !(_step8 = _iterator8()).done;) {
    blockForBtn = _step8.value;
    var cloneBtn = formBtn[0].cloneNode(true);
    cloneBtn.setAttribute('class', 'btn-for-delete');
    blockForBtn.appendChild(cloneBtn);
  }

  ;
  var exstraBtn = document.querySelectorAll('.btn-for-delete');
  exstraBtn[0].addEventListener('click', function () {
    checkBtn(selects[0]);
  });
  exstraBtn[1].addEventListener('click', function () {
    checkBtn(selects[1]);
  });
};
logiscitBtn.addEventListener('click', displayLogisticForm);
expressBtn.addEventListener('click', displayExpressForm); // Error windows ============================================

var air = 'Air Freight',
    aero = 'Aerospace',
    ocean = 'Ocean Freight',
    chemic = 'Chemical',
    need = 'I need...',
    solution = 'Solution by industry sector',
    fash = 'Fashion',
    road = 'Road & rail',
    ware = 'Warehousing',
    green = 'Green logistics',
    tech = 'Technology',
    ret = 'Retail',
    errorText = document.querySelector('.error__text'),
    errorMainWindow = document.querySelector('.error');
var displayWord = '';

function checkBtn(btn) {
  if (btn.tagName == 'INPUT') {
    var val = btn.value;

    if (val == '') {
      displayWord = 'empty';
      displayError(displayWord, 'e');
    } else {
      if (btn.placeholder == 'Track your shipment') {
        displayWord = 'Shipment';
      } else if (btn.placeholder == 'Find POST point') {
        displayWord = 'Post address';
      } else if (btn.placeholder == 'Air Freight Tracking') {
        displayWord = 'Air freight track';
      } else if (btn.placeholder == 'Ocean Freight Tracking') {
        displayWord = 'Ocean freight track';
      }

      displayError(displayWord, 'i');
    }
  } else {
    if (btn.options.selectedIndex == 1) {
      if (btn.name == 'login') {
        displayWord = air;
      } else displayWord = aero;
    } else if (btn.options.selectedIndex == 2) {
      if (btn.name == 'login') {
        displayWord = ocean;
      } else displayWord = chemic;
    } else if (btn.options.selectedIndex == 3) {
      if (btn.name == 'login') {
        displayWord = road;
      } else displayWord = fash;
    } else if (btn.options.selectedIndex == 4) {
      if (btn.name == 'login') {
        displayWord = ware;
      } else displayWord = tech;
    } else if (btn.options.selectedIndex == 5) {
      if (btn.name == 'login') {
        displayWord = green;
      } else displayWord = ret;
    } else if (btn.options.selectedIndex == 0) {
      displayWord = 'empty';
    }

    displayError(displayWord, 's');
  }
}

;

function displayError(errorWord, tag) {
  var error = '';

  if (tag == 'i') {
    error = errorWord + " wasn't found";
  } else if (tag == 's') {
    if (errorWord != 'empty') {
      error = "We are glad that you are interested " + errorWord + ". For more information please call us!";
    } else error = "Select some list";
  } else error = "Please, fill in the input field";

  errorText.innerHTML = error;
  errorMainWindow.style.opacity = '1';
  errorMainWindow.style.zIndex = '100';
  window.setTimeout(function () {
    errorMainWindow.style.opacity = '0';
    errorMainWindow.style.zIndex = '-1';
  }, 2500);
}

formBtn[0].addEventListener('click', function () {
  checkBtn(inputs[0]);
});
formBtn[1].addEventListener('click', function () {
  checkBtn(inputs[1]);
}); // Burger =====================================================

var burgerBtn = document.querySelector('.burger'),
    burgerMenu = document.querySelector('.nav-burger'),
    burgerCenterBtn = document.querySelector('.burger__center'),
    burgerStartBtn = document.querySelector('.burger__start'),
    burgerEndBtn = document.querySelector('.burger__end'),
    displayBurgerMenu = function displayBurgerMenu() {
  burgerCenterBtn.style.display = 'none';

  if (screen.height >= 570) {
    burgerMenu.style.height = '408px';
    burgerStartBtn.style.transform = 'rotate(45deg) translateX(13px)';
    burgerEndBtn.style.transform = 'rotate(-45deg) translateX(13px)';
  } else {
    burgerMenu.style.height = '312px';
    burgerStartBtn.style.transform = 'rotate(45deg) translateX(8px)';
    burgerEndBtn.style.transform = 'rotate(-45deg) translateX(9px)';
  }

  burgerBtn.removeEventListener('click', displayBurgerMenu);
  burgerBtn.addEventListener('click', hideBurgerMenu);
},
    hideBurgerMenu = function hideBurgerMenu() {
  burgerMenu.style.height = '0';
  burgerCenterBtn.style.display = 'block';
  burgerStartBtn.style.transform = 'none';
  burgerEndBtn.style.transform = 'none';
  burgerBtn.removeEventListener('click', hideBurgerMenu);
  burgerBtn.addEventListener('click', displayBurgerMenu);
};

burgerBtn.addEventListener('click', displayBurgerMenu);