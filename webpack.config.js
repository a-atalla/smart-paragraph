const defaultConfig = require( './node_modules/@wordpress/scripts/config/webpack.config.js' );

module.exports = {
    ...defaultConfig,
    module: {
        ...defaultConfig.module,
        rules: [
            ...defaultConfig.module.rules,
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },

        ]
    }
}