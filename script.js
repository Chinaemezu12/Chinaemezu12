$(document).ready(function () {

$('.toggle-btn').click(function () {
$('.nav-links-container').slideToggle(1000)

$('.toggle-btn').toggleClass('change')


})






// owl carousel Microsoft



$('.product-center').owlCarousel({
    loop:true,
    margin:10,
    smartSpeed:3000,
    autoplay:true,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})



// details toggle

$('.description-title').click(function () {
$('.description-center').slideToggle(1000)

$('.des-icon').toggleClass('turn')

} )



// navigation-icon scroll visibility






// Stores


$('.location-center').owlCarousel({
    loop:true,
    margin:8,
    smartSpeed:4000,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})






























})













































































