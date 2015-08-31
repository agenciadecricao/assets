/* Autoload: Carrega plugin JQuery caso elemento exista na página
*  $(".element", ["file.js", "file.css"], function() {
*		$(".element").plugin();
*	});
*/
function $$(s, f, c) { if ($(s).length>0) head.load(f, c); }




function _init() {
	
	var f = [];
	
	/* Redactor */
	
	/* Flickity */
	
}



$(_init);
$(document).ajaxSuccess(_init);