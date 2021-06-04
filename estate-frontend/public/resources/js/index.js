function getTime() {
    var tet = new Date("Feb 1,2022 00:00:00").getTime();
    var now = new Date().getTime();
    //Số s đến thời gian hiện tại
    var timeRest = tet - now;
    //Số s còn lại để đến tết;
    var days = Math.floor(timeRest / (1000 * 60 * 60 * 24));
    //Số ngày còn lại
    var hours = Math.floor(timeRest % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    // Số giờ còn lại
    var minutes = Math.floor(timeRest % (1000 * 60 * 60) / (1000 * 60));
    // Số phút còn lại
    var seconds = Math.floor(timeRest % (1000 * 60) / (1000));
    // Số giây còn lại
    if(timeRest >= 0){
           
           document.getElementById("ngay").innerHTML = days;
           document.getElementById("gio").innerHTML = hours;
           document.getElementById("phut").innerHTML = minutes;
           document.getElementById("giay").innerHTML = seconds;
         }else{
           document.getElementById("hetthoigian").innerHTML = "Hết Thời Gian";
         }
    setTimeout(function () { getTime() }, 500);
  }