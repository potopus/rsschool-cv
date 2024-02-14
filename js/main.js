// определение языка пользователя
// var lang;
//     if (window.navigator.userLanguage)
//         lang = wimdow.navigator.userLanguage;
//     else if (window.navigator.language)
//         lang = window.navigator.language;
//     else
//         lang = "en"
//     ;

//     lang = lang.substr(0, 2);
//     alert(lang);

//     if (lang == 'ru')
//     {
//         // do something
//     }




// фиксация бургера при скроле
let mainMenu = document.querySelector('.main-menu');
let burgerBlock = document.querySelector('.burger-block');

window.addEventListener('scroll', async function () {

    if (mainMenu.getBoundingClientRect().top < 20) {

        document.documentElement.style.setProperty('--burger-top', '20px');
        burgerBlock.style.transition = "none";
        // await new Promise(resolve => requestAnimationFrame(resolve));
        requestAnimationFrame(() => {
            burgerBlock.style.setProperty('--burger-position', 'fixed');
            // burgerBlock.style.setProperty('--burger-top', '20px');
        });
    } else if (burgerBlock.style.position !== 'static') {
        console.log("position " + burgerBlock.style.position);

        burgerBlock.style.setProperty('--burger-position', 'static');
        burgerBlock.style.removeProperty('transition');
        // burgerBlock.style.removeProperty('--burger-top');
        document.documentElement.style.setProperty('--burger-top', mainMenu.getBoundingClientRect().top + "px");
    }
});

// burger

let burgerIcon = document.querySelector("#check-menu");
let menu = document.querySelector(".menu-items");
let lebelBurger = document.querySelector(".label-burger");
let isChanging = false;

burgerIcon.addEventListener('change', async () => {
    if (!isChanging) {
        isChanging = true;
        if (burgerIcon.checked) {

            if (mainMenu.getBoundingClientRect().top > 20) {
                console.log(mainMenu.getBoundingClientRect().top);

                document.documentElement.style.setProperty('--burger-top', mainMenu.getBoundingClientRect().top + "px");

                // burgerBlock.style.top= mainMenu.getBoundingClientRect().top + "px";
                await new Promise(resolve => requestAnimationFrame(resolve));
                await new Promise(resolve => {
                    burgerBlock.classList.add("burger-block--position");
                    burgerBlock.style.setProperty('--burger-position', 'fixed');
                    resolve();
                });
                // burgerBlock.classList.add("burger-block--position");

            }
            menu.classList.add("menu-items__active");
            document.body.classList.add("lock");
            document.documentElement.classList.add("lock");
        } else {
            menu.classList.remove("menu-items__active");
            burgerBlock.classList.remove("burger-block--position");
            if (mainMenu.getBoundingClientRect().top > 20) {
                setTimeout(() => {
                    burgerBlock.style.setProperty('--burger-position', 'static');
                }, 1010);
            }
            document.body.classList.remove("lock");
            document.documentElement.classList.remove("lock");
        }
        isChanging = false;  // Сбрасываем флаг изменения
    }
});

menu.addEventListener("click", function () {
    if (burgerIcon.checked) {
        menu.classList.remove("menu-items__active");
        document.body.classList.remove("lock");
        document.documentElement.classList.remove("lock");
        burgerIcon.checked = false;
    }
});