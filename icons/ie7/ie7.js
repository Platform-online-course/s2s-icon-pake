/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'S2S-Pack-Icons\'">' + entity + '</span>' + html;
	}
	var icons = {
		's2scalendar-svgrepo-com': '&#xe908;',
		's2strophy-symbol-svgrepo-com': '&#xe900;',
		's2ssearch-svgrepo-com2': '&#xe901;',
		's2sphone-svgrepo-com': '&#xe902;',
		's2scrown-star-svgrepo-com': '&#xe903;',
		's2sclose-svgrepo-com': '&#xe904;',
		's2scheck-svgrepo-com1': '&#xe905;',
		's2sclock-svgrepo-com': '&#xe906;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/s2s[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
