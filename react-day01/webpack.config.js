var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')
var htmlWebpackPlugin = new HtmlWebpackPlugin({
    template:path.join(__dirname,'./src/index.html'),
    filename:'index.html'
});
module.exports = {
    mode:'development', //development 或者 production
    plugins:[
        htmlWebpackPlugin
    ]
}