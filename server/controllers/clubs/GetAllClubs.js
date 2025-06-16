const puppeteer = require('puppeteer'); // Import the Puppeteer library for browser automation

// Define the async controller function to fetch all clubs using Puppeteer
const GetAllClubs = async (req, res) => {
  let browser; // Declare browser variable to be initialized later

  try {
    console.log('here');

    // Launch a new browser instance in headless mode
    browser = await puppeteer.launch({ headless: 'new' });

    // Open a new page/tab in the browser
    const page = await browser.newPage();

    // Set a custom user agent string to mimic a real browser
    await page.setUserAgent(
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115 Safari/537.36'
    );

    // Navigate to The "התאחדות" clubs page
    await page.goto('https://www.football.org.il/clubs/', {
      waitUntil: 'networkidle2', // Wait until network is idle to ensure page is fully loaded
      timeout: 30000, // Timeout after 30 seconds if the page doesn't load
    });

    // Wait for the selector that indicates club entries have been rendered
    await page.waitForSelector('article.field-item', { timeout: 15000 });

    // Scrape data from the page
    const clubs = await page.evaluate(() => {
      const baseUrl = 'https://www.football.org.il'; // Base URL to prepend to relative links
      const articles = document.querySelectorAll('article.field-item'); // Select all club cards
      const results = []; // Array to hold the final club data

   // Iterate over each article (club block)
  for (let article of articles) {
    // Select the anchor tag (<a>) that links to the club page
    const linkEl = article.querySelector('a');

    // Select the <h2> tag which usually contains the club name
    const h2 = article.querySelector('h2');

    // Select all <span> tags containing club metadata (address, email, etc.)
    const spans = article.querySelectorAll('span');

    // Extract the href (relative URL) or set to null if not found
    const link = linkEl?.getAttribute('href') || null;

    // Extract and clean the club name (remove extra whitespace)
    const name = h2?.textContent.trim().replace(/\s+/g, ' ') || null;

    // Initialize fields for club details
        spans.forEach(span => {
          const text = span.textContent.trim();
          if (text.startsWith('כתובת:')) {
            address = text.replace('כתובת:', '').trim();
          } else if (text.startsWith('מען למכתבים:')) {
            mailingAddress = text.replace('מען למכתבים:', '').trim();
          } else if (text.startsWith('פקס:')) {
            fax = text.replace('פקס:', '').trim();
          } else if (text.startsWith('דוא"ל:')) {
            email = text.replace('דוא"ל:', '').trim();
          }
        });

        // If a name was found, push the full club object to the results
        if (name) {
          results.push({
            name,
            link: link ? baseUrl + link : null, // Convert relative link to full URL
            address,
            mailingAddress,
            fax,
            email,
          });
        }
      }

      return results; // Return the collected array of clubs
    });

    console.log(clubs); // Print the results to the console for debugging

    res.json(clubs); // Return the data as JSON response
  } catch (error) {
    console.error('Puppeteer error:', error.message); // Log any errors to the console
    res.status(500).json({ error: 'Failed to fetch clubs via Puppeteer' }); // Send error response
  } finally {
    if (browser) await browser.close(); // Always close the browser to free resources
  }
};

module.exports = { GetAllClubs }; // Export the controller function for use in routes
