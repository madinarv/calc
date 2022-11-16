function Odenis(){
        var input1=document.getElementById("mebleg").value;
        var mebleg=Number(input1);
        var muddet=document.getElementById("muddet").value;
        var percent=document.getElementById("Faiz").value;
        var faiz=Number(percent);
        var umumimebleg=mebleg+(mebleg*faiz/100);
        var ayliqmebleg=umumimebleg/muddet;
        document.getElementById("umumi-mebleg").innerHTML=`Umumi Mebleg;${umumimebleg}`;
        document.getElementById("ayliq-odenis").innerHTML=`Ayliq Mebleg;${ayliqmebleg}`;
     
    }