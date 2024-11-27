/*
* Singleton 1회에 한하여 인스턴스화가 가능하며 전역에서 접근 가능한 클래스를 지칭한다.
* 만들어진 Singleton 인스턴스는 앱 전역에서 공유되기 때문에 앱의 전역 상태 관리하기에 적합하다.
* */

let instance; // instance 전역 변수를 통해 유일한 인스턴스를 생성하도록 한다.
let counter = 0;

class Counter {
  constructor() {
    if (instance) {
      throw new Error('Counter 인스턴스는 한 개만 생성할 수 있습니다.');
    }
    instance = this;
  }

  getInstance() {
    return this;
  }

  getCount() {
    return counter;
  }

  increment() {
    return ++counter;
  }

  decrement() {
    return --counter;
  }
}

// freeze 처리된 인스턴스는 프로퍼티의 추가 및 수정이 불가능
// Singleton 인스턴스의 프로퍼티를 덮어쓰는 실수를 예방할 수 있다
const singletonCounter = Object.freeze(new Counter());

export default singletonCounter;
