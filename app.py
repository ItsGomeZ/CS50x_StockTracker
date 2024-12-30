from flask import Flask, render_template, request, jsonify
import yfinance as yf

app = Flask(__name__)

# Route to serve the HTML page
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/stock', methods=['POST'])
def get_stock_data():
    ticker = request.json.get('ticker')
    if not ticker:
        return jsonify({"error": "Ticker symbol is required"}), 400

    try:
        stock = yf.Ticker(ticker)
        history = stock.history(period="1mo")  # Last month's data

        # Check if history is empty
        if history.empty:
            return jsonify({"error": f"No data found for ticker symbol '{ticker}'"}), 404

        data = {
            "dates": history.index.strftime('%Y-%m-%d').tolist(),
            "prices": history['Close'].tolist()
        }
        return jsonify(data)

    except Exception as e:
        return jsonify({"error": f"An error occurred: {str(e)}"}), 500


if __name__ == "__main__":
    app.run(debug=True)
