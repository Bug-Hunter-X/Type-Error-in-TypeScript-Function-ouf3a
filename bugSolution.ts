function greeter(person: string): string {
  return "Hello, " + person;
}

function greeterArray(persons: string[]): string {
  return persons.map(person => greeter(person)).join('\n');
}

let user = ["Jane Doe", "John Smith"];

console.log(greeterArray(user)); //Correct

//Alternative solution (Iterating through the array)
for (let i = 0; i < user.length; i++) {
    console.log(greeter(user[i]));
}