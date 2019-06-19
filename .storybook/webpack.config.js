const include = require("path").resolve(__dirname, "../packages")

module.exports = ({ config }) => {
    config.module.rules.push({
        test: /\.(ts|tsx)$/,
        include,
        use: ["ts-loader", "react-docgen-typescript-loader"],
    })
    config.module.rules.push({
        test: /\.scss$/,
        use: [
            {
                loader: require.resolve('style-loader'),
            },
            {
                loader: require.resolve('css-loader'),
                options: {
                    modules: true,
                }
            },
            {
                loader: require.resolve('sass-loader'),
            }
        ],
        include,
    })

    config.resolve.extensions.push(".ts", ".tsx")
    return config
}