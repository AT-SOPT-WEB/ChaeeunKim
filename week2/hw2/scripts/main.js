import { todos } from "../constants/todos.js";
import { renderTodos } from "./renderTodos.js";
import { filterButtons } from "./filter.js";

// todosData 저장 및 초기화
if (!localStorage.getItem("todosData")) {
  localStorage.setItem("todosData", JSON.stringify(todos));
}
const todosData = JSON.parse(localStorage.getItem("todosData"));

// 초기 렌더링
renderTodos(todosData);

// 필터링 버튼 이벤트
filterButtons();

