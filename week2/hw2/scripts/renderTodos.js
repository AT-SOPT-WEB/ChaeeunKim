import {
  handleDragStart,
  handleDragOver,
  handleDrop,
} from "./dragDropHandlers.js";

export const renderTodos = (todosData) => {
  const tbody = document.querySelector("tbody");
  tbody.innerHTML = "";

  todosData.forEach((todo) => {
    const row = document.createElement("tr");

    // 드래그 앤 드롭
    row.setAttribute("draggable", true);
    row.dataset.id = todo.id;

    row.addEventListener("dragstart", handleDragStart);
    row.addEventListener("dragover", handleDragOver);
    row.addEventListener("drop", handleDrop);

    row.innerHTML = `
    <td><input type="checkbox" class="check-item" /></td>
    <td>${todo.priority}</td>
    <td>${todo.completed ? "✅" : "❌"}</td>
    <td>${todo.title}</td>
    `;

    tbody.appendChild(row);
  });
};
