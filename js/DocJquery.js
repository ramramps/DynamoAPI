$(document).ready(function(){
	//adding break line to menu
	$(".home").first().css("border-bottom","1px solid #E6E7E8");
	//styling the class pages
	$('.docutils').each(function(){
		var testparam = $(this).find("td:contains('TypeParam :')").first().parent().prev().index();
		console.log(testparam);
		$(this).find('tbody').children().each(function(index){
			if(testparam != -1){
				if (index >=2 && index<=testparam){
					//console.log(index);
					$(this).addClass("params");
					if(index%2 == false){
						$(this).children().addClass("paramstitle");
					}else{
						$(this).children().addClass("paramsdesc");
					}
					if(index==testparam){
						$(this).children().addClass("lastparam");
					}
				}else{
					$(this).addClass("nonparams");
					if(index == 1){
						$(this).children().addClass("desc");
					}else if(index == testparam +1){
						$(this).children().addClass("firstnonparam");
					}
				}
			}else{
				if (index >=2){
					$(this).addClass("params");
					if(index%2 == false){
						$(this).children().addClass("paramstitle");
					}else{
						$(this).children().addClass("paramsdesc");
					}
					if(index==testparam){
						$(this).children().addClass("lastparam");
					}
				}else{
					$(this).addClass("nonparams");
					if(index == 1){
						$(this).children().addClass("desc");
					}
				}
			}		
		});
	});
	
	$("#menuNavigation").height($(document).height());
	$("#page-title").on('show', function() {
		$("#nav-wy-top").hide();
	});
	$("#nav-wy-top").on('show', function() {
		$("#page-title").hide();
	});
});

(function ($) {
      $.each(['show', 'hide'], function (i, ev) {
        var el = $.fn[ev];
        $.fn[ev] = function () {
          this.trigger(ev);
          return el.apply(this, arguments);
        };
      });
    })(jQuery);