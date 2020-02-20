// ==UserScript==
// @name         华为商城抢购插件
// @namespace    http://www.hinjin.com/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.vmall.com/product/10086831441169.html
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
