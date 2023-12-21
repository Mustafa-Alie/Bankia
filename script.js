'use strict'

document.querySelectorAll('.end__link').forEach(link => link.addEventListener('click', e => e.preventDefault()));


/* Register Modal Window */

const btnOpenModal = document.querySelectorAll(".btn--open--modal");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const footerBtn = document.querySelector('.footer__btn');
const header = document.querySelector('header')

const openModal = function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}

const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden")
}

btnOpenModal.forEach(btn => btn.addEventListener('click', function (e) {
    e.preventDefault();//becasue clicking on the button will drag the page to the top 
    openModal()
}));

btnCloseModal.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

document.addEventListener('keydown', function (e) {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        closeModal()
    }
});

/* ////////////////////////////////////     */

/*  Login Modal Window */

const logBtn = document.querySelector('.nav__button--login');


/*  Cookies bar */

/* Create and manipulate HTML from JS */
const cookies = document.createElement('div');
cookies.classList.add('cookies');
cookies.innerHTML = '<p>We use <span class="baskaweet"> Baskaweet   </span><img src="./images/cookies.svg" class="cookies__img" alt="cookies icone" >   to improve functionality and analytics!</P> <button class="cookies__btn">Got it!</button>';

header.append(cookies);

const cookiesBtn = document.querySelector('.cookies__btn');
cookiesBtn.addEventListener('click', function () {
    cookies.remove();
})

/*  /////////////////   */

/* smoth scrolling to Features when clicking on Learn more */

const learnMoreBtn = document.querySelector('.header__slogan__more');
const features = document.querySelector('.features');

learnMoreBtn.addEventListener('click', function () {
    //the new way:
    features.scrollIntoView({ behavior: 'smooth' });

    // The old way :
    // const featuresCoords = features.getBoundingClientRect();
    // window.scrollTo({
    //     left: featuresCoords.x + window.scrollX,
    //     top: featuresCoords.y + window.scrollY,
    //     behavior: 'smooth',
    // });
    //featuresCoords.y will get the hight to from Features to the Viewport, and window.scrollY will get the hight from the Viewport to the beginning. Adding them together will get the coords from any position 
})

/*  ////////////////////    */

/* smooth scrolling for nav bar */

const services = document.querySelector('.services');
const reviews = document.querySelector('.reviews');


/* tradintional way */

// const featuresBtn = document.querySelector('.nav__links__features');
// const servicesBtn = document.querySelector('.nav__links__services');
// const reviewsBtn = document.querySelector('.nav__links__reviews');

// featuresBtn.addEventListener('click', function (e) {
//     e.preventDefault();
//     features.scrollIntoView({ behavior: 'smooth' });
// });

// servicesBtn.addEventListener('click', function () {
//     services.scrollIntoView({ behavior: 'smooth' });
// });

// reviewsBtn.addEventListener('click', function () {
//     reviews.scrollIntoView({ behavior: 'smooth' });
// });


/*  by looping over the links   */

// document.querySelectorAll('.nav__links__link').forEach(function (el) {
//     el.addEventListener('click', function (e) {
//         const id = el.getAttribute('href');
//         document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//     })
// })


/* using Event delegation */
// Add event listener to a common parent:
document.querySelector('.nav__links').addEventListener('click', function (e) {
    //matching with required elements only:
    if (e.target.classList.contains('nav__links__link')) {
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    }
});


/*  //////////////////////////////////////////////  */

/*      Tabbed Components       */

const tabs = document.querySelectorAll('.services__btn');
const tabsContainer = document.querySelector('.services__buttons');
const tabsContent = document.querySelectorAll('.box__content');

tabsContainer.addEventListener('click', function (e) {
    e.preventDefault();
    const clicked = e.target;

    if (clicked.classList.contains('services__btn')) {
        const id = clicked.getAttribute('href');
        tabsContent.forEach(tab => tab.classList.add('box--hidden'));
        document.querySelector(`.${id}`).classList.remove('box--hidden');

    }
});

/*  //////////////////////////////////////////////////////////////////////      */

/*  more info button */

document.querySelectorAll('.desc__more__link').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        e.preventDefault();
        alert("kalaam kteer, kalaam kteer, kalaam kteer, kalaam kteer,kalaam kteer, kalaam kteer, kalaam kteer, kalaam kteer,kalaam kteer, kalaam kteer, kalaam kteer, kalaam kteer,kalaam kteer,kalaam kteer, kalaam kteer");
    })
});

/*  //////////////////////////////////      */

