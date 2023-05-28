using System;
using System.Collections.Generic;
using System.Runtime.CompilerServices;
using System.Text;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;


namespace CalculadoraDeDivisoresXAML
{
    public partial class Calculadora : Window
    {
        public Calculadora()
        {
            InitializeComponent();
        }

        private void ShowError()
        {
            MessageBox.Show(
                "Erro: entrada inválida. Digite um número maior que zero.", 
                "Erro", 
                MessageBoxButton.OK,
                MessageBoxImage.Error
            );
        }

        private void CalcularDivisores(object sender, RoutedEventArgs handler)
        {
            try
            {
                int num = int.Parse(TextBoxNumero.Text);
                List<int> resultado = new List<int>();
                
                for (int i = 1; i <= num; i++)
                {
                    if (num % i == 0)
                    {
                        resultado.Add(i);
                    }
                }

                string[] numerosString = resultado.ConvertAll(x => x.ToString()).ToArray();
                string divisores = string.Join(", ", numerosString) + ".";

                MessageBox.Show(
                    "Os divisores de " + num + " são: " + divisores,
                    "Resultado",
                    MessageBoxButton.OK,
                    MessageBoxImage.Information
                );
            }
            catch
            {
                ShowError();
            }
        }

        private void Limpar(object sender, RoutedEventArgs handler)
        {
            TextBoxNumero.Text = "";
        }
    }
}
