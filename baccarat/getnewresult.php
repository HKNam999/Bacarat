<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: Content-Type');

$url = 'https://apibcr-hknam-mz95.onrender.com/data';

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false); // For HTTPS
$response = curl_exec($ch);
curl_close($ch);

// API returns array, wrap in {data: array} to match original format
echo '{"data": ' . $response . '}';
?>