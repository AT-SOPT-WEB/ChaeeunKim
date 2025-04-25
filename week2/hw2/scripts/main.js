import { todos } from "../constants/todos";

// todosData 저장 및 초기화
if (!localStorage.getItem("todosData")) {
  localStorage.setItem("todosData", JSON.stringify(todos));
}
const todosData = JSON.parse(localStorage.getItem("todosData"));
