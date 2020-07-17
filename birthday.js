function calculate(){
  var YOB = document.getElementById('YOB').value;
  var Century = YOB.slice(0,2);
  var CC = parseInt(Century);
  var Year = YOB.slice(2,4);
  var YY = parseInt(Year);


  var MOB = document.getElementById('MOB').value;
  var MM = parseInt(MOB);
  if (MM<=0 || MM>12){
    alert('Enter a valid month');
  }

  var DOB = document.getElementById('DOB').value;
  var DD = parseInt(DOB);
  if (DD<=0 || DD>31){
    alert('Enter a valid Date');
  }

  var result = (((CC/4)-2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7

  var birthday = Math.round(result);

  if (birthday == 0){
    alert('Your birthday is on Sunday');
  }
  else if(birthday == 1){
    alert('Your birthday is on Monday');
  }
  else if(birthday == 2){
    alert('Your birthday is on Tuesday');
  }
  else if(birthday == 3){
    alert('Your birthday is on Wednesday');
  }
  else if(birthday == 4){
    alert('Your birthday is on Thursday');
  }
  else if(birthday == 5){
    alert('Your birthday is on Friday');
  }
  else if(birthday == 5){
    alert('Your birthday is on Saturday');
  }

  
  
}