/** @jsxImportSource @emotion/react */

import * as S from "./TabBtn.style";

const TabBtn = ({ btnText, tab, setTab }) => {
  const isActive = tab === btnText;

  return (
    <>
      <button
        css={[S.tabBtnStyle, isActive && S.activeStyle]}
        onClick={() => setTab(btnText)}
      >
        {btnText}
      </button>
    </>
  );
};

export default TabBtn;
