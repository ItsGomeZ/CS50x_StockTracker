let stockChart = null; // Store the chart instance globally

document.getElementById("tickerForm").addEventListener("submit", async function (e) {
    e.preventDefault(); // Prevent the form from refreshing the page

    const ticker = document.getElementById("ticker").value.trim();
    if (!ticker) {
        alert("Please enter a ticker symbol!");
        return;
    }

    try {
        // Send POST request to the backend API
        const response = await fetch('/api/stock', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ticker })
        });

        const data = await response.json();

        if (response.ok) {
            // Render the chart if the response is successful
            renderChart(data.dates, data.prices);
        } else {
            // Display the error message from the server
            alert(data.error || "An error occurred while fetching stock data.");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Failed to fetch stock data. Check the console for more details.");
    }
});

function renderChart(dates, prices) {
    const ctx = document.getElementById('stockChart').getContext('2d');

    // If a chart instance already exists, destroy it
    if (stockChart) {
        stockChart.destroy();
    }

    // Create a new chart instance with vibrant colors and white text
    stockChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dates,
            datasets: [{
                label: 'Stock Prices',
                data: prices,
                borderColor: '#ff6a00', // Vibrant orange for the line
                backgroundColor: 'rgba(255, 106, 0, 0.2)', // Light orange fill under the line
                borderWidth: 2,
                fill: true
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    title: { display: true, text: 'Date', color: '#ffffff' }, // White text for X axis
                    grid: { color: '#e1e1e1' },
                    ticks: { color: '#ffffff' } // White text for X axis labels
                },
                y: {
                    title: { display: true, text: 'Price (USD)', color: '#ffffff' }, // White text for Y axis
                    grid: { color: '#e1e1e1' },
                    ticks: { color: '#ffffff' } // White text for Y axis labels
                }
            },
            elements: {
                point: {
                    backgroundColor: '#ff6a00', // Point color on the graph
                    radius: 5
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: '#ffffff' // White color for the legend labels
                    }
                }
            }
        }
    });
}
