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

//JavaScript String Method

let std = 'Abdul Basit';
document.getElementById('method').innerHTML = std.length + "<br>" + std.at(8);

let text = "Grande, Civic, Prius";
let part = text.slice(8 , 15);
document.getElementById('dem').innerHTML = part + "<br>" + text.length;

// Upper Case
let up = "basit, younus, mustafa, hassaan";
let reslt = up.toUpperCase();
document.getElementById('upper').innerHTML = up + "<br>" + reslt;

// Lower Case
let nw = "Basit, YOUNUS, Mustafa, HASSAAN";
let lower = nw.toLowerCase();
document.getElementById('low').innerHTML = nw + "<br>" + lower;

let student = "Abdul Basit";
let student1 = "&nbsp Hassaan Bagla";
let student2 = '&nbsp Younus Batoonii';
let student3 = "&nbsp Mustafa Baglol";
let total = student.concat("", student1, student2, student3);
document.getElementById('concat').innerHTML = total + "<br>" + total.length;
let tr = "    Hello Students      ";
let tri = tr.trim();
document.getElementById('tr').innerHTML = tr + " " + tr.length + "<br>" + tri + " " + tri.length;
