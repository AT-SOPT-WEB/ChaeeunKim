import { Global } from "@emotion/react";
import { GlobalStyle } from "./styles/GlobalStyle";

function App() {
  return (
    <>
      <Global styles={GlobalStyle} />
      <div>hello</div>
    </>
  );
}

export default App;
