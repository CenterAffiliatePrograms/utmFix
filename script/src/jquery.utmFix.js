/**
	****************************
	*********  utmFix  *********
	****************************
	
	Plugin for fix utm's bugs
	
	Author: login2030
	Website: http://novostiva.ru/portfolio/
 	Docs: https://github.com/CenterAffiliatePrograms/utmFix
 	Repo: https://github.com/CenterAffiliatePrograms/utmFix
*/
(function($) {
	jQuery.fn.utmFix = function(opt) {
		opt = $.extend({
			link: ""
		}, opt);
		
		var utm = window.location.search;
		var link = opt.link;
		var attr = '';
		
		return this.each(function(i, el) {
			var $this = $(el);
			$this.attr('title', '');
			if ($this.is('iframe')) {
				attr = 'src';
				$this.attr(attr, link + utm);
			} else if ($this.is('a')) {
				attr = 'href';
				$this.attr(attr, $this.attr(attr) + utm);
			} else {
				if ($this.find('iframe').length > 0) {
					attr = 'src';
					$this.find('iframe').attr(attr, link + utm);
				}
			}
		});
	};
})(jQuery);