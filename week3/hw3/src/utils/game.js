// 무작위 3자리 수 생성
export const generateAnswer = () => {
  const digits = [];
  while (digits.length < 3) {
    const num = Math.floor(Math.random() * 10);
    if (!digits.includes(num)) {
      digits.push(num);
    }
  }
  return digits.join("");
};

// 스트라이크, 볼 계산
export const getResult = (input, answer) => {
  let strike = 0;
  let ball = 0;

  for (let i = 0; i < 3; i++) {
    if (input[i] === answer[i]) {
      strike++;
    } else if (answer.includes(input[i])) {
      ball++;
    }
  }

  return { strike, ball };
};

// 유효성 검사
export const validateInput = (value) => {
  if (!/^\d{3}$/.test(value) || new Set(value).size !== 3) {
    return "⚠️ 서로 다른 숫자 3자리를 입력해주세요!";
  }
};
