#simple webpack template

> A simple webpack template

#Features

The following features are currently included:

 - Realize HMR without Webpack-Dev-Server
 - Babel and JSX
 - Sass
 - Highly customizable

##Plugins

 - [webpack-dev-middleware](https://github.com/webpack/webpack-dev-middleware)
 - [webpack-hot-middleware](https://github.com/glenjamin/webpack-hot-middleware)
 - [http-proxy-middleware](https://github.com/chimurai/http-proxy-middleware)
 - [html-webpack-plugin](https://github.com/ampedandwired/html-webpack-plugin)

##Install

 Assume that you have [node](https://nodejs.org/) and [git](https://git-scm.com/) on your computer

```bash
#clone the repo to your local dev director
git clone https://github.com/glassysky/simple-webpack-template

#install devdependcies
cd simple-webpack-template
npm install
```

##How to use it?
```bash
#dev environment
npm run dev
```
Only `dev` support now, `build` will come soon.

##How it works?

This template use `webpack` as a middleware of an `express` server.
You can find it in `server.js`.


##License

simple-webpack-template is available under MIT-License and can therefore be used in any project free of charge.
