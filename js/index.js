window.onload=function(){
    var doll = document.getElementById("doll");
    var per =document.getElementById("per");
    var i=0;
    var j=0;
    var timer;
    doll.onclick=function(){
        clearInterval(timer);
        timer = setInterval(function(){
            i--;
            j-=1.5;
            doll.style.width=(40+j)+"%";
            per.innerHTML=i;
        },300);
        if(i<100){
            i++;
            j+=1.5;
            per.innerHTML=i;
            doll.style.width=(40+j)+"%";
            if(i==100){
                per.innerHTML=i;
                alert("恭喜你獲得了娃娃！！");
                doll.style.width="40%";
                clearInterval(timer);
            }
        }
    };
};