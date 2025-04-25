export const getTodosData = () => JSON.parse(localStorage.getItem("todosData"));

export const saveTodosData = (data) => {
  localStorage.setItem("todosData", JSON.stringify(data));
};
