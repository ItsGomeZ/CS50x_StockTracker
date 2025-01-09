# Stock Tracker

#### Description:
The **Stock Tracker** is a web application designed to allow users to track the latest stock prices by entering a stock ticker symbol (e.g., AAPL, TSLA). The project leverages **HTML**, **CSS**, **JavaScript**, and **Python** (with Flask) to create an interactive and visually appealing interface that displays up-to-date stock data in a line chart.

### Features:
- **Stock Ticker Input**: Users can input the ticker symbol of any publicly traded stock (for example, AAPL for Apple, TSLA for Tesla) into a search box.
- **Stock Data Fetching**: When a user submits a ticker symbol, the application fetches the stock’s historical data (specifically, the closing prices) for the last month using the **Yahoo Finance API** through the `yfinance` Python library.
- **Data Visualization**: The retrieved stock data is visualized in a dynamically updating line chart, made with **Chart.js**. This provides an intuitive way for users to analyze trends in stock prices.
- **User Feedback**: If an invalid ticker symbol is entered, or if no data is found for a particular stock, the app provides a user-friendly error message.
- **Responsive Design**: The user interface is built to be fully responsive, ensuring the application works seamlessly on both desktop and mobile devices. **Bootstrap 5** is used to create a modern and responsive layout.

### Technology Stack:
The project employs a combination of frontend and backend technologies to create a full-stack web application:

1. **Frontend**:
   - **HTML**: Provides the basic structure of the webpage, including the form for entering stock ticker symbols and the canvas element for the stock chart.
   - **CSS**: The custom styles applied to the page define the color scheme, layout, and overall look and feel of the site. **Bootstrap 5** is used for responsive design and a clean, modern layout.
   - **JavaScript**: Handles user interactions on the frontend, such as submitting the form, sending data to the backend, and updating the page dynamically with the stock chart using **Chart.js**.

2. **Backend**:
   - **Python (Flask)**: Flask is the web framework used to handle HTTP requests, process the user's input, and retrieve stock data from Yahoo Finance. It also serves the HTML page to the user.
   - **yfinance**: A Python library used to fetch historical stock data. The application retrieves the stock’s closing prices for the past month and returns the data in JSON format.

### Files and their Purpose:
1. **index.html**: This is the main HTML file that serves as the homepage of the application. It contains the structure for the form (where users input the stock ticker symbol) and a canvas element where the stock price data is rendered as a chart.
2. **styles.css**: This file contains the custom styles for the webpage. It includes a vibrant gradient background, modern button styling, input box enhancements, and chart customization. The styles are designed to create an aesthetically pleasing and user-friendly interface.
3. **script.js**: This JavaScript file handles the logic of the application. When the user submits the form with a stock ticker symbol, the JavaScript sends a request to the backend to fetch the data. It then dynamically creates and updates the chart using **Chart.js** to display the stock's price data over the past month.
4. **app.py**: This is the backend file where the Flask web application is defined. It handles the `/` route to render the main page and the `/api/stock` route to receive POST requests, fetch stock data from Yahoo Finance using the `yfinance` library, and return the data in a structured JSON format.
5. **requirements.txt**: A text file that lists the necessary Python libraries for running the backend, including **Flask** and **yfinance**. This file helps in setting up the project’s environment quickly.

### Design Decisions:
1. **API Integration**: The **Yahoo Finance API** is a reliable source for retrieving stock data. The **yfinance** library abstracts the complexity of querying the API, making it easy to access the data programmatically. The app retrieves data for the last month, as this is a reasonable time frame for analyzing stock trends without overwhelming the user with excessive data.

2. **Chart Customization**: The stock data is visualized using **Chart.js**, a flexible and easy-to-use charting library. The chart features vibrant colors to enhance visibility, with a soft orange line representing stock prices and a light orange fill beneath the line. The chart’s axes and labels are displayed in white for contrast against the dark background. This ensures that the data is easy to read and visually appealing.

3. **Responsive Design**: The user interface was built using **Bootstrap 5**, which is a front-end framework that simplifies the process of creating responsive, mobile-first websites. The form and the chart both adjust dynamically to the size of the user’s screen, ensuring the app works seamlessly on devices of all sizes, from phones to desktop computers.

4. **Error Handling**: To improve the user experience, the app provides error messages when no stock data is found for a given ticker symbol or if the user enters an invalid symbol. These messages are displayed in a red alert box at the top of the page, drawing attention to the issue.
