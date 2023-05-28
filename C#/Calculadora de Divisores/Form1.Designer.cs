namespace Calculadora_de_Divisores
{
    partial class App
    {
        /// <summary>
        /// Variável de designer necessária.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Limpar os recursos que estão sendo usados.
        /// </summary>
        /// <param name="disposing">true se for necessário descartar os recursos gerenciados; caso contrário, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Código gerado pelo Windows Form Designer

        /// <summary>
        /// Método necessário para suporte ao Designer - não modifique 
        /// o conteúdo deste método com o editor de código.
        /// </summary>
        private void InitializeComponent()
        {
            this.label_boas_vindas = new System.Windows.Forms.Label();
            this.botao_calcular = new System.Windows.Forms.Button();
            this.textbox_numero = new System.Windows.Forms.TextBox();
            this.label_digite_numero = new System.Windows.Forms.Label();
            this.botao_limpar = new System.Windows.Forms.Button();
            this.SuspendLayout();
            // 
            // label_boas_vindas
            // 
            this.label_boas_vindas.Dock = System.Windows.Forms.DockStyle.Top;
            this.label_boas_vindas.Font = new System.Drawing.Font("Segoe UI", 9F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label_boas_vindas.Location = new System.Drawing.Point(0, 0);
            this.label_boas_vindas.Name = "label_boas_vindas";
            this.label_boas_vindas.Size = new System.Drawing.Size(407, 31);
            this.label_boas_vindas.TabIndex = 0;
            this.label_boas_vindas.Text = "Bem-vindo à versão gráfica da Calculadora de Divisores!";
            this.label_boas_vindas.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            // 
            // botao_calcular
            // 
            this.botao_calcular.Location = new System.Drawing.Point(243, 31);
            this.botao_calcular.Name = "botao_calcular";
            this.botao_calcular.Size = new System.Drawing.Size(75, 23);
            this.botao_calcular.TabIndex = 1;
            this.botao_calcular.Text = "Calcular";
            this.botao_calcular.UseVisualStyleBackColor = true;
            this.botao_calcular.Click += new System.EventHandler(this.botao_calcular_Click);
            // 
            // textbox_numero
            // 
            this.textbox_numero.Location = new System.Drawing.Point(125, 33);
            this.textbox_numero.Name = "textbox_numero";
            this.textbox_numero.Size = new System.Drawing.Size(112, 20);
            this.textbox_numero.TabIndex = 2;
            // 
            // label_digite_numero
            // 
            this.label_digite_numero.AutoSize = true;
            this.label_digite_numero.Font = new System.Drawing.Font("Segoe UI", 9F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label_digite_numero.Location = new System.Drawing.Point(12, 35);
            this.label_digite_numero.Name = "label_digite_numero";
            this.label_digite_numero.Size = new System.Drawing.Size(107, 15);
            this.label_digite_numero.TabIndex = 3;
            this.label_digite_numero.Text = "Digite um número:";
            this.label_digite_numero.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            // 
            // botao_limpar
            // 
            this.botao_limpar.Location = new System.Drawing.Point(324, 31);
            this.botao_limpar.Name = "botao_limpar";
            this.botao_limpar.Size = new System.Drawing.Size(75, 23);
            this.botao_limpar.TabIndex = 4;
            this.botao_limpar.Text = "Limpar";
            this.botao_limpar.UseVisualStyleBackColor = true;
            this.botao_limpar.Click += new System.EventHandler(this.botao_limpar_Click);
            // 
            // App
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(407, 59);
            this.Controls.Add(this.botao_limpar);
            this.Controls.Add(this.label_digite_numero);
            this.Controls.Add(this.textbox_numero);
            this.Controls.Add(this.botao_calcular);
            this.Controls.Add(this.label_boas_vindas);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.FixedDialog;
            this.MaximizeBox = false;
            this.Name = "App";
            this.ShowInTaskbar = false;
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "Calculadora de Divisores Gráfica v1.0";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label label_boas_vindas;
        private System.Windows.Forms.Button botao_calcular;
        private System.Windows.Forms.TextBox textbox_numero;
        private System.Windows.Forms.Label label_digite_numero;
        private System.Windows.Forms.Button botao_limpar;
    }
}

