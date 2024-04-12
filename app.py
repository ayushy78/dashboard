import json
from flask import Flask, jsonify
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

@app.route('/posts', methods=['GET'])
def get_posts():
    with open('db.json', 'r') as f:
        data = json.load(f)
    return jsonify(data)  # replace 'posts' with your resource name

if __name__ == '__main__':
    app.run(debug=True)