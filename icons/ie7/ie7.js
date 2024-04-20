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
		's2s-icon-telegram': '&#xe90d;',
		's2s-icon-mail': '&#xe90e;',
		's2s-icon-vk': '&#xe90f;',
		's2s-icon-arrow-up': '&#xe909;',
		's2s-icon-arrow-down': '&#xe90a;',
		's2s-icon-arrow-left': '&#xe90b;',
		's2s-icon-arrow-right': '&#xe90c;',
		's2s-icon-pencil': '&#xe907;',
		's2s-icon-calendar': '&#xe908;',
		's2s-icon-trophy': '&#xe900;',
		's2s-icon-search': '&#xe901;',
		's2s-icon-phone': '&#xe902;',
		's2s-icon-crown': '&#xe903;',
		's2s-icon-close': '&#xe904;',
		's2s-icon-check': '&#xe905;',
		's2s-icon-clock': '&#xe906;',
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
		c = c.match(/s2s-icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
