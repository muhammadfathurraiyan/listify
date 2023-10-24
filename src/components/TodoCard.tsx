import prisma from "@/lib/db";
import DeleteButton from "./DeleteButton";
const TodoCard = async () => {
  const todos = await prisma.todo.findMany();

  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id} className="bg-zinc-800 w-full h-fit">
          <div className="border border-zinc-800 bg-zinc-200 p-4 -translate-x-2 -translate-y-2">
            <h3 className="text-xl font-bold">{todo.title}</h3>
            <p className="mb-4">{todo.description}</p>
            <DeleteButton id={todo.id} />
          </div>
        </div>
      ))}
    </>
  );
};

export default TodoCard;
