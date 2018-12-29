
<?php
    $name = $_POST['name'];
    $message = $_POST['message'];
    $mail_message = '
    <html>
        <head>
            <title>Сообщение с сайта</title>
        </head>
        <body>
            <h2>Сообщение</h2>
            <ul>
                <li>Имя: ' . $name . '</li>
                <li>Сообщение: ' . $message . '</li>
            </ul>
        </body>
    </html>';

    $headers = "From: Собщение с сайта <postmaster@brightdeli.nichost.ru>\r\n".
    "MIME-Version: 1.0" . "\r\n" .
    "Content-type: text/html; charset=UTF-8" . "\r\n";
    $mail = mail('excite90@mail.ru', 'Сообщение', $mail_message, $headers);
    $data = [];
    if ($mail) {
        $data['status'] = "OK";
        $data['mes'] = "Письмо успешно отправлено";
    }else{
        $data['status'] = "NO";
        $data['mes'] = "На сервере произошла ошибка";
    }
?>