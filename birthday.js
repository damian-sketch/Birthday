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

  var result = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD )%7

  alert(result);
}