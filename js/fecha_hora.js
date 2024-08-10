function startTime(){
    
    today=new Date();
    dd=today.getDate();
    mmm=today.getMonth();
    aa=today.getFullYear();
    switch (mmm) {
     case 0:
         mm='Enero';
         break;
     case 1:
         mm='Febrero';
         break;
     case 2:
         mm='Marzo';
         break;
     case 3:
         mm='Abril';
         break;
     case 4:
         mm='Mayo';
         break;
     case 5:
         mm='Junio';
         break;
     case 6:
         mm='Julio';
         break;
     case 7:
         mm='Agosto';
         break;        
     case 8:
         mm='Septiembre';
         break;
     case 9:
         mm='Octubre';
         break;
     case 10:
         mm='Noviembre';
         break;    
 
     default:
         mm='Diciembre'      
     }
     h=today.getHours();
     m=today.getMinutes();
     s=today.getSeconds();
     m=checkTime(m);
     s=checkTime(s);
     document.getElementById('reloj').innerHTML=h+":"+m+":"+s;
     document.getElementById('fecha').innerHTML=dd+" de "+mm+' del '+aa;
     t=setTimeout('startTime()',500);}                                                                                                                          
     function checkTime(i)
     {if (i<10) {i="0" + i;}return i;}
     window.onload=function(){startTime();}
     

     
