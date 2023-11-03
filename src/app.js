const axios = require("axios");
const cheerio = require("cheerio");

const url = "https://practo.com";

axios
  .get(url)
  .then((response) => {
    if (response.status === 200) {
      const html = response.data;
      const $ = cheerio.load(html);

      const title = $("title").text();
      const description = $('meta[name="description"]').attr("content") || "N/A";
      const keywords = $('meta[name="keywords"]').attr("content") || "N/A";

      console.log(`Title: ${title}`);
      console.log(`Description: ${description}`);
      console.log(`Keywords: ${keywords}`);
    } else {
      console.log(`Failed to retrieve the URL. Status code: ${response.status}`);
    }
  })
  .catch((error) => {
    console.error("Error:", error);
  });
