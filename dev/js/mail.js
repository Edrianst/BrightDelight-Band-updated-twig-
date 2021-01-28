var submitForm = function (ev) {
    ev.preventDefault();

    var form = $(ev.target);

    var request = ajaxForm(form);

    request.done(function (msg) {
        var mes = msg.mes,
            status = msg.status;
        if (status === 'OK') {
            $.fancybox.open($('#hidden-message'));
            console.log('1');
        } else {
            $.fancybox.open($('#hidden-message--negative'));
            console.log('2');
        }
        $('#form')[0].reset();
        form.reset();
    });

    request.fail(function (jqXHR, textStatus) {
        if(jqXHR.status == 200) {
            $.fancybox.open($('#hidden-message'));
            $('#form')[0].reset();
        } else {
            $.fancybox.open($('#hidden-message--negative'));
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
$('#merch_form').on('submit', submitForm);