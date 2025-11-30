from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/curriculum")
def curriculum():
    return render_template("curriculum.html")

@app.route("/subject")
def subject():
    return render_template("subject.html")

if __name__ == "__main__":
    app.run(debug=False)