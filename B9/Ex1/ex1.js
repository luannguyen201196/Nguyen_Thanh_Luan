document.getElementById("p").style.fontSize="14px";
document.getElementById("default").addEventListener('click',
	function(){
	document.getElementById("p").style.fontSize="14px";
});
document.getElementById("small").addEventListener('click',
	function(){
		var size = parseFloat(document.getElementById("p").style.fontSize);
		document.getElementById("p").style.fontSize= size - size*0.4 +"px";
});
document.getElementById("big").addEventListener('click',
	function(){
		var size = parseFloat(document.getElementById("p").style.fontSize);
		document.getElementById("p").style.fontSize= size + size*0.4 +"px";
});
