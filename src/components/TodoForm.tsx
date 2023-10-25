import { createTodo } from "@/lib/action";
import TodoInput from "./TodoInput";

const TodoForm = () => {
  return (
    <form
      id="form"
      action={createTodo}
      className="mt-4 flex flex-col justify-center gap-2"
    >
      <TodoInput />
    </form>
  );
};

export default TodoForm;
