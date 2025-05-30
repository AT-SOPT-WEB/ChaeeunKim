import { todos } from "../constants/todos.js";
import { renderTodos } from "./renderTodos.js";
import { filterButtons } from "./filter.js";
import { addTodos } from "./addTodos.js";
import { checkboxToggle } from "./checkboxToggle.js";
import { deleteTodos } from "./deleteTodos.js";
import { setupModal } from "./modal.js";
import { completeTodos } from "./completeTodos.js";

// todosData 저장 및 초기화
if (!localStorage.getItem("todosData")) {
  localStorage.setItem("todosData", JSON.stringify(todos));
}
const todosData = JSON.parse(localStorage.getItem("todosData"));

// 초기 렌더링
renderTodos(todosData);

// 필터링 버튼 이벤트
filterButtons();

// 할 일 추가
addTodos();

// 체크박스 선택
checkboxToggle();

// 삭제 버튼 이벤트
deleteTodos();

// 완료 버튼 이벤트
completeTodos();

// 모달
setupModal();
