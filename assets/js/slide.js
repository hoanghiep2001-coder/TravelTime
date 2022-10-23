// gan bien $ de goi cac selector ( đỡ phải viết dài )

// const dots = $$('.body-beaches-dot-item') 
// const imgs = $$('.body-beaches-img-item')

// dots.forEach((dot, index) => {
//     const img = imgs[index]

//     dot.onclick = function() {

//         $('.body-beaches-dot-item.active').classList.remove('active')
//         $('.body-beaches-img-item.active').classList.remove('active')

//         this.classList.add('active')
//         img.classList.add('active')
//     }
// })

// Tablet/Mobile Nav

let openTabletNav = $('.tablet__header-icon')
let closeTabletNav = $('.tablet__close-img')
let TabletNav = $('.tablet__header-bars-container')

function showTabletNav() {
    TabletNav[0].classList.add('close')
}

function hideTabletNav() {
    TabletNav[0].classList.remove('close')
}

openTabletNav[0].addEventListener('click', showTabletNav)
closeTabletNav[0].addEventListener('click', hideTabletNav)
