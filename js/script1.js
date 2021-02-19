var utc = document.getElementById('utc');
var localTime = document.getElementById('localTime');
var chooseTime = document.getElementById('chooseTime');
var chooseTimeTitle = document.getElementById('chooseTimeTitle');
var timeZone = document.getElementById('timeZone');
var notes = document.getElementById('notes');
var post = document.getElementById('post');
var reset = document.getElementById('reset');
var notesHead = document.getElementById('notesHead');
var notesTitle = document.getElementById('notesTitle');
setInterval(getLocalTime, 1);
setInterval(getUTC, 1);


function getUTC() {
  var tDate = new Date();
  var utcDate = tDate.toUTCString();
  utc.innerHTML = utcDate;
  console.log(utcDate);
}

function getLocalTime() {
  var localDate = new Date();
  localTime.innerHTML = localDate;
  console.log(localDate);

}
function zoneSelect(){
  if(timeZone.value == "EST"){
    chooseTimeTitle.innerHTML = "EST - Eastern Standard Time:";
    chooseTime.innerHTML = "UTC Offset: -5";
  }else if(timeZone.value == "CST"){
      chooseTimeTitle.innerHTML = "CST - Central Standard Time:";
      chooseTime.innerHTML = "UTC Offset: -6";
  }else if(timeZone.value == "PST"){
      chooseTimeTitle.innerHTML = "PST - Pacific Standard Time:";
      chooseTime.innerHTML = "UTC Offset: -8";
  }else if(timeZone.value == "MST"){
      chooseTimeTitle.innerHTML = "MST - Mountain Standard Time:";
      chooseTime.innerHTML = "UTC Offset: -7";
  }else if(timeZone.value == "Select"){
      chooseTimeTitle.innerHTML = "";
      chooseTime.innerHTML = "";
  }
}
function postFunction(){
  notesTitle.innerHTML = 'Notes:';
  notesHead.innerHTML = notes.value;
  notes.value = '';
}
function notesReset(){
  notesTitle.innerHTML = '';
  notesHead.innerHTML = '';
  notes.value = '';

}

timeZone.addEventListener("change", zoneSelect);
post.addEventListener("click", postFunction);
reset.addEventListener("click", notesReset);
