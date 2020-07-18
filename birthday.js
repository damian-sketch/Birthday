function calculate(){
  //Collecting User's data and calculating the day of the week
  var YOB = document.getElementById('YOB').value;
  var Century = YOB.slice(0,2);
  var CC = parseInt(Century);
  var Year = YOB.slice(2,4);
  var YY = parseInt(Year);

  var radio = document.getElementsByName('gender');
    if (radio[0].checked){
      var gender = 'male'
    }else if(radio[1]){
      var gender = 'female'
    }


// Checking for validity of dates
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

// Calculating the result
  var result = (((CC/4)-2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7

  var birthday = Math.round(result);
  
  switch(gender){
    case 'male':
      switch(birthday){
        case 0:
          alert('Your Akan Name is Kwasu');
          break;
        case 1:
          alert('Your Akan Name is Kwadwo');
          break;
        case 2:
          alert('Your Akan Name is Kwabena');
          break;
        case 3:
          alert('Your Akan Name is Kwaku');
          break;
        case 4:
          alert('Your Akan Name is Yaw');
          break;
        case 5:
          alert('Your Akan Name is Kofi');
          break;
        case 6:
          alert('Your Akan Name is Kwame');
          break;  
        default:
          alert('You do not have an Akan name')  
      }
  }


  switch(gender){
    case 'female':
      switch(birthday){
        case 0:
          alert('Your Akan Name is Akosua');
          break;
        case 1:
          alert('Your Akan Name is Adwoa');
          break;
        case 2:
          alert('Your Akan Name is Abenaa');
          break;
        case 3:
          alert('Your Akan Name is Akua');
          break;
        case 4:
          alert('Your Akan Name is Yaa');
          break;
        case 5:
          alert('Your Akan Name is Afua');
          break;
        case 6:
          alert('Your Akan Name is Ama');
          break;  
        default:
          alert('You do not have an Akan name')  
      }
  }


}