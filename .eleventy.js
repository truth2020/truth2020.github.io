
module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("CNAME");
  eleventyConfig.addPassthroughCopy("README.md");
  eleventyConfig.addShortcode("maincss", function (test) {
    const path = require('path');
    const fs = require('fs');
    const filePath = path.join(process.cwd(), "main.css");
    if (fs.existsSync(filePath)) {
      var buffer = fs.readFileSync(filePath).toString();
    }
    return buffer;
  });

  return {
    dir: {
      output: "dist"
    }
  }
};

