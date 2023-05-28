<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Resultado - Calculadora de IMC</title>
        <link rel="stylesheet" href="./bootstrap/css/bootstrap.min.css" />
    </head>
    <body class="container-fluid">
        <nav class="navbar bg-light mb-3">
            <div class="container">
                <span class="navbar-brand">Calculadora de IMC</span>
            </div>
        </nav>

        <div class="container">
            <h3 class="mb-5">Resultado</h3>

            <?php
                if ($_POST) {
                    $peso = $_POST["peso"];
                    $altura = $_POST["altura"] / 100;

                    $imc = round($peso / pow($altura, 2), 2);

                    $resultAlert = '<div class="alert alert-primary mb-5">';
                    $resultAlert .= "Seu IMC equivale a {$imc}. <br />";

                    if ($imc < 18.5) {
                        $resultAlert .= 'Você está abaixo do peso!';
                    } else if ($imc >= 18.5 && $imc <= 24.9) {
                        $resultAlert .= 'Você está com o peso normal!';
                    } else if ($imc >= 25 && $imc <= 29.9) {
                        $resultAlert .= 'Você está acima do peso!';
                    } else if ($imc >= 30 && $imc <= 39.9) {
                        $resultAlert .= 'Você está com obesidade grau 1!';
                    } else if ($imc >= 40) {
                        $resultAlert .= 'Você está com obesidade grau 2!';
                    }

                    $resultAlert .= '</div>';

                    echo $resultAlert;
                } else {
                    die("<h1>405: Method not allowed.</h1>");
                }
            ?>

            <button
                class="btn btn-primary"
                onclick='window.location.href = "/IMC.php"'
            >
                Voltar
            </button>
        </div>

        <script src="./bootstrap/js/bootstrap.min.js"></script>
    </body>
</html>
