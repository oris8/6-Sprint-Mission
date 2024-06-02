"use client"; // (app-router인 경우) 클라이언트 컴포넌트임을 명시해줘야돼요

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
    // 1 stirng -> number로 변경 (안바꾸면 string이라고 생각해서 연결해버려요 ex. 0111..)
    // 이전값을 이용하는 state이기 때문에 안전하게 prevCount를 가져와서 계산해줬습니다
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
