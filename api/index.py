from flask import Flask, render_template, send_from_directory
import os

# Get the absolute path to the parent directory
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

app = Flask(__name__, 
            static_folder=os.path.join(BASE_DIR, "static"),
            static_url_path="/static",
            template_folder=os.path.join(BASE_DIR, "templates"))

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/static/<path:filename>")
def serve_static(filename):
    return send_from_directory(app.static_folder, filename)

if __name__ == "__main__":
    app.run(debug=True)