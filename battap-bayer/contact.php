<?php

  require("PHPMailer/src/PHPMailer.php");
  require("PHPMailer/src/SMTP.php");
  header('Content-Type: application/json');

  $_POST = json_decode( file_get_contents("php://input"), true );

  $name = $_POST['nameFF'];
  $phone = $_POST['telFF'];

    $mail = new PHPMailer\PHPMailer\PHPMailer();
    $mail->IsSMTP(); // enable SMTP

    $mail->SMTPDebug = 2; // debugging: 1 = errors and messages, 2 = messages only
    $mail->SMTPAuth = true; // authentication enabled
    $mail->SMTPSecure = 'Starttls'; // secure transfer enabled REQUIRED for Gmail
    $mail->Host = "smtp-mail.outlook.com";
    $mail->Port = 587; // or 587
    $mail->IsHTML(true);
    $mail->Username = "alo.trade.site@outlook.com";
    $mail->Password = "develop20june";
    $mail->SetFrom("alo.trade.site@outlook.com");
    $mail->Charset = 'utf-8';
    $mail->Subject = 'alo.trade.kg';
    $body = 'New message from site     <br><br>
             Name:            ' .$name.      '<br><br>
             Phone: ' .$phone.  '';

    $mail->AddAddress("alo.trade.kg@gmail.com");
    $mail->msgHTML($body);
    $mail->send();
     if(!$mail->Send()) {
        echo "Mailer Error: " . $mail->ErrorInfo;
     } else {
        echo "Message has been sent";
     }
?>
