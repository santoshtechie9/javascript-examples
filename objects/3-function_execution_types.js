
//The following example will show the different ways of executing functions in javascript
// The this keyword points to different objects depending on the context. it can refer to a window(browser), global object(node js), current object(object.foo()), empty object(new function())
// Reference Link : https://www.youtube.com/playlist?list=PLqq-6Pq4lTTaflXUL0v3TSm86nodn0c_u

//Method #1 : in this method of calling function this refers to the global object.
function foo() {
    console.log("Hello, this inside foo function");
    console.log(this);
}
foo();    


//Method#2 : in this method of calling function this refer to the current object
var object = {};
object.foo = function(){
    console.log("Hello, this is foo function inside object");
    console.log(this);
}
object.foo();   

 //Method#3 : in this method of calling function this refers to an empty object
new foo(); 

//Method#4 : in this method the this reference is bind to the object passed as and argument 
foo.call({});


