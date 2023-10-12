from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/', methods=['GET'])
def home():
     return render_template('index.html')


@app.route('/info', methods=['GET'])
def get_info():
     my_name = request.args.get('my_name')
     print(my_name)
     return jsonify ({
          'msg': 'GET info'
     })
if _name_ == '__main__':
     app.run('0.0.0.0', port=5000, debug=True)
