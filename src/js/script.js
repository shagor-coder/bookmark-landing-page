
const featureBtn1 = document.querySelector('.btn-1');

const featureBtn2 = document.querySelector('.btn-2');

const featureBtn3 = document.querySelector('.btn-3');

const featureItem1 = document.querySelector('.features__item-1');

const featureItem2 = document.querySelector('.features__item-2');

const featureItem3 = document.querySelector('.features__item-3');


featureBtn1.addEventListener('click', () => {
    featureBtn1.classList.add('active')
    featureBtn1.classList.remove('hidden')
    featureBtn2.classList.remove('active')
    featureBtn3.classList.remove('active')
    
    featureItem1.classList.remove('hide');
    featureItem2.classList.remove('show');
    featureItem3.classList.remove('show');
})

featureBtn2.addEventListener('click', () => {
    featureBtn1.classList.remove('active')
    featureBtn1.classList.add('hidden')
    featureBtn2.classList.add('active')
    featureBtn3.classList.remove('active')

    featureItem1.classList.add('hide');
    featureItem2.classList.add('show');
    featureItem3.classList.remove('show');
})

featureBtn3.addEventListener('click', () => {
    featureBtn1.classList.remove('active')
    featureBtn1.classList.add('hidden')
    featureBtn2.classList.remove('active')
    featureBtn3.classList.add('active')

    featureItem1.classList.add('hide');
    featureItem2.classList.remove('show');
    featureItem3.classList.add('show');
});

// Accordion

const faqBtn1 = document.querySelector('.q1')

const faqBtn2 = document.querySelector('.q2')

const faqBtn3 = document.querySelector('.q3')

const faqBtn4 = document.querySelector('.q4')

const faqDes1 = document.querySelector('.faq1')

const faqDes2 = document.querySelector('.faq2')

const faqDes3 = document.querySelector('.faq3')

const faqDes4 = document.querySelector('.faq4')

faqBtn1.addEventListener('click', () => {
    faqBtn1.classList.toggle('active')
    faqDes1.classList.toggle('active')
})

faqBtn2.addEventListener('click', () => {
    faqBtn2.classList.toggle('active')
    faqDes2.classList.toggle('active')
})

faqBtn3.addEventListener('click', () => {
    faqBtn3.classList.toggle('active')
    faqDes3.classList.toggle('active')
})

faqBtn4.addEventListener('click', () => {
    faqBtn4.classList.toggle('active')
    faqDes4.classList.toggle('active')
})

// Mobile Hamburger Menu

const mobileMenu = document.querySelector('.nav__menu');

const toggleMenu = document.querySelector('.nav__toggle');

const logo = document.querySelector('.nav__logo img');

const bodyLock = document.querySelector('body');

const menuLinks = document.querySelectorAll('.nav__menu__link')

menuLinks.forEach(function(menuLinks){
    menuLinks.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        toggleMenu.classList.toggle('active');
        bodyLock.classList.remove('active')
    })
})

toggleMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    toggleMenu.classList.toggle('active');
    bodyLock.classList.toggle('active')
})

