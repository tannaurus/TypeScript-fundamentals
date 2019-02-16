class Student {
  // The access modifiers here (private & public) do not effect the final JS code,
  // but allow us to be that much more stricter when defining our class.
  // - Private values can only be accessed from within the class
  // - Public values can be access from both inside and outside the class, the latter using dot notation.
  constructor(public firstName: string, private middleInitial: string, public lastName: string) {
    this.fullName = `${firstName} ${middleInitial} ${lastName}`;
  }
  fullName: string;
}

// An interface is similar to a database schema, 
// enforcing that specific keys should have specific datatypes as values.
interface Person {
  // In this case, the firstName and lastName keys must have strings as their value.
  firstName: string
  lastName: string
}

// We use the interface name just as you would annotate a type, like we would with "string", except
// rather than being a lowercase reference it is pascal cased; denoting it is an interface.
function hello(person: Person): string {
  return `Hello, ${person.firstName} ${person.lastName}`;
}

// We will give the "hello" function a new instance of the Student class, which
// meets the requirements of the Person interface; since both the firstName and lastName
// properties are public and can be accessed through dot notation, just like Objects.
var myPerson = new Student("Tanner", "M", "Gill");

document.body.innerHTML = hello(myPerson);