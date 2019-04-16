//DOM
var second=document.getElementById('second');
var minute=document.getElementById('minute');
var hour=document.getElementById('hour');

//時間準起來!!!!
let hourAngle=0;
let minuteAngle=0;
let secondAngle=0;
function timeAccurate(){
   //取出當前時間
   let time=new Date();
   let hours=time.getHours();
   let minutes=time.getMinutes();
   let seconds=time.getSeconds();
   //歸零所有零件角度
   hourAngle=(hours-12)*30-90;
   minuteAngle=minutes*6;
   secondAngle=seconds*6-180;
   //校準時針
   hour.style.transform =`rotate(${hourAngle}deg)`;
   //校準分針
   minute.style.transform=`rotate(${minuteAngle}deg)`;
   //校準秒針
   second.style.transform=`rotate(${secondAngle}deg)`;
};

//時間動起來!!!!
let secondCounter=0; //記錄過了幾秒
let minuteCounter=0; //記錄過了幾分鐘
function timeMoving(){

    //秒針移動
    secondAngle+=6;
    secondCounter+=1;
    second.style.transform=`rotate(${secondAngle}deg)`;
    if(secondAngle == 360){secondAngle =0};

    //每過10秒分針移動
    if( secondCounter == 10){
      minuteAngle+=6;
      if(minuteAngle == 360){minuteAngle =0};
      minute.style.transform=`rotate(${minuteAngle}deg)`;
      secondCounter=0;  //歸零
      minuteCounter+=1; //記錄過一分鐘
    };
    //每過10分鐘時針移動
    if(minuteCounter == 10){
        hourAngle+=5;
        hour.style.transform=`rotate(${hourAngle}deg)`;
        minuteCounter=0; //歸零
    }
    setTimeout(timeMoving,1000);
}
timeAccurate(); //校準時鐘
timeMoving();   //時鐘啟動