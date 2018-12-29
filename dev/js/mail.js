var submitForm = function (ev) {
    ev.preventDefault();

    var form = $(ev.target);

    var request = ajaxForm(form);

    request.done(function (msg) {
        var mes = msg.mes,
            status = msg.status;
        if (status === 'OK') {
            $.fancybox.open('<div id="hidden-form"><div class="modal__text">Ваше письмо было успешно отправлено</div><a href="#" data-fancybox-close class="btn btn--form btn--modal">Закрыть</a></div>');
            console.log('1');
        } else {
            $.fancybox.open('<div id="hidden-form"><div class="modal__text">К сожалению, письмо не было отправлено, попробуйте позже!</div><a href="#" data-fancybox-close class="btn btn--form btn--modal">Закрыть</a></div>');
            console.log('2');
        }
        $('#form')[0].reset();
        form.reset();
    });

    request.fail(function (jqXHR, textStatus) {
        // alert("Request failed: " + textStatus);
        if(jqXHR.status == 200) {
            $.fancybox.open('<div id="hidden-form"><div class="modal__text">Ваше письмо было успешно отправлено</div><a href="#" data-fancybox-close class="btn btn--form btn--modal">Закрыть</a></div>');
            $('#form')[0].reset();
        } else {
            $.fancybox.open('<div id="hidden-form"><div class="modal__text">К сожалению, письмо не было отправлено, попробуйте позже!</div><a href="#" data-fancybox-close class="btn btn--form btn--modal">Закрыть</a></div>');
        }
        console.log(jqXHR);
    });
}

var ajaxForm = function (form) {

    var url = form.attr('action'),
        data = form.serialize();

    return $.ajax({
        type: 'POST',
        url: url,
        data: data,
        dataType: 'JSON'
    });

}

$('#form').on('submit', submitForm);