function hello(person: string): string {
  return "Hello, " + person;
}

var myPerson = "Tanner";

document.body.innerHTML = hello(myPerson);