import { renderTodos } from "./renderTodos.js";

export const addTodos = () => {
  const input = document.querySelector(".addSection input");
  const priority = document.querySelector("#priority");
  const addButton = document.querySelector(".submitButton");

  const getTodosData = () => JSON.parse(localStorage.getItem("todosData"));

  const saveTodosData = (data) => {
    localStorage.setItem("todosData", JSON.stringify(data));
  };

  const priorityList = {
    first: 1,
    second: 2,
    third: 3,
  };

  addButton.addEventListener("click", () => {
    const title = input.value.trim();
    const priorityText = priority.value;

    if (!title || priorityText === "none") {
      alert("할 일과 중요도를 모두 입력해주세요!");
      return;
    }

    const currentTodos = getTodosData();

    const lastId = currentTodos.length
      ? currentTodos[currentTodos.length - 1].id
      : 0;
    const nextId = lastId + 1;

    const newTodo = {
      id: nextId,
      title,
      completed: false,
      priority: priorityList[priorityText],
    };

    const updatedTodos = [...currentTodos, newTodo];
    saveTodosData(updatedTodos);
    renderTodos(updatedTodos);

    // 초기화
    input.value = "";
    priority.value = "none";
  });
};
