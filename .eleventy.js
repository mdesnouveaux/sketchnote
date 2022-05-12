module.exports = function(eleventyConfig) {

  // eleventyConfig.addPassthroughCopy("**/*.jpeg");
  // faster
  eleventyConfig.setTemplateFormats([
    "md",
    "njk",
    "jpeg" // jpeg is not yet a recognized template extension in Eleventy
  ]);

  eleventyConfig.addNunjucksFilter("vardump", d => console.log(d));
  eleventyConfig.addNunjucksFilter("limit", (arr, limit) => arr.slice(0, limit));
  // Return your Object options:
  return {
    dir: {
      input: 'pages',
      output: 'dist'
    }
  }
};
