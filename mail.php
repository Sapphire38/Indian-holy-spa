<?php
  if(isset( $_POST['name']))
  $name = $_POST['name'];
  if(isset( $_POST['email']))
  $email = $_POST['email'];
  if(isset( $_POST['message']))
  $message = $_POST['message'];
  if(isset( $_POST['subject']))
  $subject = $_POST['subject'];
  
  $content="Nombre: $subject \n Email: $email \n Mensaje: $message \n Numero:$name ";
  $recipient = "indianholyspa@gmail.com";
  $mailheader = "From: $email \r\n";
  mail($recipient, $subject, $content, $mailheader) or die("Error!");
  header('Location: https://indianholy.com/');
  ?>

