let contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {

  let tab = [];
  for (let obj in contacts) {
    for (let obj in contacts) {
    tab.push(contacts[obj].firstName);
    }
    
    if (contacts[obj].firstName === name) {

      if (contacts[obj].hasOwnProperty(prop)) {
      return contacts[obj][prop];
      } else {
        return "No such property";
      }
    }

    if (!tab.includes(name)) {
      return "No such contact";
    
  }
}
}

console.log(lookUpProfile("Akira", "likes"));
