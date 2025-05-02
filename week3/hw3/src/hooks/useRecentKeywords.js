import { useState } from "react";

export const useRecentKeywords = (key = "recentKeywords") => {
  const [keywords, setKeywords] = useState(() => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : [];
  });

  // 최근 검색어 저장
  const saveKeyword = (keyword) => {
    if (!keyword) return;

    setKeywords((prev) => {
      const newList = [keyword, ...prev.filter((k) => k !== keyword)];
      localStorage.setItem("recentKeywords", JSON.stringify(newList));
      return newList;
    });
  };

  // 키워드 삭제
  const removeKeyword = (keyword) => {
    setKeywords((prev) => {
      const updated = prev.filter((k) => k !== keyword);
      localStorage.setItem("recentKeywords", JSON.stringify(updated));
      return updated;
    });
  };

  return { keywords, saveKeyword, removeKeyword };
};
