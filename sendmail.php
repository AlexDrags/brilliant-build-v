<?php
  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\SMTP;
  use PHPMailer\PHPMailer\Exception;

  require 'PHPMailer/Exception.php';
  require 'PHPMailer/PHPMailer.php';
  require 'PHPMailer/SMTP.php';

  $mail = new PHPMailer(true);

  // Записываем в переменные поля форм по атрибуту name

  $userName = $_POST['user-name'];
  $userPhone = $_POST['user-phone'];
  $userEmail = $_POST['user-email'];

  try {
    //Server settings
    $mail->SMTPDebug  = SMTP::DEBUG_SERVER;
    $mail->CharSet    = "utf-8";
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';                       //SMTP сервер, зависит от почты отправки
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'alexsandermoon@gmail.com';                  //SMTP имя пользователя (почта с которой отправляем письмо)
    $mail->Password   = 'Damag89158381812';                     //SMTP password (для яндех и мэйл ру генерируем по ссылке в инструкции, для gmail это пороль от почты)
    $mail->SMTPSecure = 'ssl';                                  //Шифрование
    $mail->Port       = 465;                                    //Порт

    //Recipients
    $mail->setFrom('alexsandermoon@gmail.com');                       //Откуда отправляем
    $mail->addAddress('ksander-88@yandex.ru');                 //Куда отправляем


    //Content
    $mail->isHTML(true);                                         //Письмо в формате HTML для использования тегов
    $mail->Subject = "Заявка с сайта example.com";               //Тема письмы
    $mail->Body = "Имя: $userName. <br>Телефон: $userPhone. <br>Почта: $userEmail"; //Тело письмы

    $mail->send();
    echo 'Письмо отправлено!';
  } catch (Exception $e) {
    echo "Письмо не отправлено!. Ошибка отправки: {$mail->ErrorInfo}";
  }
?>