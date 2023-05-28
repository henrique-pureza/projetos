import javax.swing.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class TesteGUI {
    public static void main(String[] args) {
        JFrame frame = new JFrame("Teste");
        JButton button = new JButton("Teste");

        button.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                System.out.println("Botão pressionado");
            }
        });

        frame.getContentPane().add(button);
        frame.pack();
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setVisible(true);
    }
}
