/// <reference path="journal-classes.ts"/>

module Journal {
  var izzy: Journal.IPerson = {
    name: "Izzy G",
    email: "izzy@epicodus.com"
  }

  var ramon: Journal.IPerson = {
    name: "Ramon dlC",
    email: "ramon@epicodus.com"
  }

  export var people = {
    "izzy": izzy,
    "ramon": ramon
  }
}
