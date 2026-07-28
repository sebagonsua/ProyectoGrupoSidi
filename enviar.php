<?php
declare(strict_types=1);

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode(['ok' => false, 'error' => 'Metodo no permitido']);
    exit;
}

function campoTexto(string $clave, int $maxLargo): string {
    $valor = trim((string) ($_POST[$clave] ?? ''));
    return substr($valor, 0, $maxLargo);
}

$esAjax = (($_SERVER['HTTP_X_REQUESTED_WITH'] ?? '') === 'fetch');

function responder(bool $ok, string $error, bool $esAjax): void {
    if ($esAjax) {
        header('Content-Type: application/json; charset=utf-8');
        echo json_encode(['ok' => $ok, 'error' => $error]);
    } else {
        header('Location: index.html?contacto=' . ($ok ? 'ok' : 'error'));
    }
    exit;
}

// Honeypot: campo oculto en el formulario que solo un bot completaria
if (campoTexto('sitio_web', 200) !== '') {
    responder(true, '', $esAjax);
}

$nombre = campoTexto('nombre', 120);
$correo = campoTexto('correo', 150);
$telefono = campoTexto('telefono', 40);
$mensaje = campoTexto('mensaje', 2000);

if ($nombre === '' || $correo === '' || $mensaje === '') {
    http_response_code(400);
    responder(false, 'Faltan campos obligatorios', $esAjax);
}

if (!filter_var($correo, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    responder(false, 'El correo no es valido', $esAjax);
}

$destinatario = 'gruposidiuy@gmail.com';
$asunto = 'Contacto desde pagina web';

$cuerpo  = "De: $nombre\n";
$cuerpo .= "Correo: $correo\n";
$cuerpo .= "Telefono: " . ($telefono !== '' ? $telefono : '-') . "\n";
$cuerpo .= "Mensaje:\n$mensaje\n";

$cabeceras = "Reply-To: $correo\r\n";

$enviado = mail($destinatario, $asunto, $cuerpo, $cabeceras);

if ($enviado) {
    responder(true, '', $esAjax);
}

http_response_code(500);
responder(false, 'No se pudo enviar el mensaje, intenta nuevamente', $esAjax);
