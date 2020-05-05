// Search form ============================================

const iconSearch = document.querySelector('.search__main'),
    strSearch = document.querySelector('.search__string'),
    btnSearch = document.querySelector('.search__btn'),

    hideSearchIcon = (event) => {
        event.preventDefault();

        iconSearch.style.display = 'none';
        strSearch.style.display = 'flex';
    },

    visibleSearchIcon = (event) => {
        event.preventDefault();

        strSearch.style.display = 'none';
        iconSearch.style.display = 'flex';
        
    };

iconSearch.addEventListener('click', hideSearchIcon);
btnSearch.addEventListener('click', visibleSearchIcon);

// Learn more btn ======= Post worldwide btn ========= Youtube btn

const learnMoreBtn = document.querySelector('.learn-more'),
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

    displayLearnMoreWindow = (event) => {
        event.preventDefault();

        mainModalWindow.style.display = 'flex';
        learnMoreModalWindow.style.display = 'flex';
        bodyHTML.classList.add('no-scroll');
    },

    displayWorldwideWindow = (event) => {
        event.preventDefault();

        mainModalWindow.style.display = 'flex';
        worldWideModalWindow.style.display = 'flex';
        bodyHTML.classList.add('no-scroll');
    },

    displayYoutubeWindow = (event) => {
        event.preventDefault();

        mainModalWindow.style.display = 'flex';
        youtubeModalWindow.style.display = 'flex';
        bodyHTML.classList.add('no-scroll');
        youtubeModalWindow.insertAdjacentHTML("afterbegin", '<iframe id="you" width="100%" height="100%" src="https://www.youtube.com/embed/DsPRwzOF7_I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
        youtubeModalWindow.insertAdjacentHTML('beforeend', '<div class="learn-more__close-btn close-btn-youtube" onclick="hideModalWindowYoutube()"><i class="fa fa-times-circle" aria-hidden="true"></i></div>');
    },

    hideModalWindowLearn = (event) => {
        event.preventDefault();
        
        mainModalWindow.style.display = 'none';
        learnMoreModalWindow.style.display = 'none';
        bodyHTML.classList.remove('no-scroll');
    },

    hideModalWindowMap = (event) => {
        event.preventDefault();
        
        mainModalWindow.style.display = 'none';
        worldWideModalWindow.style.display = 'none';
        bodyHTML.classList.remove('no-scroll');
    },

    hideModalWindowYoutube = (event) => {
        mainModalWindow.style.display = 'none';
        youtubeModalWindow.style.display = 'none';
        bodyHTML.classList.remove('no-scroll');
        youtubeModalWindow.removeChild(youtubeModalWindow.firstChild);
    },

    hideModalWindowOut = (event) => {
        event.preventDefault();

        let target = event.target;

        if (!learnMoreModalWindow.contains(target) &&
            !worldWideModalWindow.contains(target) &&
            !youtubeModalWindow.contains(target)) {

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
youtubeBtn.addEventListener('click', displayYoutubeWindow);


// Select location =================================================

const selectList = document.querySelector('#location'),
    selectLocBtn = document.querySelector('.btn-panel__send-btn'),
    usa = 'https://www.google.ru/maps/d/viewer?hl=ru&mid=1_jxBIxJCP0Jvw2m9xN3pz9iFJ7o&ll=37.169547886908305%2C-95.66499999999996&z=4',
    russia = 'https://yandex.ru/maps/?ll=105.306383%2C69.674040&mode=search&sll=37.622504%2C55.753215&sspn=1.444702%2C0.491023&text=hjccbz&z=3.07',
    europe = 'http://svspb.net/html/google_map.php?cntr=eu',

    checkLocation = (event) => {
        
        if (selectList.options.selectedIndex == 1) {
            window.open(usa, '_blank');
        }
        else if (selectList.options.selectedIndex == 2) {
            window.open(russia, '_blank');
        }
        else if (selectList.options.selectedIndex == 3) {
            window.open(europe, '_blank');
        }
    }

selectLocBtn.addEventListener('click', checkLocation);

// Express - Logistic forms ================================

const mainForm = document.querySelector('.logistic__form'),
    expressBtn = document.querySelector('.logistic__btn-express'),
    logiscitBtn = document.querySelector('.logistic__btn-logistics'),
    inputs = document.querySelectorAll('.logistic__main-inputs input'),
    selects = document.querySelectorAll('.logistic__main-inputs select'),
    options = document.querySelectorAll('.logistic__main-inputs select option');
    formBtn = document.querySelectorAll('.logistic__form-send-btn button'),
    blockWithSelects = document.querySelectorAll('.logistic__main-selects'),
    red = '#ba0000',
    yellow = '#ffcc00',
    white = 'white',
    yellowDark = '#9B7C00',
    redDark = '#9d0000',

    displayExpressForm = () => {
        mainForm.style.background = red;
        inputs[0].placeholder = 'Track your shipment';
        inputs[1].placeholder = 'Find POST point';
        selects[0].options.selectedIndex = 0;
        selects[1].options.selectedIndex = 0;
        
        for(input of inputs) {
            input.value = '';
            input.style.background = redDark;
            input.style.borderColor = white;
            input.style.borderRightColor = red;
            input.style.color = yellow;
            input.style.outline = 'none';
        };

        for(select of selects) {
            select.style.width = '100%';
            select.style.background = redDark;
            select.style.borderColor = white;
        };

        for(btn of formBtn) {
            btn.style.background = yellow;
            btn.style.color = red;
        };

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

        let forDelete = document.querySelectorAll('.btn-for-delete');

        for(btn of forDelete) {
            btn.parentNode.removeChild(btn);
        }
    },

    displayLogisticForm = () => {
        mainForm.style.background = yellow;
        inputs[0].placeholder = 'Air Freight Tracking';
        inputs[1].placeholder = 'Ocean Freight Tracking';
        selects[0].options.selectedIndex = 0;
        selects[1].options.selectedIndex = 0;
        
        for(input of inputs) {
            input.value = '';
            input.style.background = yellowDark;
            input.style.borderColor = red;
            input.style.color = red;
            input.style.outline = 'none';
        };

        for(select of selects) {
            select.style.width = '85%';
            select.style.background = yellowDark;
            select.style.borderColor = red;
        };

        for(btn of formBtn) {
            btn.style.background = red;
            btn.style.color = yellow;
        };

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

        for (blockForBtn of blockWithSelects) {
            let cloneBtn = formBtn[0].cloneNode(true);
            cloneBtn.setAttribute('class', 'btn-for-delete');

            blockForBtn.appendChild(cloneBtn);
        };

        const exstraBtn = document.querySelectorAll('.btn-for-delete');

        exstraBtn[0].addEventListener('click', () => {
            checkBtn(selects[0]);
        });

        exstraBtn[1].addEventListener('click', () => {
            checkBtn(selects[1]);
        });
    }


logiscitBtn.addEventListener('click', displayLogisticForm);
expressBtn.addEventListener('click', displayExpressForm);

// Error windows ============================================

const air = 'Air Freight',
    aero = 'Aerospace',
    ocean = 'Ocean Freight',
    chemic = 'Chemical',
    need = 'I need...',
    solution = 'Solution by industry sector',
    fash = 'Fashion',
    road = 'Road & rail',
    ware = 'Warehousing',
    green ='Green logistics',
    tech = 'Technology',
    ret = 'Retail',

    errorText = document.querySelector('.error__text'),
    errorMainWindow = document.querySelector('.error');


     let displayWord = '';

function checkBtn(btn) {
    
    if(btn.tagName == 'INPUT') {
    
        let val = btn.value;

        if(val == '') {
            displayWord = 'empty';
            displayError(displayWord, 'e');
        }
        else {
            if(btn.placeholder == 'Track your shipment') {
                displayWord = 'Shipment';
            }
            else if (btn.placeholder == 'Find POST point') {
                displayWord = 'Post address';
            }
            else if (btn.placeholder == 'Air Freight Tracking') {
                displayWord = 'Air freight track';
            }
            else if (btn.placeholder == 'Ocean Freight Tracking') {
                displayWord = 'Ocean freight track';
            }
            displayError(displayWord, 'i');
        }
    }

    else {
        
        if(btn.options.selectedIndex == 1) {
            if(btn.name == 'login') {
                displayWord = air;
            }
            else displayWord = aero;
        }
        else if(btn.options.selectedIndex == 2) {
            if(btn.name == 'login') {
                displayWord = ocean;
            }
            else displayWord = chemic;
        }
        else if(btn.options.selectedIndex == 3) {
            if(btn.name == 'login') {
                displayWord = road;
            }
            else displayWord = fash;
        }
        else if(btn.options.selectedIndex == 4) {
            if(btn.name == 'login') {
                displayWord = ware;
            }
            else displayWord = tech;
        }
        else if(btn.options.selectedIndex == 5) {
            if(btn.name == 'login') {
                displayWord = green;
            }
            else displayWord = ret;
        }
        else if(btn.options.selectedIndex == 0) {
            displayWord = 'empty';
        }

        displayError(displayWord, 's');
    }
};

function displayError(errorWord, tag) {
    let error = '';

    if (tag == 'i') {
        error = `${errorWord} wasn't found`;
    }
    else if(tag == 's') {
        if (errorWord != 'empty') {
            error = `We are glad that you are interested ${errorWord}. For more information please call us!`
        }
        else error = "Select some list";
    }
    else error = `Please, fill in the input field`;

    errorText.innerHTML = error;
    errorMainWindow.style.opacity = '1';
    errorMainWindow.style.zIndex = '100';

    window.setTimeout(() => {
        errorMainWindow.style.opacity = '0';
        errorMainWindow.style.zIndex = '-1';
    }, 2500);
}


formBtn[0].addEventListener('click', () => {
    checkBtn(inputs[0]);
});

formBtn[1].addEventListener('click', () => {
    checkBtn(inputs[1]);
});

// Burger =====================================================

const burgerBtn = document.querySelector('.burger'),
    burgerMenu = document.querySelector('.nav-burger'),
    burgerCenterBtn = document.querySelector('.burger__center'),
    burgerStartBtn = document.querySelector('.burger__start'),
    burgerEndBtn = document.querySelector('.burger__end'),

    displayBurgerMenu = () => {
        burgerCenterBtn.style.display = 'none';

        if(screen.height >= 570) {
            burgerMenu.style.height = '408px';
            burgerStartBtn.style.transform = 'rotate(45deg) translateX(13px)';
            burgerEndBtn.style.transform = 'rotate(-45deg) translateX(13px)';

        }

        else {
            burgerMenu.style.height = '312px';
            burgerStartBtn.style.transform = 'rotate(45deg) translateX(8px)';
            burgerEndBtn.style.transform = 'rotate(-45deg) translateX(9px)';
        }

        
        burgerBtn.removeEventListener('click', displayBurgerMenu);
        burgerBtn.addEventListener('click', hideBurgerMenu);

    },

    hideBurgerMenu = () => {
        burgerMenu.style.height = '0';
        burgerCenterBtn.style.display = 'block';
        burgerStartBtn.style.transform = 'none';
        burgerEndBtn.style.transform = 'none';

        burgerBtn.removeEventListener('click', hideBurgerMenu);
        burgerBtn.addEventListener('click', displayBurgerMenu);
    };

burgerBtn.addEventListener('click', displayBurgerMenu);
