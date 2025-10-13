유즈이팩트
컴포넌트가 렌더링된 이후에 실행되는 함수를 등록하는 훅입니다.
의존성 배열을 생략하면? 렌더링 할 때마다 실행
빈 배열은? 첫 랜더링 직후 한 번 실행
변수 넣으면? 해당 변수의 상태가 바뀔때마다 실행


겟바운딩클라이언트랙트나 인터섹션옵저버는 왜 유즈이펙트 안에서 사용해야 할 까?

✅ 이유 1: React의 렌더링 순서 때문
React는 컴포넌트를 이렇게 처리해요:

- JSX → 가상 DOM 생성
- 실제 DOM에 렌더링
- 렌더링 완료 후 useEffect 실행
  즉, ref.current는 렌더링이 끝나야 DOM 요소를 가리켜요.
  useEffect 밖에서 ref.current.getBoundingClientRect()를 호출하면 ref.current === null일 수 있어요 → 에러 발생!

✅ 이유 2: Vite는 ESM 기반으로 빠르게 렌더링함
Vite는 번들링 없이 모듈을 바로 실행하기 때문에, 컴포넌트가 순식간에 렌더링돼요.
그래서 DOM 접근 타이밍이 더 민감해지고, useEffect 안에서 안전하게 DOM을 다뤄야 해요.

✅ 이유 3: IntersectionObserver는 DOM 요소가 있어야 작동함
observer.observe(ref.current); // ❌ ref.current가 null이면 작동 안 함

IntersectionObserver는 실제 DOM 요소가 존재해야 감지할 수 있어요.
그래서 useEffect 안에서 ref.current가 존재할 때만 observe() 해야 해요.
