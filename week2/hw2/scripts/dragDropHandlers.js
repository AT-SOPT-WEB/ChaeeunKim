import { renderTodos } from "./renderTodos.js";

export let dragSrcId = null;

export function handleDragStart(e) {
  dragSrcId = e.currentTarget.dataset.id;
  e.dataTransfer.effectAllowed = "move";
}

export function handleDragOver(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = "move";
}

export function handleDrop(e) {
  e.preventDefault();
  const dropTargetId = e.currentTarget.dataset.id;

  if (dragSrcId === dropTargetId) return;

  const todos = JSON.parse(localStorage.getItem("todosData"));

  const dragIndex = todos.findIndex((todo) => todo.id == dragSrcId);
  const dropIndex = todos.findIndex((todo) => todo.id == dropTargetId);

  const [movedItem] = todos.splice(dragIndex, 1);
  todos.splice(dropIndex, 0, movedItem);

  localStorage.setItem("todosData", JSON.stringify(todos));
  renderTodos(todos);
}
