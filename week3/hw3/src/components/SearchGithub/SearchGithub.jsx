/** @jsxImportSource @emotion/react */

import { useState } from "react";
import * as S from "./SearchGithub.style";
import { useRecentKeywords } from "../../hooks/useRecentKeywords";

const SearchGithub = () => {
  const [input, setInput] = useState("");
  const [userInfo, setUserInfo] = useState({ status: "idle", data: null });
  const {
    keywords: recentKeywords,
    saveKeyword,
    removeKeyword,
  } = useRecentKeywords();

  const getUserInfo = async (user) => {
    setUserInfo({ status: "pending", data: null });
    try {
      const response = await fetch(`https://api.github.com/users/${user}`);
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      setUserInfo({ status: "resolved", data });
      saveKeyword(user);
    } catch {
      setUserInfo({ status: "rejected", data: null });
    }
  };

  const handleSearch = () => {
    if (input.trim() === "") return;
    getUserInfo(input);
  };

  const handleClose = () => {
    setUserInfo({ status: "idle", data: null });
    setInput("");
  };

  return (
    <div css={S.searchGithubStyle}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSearch();
        }}
        placeholder="Github 프로필을 검색해보세요."
      />

      <div css={S.keywordSection}>
        <p>최근 검색어</p>
        <ul>
          {recentKeywords.map((kw) => (
            <li key={kw} css={S.keywordItem}>
              <span onClick={() => setInput(kw)}>{kw}</span>
              <button onClick={() => removeKeyword(kw)}>X</button>
            </li>
          ))}
        </ul>
      </div>

      {userInfo.status === "resolved" && (
        <div css={S.cardSection}>
          <button css={S.buttonSection} onClick={handleClose}>
            X
          </button>

          <div css={S.avatarSection}>
            <a href={userInfo.data.html_url} target="_blank" rel="noreferrer">
              <img src={userInfo.data.avatar_url} />
            </a>
          </div>

          <div css={S.profileSection}>
            <a href={userInfo.data.html_url} target="_blank" rel="noreferrer">
              <p className="name">{userInfo.data.name}</p>
            </a>
            <p className="login">{userInfo.data.login}</p>
            <p className="bio">{userInfo.data.bio}</p>
          </div>

          <div css={S.followSection}>
            <div>
              <p>Followers</p>
              <p>{userInfo.data.followers}</p>
            </div>

            <div>
              <p>Following</p>
              <p>{userInfo.data.following}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchGithub;
