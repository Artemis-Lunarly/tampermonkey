// ==UserScript==
// @name         HorribleSubs Customize
// @namespace    http://tampermonkey.net/
// @version      1.56
// @description  Changes the background on xdcc.horriblesubs.info.
// @author       CrunchyHotDogs
// @match        *xdcc.horriblesubs.info/
// @grant        GM_addStyle
// @require      http://code.jquery.com/jquery-latest.js
// @downloadUrl  https://raw.githubusercontent.com/CrunchyHotDogs/tampermonkey/master/xdcc%20horriblesubs/customize.js
// @updateUrl	 https://raw.githubusercontent.com/CrunchyHotDogs/tampermonkey/master/xdcc%20horriblesubs/customize.js
// ==/UserScript==

GM_addStyle('.header h1 {display: inline !important; } .kc_container{ margin-left: 150px; display: inline; verticle-align: middle; } .kc_button{ margin-left: 15px; display: inline; height: 50%; border-radius: 50px; background-color: black; color: white; font-size: 1.25em; }');

(function() {
    'use strict';
    var searchOptions = [
        ['SOA', 'Sword Art Online - Alicization 720'],
        ['Mob Psycho', 'Mob Psycho 100 S2 720'],
        ['Love is War', 'Kaguya-sama wa Kokurasetai 720'],
        ['Neverland', 'Yakusoku no Neverland 720'],
        ['Boogiepop', 'Boogiepop wa Warawanai 720'],
        ['Kakegurui', 'https://nyaa.si/?f=0&c=0_0&q=Kakegurui+xx', true],
        ['Circlet Princess', 'Circlet Princess 720'],
        ['W\'z', 'W\'z 720']];


    function addAnimeButtons(callback) {
		var header = $('#header');
	    var buttonHtml = '';

	    for (var i = 0; i < searchOptions.length; i++) {
            if (searchOptions[i][2]) {
                buttonHtml += '<button id="' + i + '" class="kc_button"><a href=' + searchOptions[i][1] + ' target="_blank">' + searchOptions[i][0] + '</a></button>';
            }
            else {
                buttonHtml += '<button id="' + i + '" class="kc_button horrible_subs">' + searchOptions[i][0] + '</button>';
            }
	    }
        header.append('<div class="kc_container">' + buttonHtml + '</div>');
        callback();
    }

    function addOnClickListener() {
        $('.horrible_subs').click(function() {
            var search = searchOptions[parseInt($(this).attr('id'))][1];
			document.getElementById('search').value = search;
            $('input[type="submit"]').click();
        });
    }

	javascript:p.setSkin(3);
    addAnimeButtons(addOnClickListener);
})();s