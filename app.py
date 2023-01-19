from sklearn.pipeline import Pipeline
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
import pandas as pd
import pickle
from flask import Flask, render_template, request
import json
from flask import jsonify

# Load data
data = pd.read_csv("dataset.csv")

# Split data into features (X) and target (y)
X = data.drop("label", axis=1)
y = data["label"]

# Create pipeline
pipe = Pipeline([
    ('scaler', StandardScaler()),
    ('classifier', RandomForestClassifier())
])

# Split data into training and test sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train model
pipe.fit(X_train, y_train)

# Test model on unseen data
accuracy = pipe.score(X_test, y_test)
print("Accuracy: {:.2f}%".format(accuracy*100))

# Save model to file
with open("model.pkl", "wb") as f:
    pickle.dump(pipe, f)

# Create Flask app
app = Flask(__name__, template_folder='.')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.form.to_dict()
    data = pd.DataFrame(data, index=[0])
    prediction = pipe.predict(data)[0]
    return render_template('index.html', prediction=prediction)


@app.route('/predict_json', methods=['POST'])
def predict_json():
    data = request.get_json()
    data = pd.DataFrame(data, index=[0])
    prediction = pipe.predict(data)[0]
    prediction_proba = pipe.predict_proba(data)[0]
    pred_dict = {'prediction': prediction, 'probability': prediction_proba.tolist()}
    return jsonify(pred_dict)



if __name__ == '__main__':
    app.run(debug=True)
