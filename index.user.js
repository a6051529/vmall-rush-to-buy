// ==UserScript==
// @name         华为商城抢购插件
// @namespace    https://github.com/a6051529/vmall-rush-to-buy
// @version      0.1
// @description  try to take over the world!
// @author       hinjin
// @license      AGPL
// @match        https://www.vmall.com/product/*.html
// @supportURL   https://github.com/a6051529/vmall-rush-to-buy
// @updateURL    https://github.com/a6051529/vmall-rush-to-buy/index.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    setInterval(() => {
        console.log(2222);
        if ($('#pro-operation .product-button02').text() === '立即申购') {
            rush.business.doGoRush(2);
        }
    }, 50);
})();
