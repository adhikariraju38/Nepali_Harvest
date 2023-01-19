import openai
from flask import Flask, request, jsonify, render_template

app = Flask(__name__ , template_folder='.')

openai.api_key = "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"

def respond(prompt):
    completions = openai.Completion.create(
        engine="text-davinci-002",
        prompt=prompt,
        max_tokens=2048,
        n=1,
        stop=None,
        temperature=0.5,
    )

    message = completions.choices[0].text
    return message

@app.route("/chatbot", methods=["POST"])
def chatbot():
    message = request.json['message']
    if message.lower() == "bye":
        return jsonify({"response": "Chatbot: Goodbye! Have a great day!"})
        
    elif message.lower() == ('hi'):
        return jsonify({"response": "Ask me about agriculture product and its solution only."})
        #print("Ask me about agriculture product and its solution")
    
    else:
        #print("Chatbot: " + respond(message))
        response = respond(message + ',only related to agriculture.')
        return jsonify({"response": response})

@app.route("/")
def index():
    return render_template("index.html")

if __name__ == '__main__':
    app.run(debug=True)

