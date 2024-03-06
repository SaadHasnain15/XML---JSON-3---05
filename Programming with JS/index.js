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


let max = "    Hassaan      ";
let min = max.trimStart();
let abq = max.trimEnd();
document.write(max + max.length + "<br>" + min + min.length + "<br>" + abq + abq.length);

let nub = "Saad";
let padded = nub.padEnd(10, "Kz");
document.getElementById('demo').innerHTML = padded;

let untshunt = "Hassaan <br>";
let rep = untshunt.repeat(5);
document.getElementById('repeat').innerHTML = untshunt + "<br>" + rep;

//String Replace Method
let repl = "Hassaan, Younus, Mustafa";
let newrepl = repl.replace("Hassaan", "Hassaan Shahzad");
let again = repl.replace("Younus", "Abdul Basit");

document.getElementById('replace').innerHTML = repl + "<br>" + newrepl + "<br>" + again;

//ARRAY TOSTRING METHOD
const arr = ["Mustafa", "Hassaan", "Younus"];
let aa = arr.length;
let ab = arr.toString();
document.getElementById('arr').innerHTML = aa + "<br>" + arr + "<br>" + ab.length;


//ARRAY AT METHOD
let at = ['Abdul Basit', 'Hassaan Shazad', 'Mustafa'];
let check = at[1];
document.getElementById('at').innerHTML = check;

//ARRAY JOIN METHOD
let john = ['Younus', 'Mustafa', 'Hassaan', 'Basit', ''];
let res = john.join(' Tm Bhii Student Ho <br><hr> ');
document.getElementById('join').innerHTML = res;

//ARRAY POP METHOD
let pop = ['Hassaan', 'Basit', 'Mustafa', 'Younus'];
let checking = pop.pop();
document.getElementById('pop').innerHTML = pop + "<br>" + checking;

//ARRAY PUSH METHOD
let metro = ['Fruits', 'Rice', 'Flour', 'Sugar'];
let missed = metro.push("Spices");
document.getElementById('push').innerHTML = metro;

let meth = ['Mustafa', 'Idrees', 'Younus', 'Basit'];
meth.unshift('Wording');
let newmeth = meth.unshift('Hassaan');
document.getElementById('unshift').innerHTML = meth;
document.getElementById('unshift1').innerHTML = newmeth;

let dell = ['Ermin', 'Safwan', 'Murtaza', 'Hamza', 'Ahmed'];

document.getElementById('delete').innerHTML = "First Index Of Array Element Is: " + dell[0] + "<br>";

delete dell[0];

document.getElementById('delete1').innerHTML = "First Index Of Array Element Is: " + dell[0] + "<br>";

dell[0] = "Younus";

document.getElementById('delete2').innerHTML = "The Changed Element Of Array Index Is: " + dell[0] + "<br>";

let conc = ['Games', 'Study', 'Movie', 'Books'];
let con = ['Students', 'Teachers', 'Schools', 'Collages'];
let anc = ['Hassaan', 'Mustafa', 'Yousuf', 'Basit'];
let xzy = conc.concat("<br>" + con + "<br>" + anc);
document.getElementById('delete3').innerHTML = xzy;

//Array CopyWithin Method
let x  = ['Mango', 'Banana', 'Kiwi'];
let z = x.copyWithin(2,0,1);
document.getElementById('copy').innerHTML = z;

let ek = [['Younus'], ['Biscuit'], ['Moo'], ['Me'], ['Le'], ['Lo']];

let doosra = ek.flat();

let teesra = doosra.join(' ');

document.getElementById('flat').innerHTML = teesra;


//JS ARROW FUNCTION

let arrow = (x, y) => (x / y);
document.getElementById('arrow').innerHTML = arrow(5, 10);

let jalwa = "";

jalwa = () =>{
    return "HELLO STUDENTS";
}
document.getElementById('arow').innerHTML = jalwa();