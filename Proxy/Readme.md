# Proxy 패턴

>Proxy 객체를 활용하면 특정 객체와의 인터렉션을 더 컨트롤 할 수 있게된다.<br>
Proxy객체는 어떤 객체의 값을 <b>설정</b>하거나 값을 <b>조회</b>할때 등의 인터렉션을 직접 제어할 수 있다.
>>일반적으로 Proxy는 어떤 이의 대리인을 뜻한다. 그 사람과 직접 이야기 하는 대신 대리인에게 이야기하는 것이다.<br>
JavaScript에서도 해당 객체를 직접 다루는 것이 아니고 Proxy객체와 인터렉션하게 된다.

---
#### 1. Proxy 객체는 유효성 검사 구현에 유용하다
#### 2. Reflect 
JavaScript는 'Reflect'라는 빌트인 객체를 제공하는데 Proxy와 함께 사용하면 대상 객체를 쉽게 조작할 수 있다.<br>
`obj[prop]` 형태로 프로퍼티에 접근하거나 `obj[prop] = value` 형태의 코드로 값을 수정하는 대신<br>
`Reflect.get()`혹은`Reflect.set()`을 활용할 수 있다. 각 메서드들의 핸들러의 메서드와 인자 또한 동일하다.

```javascript
const personProxy = new Proxy(person, {
  get: (obj, prop) => {
    console.log(`prop: ${Reflect.get(obj, prop)}`);
  },
  set: (obj, prop, value) => {
    console.log(`${prop} --> ${value}`);
    Reflect.set(obj, prop, value);
  }
});
```

#### 주의
핸들러 객체에서 'Proxy'를 너무 무겁게 사용하면 앱의 성능에 부정적인 영향을 줄 수 있다.<br>
Proxy를 사용할 땐 성능문제가 생기지 않을 만한 코드를 사용하여야한다.
