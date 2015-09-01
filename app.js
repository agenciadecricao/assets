/**
 * Conterte um atributo
 * @param  {string}   attr   Nome do atributo
 * @param  {object}   def    Objeto default, utiliza $.extend() do jquery
 * @return {json}            Objeto json
 */
(function($) { $.fn.dataJson = function(attr, def) { def = def || {}; data = $(this).attr(attr) || "{}"; try { eval('data = '+data+';'); } catch(e) {data = {};} data = $.extend(def, data); return data;}; })(jQuery);


/**
 * Carrega um plugin JQuery apenas se elemento selecionado existir na página
 * @param {string}   s Seletor jquery
 * @param {array}    f Array de arquivos css ou js
 * @param {function} c Callback que será executado depois que os arquivos terminarem de carregar
 */
function $$(s, f, c) { if ($(s).length>0) head.load(f, c); }



$(function() {
	
	/* Easy popup */
	function _modal(el, call) { $(el).fadeToggle(200, call) }
	$(".popup:not(.popup-show)").hide();
	$(window).on("keyup", function(ev) { if (ev.keyCode==27) $(".popup").fadeOut(200); });
	$("body").on("click", ".popup", function(ev) {
		if (ev.target==this) $(this).fadeToggle(200);
	});
	
});





function _init() {
	
	var f = [];
	
	
	/* Redactor */
	f = [];
	f.push("https://cdn.rawgit.com/agenciadecricao/assets/master/jquery-redactor/redactor.10.1.2.css");
	f.push("https://cdn.rawgit.com/agenciadecricao/assets/master/jquery-redactor/redactor.10.1.2.js");
	$$("[data-redactor]", f, function() {
		$("[data-redactor]").each(function() {
			var config = $(this).dataJson("data-redactor", {});
			$(this).redactor(config);
		});
	});
	
	
	
	/* Flickity */
	f = [];
	f.push("https://cdnjs.cloudflare.com/ajax/libs/flickity/1.1.0/flickity.min.css");
	f.push("https://cdnjs.cloudflare.com/ajax/libs/flickity/1.1.0/flickity.pkgd.min.js");
	$$("[data-flickity]", f, function() {
		$("[data-flickity]").each(function() {
			var config = $(this).dataJson("data-flickity");
			$(this).flickity(config);
		});
	});
	
}



$(_init);
$(document).ajaxSuccess(_init);