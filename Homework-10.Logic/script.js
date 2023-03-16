let loginPass = {	
	'admin': 'root',
	'user': '1234',
	};
	
	let login = prompt ('Enter your name');
	let pass = prompt ('Enter your password');
	if (login == 'admin' && pass == loginPass.admin || login == 'user' && pass == loginPass.user) {
	alert ('You entered!');
	}
	
	else if (login !== 'admin' && login !== 'user') {
	alert ('user undefined');
	}
	else if (pass !== loginPass.admin || pass !== loginPass.user){
	alert ('uncorrect password');
	};
