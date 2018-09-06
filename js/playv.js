function play(obj){
	$(obj).hide();
	$(".bgimg").hide();
	var video = $("video")[0];
	video.play();
    video.addEventListener("ended",function(){
         $(obj).show();
         $(".bgimg").show();
    })
}
$("#more1").show();
$("#list1").show();
function showClass(o,id1,id2){
	var obj = $(o);
	var o1 = $("#"+id1+"");
	var o2 = $("#"+id2+"");
	obj.addClass("act").siblings().removeClass("act");
	o1.show().siblings("span").hide();
	o2.show().siblings("ul").hide();
}
function imgposition(){
	$(".wonderful li").eq(0).height(415);
	$(".wonderful li").eq(1).width(465);
	$(".wonderful li").eq(2).width(465);
}imgposition();