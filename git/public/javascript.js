
function validation()
{  
    var rtrn=true;
    var name=document.forms['myform']["name"].value;
    var psw=document.forms['myform']['password'].value;
         if(name.length<5)
            {
                
              document.getElementById("error").innerHTML=" * The length is too Short";
              rtrn=false;

            }
                console.log(name);
                console.log(psw);
            if(psw.length<5)
            {
              document.getElementById("err").innerHTML=" *The length is too short";
              rtrn=false;
            }
    return rtrn;
}

function signup(){
  window.location.href="register"
}
// actual table unviversity//
// function calculate(){
//   var f=document.getElementById("mygprcnt");
//   var s=document.getElementById("mypgprcnt");
//   var t=document.getElementById("mymphillprcnct");
//   var fo=document.getAnimations.getElementById("myphdprcnt");
//   var fi=document.getAnimations.getElementById("mynetprcnt");
//   var si=document.getAnimations.getElementById("myaward");
//   var sum=f+s+t+fo+fi+si;
//   document.getElementById("solving").innerHTML=sum;
// }
 

 function calculate(){
    var show =document.getElementById("1").value;
    console.log(show);
    if(show>=80)
    {
        document.getElementById("c1").value=15;
    }
    else
    {
        if(show>=60&&show<80)
        {
          document.getElementById("c1").value=13;
        }
        else
       { if(show>=55&&show<60){
            document.getElementById("c1").value=10;  
          }
          else
          { if(show>=45&&show<55){
            document.getElementById("c1").value=5;
          }

          }
        }
    }

    //pg
     show =document.getElementById("2").value;
    console.log(show);
    if(show>=80)
    {
        document.getElementById("c2").value=25;
    }
    else
    {
        if(show>=60&&show<80)
        {
          document.getElementById("c2").value=23;
        }
        else
       { if(show>=55&&show<60){
            document.getElementById("c2").value=20;  
          }
          
        }

    }

    //mphill
    show =document.getElementById("3").value;
    console.log(show);
    if(show>=60)
    {
        document.getElementById("c3").value=7;
    }
    else
    {
        if(show>=55&&show<60)
        {
          document.getElementById("c3").value=5;
        }

    }
   //phd
   var checkbox =document.getElementById("cb4");
    if(checkbox.checked == true)
    {
        document.getElementById("c4").value=30;
    }
    var option=document.getElementById("s5").value;
    if(option==="NET with JRF"){
      console.log(option);
      document.getElementById("c5").value=07;
    }
    else{
      if(option=="NET")
       {
        console.log(option);
        document.getElementById("c5").value=05;
       }
      else{
        if(option=="SLET/SET")
         {  console.log(option);
           document.getElementById("c5").value=03;
          }
       }
    }

    var option=document.getElementById("s6").value;
    if(option=="national level")
    {
      console.log(option);
      document.getElementById("c6").value=03;
    }
    else{
      if(option=="state level")
      {
        console.log(option);
        document.getElementById("c6").value=02;
      }
    }

    var two=document.getElementById("c1").value;
    var one=document.getElementById("c2").value;
    var three=document.getElementById("c3").value;
    var four =document.getElementById("c4").value;
    var five=document.getElementById("c5").value;
    var six =document.getElementById("c6").value;
    var result=Number(one)+Number(two)+Number(three)+Number(four)+Number(five)+Number(six);
    document.getElementById("result").value=result;
    console.log(result);
}