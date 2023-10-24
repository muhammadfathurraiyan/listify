import { createTodo } from "@/lib/action";
const TodoForm = () => {
  return (
    <form
      action={createTodo}
      className="mt-4 flex flex-col justify-center gap-2"
    >
      <>
        <label htmlFor="title">title :</label>
        <input
          name="title"
          type="text"
          className="bg-zinc-100 border border-zinc-800 p-1"
        />
      </>
      <>
        <label htmlFor="description">description :</label>
        <textarea
          name="description"
          rows={5}
          className="bg-zinc-100 border border-zinc-800 mb-4 p-1"
        ></textarea>
      </>
      <button className="bg-zinc-800 w-fit">
        <span
          className={`bg-blue-500 border border-zinc-800 flex items-center duration-200 px-4 py-2 -translate-x-1.5 -translate-y-1.5 hover:-translate-x-1 hover:-translate-y-1 active:translate-x-0 active:translate-y-0`}
        >
          add todo!
        </span>
      </button>
    </form>
  );
};

export default TodoForm;
