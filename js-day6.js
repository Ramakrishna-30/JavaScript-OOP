emp={id:102,name:"Shyam Kumar",salary:40000}  
document.write(emp.id+" "+emp.name+" "+emp.salary); 
document.write("<br/>")

var emp=new Object();  
emp.id=101;  
emp.name="Ravi Malik";  
emp.salary=50000;  
document.write(emp.id+" "+emp.name+" "+emp.salary); 
document.write("<br/>")

function Employee(firstName,lastName)
{
  this.firstName=firstName;
  this.lastName=lastName;
}

Employee.prototype.fullName=function()
  {
    return this.firstName+" "+this.lastName;
  }

var employee1=new Employee("Martin","Roy");
var employee2=new Employee("Duke", "William");
document.writeln(employee1.fullName()+"<br>");
document.writeln(employee2.fullName());

document.write("<br/>")



class Test
{
  static display()
  {
    return "static method is invoked"
  }
}
document.writeln(Test.display());



document.write("<br/>")


class Student // validate
  {
    constructor()
    {
       var name;
       var marks;
    }
        getName()
        {
          return this.name;
        }
      setName(name)
      {
        this.name=name;
      }
      
      getMarks()
      {
        return this.marks;
      }
    setMarks(marks)
    {
        if(marks<0||marks>100)
        {
          alert("Invalid Marks");
        }
      else
        {
          this.marks=marks;
        }
    }
    }

    document.write("<br/>")



    class Bike
    {
      constructor()
      {
        this.company="Honda";
      }
    }
    class Vehicle extends Bike {
      constructor(name,price) {
       super();
        this.name=name;
        this.price=price;
      } 
    }
    var v = new Vehicle("Shine","70000");
    document.writeln(v.company+" "+v.name+" "+v.price);


    document.write("<br/>")







    var stud=new Student();
     stud.setName("John");
     stud.setMarks(110);//alert() invokes
     document.writeln(stud.getName()+" "+stud.getMarks());

     class Moment extends Date {
        constructor(year) {
          super(year);
        }}
      var m=new Moment("August 15, 1947 20:22:10");
      document.writeln("Year value:")
      document.writeln(m.getFullYear());
      document.write("<br/>")



      class A
  {
     display()
    {
      document.writeln("A is invoked");
    }
  }
class B extends A
  {
  }
var b=new B();
b.display();
  




let nameEl = document.getElementById("name");
let nameErrMsgEl = document.getElementById("nameErrMsg");

let emailEl = document.getElementById("email");
let emailErrMsgEl = document.getElementById("emailErrMsg");

let workingStatusEl = document.getElementById("status");
let genderMaleEl = document.getElementById("genderMale");
let genderFemaleEl = document.getElementById("genderFemale");

let myFormEl = document.getElementById("myForm");

let formData = {
  name: "",
  email: "",
  status: "Active",
  gender: "Male"
};

nameEl.addEventListener("change", function(event) {
  if (event.target.value === "") {
    nameErrMsgEl.textContent = "Required*";
  } else {
    nameErrMsgEl.textContent = "";
  }

  formData.name = event.target.value;
});

emailEl.addEventListener("change", function(event) {
  if (event.target.value === "") {
    emailErrMsgEl.textContent = "Required*";
  } else {
    emailErrMsgEl.textContent = "";
  }

  formData.email = event.target.value;
});

workingStatusEl.addEventListener("change", function(event) {
  formData.status = event.target.value;
});

genderMaleEl.addEventListener("change", function(event) {
  formData.gender = event.target.value;
});

genderFemaleEl.addEventListener("change", function(event) {
  formData.gender = event.target.value;
});

function validateFormData(formData) {
  let {name, email} = formData;
  if (name === "") {
    nameErrMsgEl.textContent = "Required*";
  }
  if (email === ""){
    emailErrMsgEl.textContent = "Required*";
  }
}

function submitFormData(formData) {
  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization:
        "Bearer 00f3f8fde06120db02b587cc372c3d85510896e899b45774068bb750462acd9f",
    },
    body: JSON.stringify(formData)
  };

  let url = "https://gorest.co.in/public-api/users";

  fetch(url, options)
    .then(function(response) {
      return response.json();
    })
    .then(function(jsonData) {
      console.log(jsonData);
      if (jsonData.code === 422) {
        if (jsonData.data[0].message === "has already been taken") {
          emailErrMsgEl.textContent = "Email Already Exists";
        }
      }
    });
}

myFormEl.addEventListener("submit", function(event){
  event.preventDefault();
  validateFormData(formData);
  submitFormData(formData);
});