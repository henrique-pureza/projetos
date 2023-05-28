<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>Form Get</title>
    </head>
    <body>
        <h1>Form Get</h1>

        <form method="get">
            <input
                type="text"
                placeholder="Digite algo"
                name="texto"
            />
            <button type="submit">Enviar</button>
        </form>

        <?php
            if ($_GET) {
                $textoGet = $_GET["texto"];

                echo '<p>Você digitou: '.$textoGet.'</p>';
            }
        ?>

        <h1>Form Post</h1>

        <form method="post">
            <input
                type="text"
                placeholder="Digite algo"
                name="texto"
            />
            <button type="submit">Enviar</button>
        </form>

        <?php
            if ($_POST) {
                $textoPost = $_POST["texto"];

                echo '<p>Você digitou: '.$textoPost.'</p>';
            }
        ?>
    </body>
</html>
