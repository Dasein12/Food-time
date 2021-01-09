<?php
//Require or Include a PHP file to get the data the user inserted but this is just a project so it's not needed

$name='BurgerEaters';
$host='';
$username='';
$password='';

$recipient='marwen1005@hotmail.com';
$recipient_name='JOUINI MAROUEN';

if($_GET[action]=="newsletter"){
	
	$email_newsletter = isset($_POST['email_newsletter']) ? $_POST['email_newsletter'] : null;
	$mail = new PHPMailer;
	$mail->isSMTP();                                      
	$mail->Host = $host; 
	$mail->SMTPAuth = true;                              
	$mail->Username = $username;                
	$mail->Password = $password;                          
	$mail->SMTPSecure = 'tls';                            
	$mail->Port = 587;                                  
	
	$mail->setFrom($username, $name);
	$mail->addAddress($recipient, $recipient_name);     
	
	$mail->isHTML(true);                                
	
	$mail->Subject = 'Your have a new subscriber into your site';
	$mail->Body    = '<strong>E-mail: </strong>'.$email_newsletter;
	
	if(!$mail->send()) {
		echo 'Message could not be sent.';
		echo 'Mailer Error: ' . $mail->ErrorInfo;
	} else {
		echo 'Message has been sent';
	}
}

if($_GET[action]=="booking"){

	$your_name = isset($_POST['your_name']) ? $_POST['your_name'] : null;
	$number_of_people = isset($_POST['number_of_people']) ? $_POST['number_of_people'] : null;
	$date = isset($_POST['date']) ? $_POST['date'] : null;
	$hour = isset($_POST['hour']) ? $_POST['hour'] : null;
	$message = isset($_POST['message']) ? $_POST['message'] : null;
	
	$msg="Name: ".$name."<br>";
	$msg .="Number of people: ".$number_of_people."<br>";
	$msg .="When: ".$date."<br>";
	$msg .="Hour: ".$hour."<br>";
	$msg .="Message: ".$message."<br>";
	
	
	$mail = new PHPMailer;
	
	
	$mail->isSMTP();                                      
	$mail->Host = $host;  
	$mail->SMTPAuth = true;                            
	$mail->Username = $username;                
	$mail->Password = $password;                          
	$mail->SMTPSecure = 'tls';                           
	$mail->Port = 587;                                    
	
	$mail->setFrom($username, $name);
	$mail->addAddress($recipient, $recipient_name);     
	
	$mail->isHTML(true);                               
	
	$mail->Subject = 'Your have a new booking into your site';
	$mail->Body    = $msg;
	
	if(!$mail->send()) {
		echo 'Message could not be sent.';
		echo 'Mailer Error: ' . $mail->ErrorInfo;
	} else {
		echo 'Message has been sent';
	}
}



if($_GET[action]=="contacting"){


	$contact_name = isset($_POST['contact_name']) ? $_POST['contact_name'] : null;
	$contact_email = isset($_POST['contact_email']) ? $_POST['contact_email'] : null;
	$contact_phone = isset($_POST['contact_phone']) ? $_POST['contact_phone'] : null;
	$contact_subject = isset($_POST['contact_subject']) ? $_POST['contact_subject'] : null;
	$contact_message = isset($_POST['contact_message']) ? $_POST['contact_message'] : null;
	
	$msg="Name: ".$contact_name."<br>";
	$msg .="E-mail: ".$contact_email."<br>";
	$msg .="Phone: ".$contact_phone."<br>";
	$msg .="Subject: ".$contact_subject."<br>";
	$msg .="Message: ".$contact_message."<br>";
	
	
	$mail = new PHPMailer;

	
	$mail->isSMTP();                                      
	$mail->Host = $host;  
	$mail->SMTPAuth = true;                               
	$mail->Username = $username;                
	$mail->Password = $password;                          
	$mail->SMTPSecure = 'tls';                           
	$mail->Port = 587;                                  
	
	$mail->setFrom($username, $name);
	$mail->addAddress($recipient, $recipient_name);    
	
	$mail->isHTML(true);                                
	
	$mail->Subject = $contact_subject;
	$mail->Body    = $msg;
	
	if(!$mail->send()) {
		echo 'Message could not be sent.';
		echo 'Mailer Error: ' . $mail->ErrorInfo;
	} else {
		echo 'Message has been sent';
	}
}
?>