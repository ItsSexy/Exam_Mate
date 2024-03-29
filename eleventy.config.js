module.exports = function (eleventyConfig) {
    // Eleventy server config
    // watch compiled CSS and JS
    eleventyConfig.setServerOptions({
        watch: ["./dist/assets/css/**/*.css", "./dist/assets/js/**/*.js"],
        port: 3000,
    });

    // don't bother with CSS or JS files (handled by NPM scripts or copied)
    eleventyConfig.watchIgnores.add("./src/assets/**/*");
    eleventyConfig.ignores.add("./src/assets/**/*");

    // copy files
    eleventyConfig.addPassthroughCopy("./src/assets/fonts");
    eleventyConfig.addPassthroughCopy("./src/assets/img");
    eleventyConfig.addPassthroughCopy({ "./src/static": "./" });

    // Override default config
    return {
        dir: {
            input: "./src",
            output: "./dist",
            includes: "_includes",
            data: "_data",
        },
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
    };
};