//where is the entry point,the source?
//where is the output?
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'public'),
    //output filename
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        //regular expression
        //regex is used to match the file extension
        test: /\.jsx?$/,
        exclude: /node_modules/,
      },
      //adding normal css
      // {
      //   test: /\.css$/,
      //   //use helps us to prove an array of loaders
      //   use: ['style-loader', 'css-loader'],
      // },
      {
        //this ? will make the s at the beginning of the string optional
        test: /\.s?css$/,

        //the sass-loader will use node-sass
        //to convert our scss files to regular css
        //files we can use
        //we are using sass-loder and node-sass
        //sass-loader uses node-sass to convert scss to css

        //use helps us to prove an array of loaders
        //we are using multiple loaders
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  //this will catch the error in our jsx code
  //and show it in the browser
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
  },
};

//loader lets you customize the way webpack deals with files
//everytime webpack sees a file like app.js main.js
//we can run those file through babel to convert them to jsx

//so loader will convert jsx code to js code
//it will convert es6 code to es5 code

//babel core helps us to use run and use babel from webpack
//babel-loader is a webpack plugin its going to allows
//us to teach webpack how to run babel when webpack sees certain files

//"build-bable": "babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch",
