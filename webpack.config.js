'use strict';

let path = require('path');

module.exports = {
    mode: 'development',
    entry: 'E:/ospanel/domains/Food/src/js/script.js',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/src' + '/js',
    },
    watch: true,

    devtool: 'source-map',

    module: {},
};