/*      Nav links Hover     */

const nav = document.querySelector('.nav');
const logo = document.querySelector('.nav__logo');
const links = document.querySelectorAll('.nav__links__link');


nav.addEventListener('mouseover', function (e) {
    const clicked = e.target;
    if (clicked.classList.contains('nav__links__link')) {
        links.forEach(function (el) {
            if (el !== clicked) el.style.opacity = 0.5;
        });
        logo.style.opacity = 0.5;
    };
});

nav.addEventListener('mouseout', function (e) {
    logo.style.opacity = 1;
    links.forEach(link => link.style.opacity = 1)
});

/*  /////////////////////////////////////////////       */

/*      Sticky Bar       */


// The Intersection Observer API:
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
    const [entry] = entries;

    if (!entry.isIntersecting) nav.classList.add('sticky');
    else nav.classList.remove('sticky');
};

const options = {
    root: null,
    threshold: 0
};

const headObserver = new IntersectionObserver(stickyNav, options);
headObserver.observe(header);


/* The old way:
const height = getComputedStyle(nav).height;

window.addEventListener('scroll', function () {
    if (features.getBoundingClientRect().y < parseInt(height)) {
        nav.classList.add('sticky');
    }
    else {
        nav.classList.remove('sticky')
    }
});
*/

/*  ////////////////////////////////////////////    */

/*      Revealing sections on scrolling     */

// const allSections = document.querySelectorAll("section");

// const revealing = function (entries) {
//     entries.forEach(function (entry) {
//         if (entry.isIntersecting) {
//             entry.target.classList.remove('section-hidden');
//             sectionObserver.unobserve(entry.target)
//         }
//     })

// }

// const opts = {
//     root: null,
//     threshold: 0.2
// }
// const sectionObserver = new IntersectionObserver(revealing, opts);

// allSections.forEach(sec => sectionObserver.observe(sec));


/*      ///////////////////////////////////////////////////     */

/* Lazy img */

const imgs = document.querySelectorAll('.lazy-img');

const lazyLoad = function (entries) {

    const [entry] = entries
    if (!entry.isIntersecting) return;

    entry.target.classList.remove('lazy-img');
    imgObserver.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(lazyLoad, {
    root: null,
    threshold: 0.9
});

imgs.forEach(img => imgObserver.observe(img));



/*      ///////////////////////////////////////////     */

/*  Slider   */

const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.testimony__btn--left');
const btnRight = document.querySelector('.testimony__btn--right');
let currentSlide = 0;

const dots = document.querySelectorAll('.dots__dot');
let currentDot = 0;
const activateDot = function () {
    dots.forEach(dot => dot.classList.remove('active-dot'));
    document.querySelector(`[data-dot="${currentDot}"]`).classList.add('active-dot');
}




// dots:

dots.forEach(function (dot, index) {
    dot.addEventListener('click', function (e) {

        dots.forEach(dot => dot.classList.remove('active-dot'));
        e.target.classList.add('active-dot');

        slides.forEach((slide, i) => slide.style.transform = `translateX(${100 * (i - index)}%)`);
    })

})

// arrows:



// initial conditions: 0% , 100% , 200%
slides.forEach((slide, i) => slide.style.transform = `translateX(${100 * i}%)`);

// next slide: -100% , 0 , 100%
btnRight.addEventListener('click', function () {
    if (currentSlide < 2) {
        currentSlide++;
        slides.forEach((slide, i) => slide.style.transform = `translateX(${100 * (i - currentSlide)}%)`);

        currentDot++;

        activateDot();

    }
    else {
        currentSlide = 0;
        currentDot = 0;

        slides.forEach((slide, i) => slide.style.transform = `translateX(${100 * i}%)`);
        activateDot()

    }


})

// previous slide: 
btnLeft.addEventListener('click', function () {
    if (currentSlide > 0) {
        currentSlide--;
        slides.forEach((slide, i) => slide.style.transform = `translateX(${100 * (i - currentSlide)}%)`);

        currentDot--;
        activateDot();

    }
    else {
        //-200% , -100%, 0
        currentSlide = 2;
        slides.forEach((slide, i) => slide.style.transform = `translateX(${100 * (i - currentSlide)}%)`);

        currentDot = 2;
        activateDot();

    }

})



// dots.forEach((dot, index) => function () {
//     dot.addEventListener('click', function () {
//         console.log('clicked');
//         slides.forEach((slide, i) => slide.style.transform = `translateX(${100 * (i - index)}%)`);

//     })

// });




