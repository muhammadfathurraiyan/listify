import TodoCard from "@/components/home/TodoCard";
import TodoForm from "@/components/home/TodoForm";

export default async function Home() {
  return (
    <section className="grid sm:grid-cols-5 min-h-screen">
      <div className="relative sm:col-span-3 sm:border-r max-sm:border-t border-zinc-800 h-screen">
        <div className="absolute inset-y-0 inset-x-0 grid sm:grid-cols-3 gap-8 max-sm:p-8 p-12 overflow-y-auto">
          <TodoCard />
        </div>
      </div>
      <div className="sm:col-span-2 relative max-sm:-order-1">
        <div className="sm:absolute inset-y-0 inset-x-0 p-12 max-sm:p-8 flex flex-col justify-center gap-6">
          <h1 className="text-xl">hi.. welcome🖐😎</h1>
          <div className="bg-zinc-800 w-full">
            <div className="border border-zinc-800 bg-zinc-200 p-4 -translate-x-2 -translate-y-2">
              <h2 className="text-2xl font-bold">add new todo.</h2>
              <TodoForm />
            </div>
          </div>
          <div>
            <h3 className="font-bold text-xl">how to use listify:💡</h3>
            <ol className="list-disc list-inside">
              <li>add title to your todo.✅</li>
              <li>add description to your todo(optional).✅</li>
              <li>click add button to add your todo.✅</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
