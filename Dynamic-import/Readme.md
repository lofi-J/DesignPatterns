# Dynamic import 

모듈을 동적으로 로딩하여 페이지 로딩 시간을 줄일 수 있다.<br>
기능이 필요할 때만 로드하고 컴파일하여 코드를 사용할 수 있다.

```javascript
import('./모듈1.js').then(module => {
  // module을 통해 로직 실행
});
```
