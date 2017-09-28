//Constructor for User Object

function User(name, age) {
  //initialize object attributes
  this.name = name;
  this.age = age;
}

User.prototype.compare = function(user) {
  if (this.age < user.age){
    return user.name + ' is older than ' + this.name;
  } else if (this.age == user.age) {
    return this.name + ' and ' + user.name + ' are of same age';
  } else {
    return this.name + ' is older than ' + user.name;
  }
};

var user1 = new User('John' , 29);
var user2 = new User('Mary' , 24);
var result = user1.compare(user2);
document.getElementById("demo").innerHTML = result;

