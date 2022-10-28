// const proxy = require('http-proxy-middleware');
module.exports = function (app) {
  // app.use(async (req, res, next) => {
  //   res.setHeader("Access-Control-Allow-Origin", '*');
  //   next();
  // })

  // app.use(
  //   proxy(["/mock/1478"], {
  //     target: "http://10.118.71.83:3000/",
  //     changeOrigin: true
  //   })
  // );

  // // https://github.com/chimurai/http-proxy-middleware
  // app.use(proxy([
  //   '/sso'], {
  //   target: 'https://passport-test.casstime.com/',
  //   changeOrigin: true,
  // }));

  // app.use(proxy([
  //   '/partycredit',
  //   '/bill-incomeandexpenses',
  //   '/pointshop',
  //   '/msg',
  //   '/export',
  //   '/seller',
  //   '/terminal-api',
  //   '/archiveinquiry',
  //   '/market',
  //   '/orders',
  //   '/maindata',
  //   '/cart',
  //   '/portal',
  //   '/webim',
  //   '/sellerMgr',
  //   '/admin',
  //   '/inquiryWeb',
  //   '/mall',
  //   '/agentBuy',
  //   '/product',
  //   '/activity'], {
  //   target: 'https://ec-gamma.casstime.com/',
  //   changeOrigin: true,
  // }));
}
