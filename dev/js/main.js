// scrolling

const scroll = (link) => {
    let id = link.getAttribute('href');
    let top = $(id).offset().top;

    $('body,html').animate({
        scrollTop: top
    }, 700);
}

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

const startVideo = () => {
    let links = $('.video__link');

    links.on('click', e => {
        e.preventDefault();

        let trigger = $(e.currentTarget);
        let poster = trigger.closest('.video__poster');
        let frame = poster.next('.video__post');
        let src = frame.attr('src');

        poster.css({
            'display': 'none'
        })

        frame.attr('src', src + '?autoplay=1');

        console.log(frame.attr('src'));
    })
}

const hamburger = () => {
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

        menu.removeClass('ham__menu--active');
        $('body').removeClass('overflow');
        setTimeout(() => {
            scroll(event.currentTarget)
        }, 500);
    });
}

const animateHeader = () => {
    setTimeout(() => {
        $('.header').animate({
            opacity: 1
        }, 700);
    }, 1100);
    setTimeout(() => {
        $('.btn--header').animate({
            opacity: 1
        }, 4000);
    }, 1100);
}

const animateSections = () => {
    $(window).scroll(function () {
        let items = $('.section--animated');
        let scroll = $(window).scrollTop();

        for (var i = 0; i < items.length; i++) {
            if ($('.section--animated:eq(' + i + ')').offset().top - scroll <= $(window).height() / 1.2) {
                $('.section--animated:eq(' + i + ')').animate({
                    opacity: 1,
                }, 700);
            }
        }
    })
}


const preload = () => {
    setTimeout(() => {
        $('.preloader').fadeOut(1000);
    }, 100);
}

const selectTabs = () => {
    let triggers = $('.shows__trigger');
    let lists = $('.shows__list');

    triggers.on('click', e => {
        e.preventDefault();

        let trigger = $(e.currentTarget);
        const hash = trigger.attr('href');
        triggers.removeClass('shows__trigger--active');
        trigger.addClass('shows__trigger--active');
        lists.addClass('shows__list--hidden');
        $(hash).removeClass('shows__list--hidden');
        console.log(hash);
    })
}

$("body").on("click", ".anchor", e => {
    e.preventDefault();

    scroll(e.currentTarget);
});

drawText(['Loading ...', 'Загрузка ...']);

$(() => {
    preload();
    animateHeader();
    animateSections();
    hamburger();
    startVideo();
    selectTabs();
})