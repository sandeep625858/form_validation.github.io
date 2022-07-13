$(document).ready(function(){
    $('#usernamevalidation').hide();
    $('#emailvalidation').hide();    
    $('#passwordvalidation').hide();
    $('#confirmpasswordvalidation').hide();


    var Error=true;
    var Password_Error=true;
    var Confirm_password_Error=true;
    var Email_error=true;

    $('#username').keyup(function(){
        username_validation();
    });
    function username_validation()
    {
        var username_val=$('#username').val();
        if(username_val.length=="")
        {
            $('#usernamevalidation').show();
            $('#usernamevalidation').html('username cant be empty');
            $('#usernamevalidation').css('color','red');
            Error=false;
            return false;
        }
        else{
            $('#usernamevalidation').hide();

        }

        if(username_val.length<3 || username_val.length>10)
        {
            $('#usernamevalidation').show();
            $('#usernamevalidation').html('invalid username');
            $('#usernamevalidation').css('color','red');
            Error=false;
            return false;
        }
        else{
            $('#usernamevalidation').hide();

        }
    }
    $('#email').keyup(function(){
        email_validation();
    });
    function email_validation()
    {
        var email_val=$('#email').val();
        if(email_val.length==0)
        {
            $('#emailvalidation').show();
            $('#emailvalidation').html('EmailId cant be empty');
            $('#emailvalidation').css('color','red');
            Email_error=false;
            return false;
        }
        else{
            $('#usernamevalidation').hide();

        }
        var emailregex = /^([\-\.0-9a-zA-Z]+)@([\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
        if(emailregex.test(email_val))
        {
            $('#emailvalidation').hide();
        }
        else{
            $('#emailvalidation').show();
            $('#emailvalidation').html('invalid EmailId');
            $('#emailvalidation').css('color','red');
            Email_error=false;
            return false;
        }
    }
    $('#password').keyup(function(){
        password_validation();
    });
    function password_validation(){
        let passRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        let passwordVal = $('#password').val();
        if(passRegex.test(passwordVal)){
          $('#passwordvalidation').hide();
        }
        else{
          $('#passwordvalidation').show();
          $('#passwordvalidation').html('Invalid Password');
          $('#passwordvalidation').css('color','#ff0000');
          Password_Error = false;
          return false;
        }
      }
    $('#confirmpassword').keyup(function(){
        confirm_password();
    });
    function confirm_password(){
        var confirm_password_val=$('#confirmpassword').val();
        var password_val=$('#password').val();
        if(password_val!=confirm_password_val)
        {
            $('#confirmpasswordvalidation').show();
            $('#confirmpasswordvalidation').html('password didnot match');
            $('#confirmpasswordvalidation').css('color','red');
            Confirm_password_Error=false;
            return false;
        }
        else
        {
            $('#confirmpasswordvalidation').hide();
        }
    }
    $('#submitvalidation').click(function()
    {
        username_validation();
        password_validation();
        confirm_password();
        if(Error==true && Password_Error==true && Confirm_password_Error==true && Email_error==true)
        {
            return true;
        }
        else
        {
            return false;
        }
    });
});