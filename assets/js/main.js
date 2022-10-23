const openNav = document.querySelector('.header-bars-icon')
const Nav = document.querySelector('.header-bar-packages')

function showNav() {
    Nav.classList.add('open')
}

function hideNav() {
    Nav.classList.remove('open')
}

openNav.addEventListener('click', showNav)

// Modal signform
const openLogin = document.querySelector('.header-booking')
const hideLogin = document.querySelector('.js-hide-loginForm')
const modal = document.querySelector('.js-open-modal')
const modalBody = document.querySelector('.js-modal-body')

function showLoginForm() {
    modal.classList.add('open')
}

function hideLoginForm() {
    modal.classList.remove('open')
}

openLogin.addEventListener('click', showLoginForm)
        
hideLogin.addEventListener('click', hideLoginForm)

modal.addEventListener('click', hideLoginForm)

modalBody.addEventListener('click', function(event) {
    event.stopPropagation()
})

// signIn form

// making config
const ListHeaderButton = $(".header-bars");
const ListHeaderButtonClose = $(".header-bars-close");

const app = {
    handleEvent: function() {
       // set all to hidden overflow when click the list header button

       ListHeaderButtonClose.onclick = function(e) {
        hideNav();
       };
    },
    start: function() {
        app.handleEvent();
    },
}

app.start();