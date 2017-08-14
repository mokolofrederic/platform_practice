

function firstfocus() { 

    document.getElementsByName("userid")[0].focus; 


}

function userid_validation(x, y)
{
    if(document.registration.userid.value == " ")
    {
        alert("Please provide your User ID!");
        document.getElementsByName("userid")[0].focus; 
    }
}
function passid_validation(x,y)
{
    if(document.registration.passid.value == " ");
    {
        alert("Please provide your Password!");
        document.getElementsByName("passid")[0].focus;
    }
}

function allLetter()
{
    
    if(document.registration.Name.value == " ");
    {
        alert("Please provide your Name!");
        getElementsByName("username")[0].focus; 
                return false;
    }
}


function validate()
{
if(document.registration.Email.value == " " || isNan( document.registration.value))
    {
        alert("Please provide your Email!");document.registration.Email.firstfocus();
        return false;
    }

}

function validateEmail()
    {
        var emailID = document.myForm.EMail.value;
         atpos = emailID.indexOf("@");
         dotpos = emailID.lastIndexOf(".");
     
         if (atpos < 1 || ( dotpos - atpos < 2 )) 
     {
        alert("Please enter correct email ID")
        document.myForm.EMail.firstfocus();
        return false;
     }
     return( true );
  
}


