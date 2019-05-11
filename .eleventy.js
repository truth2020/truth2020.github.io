
module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("CNAME");

  eleventyConfig.addShortcode("maincss", function (test) {
    var fs = require('fs');
    var rootPath = process.cwd();
    var filePath = path.join(rootPath, "main.css");
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

