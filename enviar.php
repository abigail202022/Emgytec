<?php
    $nombre = $_POST['nombre'];
    $correo = $_POST['correo'];
    $telefono = $_POST['telefono'];
    $mensaje = $_POST['mensaje'];

    $destinatario = "abigail.aa.98@hotmail.com";
    $asunto = "Envío de consulta";
    
    $carta = "De: " . $nombre .  "\r\n";
    $carta .= "Correo: " . $correo . " \r\n";
    $carta .= "Teléfono: " . $telefono . " \r\n";
    $carta .= "Mensaje: " . $mensaje . " \r\n";
    $carta .= "Enviado el: " . date('d/m/ Y', time());

    mail($destinatario, $asunto, $carta);

    header("Location:mensaje_envio.html");
?>