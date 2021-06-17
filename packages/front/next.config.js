const rules = [
  {
    test: /\.svg$/,
    use: ["@svgr/webpack"]
  },
  // {
  //   test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
  //   use: [
  //     { 
  //       loader: "file-loader",
  //       options: {
  //         name: '[path][name].[ext]',
  //         outputPath: 'fonts'
  //       }
  //     }
  //   ]
  // }
]

module.exports = {
  webpack(config) {
    
    rules.forEach(rule => { config.module.rules.push(rule) });
    
    return config;
  },
  env: {
    NEXT_PUBLIC_NODE_ENV: process.env.NEXT_PUBLIC_NODE_ENV,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
};