window.onload=function(){
    var doll = document.getElementById("doll");
    var perA= document.querySelector(".percent");
    var per =document.getElementById("per");
    var text0 =document.querySelector(".play-text>h1");
    var text =document.querySelector(".play-text>p");
    var linec=document.querySelector(".line-c");
    var i=0;
    var j=0;
    var timer;
    doll.onclick=function(){
        clearInterval(timer);
        timer = setInterval(function(){
            if(i>0){
                i--;
                j-=1.5;
                doll.style.width=(40+j)+"%";
                linec.style.width=i+"%";
                per.innerHTML=i;
            }
        },300);
        if(i<100){
            i++;
            j+=1.5;
            per.innerHTML=i;
            doll.style.width=(40+j)+"%";
            linec.style.width=(i+1.5)+"%";
            if(i==20){
                perA.style.color="#28FF28";
                text.style.color="#28FF28";
                text.innerHTML="順利跨出成功的第一步~~";
            }
            else if(i==40){
                perA.style.color="#00FFFF";
                text.style.color="#00FFFF";
                text.innerHTML="為了我們的夢想，我們得努力去追求~~";
            }
            else if(i==60){
                perA.style.color="#FF8000";
                text.style.color="#FF8000";
                text.innerHTML="我知道很累，但我們的努力是為了成為更好的自己~~";
            }
            else if(i==80){
                perA.style.color="#F75000";
                text.style.color="#F75000";
                text.innerHTML="只要堅持下去，我們終將能夠達到自己想去之處~~";
            }
            else if(i==100){
                perA.style.color="#FF0000";
                per.innerHTML=i;
                alert("寶貝生日快樂！！希望妳會喜歡這份生日禮物！！");
                doll.style.width="40%";
                text.innerHTML="希望未來的妳和我能夠順利達成自己的理想！！";
                text.style.color="#FF0000";
                clearInterval(timer);
            }
        }
    };
};