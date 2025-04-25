import { renderTodos } from "./renderTodos.js";
import { openModal } from "./modal.js";

export const completeTodos = () => {
  const completeButton = document.querySelector(".complete-button");

  const getTodosData = () => JSON.parse(localStorage.getItem("todosData"));

  const saveTodosData = (data) => {
    localStorage.setItem("todosData", JSON.stringify(data));
  };

  completeButton.addEventListener("click", () => {
    const checkedItems = document.querySelectorAll(".check-item:checked");

    const checkedIds = [...checkedItems].map((checkbox) => {
      return Number(checkbox.closest("tr").dataset.id);
    });

    const todos = getTodosData();

    // 완료된 투두 있는지 검사
    const hasCompleted = todos.some(
      (todo) => checkedIds.includes(todo.id) && todo.completed
    );

    if (hasCompleted) {
      openModal();
      return;
    }

    const updatedTodos = todos.map((todo) => {
      if (checkedIds.includes(todo.id)) {
        return { ...todo, completed: true };
      }
      return todo;
    });

    saveTodosData(updatedTodos);
    renderTodos(updatedTodos);
  });
};
