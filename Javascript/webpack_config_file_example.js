// webpack config js file
module.exports = {
    entry: './app/main.js',
    output: {
        path: './dist',
        // bundle all the scripts (and their dependencies into a bundle file)
        filename: 'bundle.js'
    }
}