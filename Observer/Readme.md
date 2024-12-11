# Observer 패턴
>Observer 패턴에서 특정 객체를 구독할 수 있는데, 구독하는 주체를 Observer라 하고, 구독 가능한 객체를 Observable이라 한다.<br>
Observable은 이벤트가 발생할 때 마다 모든 Observer에게 이벤트를 전파한다.
---

#### Observable 객체는 보통 다음과 같은 특징을 포함한다.
1. observers: 이벤트가 발생할 때 마다 전파할 Observer들의 배열.
2. subscribe(): Observer를 observers 배열에 추가한다.
3. unsubscribe(): observers 배열에서 Observer를 제거한다.
4. notify(): 등록된 모든 Observer들에게 이벤트를 전파한다.
