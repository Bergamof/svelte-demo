const webpackConfig = require('./webpack.config');

module.exports = function(config) {
    config.set({

        basePath: '',
        frameworks: ['jasmine'],
        files: [
            'src/**/*.spec.js'
        ],
        exclude: [
        ],
        preprocessors: {
            'src/**/*.spec.js': [ 'webpack' ]
        },
        webpack: webpackConfig,
        webpackMiddleware: {
            stats: 'errors-only',
        },
        reporters: ['spec','kjhtml'],
        port: 9876,
        colors: true,

        logLevel: config.LOG_DISABLE,
        autoWatch: true,
        browsers: ['Chrome'],
        client: {
            clearContext: false
        },

        singleRun: false,
        concurrency: Infinity,
    })
}
