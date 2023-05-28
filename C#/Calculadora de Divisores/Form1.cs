using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Text;
using System.Windows.Forms;

namespace Calculadora_de_Divisores
{
    public partial class App : Form
    {
        public App()
        {
            InitializeComponent();
        }

        private void CalcularDivisores()
        {
            List<int> numeros = new List<int>{};
            int textoDigitado;

            try
            {
                textoDigitado = int.Parse(textbox_numero.Text);

                if (textoDigitado > 0)
                {
                    for (int i = 1; i <= textoDigitado; i++)
                    {
                        if (textoDigitado % i == 0)
                        {
                            numeros.Add(i);
                        }
                    }

                    string[] numerosString = numeros.ConvertAll(x => x.ToString()).ToArray();
                    string divisores = string.Join(", ", numerosString) + ".";

                    MessageBox.Show(
                        "Os divisores de " + textoDigitado + " são: " + divisores,
                        "Resultado",
                        MessageBoxButtons.OK,
                        MessageBoxIcon.Information
                    );
                } 
                else
                {
                    MessageBox.Show(
                        "Você não digitou um número válido. " +
                        "Não é possível haver letras ou números negativos digitados.",
                        "Erro",
                        MessageBoxButtons.OK,
                        MessageBoxIcon.Error
                    );
                }
            }
            catch
            {
                MessageBox.Show(
                    "Você não digitou um número válido. " + 
                    "Não é possível haver letras ou números negativos digitados.", 
                    "Erro", 
                    MessageBoxButtons.OK, 
                    MessageBoxIcon.Error
                );
            }
        }
    
        private void LimparTexto()
        {
            textbox_numero.Text = "";
        }

        private void botao_calcular_Click(object sender, EventArgs e)
        {
            CalcularDivisores();
        }

        private void botao_limpar_Click(object sender, EventArgs e)
        {
            LimparTexto();
        }
    }
}
