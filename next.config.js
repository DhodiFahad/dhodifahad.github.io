/** @type {import('next').NextConfig} */
const packageJSON = require('./package.json');
const transpiledPackages = Object.keys(packageJSON.dependencies).filter(it => it.includes('@shared/'));

const withTM = require('next-transpile-modules')(transpiledPackages);

module.exports = withPlugins([withTM], {
  // ...
});
const nextConfig = {
  reactStrictMode: true,
  images:{
    loader:"akamai",
    path:"",
  },
  basePath:"/dhodifahad.github.io",
  assetPrefix:"/dhodifahad.github.io",
}

module.exports = nextConfig
