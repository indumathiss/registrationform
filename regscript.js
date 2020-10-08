function validate()
{
    var fname = document.getElementById("tabela").rows[1].cells[0].getElementsByTagName('input')[0].value;
    var lname = document.getElementById("tabela").rows[2].cells[0].getElementsByTagName('input')[0].value;
    var gender = document.getElementById("tabela").rows[3].cells[0].getElementsByTagName('input')[0].value;
    var dob = document.getElementById("tabela").rows[4].cells[0].getElementsByTagName('input')[0].value;
    var email = document.getElementById("tabela").rows[1].cells[1].getElementsByTagName('input')[0].value;
    var paswd1 = document.getElementById("tabela").rows[2].cells[1].getElementsByTagName('input')[0].value;
    var paswd2 = document.getElementById("tabela").rows[3].cells[1].getElementsByTagName('input')[0].value;
    var mno = document.getElementById("tabela").rows[4].cells[1].getElementsByTagName('input')[0].value;
     var nameRegex = /^[a-zA-Z\-]+$/;
    var validfname =fname.match(nameRegex);
    var validlname =lname.match(nameRegex);
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var flag=1;
    if(fname==""||fname==null){
            alert("FirstName must be filled");
            flag=2;
        }
    else if(lname==""||lname==null){
        alert("LastName must be filled");
            flag=2;
        }
    else if(gender==""| gender==null){
        alert("Gender must be filled");
            flag=2;
        }
    else if(dob==""||dob==null){
        alert("DOB must be filled");
            flag=2;
        }
    else if(email==""||email==null){
        alert("Email must be filled");
            flag=2;
        }
    else if(paswd1==""||paswd1==null){
        alert("Password must be filled");
            flag=2;
        }
    else if(paswd2==""||paswd2==null){
        alert("Re-Enter-Password must be filled");
        flag=2;
    }
    else if(mno==""||mno==null){
        alert("MobileNo must be filled");
            flag=2;
    }
   else if(validfname==null || validlname==null){
        alert("Please Enter Only Characters in firstname or lastname");
            flag=2;
    }
    else if(reg.test(email)==false){
        alert("Enter the valid Email Address");
            flag=2;
    }
    else if(paswd1!=paswd2){
        alert("Please Enter the Correct Password");
        flag=2;
    }
    else if(mno.length!=10){
        alert("Mobile number must be 10 digits");
        flag=2;
    }
    if(flag==1)
        alert("Register Successfully");
    
}