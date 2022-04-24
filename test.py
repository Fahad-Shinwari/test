import random
from flask import Flask
from flask import request

app = Flask(__name__)

@app.route("/")
def index():
    return f'{random.randint(1,1000)}'

@app.route('/<int:argu>')
def with_url_variables(argu:int):
    return f'{random.randint(1,argu)}'

if __name__ == "__main__":
    from waitress import serve
    serve(app,host="0.0.0.0",port=8080)        