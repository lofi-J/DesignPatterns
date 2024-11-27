const person = {
  name: 'Lofi-J',
  age: 66,
  nationality: 'South Korea',
}

/*
* 위 객체와 직접 인터렉션하는 대신 Proxy 객체와 인터렉션해야 한다. ('new Proxy'로 쉽게 Proxy객체를 만들어 낼 수 있다)
* const personProxy = new Proxy(person, {});
* Proxy의 2번 째 인자는 핸들러를 의미한다. 핸들러 객체에서 인터렉션의 종류에 따른 특정 동작들을 정의할 수 있다.
* 또한 여러 메서드들을 추가할 수 있는데 일반적으로 'get', 'set'이 있다.
* 'get': 프로퍼티에 접근하려고 할 때 실행됨.
* 'set': 프로퍼티의 값을 수정하려고 할 때 실행됨.
*/

const personProxy = new Proxy(person, {
  get: (obj, prop) => {
    console.log(`${prop}의 값은 ${obj[prop]}`);
  },
  set: (obj, prop, value) => {
    console.log(`$${prop} --> ${value}`);
    obj[prop] = value;
  }
});


/*
* Proxy는 유효성 검사를 구현할 때 유용하다. 사용자는 'person'객체의 'age' 프로퍼티를 문자열로 수정할 수 없고 또는 'name'프로퍼티를 빈 문자열로
* 초기화 수 없고, 사용자가 'person' 객체에 존재하지 않는 프로퍼티에 접근하려면 알려줄 수 있다.
*/

const validProxy = new Proxy(person, {
  get(obj, prop) {
    if (!obj[prop]) { // 'person'객체 내 특정 프로퍼티가 존재하지 않는 경우
      console.log(`존재하지 않는 프로퍼티입니다.`);
    } else {
      console.log(`${prop}의 값은 ${obj[prop]}`);
    }
  },
  set: (obj, prop, value) => {
    if (prop === 'age' && typeof value !== 'number') {
      console.log('나이는 오직 숫자로만 설정할 수 있습니다.');
    } else if (prop === 'name' && value.length < 2) {
      console.log('식별 가능한 이름으로 설정해 주세요.')
    } else {
      console.log(`${prop} --> ${value}`);
      obj[prop] = value;
    }
  },
});

validProxy.age = '';
validProxy.name = 'J';
