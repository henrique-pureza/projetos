import java.util.Scanner;

class Calc {
    public Calc() {
        this.titulo();
        this.boas_vindas();
        this.pergunta_numero();
    }

    private void titulo() {
        System.out.println("x------------------------------x");
        System.out.println("| CALCULADORA DE DIVISORES 2.0 |");
        System.out.println("x------------------------------x");
        System.out.println();
    }

    private void boas_vindas() {
        System.out.println("Seja bem-vindo à Calculadora de Divisores 1.0, feita em Java!");
        System.out.println();
    }

    private void pergunta_numero() {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Digite um número e dê enter (digite \"sair\" (sem aspas) para sair do programa): ");
        String input = scanner.nextLine();

        if (input.equalsIgnoreCase("sair")) {
            System.exit(0);
        } else {
            if (!input.matches("\\d+")) {
                System.out.println();
                System.out.println("Você não digitou um número. Tente novamente.");
                System.out.println();
                pergunta_numero();
            } else {
                int numero = Integer.parseInt(input);
                calcular_divisores(numero);
            }
        }

        scanner.close();
    }

    private void calcular_divisores(int numero) {
        System.out.println();
        System.out.println("Os divisores de " + numero + " são:");
        System.out.println();

        for (int i = 1; i <= numero; i++) {
            if (numero % i == 0) {
                if (i < numero) {
                    System.out.print(i + ", ");
                }
                if (i == numero) {
                    System.out.print(i + ".");
                }
            }
        }

        System.out.println();
        fechar_ou_continuar();
    }

    private void fechar_ou_continuar() {
        Scanner scanner = new Scanner(System.in);
        System.out.println();
        System.out.println("O que você deseja fazer a seguir? (Digite o número correspondente a sua escolha e dê enter)");
        System.out.println();
        System.out.println("[1] Calcular os divisores de outro número");
        System.out.println("[2] Fechar o programa");
        System.out.println();
        String escolha = scanner.nextLine();

        switch (escolha) {
            case "1":
                pergunta_numero();
                break;
            case "2":
                System.exit(0);
                break;
            default:
                System.out.println();
                System.out.println("Você digitou um número inválido. Tente novamente.");
                System.out.println();
                fechar_ou_continuar();
                break;
        }

        scanner.close();
    }

    public static void main(String[] args) {
        new Calc();
    }
}
