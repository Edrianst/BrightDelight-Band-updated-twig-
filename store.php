
<?php
    $merchname = $_POST['merchname'];
    $merchemail = $_POST['merchemail'];
    $merchtype = $_POST['merchtype'];
    $merchnumber = $_POST['merchnumber'];
    $merchphone = $_POST['merchphone'];
    $merchsize = $_POST['merchsize'];
    $mail_message = '
    <html>
        <head>
            <title>Заказ с сайта</title>
        </head>
        <body>
            <h2>Сообщение</h2>
            <ul>
                <li>Имя: ' . $merchname . '</li>
                <li>Email: ' . $merchemail . '</li>
                <li>Телефон: ' . $merchphone . '</li>
                <li>Мерч: ' . $merchtype . '</li>
                <li>Размер: ' . $merchsize . '</li>
                <li>Количество: ' . $merchnumber . '</li>
            </ul>
        </body>
    </html>';

    $headers = "From: Заказ с сайта <postmaster@brightdeli.nichost.ru>\r\n".
    "MIME-Version: 1.0" . "\r\n" .
    "Content-type: text/html; charset=UTF-8" . "\r\n";
    $mail = mail('brightdelightband@gmail.com', 'Сообщение', $mail_message, $headers);
    $data = [];
    if ($mail) {
        $data['status'] = "OK";
        $data['mes'] = "Письмо успешно отправлено";
    }else{
        $data['status'] = "NO";
        $data['mes'] = "На сервере произошла ошибка";
    }
?>