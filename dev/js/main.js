// scrolling

$(document).ready(function () {

    $("#menu").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 700);
    });
});

// video 

const frame = document.getElementById('frame');
const video = document.getElementById('video');
const btn = document.getElementById('play-btn');


window.onload = function () {
    document.getElementById('play-btn').onclick = function () {
        video.style.display = 'none';
        frame.style.display = 'block';
        btn.style.display = 'none';
        frame.src = 'https://www.youtube.com/embed/ng07h-xhx-w?autoplay=1';
    }
}

//ham menu

$(function () {
    const menu = $('.ham__menu');

    $('.hamburger').on('click', e => {
        menu.toggleClass('ham__menu--active');
        $('body').addClass('overflow');
    })

    $('.close-btn').on('click', e => {
        e.preventDefault();
        menu.removeClass('ham__menu--active');
        $('body').removeClass('overflow');
    })

    $(".menu__list").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;

        menu.removeClass('ham__menu--active');
        $('body').removeClass('overflow');
        setTimeout(() => {
            $('body,html').animate({
                scrollTop: top
            }, 700);
        }, 500);
    });
})

//gallery

$(function () {
    const link = $('.more');
    const block = $('.gallery__block');

    link.on('click', e => {
        e.preventDefault();
        block.removeClass('gallery__block--hidden');
        link.css({
            "display": "none"
        })
    })
})



const drawText = (strings) => {
    const text = document.querySelector('.preloader__text');
    let i = 0;

     function recurse(index) {

        const interval = setInterval(function () {
            text.innerHTML += strings[index][i];
            i++;

            if (i >= strings[index].length) {
                window.clearInterval(interval);
                i = 0;

                index = index == 1 ? 0 : 1;

                setTimeout(function () {
                    text.innerHTML = '';
                    recurse(index);
                }, 2000)
            }

        }, 50);
    }

    recurse(0);
}

drawText(['Загрузка ...', 'Loading ...']);

$(window).on('load', function () {
    setTimeout(() => {
        $('.preloader').fadeOut(1000);
    }, 100);

})

$(function () {
    $('.album__wrapper').on('click', e => {
        e.preventDefault();
        let currentTrigger = $(e.currentTarget);
        let modal = currentTrigger.next('.gallery__modal');
        modal.css({
            'display': 'flex'
        })
        setTimeout(() => {
            modal.addClass('gallery__modal--active');
            $('body').addClass('overflow');
        }, 300);
    })
    $(document).mouseup(function (e) {
        let div = $('.gallery__wrapper');
        let modalWindow = $('.gallery__modal--active');
        if (!div.is(e.target) &&
            div.has(e.target).length === 0) {
            modalWindow.removeClass('gallery__modal--active');
            $('body').removeClass('overflow')
            setTimeout(() => {
                modalWindow.css({
                    'display': 'none'
                })
            }, 300);
        }
    });
})