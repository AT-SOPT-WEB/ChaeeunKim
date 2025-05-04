/** @jsxImportSource @emotion/react */

import { useState } from "react";
import Header from "../Header/Header";
import { mainLayoutStyle } from "./MainLayout.style";
import NumberBaseball from "../NumberBaseball/NumberBaseball";
import SearchGithub from "../SearchGithub/SearchGithub";

const MainLayout = () => {
  const [tab, setTab] = useState("🔍 깃허브 검색");
  return (
    <div css={mainLayoutStyle}>
      <Header tab={tab} setTab={setTab} />
      <main>
        {tab === "🔍 깃허브 검색" ? <SearchGithub /> : <NumberBaseball />}
      </main>
    </div>
  );
};

export default MainLayout;
