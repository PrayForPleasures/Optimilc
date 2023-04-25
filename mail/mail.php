<?php

    $recepient = "ilya.mister.2010@gmail.com";
    $sitename = "ОптиМилк";

    $name = rtrim(strip_tags($_POST["name"]));
    $phone = rtrim(strip_tags($_POST["phone"]));
    $email = rtrim(strip_tags($_POST["email"]));
    $header = rtrim(strip_tags($_POST["header"]));
    $pagetitle = "Новая заявка с сайта \"$sitename\"";
    $message = "Этот пользователь ждет звонка: \nИмя: $name \nТелефон: $phone \nE-mail: $email \nИнтересующая тема: $header \n" . "Время отправления заявки: " . date('H:i:s\, d-m-Y');

    mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

    echo true
?>