from flask import Flask

app = Flask(__name__, static_folder='./src')

from app import routes
