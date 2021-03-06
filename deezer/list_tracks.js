// ==UserScript==
// @name         Deezer List Tracks
// @namespace    http://tampermonkey.net/
// @version      1.4
// @description  Creates a list of all the tracks in an album. Useful if Deezloader Remix won't download the album but will download the individual tracks,
// @author       Artemis Lunarly
// @match        https://www.deezer.com/en/album/*
// @grant        GM_addStyle
// @downloadUrl  https://raw.githubusercontent.com/artemis-lunarly/tampermonkey/master/deezer/list_tracks.js
// @updateUrl	 https://raw.githubusercontent.com/artemis-lunarly/tampermonkey/master/deezer/list_tracks.js
// ==/UserScript==


GM_addStyle('.kc_downloadButton { position: fixed; top: 0; left: 1200px; color: white; font-size: 2.5em; font-weight: bold; width: 250px; height: 50px; line-height: 50px; text-align: center; z-index: 999; display: inline-block; } .kc_downloadButton:hover { cursor: pointer;');


(function() {
    'use strict';
    function createTMButton(callback) {
        var html = '<div id="kc_listTracks" class="kc_downloadButton">List Tracks</div>';
        $('body').prepend(html);
        callback();
    }

    function addClick() {
        $('#kc_listTracks').click(function() {
            alertList();
        });
    }

    function alertList() {
        var ep = $('a[itemprop="url"]');
		var outputText = '';
        ep.each(function(i, div) {
            var url = $(this).attr('href');
            outputText += 'https://www.deezer.com/en/' + url + ';';
        });
	outputText.slice(0,-1);
        prompt("Seperated List of Songs:", outputText);
    }
    createTMButton(addClick);
})();
