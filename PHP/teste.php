<?php

$page = '
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Teste Array</title>
    </head>
    <body>
        <span>
';

$arr1 = array(1, 2, 3, 4);

foreach ($arr1 as $el) {
    $page .= "{$el}, ";
}

$page .= '
        </span>
    </body>
</html>
';

echo $page;
