# Singleton 패턴

---

### 단점과 장정
인스턴스를 하나만 만들도록 하면 메모리 공간을 절약할 수 있다. <br> 
하지만 Singleton은 안티패턴 혹은 자바스크립트에서는 하지 말아야 할 것으로 언급되곤 한다.

Java, C++ 같은 다양한 언어들은 JavaScript처럼 객체를 직접적으로 만들어 낼 수 없다.
이런 객체지향 프로그래밍 언어에서는 객체를 만들기 위한 클래스를 꼭 작성해야 한다. 이렇게 만든 객체는 위의 instance 변수와 같이 
클래스의 인스턴스가 된다. <br>

JavaScript에서는 클래스를 작성하지 않아도 객체를 만들 수 있기 때문에 약간의 오버 엔지니어링이라 볼 수 있다.
객체 리터럴을 사용해서도 동일한 구현을 할 수 있다.

#### 객체 리터럴 사용하기
```javascript
let count = 0;

const counter = {
  increment() {
    return ++count;
  },
  decrement() {
    return --count;
  }
};

Object.freeze(counter);
export { counter };
```
객체의 참조가 전달되기 때문에 다른 모듈에서 동일한 counter 객체를 참조할 수 있다.


#### 명확하지 않은 의존성
```javascript
import Counter from "./Counter";

export default class SuperCounter {
  constructor() {
    this.count = 0;
  }
  increment() {
    Counter.increment();
    return (this.count += 1);
  }
  decrement() {
    Counter.decrement();
    return (this.count -= 1);
  }
}
```
위 처럼 다른 모듈로부터 import될 떄 Singleton인지 아닌지 분명하지 않다.
SuperCounter를 import해 메서드를 호출하게 되면 Singleton객체의 값을 수정하게되고 이는 예외로 이어질 수 있다.

#### 전역 동작
Singleton 인스턴스는 앱의 전역에서 참조할 수 있어야한다. 전역 스코프에서 전역 변수를 접근할 수 있는 한.<br>
해당 변수는 앱 전체에서 접근할 수 있기 때문이다.
전역 변수는 반드시 같은 동작을 구현하는데 사용해야한다.<br>

만약 전역 변수가 잘못된 판단으로 올바르지 않게 만들어진 경우. 잘못된 값으로 덮어쓰여질 수 있으며, 이는 해당 변수를 참조하는 모든 곳에서 예외를 발생
시키게 될 것이다.<br>

앱의 규모가 커지고 전역 상태를 참조하는 컴포넌트가 많아지며 서로를 참조하는 상황에서는 데이터의 흐름을 파악하기 어려워진다.<br>
(전역 변수의 문제점)

#### React의 상태 관리
React에서 전역 상태관리를 위해 Singleton객체를 만드는 대신 Redux나 React Context를 자주 사용한다.<br>
Singleton과 유사해 보이지만 Singleton은 인스턴스의 값을 직접 수정할 수 있는 반면, 해당 도구들은 읽기 전용 상태를 제공한다.<br>
Redux를 사용한 땐 오직 컴포넌트 내에서 디스패쳐를 통해 넘긴 액션에 대해 실행된 순수함수 리듀서를 통해서만 상태를 업데이트 할 수 있다.
(개발자가 의도한대로만 수정되도록 함)
