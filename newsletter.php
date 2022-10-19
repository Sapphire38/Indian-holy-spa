<?php
  if(isset( $_POST['email-news']))
  $email = $_POST['email-news'];

  $subject = "Newsletter Email" ;
  $content="El Email: $email quiere recibir noticias sobre sus productos y promociones.";
  $recipient = "indianholyspa@gmail.com";
  $mailheader = "From: $email \r\n";
  mail($recipient, $subject, $content, $mailheader) or die("Error!");
  header('Location: https://indianholy.com/');
  ?>

