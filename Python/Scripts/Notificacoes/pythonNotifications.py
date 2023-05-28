from win10toast import ToastNotifier

toaster = ToastNotifier()

toaster.show_toast(
    title="Segurança",
    msg="Acesso negado",
    icon_path="./icon.png"
)
