import { renderTodos } from "./renderTodos.js";
import { getTodosData, saveTodosData } from "./utils/todoStorage.js";

export const deleteTodos = () => {
  const deleteButton = document.querySelector(".delete-button");

  deleteButton.addEventListener("click", () => {
    const checkedItems = document.querySelectorAll(".check-item:checked");

    const checkedIds = [...checkedItems].map((checkbox) => {
      return Number(checkbox.closest("tr").dataset.id);
    });

    const todos = getTodosData();
    const updatedTodos = todos.filter((todo) => !checkedIds.includes(todo.id));

    saveTodosData(updatedTodos);
    renderTodos(updatedTodos);
  });
};
