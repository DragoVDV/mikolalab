from flask import Flask, redirect, request, url_for, flash,render_template
from flask_mailman import Mail, EmailMessage

app = Flask(__name__)
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USERNAME'] = 'checkingmusic12@gmail.com'
app.config['MAIL_PASSWORD'] = 'oopv qfmm grvn hpbn'
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USE_SSL'] = False
app.secret_key = 'dick'  # Required for flash messages


mail = Mail(app)
mail.init_app(app)


@app.route('/',methods = [ 'GET' ,'POST'])
def index():
    if request.method == 'POST':
        fullname = request.form['name']
        number = request.form['email']
        message = request.form['message']

        msg = EmailMessage(
            
            "Order",
            f" Привіт {fullname}, я хочу зробити замовлення на номер +38{number}, я хочу замовити {message}",
            "checkingmusic12@gmail.com",
            ["checkingmusic12@gmail.com"]
        
        )
        try:
            msg.send()
            print('Email sent successfully!', 'success')
        except Exception as e:
            print(f'Error sending email: {e}', 'error')
    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True)
