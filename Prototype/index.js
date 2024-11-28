class Dog {
  constructor(name) {
    this.name = name;
  }

  // bark() {
  //   return 'Woof!';
  // }
}

// prototype에 bark 함수 추가
Dog.prototype.bark = function bark() {
  return 'Woof!';
}

const dog1 = new Dog('A');
const dog2 = new Dog('B');
// console.log(dog1.__proto__);  { bark: [Function: bark] }
// __proto__는 비 표준이다. Object.getPrototypeOf()는 표준이다.

// Object.create()
// prototype으로 쓰일 객체를 인자로 받아 새로운 객체를 만들어낸다.

const dog = {
  bark() {
    console.log('Woof!');
  }
}

// Object.create는 단순히 객체가 다른 객체로부터 프로퍼티를 상속받을 수 있게 해 준다.
const pet1 = Object.create(dog);
pet1.bark();
