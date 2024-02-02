function Mustafa(x , y){
 return (x * y);
}
let result = Mustafa(50, 10);
document.getElementById('demo').innerHTML = result;

let Students = `{Name: "Basit", Age: 20, City: "Karachi"}`;

// JS OBJECT
// document.getElementById('object').innerHTML = "Name: " +  Students.Name + "<br>" + "Age: " +  Students.Age + "<br>" + "City: "+ Students.City;

// JS OBJECT ARRAY
document.getElementById('object').innerHTML = Students;