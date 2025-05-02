export const validateInput = (value) => {
  if (!/^\d{3}$/.test(value) || new Set(value).size !== 3) {
    return "⚠️ 서로 다른 숫자 3자리를 입력해주세요!";
  }
  return ""; // 유효하면 빈 문자열 반환
};
