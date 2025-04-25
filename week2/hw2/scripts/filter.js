import { renderTodos } from "./renderTodos.js";

export const filterButtons = () => {
  const allButton = document.querySelector(".all-button");
  const completedButton = document.querySelector(".completed-button");
  const incompletedButton = document.querySelector(".incompleted-button");
  const dropdown = document.querySelector(".dropdown");
  const priorityButton = document.querySelector(".priority-button");
  const priorityItems = document.querySelectorAll(".dropdown-menu li");

  const getTodosData = () => JSON.parse(localStorage.getItem("todosData"));

  // "전체" 버튼
  allButton.addEventListener("click", () => {
    renderTodos(getTodosData());
  });

  // "완료됨" 버튼
  completedButton.addEventListener("click", () => {
    const todos = getTodosData().filter((todo) => todo.completed);
    renderTodos(todos);
  });

  // "미완료" 버튼
  incompletedButton.addEventListener("click", () => {
    const todos = getTodosData().filter((todo) => !todo.completed);
    renderTodos(todos);
  });

  // "중요도" 버튼
  priorityButton.addEventListener("click", () => {
    dropdown.classList.toggle("open");
  });

  priorityItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      const selectedPriority = Number(e.target.textContent);
      const todos = getTodosData().filter(
        (todo) => todo.priority === selectedPriority
      );
      renderTodos(todos);

      dropdown.classList.remove("open"); // 드롭다운 닫기
    });
  });
};
