const parent = {
  value: "parentValue",
  obj: {
    objValue: "parentObjValue"
  },
  walk: () => console.log("Walking")
};

const child = Object.create(parent);

child.value = "childValue";
child.obj.value = "childObjValue";

console.log("CHILD - child value:", child.value);
console.log("CHILD - child.obj.value: ", child.obj.objValue);

console.log("PARENT - parent value:", parent.value);
console.log("PARENT - parent.obj.value: ", parent.obj.objValue);

console.log("parent : ", parent);
console.log("child : ", child);

// GRAND CHILD

const grandChild = Object.create(child);
console.log("GrandChild: ", grandChild);

grandChild.walk();

// FUNCTION CONST

function Dog(name) {
  this.name = name;
  console.log(`this is ${this}`);
}

const myDog = new Dog("Max");

console.log("myDog: ", myDog);

Dog("Max2");
