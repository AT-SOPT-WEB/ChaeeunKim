import { renderTodos } from "./renderTodos.js";

export const deleteTodos = () => {
  const deleteButton = document.querySelector(".delete-button");

  const getTodosData = () => JSON.parse(localStorage.getItem("todosData"));

  const saveTodosData = (data) => {
    localStorage.setItem("todosData", JSON.stringify(data));
  };

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
