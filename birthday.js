function calculate(){
  var male= document.getElementById('male').value
  var female = document.getElementById('female').value 


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
  

  //Akan Names for Males
  
  if(male.value == "male"){  
    if (birthday == 0   ){
      alert('Your Akan name is Kwasi');
    }
    else if(birthday == 1   ){
      alert('Your Akan name is Kwadwo');
    }
    else if(birthday == 2   ){
      alert('Your Akan name is Kwabena');
    }
    else if(birthday == 3   ){
      alert('Your Akan name is Kwaku');
    }
    else if(birthday == 4   ){
      alert('Your Akan name is Yaw');
    }
    else if(birthday == 5   ){
      alert('Your Akan name is Kofi');
    }
    else if(birthday == 6   ){
      alert('Your Akan name is Kwame');
    }
  }
  
  else if(female.value == 'female'){
    if (birthday == 0  ){
      alert('Your Akan name is Akosua');
    }
    else if(birthday == 1  ){
      alert('Your Akan name is Adwoa');
    }
    else if(birthday == 2  ){
      alert('Your Akan name is Abenaa');
    }
    else if(birthday == 3  ){
      alert('Your Akan name is Akua');
    }
    else if(birthday == 4  ){
      alert('Your Akan name is Yaa');
    }
    else if(birthday == 5  ){
      alert('Your Akan name is Afua');
    }
    else if(birthday == 6  ){
      alert('Your Akan name is Ama');
    }
  }     
}