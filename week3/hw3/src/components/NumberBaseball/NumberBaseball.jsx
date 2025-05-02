/** @jsxImportSource @emotion/react */

import { useEffect, useState } from "react";
import * as S from "./NumberBaseball.style";
import { validateInput, generateAnswer, getResult } from "../../utils/game";

const NumberBaseball = () => {
  const [answer, setAnswer] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [message, setMessage] = useState("");
  const [history, setHistory] = useState([]);

  useEffect(() => {
    setAnswer(generateAnswer());
  }, []);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const result = validateInput(inputValue);

      if (result) {
        setMessage(result);
        return;
      }

      if (inputValue === answer) {
        setMessage("🎉 정답입니다! 3초 뒤에 게임이 리셋됩니다.");
        setTimeout(() => {
          setAnswer(generateAnswer());
          setInputValue("");
          setMessage("");
          setHistory([]);
        }, 3000);
      } else {
        const { strike, ball } = getResult(inputValue, answer);
        const newRecord = `${inputValue} - ${strike}S ${ball}B`;

        setHistory((prev) => [...prev, newRecord]);
        setMessage(`${strike}스트라이크 ${ball}볼`);
      }
    }
  };

  return (
    <div css={S.numballStyle}>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="3자리 숫자를 입력해주세요."
        maxLength={3}
      />
      <p>{answer}</p>
      <div css={S.messageSection}>{message}</div>
      <div css={S.listSection}>
        {history.map((item, idx) => (
          <div key={idx}>{item}</div>
        ))}
      </div>
    </div>
  );
};

export default NumberBaseball;
