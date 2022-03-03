// closure.html for Assignment 6

//Q1.
// x = 1;
// var a = 5;
// var b = 10;
// var c = function(a, b, c) {
//     document.write(x + "<br>");
//     document.write(a + "<br>");
//     var f = function(a, b, c) {
//         b = a;
//         document.write(b + "<br>");
//         b = c;
//         var x = 5;
//     }
//     f(a, b, c);
//     document.write(b + "<br>");
//     var x = 10;
// }
// c(8, 9, 10);
// document.write(b + "<br>");
// document.write(x + "<br>");


//Q4.
// var x = 9;
// function myFunction() {
//     return x * x;
// }
// document.write(myFunction());
// x = 5;
// document.write(myFunction());

// Q5.
var foo = 1;
function bar() {
    if (!foo) {
        var foo = 10;
    }
    alert(foo);
}
bar();