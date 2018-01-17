// ==UserScript==
// @name        Ampparit.com
// @namespace   _pc
// @description Ampparit fix
// @include     https://www.ampparit.com/
// @match       https://www.ampparit.com/*
// @require     http://code.jquery.com/jquery-latest.min.js
// @version     1
// @grant       none
// ==/UserScript==

$("div.nojs").remove();
$("div.item-open.fa.fa-chevron-down").remove();
$("div.item-toggle-container").remove();
$("div.item-clicks").remove();
$("div.ad.ad-mob-hero").remove();
$("div.ad-container").remove();
$('div.item-details-container').addClass('news-item-source').removeClass('item-details-container');
$("span.item-source").append('&nbsp;');

var image = "<div class=\"news-item-bullet\"></div>";
$("div.item-content").before(image);

$("span.item-category").each(function(index) {
  str = $(this).text();
  a = str.toString();
  b = '<span><a href=\"/'+a+'\">('+a+')</a></span>';
  $(this).html(b);
});