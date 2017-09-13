window.hjkl_scroll = (function () {
	var SCROLL_SPEED = 10,
	    keys = {
		h: 72,
		j: 74,
		k: 75,
		l: 76
	    };

	document.addEventListener("keydown", function (e) {
		switch (e.keyCode) {
			case keys.h:
				window.scroll(window.scrollX - SCROLL_SPEED, window.scrollY);
				break;
			case keys.j:
				window.scroll(window.scrollX, window.scrollY + SCROLL_SPEED);
				break;
			case keys.k:
				window.scroll(window.scrollX, window.scrollY - SCROLL_SPEED);
				break;
			case keys.l:
				window.scroll(window.scrollX + SCROLL_SPEED, window.scrollY);
			default:
				break;
		}
	});	
})();
