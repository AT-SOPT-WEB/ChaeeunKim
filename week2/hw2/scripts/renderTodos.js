export const renderTodos = (todosData) => {
  const tbody = document.querySelector("tbody");
  tbody.innerHTML = "";

  todosData.forEach((todo) => {
    const row = document.createElement("tr");

    row.innerHTML = `
    <td><input type="checkbox" class="check-item" /></td>
    <td>${todo.priority}</td>
    <td>${todo.completed ? "✅" : "❌"}</td>
    <td>${todo.title}</td>
    `;

    tbody.appendChild(row);
  });
};
