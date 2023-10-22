import Button from "@/components/Button";
import Link from "next/link";

export default function Home() {
  return (
    <section className="grid sm:grid-cols-5 min-h-screen">
      <div className="relative sm:col-span-3 sm:border-r max-sm:border-t border-zinc-800 h-screen">
        <div className="absolute inset-y-0 inset-x-0 grid sm:grid-cols-3 gap-8 max-sm:p-8 p-12 overflow-y-auto">
          <div className="bg-zinc-800 w-full h-fit">
            <div className="border border-zinc-800 bg-zinc-200 p-4 -translate-x-2 -translate-y-2">
              <h3 className="text-xl font-bold">coding c++</h3>
              <p className="mb-4">
                desc: Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique, beatae.
              </p>
              <Button color="green" text="done!" />
            </div>
          </div>
        </div>
      </div>
      <div className="sm:col-span-2 relative max-sm:-order-1">
        <div className="sm:absolute inset-y-0 inset-x-0 p-12 max-sm:p-8 flex flex-col justify-center gap-6">
          <h1 className="text-xl">hi.. welcome🖐😎</h1>
          <div className="bg-zinc-800 w-full">
            <div className="border border-zinc-800 bg-zinc-200 p-4 -translate-x-2 -translate-y-2">
              <h2 className="text-2xl font-bold">add new todo.</h2>
              <form className="mt-4 flex flex-col justify-center gap-2">
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
                <div className="flex items-center justify-between">
                  <Button color="blue" text="add!" />
                </div>
              </form>
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
