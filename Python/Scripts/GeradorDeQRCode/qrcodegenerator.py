from qrcode import QRCode, constants

qr = QRCode(
    version=1,
    error_correction=constants.ERROR_CORRECT_L,
    box_size=30,
    border=1
)

qr.add_data("https://www.google.com")

qr.make(fit=True)

img = qr.make_image(fill_color="black", back_color="white")

img.save("qrcode.png")
