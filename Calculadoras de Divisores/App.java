import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class App {
    private JFrame frame;
    private JTextField textFieldNumero;
    private JButton btnCalcular;
    private JButton btnLimpar;

    public static void main(String[] args) {
        EventQueue.invokeLater(() -> {
            try {
                App window = new App();
                window.frame.setVisible(true);
            } catch (Exception e) {
                e.printStackTrace();
            }
        });
    }

    public App() {
        initialize();
    }

    private void initialize() {
        frame = new JFrame("Calculadora de Divisores Gráfica v1.0");
        frame.setResizable(false);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.getContentPane().setLayout(new GridBagLayout());

        GridBagConstraints c = new GridBagConstraints();

        JLabel lblBoasVindas = new JLabel("Bem-vindo à versão gráfica da Calculadora de Divisores!");
        c.gridx = 0;
        c.gridy = 0;
        c.gridwidth = 4;
        c.insets = new Insets(10, 10, 5, 10);
        frame.getContentPane().add(lblBoasVindas, c);

        JLabel lblDigiteNumero = new JLabel("Digite um número:");
        c.gridx = 0;
        c.gridy = 1;
        c.gridwidth = 1;
        c.insets = new Insets(5, 5, 5, 5);
        frame.getContentPane().add(lblDigiteNumero, c);

        textFieldNumero = new JTextField(20);
        c.gridx = 1;
        c.gridy = 1;
        c.insets = new Insets(5, 3, 5, 3);
        frame.getContentPane().add(textFieldNumero, c);

        btnCalcular = new JButton("Calcular");
        btnCalcular.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                calcularDivisores();
            }
        });
        c.gridx = 2;
        c.gridy = 1;
        c.insets = new Insets(5, 3, 5, 2);
        frame.getContentPane().add(btnCalcular, c);

        btnLimpar = new JButton("Limpar");
        btnLimpar.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                limparTexto();
            }
        });
        c.gridx = 3;
        c.gridy = 1;
        c.insets = new Insets(5, 2, 5, 5);
        frame.getContentPane().add(btnLimpar, c);

        frame.pack();
    }

    private void calcularDivisores() {
        String textoDigitado = textFieldNumero.getText();
        if (!textoDigitado.matches("\\d+")) {
            JOptionPane.showMessageDialog(frame, "Você não digitou um número válido. Não é possível haver letras ou números negativos digitados.", "Erro", JOptionPane.ERROR_MESSAGE);
        } else {
            int numero = Integer.parseInt(textoDigitado);
            StringBuilder divisores = new StringBuilder();
            for (int i = 1; i <= numero; i++) {
                if (numero % i == 0) {
                    if (divisores.length() > 0) {
                        divisores.append(", ");
                    }
                    divisores.append(i);
                }
            }
            divisores.append('.');
            JOptionPane.showMessageDialog(frame, "Os divisores de " + numero + " são: " + divisores, "Resultado", JOptionPane.INFORMATION_MESSAGE);
        }
    }

    private void limparTexto() {
        textFieldNumero.setText("");
    }
}
