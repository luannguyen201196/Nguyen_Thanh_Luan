function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function checkPhoneNumber(phone) {
    var flag = false;
    
    phone = phone.replace('(+84)', '0');
    phone = phone.replace('+84', '0');
    phone = phone.replace('0084', '0');
    phone = phone.replace(/ /g, '');
    if (phone != '') {
        var firstNumber = phone.substring(0, 2);
        if ((firstNumber == '09' || firstNumber == '08' || firstNumber == '05' || firstNumber == '03' || firstNumber == '02' || firstNumber == '04'|| firstNumber == '06' || firstNumber == '07' ) && phone.length == 10) {
            if (phone.match(/^\d{10}/)) {
                flag = true
            }
        } 
    }
    return flag;
}

document.getElementById("dk").addEventListener('click', function(a){
	a.preventDefault();

	var name = document.getElementById('name');
	var email = document.getElementById('email');
	var sdt = document.getElementById('sdt');
	var password = document.getElementById('password');
	var rpassword = document.getElementById('rpassword');

	if (name.value.trim()=='') {
		document.getElementById('errorName').innerHTML = 'Yêu cầu nhập đầy đủ họ tên'
	}else if (name.value.length <= 8) {
		document.getElementById('errorName').innerHTML = 'Họ tên phải lớn hơn 8 ký tự';
	}else{
		document.getElementById('errorName').innerHTML = '';
	}

	if (email.value.trim() == '') {
		document.getElementById('errorEmail').innerHTML = 'Yêu cầu nhập Email'
	}else if(!validateEmail(email.value)) {
		document.getElementById('errorEmail').innerHTML = 'Định dạng abc@domain.xyz';
	}else{
		document.getElementById('errorEmail').innerHTML = '';
	}

	if (sdt.value.trim() == '') {
		document.getElementById('errorSdt').innerHTML = 'Yêu cầu nhập số điện thoại'
	}
	else if (!checkPhoneNumber(sdt.value)) {
		document.getElementById('errorSdt').innerHTML = 'Sai định dạng số điện thoại'
	}else{
		document.getElementById('errorSdt').innerHTML = '';
	}

	if (password.value.trim() == '') {
		document.getElementById('errorPassword').innerHTML = 'Yêu cầu nhập Password'
	}else if(password.value.length < 6){
		document.getElementById('errorPassword').innerHTML = 'Password phải hơn 6 ký tự';
	}else{
		document.getElementById('errorPassword').innerHTML = '';
	}


	if (rpassword.value.trim()=="") {
		document.getElementById('errorrPassword').innerHTML = 'Yêu cầu xác nhận mật khẩu'
	}else if((password.value!=rpassword.value && rpassword.value.trim()!= '')||(rpassword.value.length < 6 && rpassword.value.trim()!= '')) {
		document.getElementById('errorrPassword').innerHTML="Nhập lại mật khẩu không đúng";
	}else{
		document.getElementById('errorrPassword').innerHTML = '';
	}
})
function reSet(){
	document.getElementById('errorName').innerHTML = '';
	document.getElementById('errorSdt').innerHTML = '';
	document.getElementById('errorEmail').innerHTML = '';
	document.getElementById('errorrPassword').innerHTML = '';
	document.getElementById('errorPassword').innerHTML = '';
}