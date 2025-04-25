export const checkboxToggle = () => {
  const checkAll = document.querySelector(".check-all");

  const getCheckboxes = () => document.querySelectorAll(".check-item");

  // 전체 선택  -> 목록 전체 체크 or 해제
  checkAll.addEventListener("change", () => {
    const isCheckedAll = checkAll.checked;

    getCheckboxes().forEach((checkbox) => {
      checkbox.checked = isCheckedAll;
    });
  });

  // 개별 선택 -> 전체 선택 상태 조정
  document.addEventListener("change", (e) => {
    if (!e.target.classList.contains("check-item")) return;

    const items = getCheckboxes();
    const allChecked = [...items].every((checkbox) => checkbox.checked);
    checkAll.checked = allChecked;
  });
};
