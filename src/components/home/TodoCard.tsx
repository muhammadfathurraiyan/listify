import prisma from "@/lib/db";
import { deleteTodo } from "@/action/action";

const TodoCard = async ({ belongs }: { belongs: string }) => {
  const todos = await prisma.todo.findMany({ where: { belongsTo: belongs } });
  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id} className="bg-zinc-800 w-full h-fit">
          <div className="border border-zinc-800 bg-zinc-200 p-4 -translate-x-2 -translate-y-2">
            <h3 className="text-xl font-bold">{todo.title}</h3>
            <p className="mb-4 w-full">{todo.description}</p>
            <form action={deleteTodo}>
              <input type="hidden" name="id" value={todo.id} />
              <button type="submit" className="bg-zinc-800 w-fit">
                <span
                  className={`bg-green-500 border border-zinc-800 flex items-center duration-200 px-4 py-2 -translate-x-1.5 -translate-y-1.5 hover:-translate-x-1 hover:-translate-y-1 active:translate-x-0 active:translate-y-0`}
                >
                  done!
                </span>
              </button>
            </form>
          </div>
        </div>
      ))}
    </>
  );
};

export default TodoCard;
