/** @jsxImportSource @emotion/react */

import TabBtn from "../TabBtn/TabBtn";
import { headerStyle } from "./Header.style";

const Header = ({ tab, setTab }) => {
  return (
    <header css={headerStyle}>
      <h1>⚾️ 숫자야구 || 깃허브 검색 🔍</h1>
      <div>
        <TabBtn btnText="🔍 깃허브 검색" tab={tab} setTab={setTab}></TabBtn>
        <TabBtn btnText="⚾️ 숫자야구" tab={tab} setTab={setTab}></TabBtn>
      </div>
    </header>
  );
};

export default Header;
