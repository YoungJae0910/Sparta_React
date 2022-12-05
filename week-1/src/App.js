import React from "react";
function App() {
  const btn = () => {
    alert("클릭");
  };

  return (
    /* <---- HTML/JSX 영역  ---->*/
    <div
      style={{
        height: "100vh",
        display: " flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <span>이것은 내가 만든 App 컴포넌트입니다.</span>
      <button onClick={btn}>클릭!</button>
      {/* 이곳에 퀴즈를 위한 html 코드를 작성하시오 */}
    </div>
  );
}

export default App;
