const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.dev.config');


// Start watching and bundling tests here
// const tests = require('./webpack.test.config');
// const testsCompiler = webpack(tests);
//
// testsCompiler.watch({}, function onErr(err) {
//   if (err) {
//     console.log(err);
//   }
//   //console.log('Test file bundled');
// });

// Primary app
new WebpackDevServer(webpack(config), {
  quiet: false,
  noInfo: false,
  publicPath: config.output.publicPath,
  hot: true,
  inline: true,
  historyApiFallback: {
    index: '/examples/'
  },
  stats: {
    colors: true
  }
})
.listen(3000, 'localhost', function onlistenErr(err) {
  if (err) {
    console.log(err);
  }

  console.log(__dirname);
  console.log('Listening at localhost:3000');
});
