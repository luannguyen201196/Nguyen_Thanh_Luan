document.getElementById("checkAll").addEventListener('click',
	function(){
	var ckb = document.getElementsByName('cb');
	for(var i = 0; i<ckb.length; i++){
		ckb[i].checked = true;
	}
});
document.getElementById("uncheckAll").addEventListener('click',
	function(){
	var ckb = document.getElementsByName('cb');
	for(var i = 0; i<ckb.length; i++){
		ckb[i].checked = false;
	}
});