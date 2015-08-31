/* Autoload: Carrega plugin JQuery caso elemento exista na página
*  $(".element", ["file.js", "file.css"], function() {
*		$(".element").plugin();
*	});
*/
function $$(s, f, c) { if ($(s).length>0) head.load(f, c); }




function _init() {
	
	var f = [];
	
	f = [];
	f.push("https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.0.0/magnific-popup.min.css");
	f.push("https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.0.0/jquery.magnific-popup.min.js");
	$$("a.modal-ajax, a.modal-image, a.modal-inline, a.modal-embed", f, function() {
		$('a.modal-ajax').magnificPopup({
			type: 'ajax'
		});

		$('a.modal-image').magnificPopup({
			type: 'image'
		});

		$('a.modal-inline').magnificPopup({
			type:'inline',
			midClick: true,
			callbacks: {
				open: function() {
					$(".mfp-inline-holder .mfp-content").css({"background":"#FFFFFF", "padding":"10", "width":"600"});
				},
			},
		});

		$('a.modal-embed').magnificPopup({
			type: 'iframe',
			iframe: {
				markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe></div>',
				patterns: {
					youtube: {
						index: 'youtube.com/',
						id: 'embed/',
						src: 'http://www.youtube.com/embed/%id%?autoplay=1'
					},
					vimeo: {
						index: 'vimeo.com/',
						id: '/',
						src: 'http://player.vimeo.com/video/%id%?autoplay=1'
					},
					gmaps: {
						index: '//maps.google.',
						src: '%id%&output=embed'
					},
				},
			}
		});
		
	});
	
	
	f = [];
	$$(".ui", f, function() {
		$("ui.datepicker").datepicker();
	});
}



$(_init);
$(document).ajaxSuccess(_init);