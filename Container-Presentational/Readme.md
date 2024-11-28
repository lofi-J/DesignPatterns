# Container / Presentational 패턴
>React에서 관심사의 분리(SoC)를 강제하는 방법으로 Container/Presentational 패턴이 있다.<br>
이를 통해 비즈니스 로직에서 뷰를 분리해낼 수 있다.
---

### 예시
6개의 강아지 사진을 다운받아 화면에 렌더하는 앱을 가정
1. <b>Container Components</b>: 어떤 데이터가 보여질지에 대해서만 다루는 컴포넌트(다운로드한)
2. <b>Presentational Components</b>: 데이터가 어떻게 사용자에게 보여질 지에 대해서만 다루는 컴포넌트
>강아지 사진을 다운로드하는 것은 비즈니스 로직의 역할이고 이미지를 보여주는 것은 뷰의 역할
---

### Container 컴포넌트
container 컴포넌트의 주요 기능은 Presentational 컴포넌트에 데이터를 전달하는 것이다. <br>
해당 컴포넌트에서는 화면에 아무것도 렌더링하지 않는다.

### Presentational 컴포넌트
Presentational 컴포넌트의 주요 기능은 받은 데이터를 화면에 표현하는 것이며 데이터는 수정하지 않는다.

---
### Hooks
대개 Container/Presentational 패턴은 React Hook으로 대체 가능하다.
