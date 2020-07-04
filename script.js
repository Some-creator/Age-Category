var name = prompt("What is your name?")
var age = prompt("What is your age?")
var gender = prompt ("What Is your Gender Male Or Female (Pleae Make Sure that You write 'Male' With a capital M & 'Female' with a capital F")

  if(age < 13 && gender == 'Male') {
   var boy = document.write( name + ' is a boy.')
} else if(age < 13 && gender == 'Female' ){
   var girl = document.write( name + ' is a girl.')
} else if ( age > 18 && age < 30 && gender == 'Male'){
  var youngMan = document.write( name + ' is a young man.')
} else if(age > 18 && age < 30 && gender == 'Female') {
   var youngWoman = document.write( name + ' is a young woman.')
} else if (age > 30 && age < 60 && gender == 'Male') {
  var man = document.write( name + ' is a man.')
} else if (age > 30 && age < 60 && gender == 'Female'){
    var woman = document.write( name + ' is a woman.')
} else if (age > 60) {
   var seniorCitizen =  document.write( name + ' is a senior citizen')
}



document.getElementById("Name").innerHTML ='Name: '+ name;
document.getElementById("Age").innerHTML = 'Age: '+ age;
document.getElementById("Gender").innerHTML = 'Gender: ' + gender;

//

