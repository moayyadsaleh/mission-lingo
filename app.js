import express from "express";
import cheerio from "cheerio";
import axios from "axios";

const app = express();
const PORT = 3000;

app.use(express.static('public')); // Serve static files (CSS, JS)
app.use(express.urlencoded({ extended: true })); // Middleware for parsing URL-encoded data

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Your API key and URL
const APIKey = "pub_274022e0efa5cc20d03410400c082183150f8";
const APIUrl = `https://newsdata.io/api/1/news?language=ar&apikey=${APIKey}`;

// Route for the homepage
app.get('/', async (req, res) => {
    try {
        // Render the index.ejs template
        res.render("index.ejs");
    } catch (error) {
        console.error('Error rendering homepage:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Route for articles
app.get('/articles', async (req, res) => {
    try {
        // Make an API request to fetch news articles
        const response = await axios.get(APIUrl);
        const articles = response.data; // Store the entire response data

        // Log the response data for troubleshooting
        console.log("Articles API Response:", articles);

        // Render the articles page and pass the data to the EJS template
        res.render("articles.ejs", { articles });
    } catch (error) {
        console.error('Error fetching articles:', error);
        res.status(500).send('Internal Server Error');
    }
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});