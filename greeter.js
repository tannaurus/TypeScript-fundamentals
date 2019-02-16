// We use the interface name just as you would annotate a type, like we would with "string", except
// rather than being a lowercase reference it is pascal cased; denoting it is an interface.
function hello(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
// Now, the data we're passing to the "hello" function must match the Person interface.
var myPerson = {
    firstName: "Tanner",
    lastName: "Gill"
};
document.body.innerHTML = hello(myPerson);
