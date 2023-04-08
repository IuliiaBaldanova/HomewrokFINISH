import checklogin from '../modules/get_value.js';


let loginPass = {
  'admin': 'root',
  'user': '1234',
  };

let login = prompt ('Enter your name');
let pass = prompt ('Enter your password');

let result = checklogin (login,pass, loginPass);
alert (result);


