from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow requests from React frontend


# Task 1: checkIn_hardware
# Route: GET /checkIn/<projectId>/<qty>
# Returns project id and qty; frontend displays "<qty> hardware checked in"
@app.route('/checkIn/<projectId>/<int:qty>', methods=['GET'])
def checkIn_hardware(projectId, qty):
    return jsonify({
        'projectId': projectId,
        'qty': qty,
        'message': f'{qty} hardware checked in'
    })


# Task 1: checkOut_hardware
# Route: GET /checkOut/<projectId>/<qty>
# Returns project id and qty; frontend displays "<qty> hardware checked out"
@app.route('/checkOut/<projectId>/<int:qty>', methods=['GET'])
def checkOut_hardware(projectId, qty):
    return jsonify({
        'projectId': projectId,
        'qty': qty,
        'message': f'{qty} hardware checked out'
    })


# Task 1: joinProject
# Route: GET /join/<projectId>
# Returns project id; frontend displays "Joined <projectId>"
@app.route('/join/<projectId>', methods=['GET'])
def joinProject(projectId):
    return jsonify({
        'projectId': projectId,
        'message': f'Joined {projectId}'
    })


# Task 1: leaveProject
# Route: GET /leave/<projectId>
# Returns project id; frontend displays "Left <projectId>"
@app.route('/leave/<projectId>', methods=['GET'])
def leaveProject(projectId):
    return jsonify({
        'projectId': projectId,
        'message': f'Left {projectId}'
    })


if __name__ == '__main__':
    app.run(debug=True)