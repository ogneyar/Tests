<?php
$host = getenv ("DB_HOST");
if ($host) {
    $name = getenv ("DB_NAME");
    $login = getenv ("DB_LOGIN");
    $pass = getenv ("DB_PASS");
}else {
    $host = "localhost";
    $name = "yii2basic";
    $login = "root";
    $pass = "";
}

return [
        'class' => 'yii\db\Connection',
        'dsn' => "mysql:host={$host};dbname={$name}",
        'username' => $login,
        'password' => $pass,
        'charset' => 'utf8',
    ];

    