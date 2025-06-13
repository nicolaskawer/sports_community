export const GetAllClubs = async ( )=>{
    let browser;
  try {
    browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();

    await page.setUserAgent(
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115 Safari/537.36'
    );

    await page.goto('https://www.football.org.il/clubs/', {
      waitUntil: 'networkidle2',
      timeout: 30000,
    });

    await page.waitForSelector('article.field-item', { timeout: 15000 });

    const clubs = await page.evaluate(() => {
      const baseUrl = 'https://www.football.org.il';
      const articles = document.querySelectorAll('article.field-item');
      const results = [];

      for (let article of articles) {
        console.log(article)
        const linkEl = article.querySelector('a');
        const h2 = article.querySelector('h2');
        const spans = article.querySelectorAll('span');

        const link = linkEl?.getAttribute('href') || null;
        const name = h2?.textContent.trim().replace(/\s+/g, ' ') || null;

        let address = null;
        let mailingAddress = null;
        let fax = null;
        let email = null;

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

        if (name) {
          results.push({
            name,
            link: link ? baseUrl + link : null,
            address,
            mailingAddress,
            fax,
            email,
          });
        }
      }

      return results;
    });
console.log(clubs)
    res.json(clubs);
  } catch (error) {
    console.error('Puppeteer error:', error.message);
    res.status(500).json({ error: 'Failed to fetch clubs via Puppeteer' });
  } finally {
    if (browser) await browser.close();
  }
}