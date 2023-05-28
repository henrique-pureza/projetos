<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Calculadora de IMC</title>
        <link rel="stylesheet" href="./bootstrap/css/bootstrap.min.css" />
    </head>
    <body class="
        container-fluid
        vh-100
        d-flex
        flex-column
    ">
        <nav class="navbar bg-light">
            <div class="container">
                <span class="navbar-brand">Calculadora de IMC</span>
            </div>
        </nav>

        <div class="
            container
            d-flex
            flex-column
            align-items-center
            justify-content-center
            flex-grow-1
        ">
            <h3 class="mb-5">Digite seu peso e altura e veja o seu IMC</h3>

            <form action="/IMCresult.php" method="post" class="mb-5 w-50">
                <div class="card">
                    <div class="card-body">
                        <div class="mb-3">
                            <label for="peso" class="form-label">Peso (em kg)</label>
                            <input
                                type="number"
                                placeholder="Digite seu peso"
                                id="peso"
                                name="peso"
                                class="form-control"
                                required
                            />
                        </div>
                        <div class="mb-3">
                            <label for="altura" class="form-label">Altura (em cm)</label>
                            <input
                                type="number"
                                placeholder="Digite sua altura"
                                id="altura"
                                name="altura"
                                class="form-control"
                                required
                            />
                        </div>
                    </div>
                    <div class="card-footer d-flex justify-content-center">
                        <input
                            type="submit"
                            value="Calcular"
                            class="btn btn-primary"
                        />
                    </div>
                </div>
            </form>
        </div>

        <script src="./bootstrap/js/bootstrap.min.js"></script>
    </bodyc>
</html>
