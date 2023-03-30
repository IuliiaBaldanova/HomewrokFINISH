
function checklogin (login,pass, loginPass) {
    
    if (login == 'admin' && pass == loginPass.admin || login == 'user' && pass == loginPass.user) 
    {return ('You entered!');}
  
    else if (login !== 'admin' && login !== 'user')
    {return ('user undefined');}

    else if (pass !== loginPass.admin || pass !== loginPass.user)
    {return ('uncorrect password');}
}
export default checklogin;