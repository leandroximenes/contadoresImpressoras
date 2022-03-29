<?php
error_reporting(E_ALL);
ini_set("display_errors", 1);
header('Content-type: text/javascript');
try {
    $fileName = uniqid() . '.json';
    $ip = $_GET['ip'];

    $ch = curl_init("http://$ip/sws/app/information/counters/counters.json");
    $fp = fopen($fileName, "w");

    curl_setopt($ch, CURLOPT_FILE, $fp);
    curl_setopt($ch, CURLOPT_HEADER, 0);

    curl_exec($ch);
    if (curl_error($ch)) {
        fwrite($fp, curl_error($ch));
    }
    curl_close($ch);
    fclose($fp);

    echo exec("jsonrepair $fileName --overwrite");
    echo file_get_contents($fileName);
    unlink($fileName);
} catch (\Exception $ex) {
    unlink($fileName);
    echo $ex->getMessage();
}
