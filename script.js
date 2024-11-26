// ==UserScript==
// @name         Better Cloudscape
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Make AWS Console and related pages look nicer again!
// @match        *://*.console.aws.amazon.com/*
// @match        *://console.aws.amazon.com/*
// @match        *://docs.aws.amazon.com/*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    // Add the CSS rule to remove border-radius from all elements
    GM_addStyle(`
        * {
            border-radius: 3px !important;
        }

        /* Target all elements with class starting with awsui */
        .awsui_button_vjswe_1dg71_153.awsui_variant-normal_vjswe_1dg71_204:not(#\\9 ) {
            border-color: #545b64 !important;
            color: #545b64 !important;
        }

    `);
})();
