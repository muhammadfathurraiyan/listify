import { deleteTodo } from "@/lib/action";

type Tbutton = {
  id: string;
};

const DeleteButton = ({ id }: Tbutton) => {
  return (
    <form action={deleteTodo}>
      <input type="hidden" name="id" value={id} />
      <button type="submit" className="bg-zinc-800 w-fit">
        <span
          className={`bg-green-500 border border-zinc-800 flex items-center duration-200 px-4 py-2 -translate-x-1.5 -translate-y-1.5 hover:-translate-x-1 hover:-translate-y-1 active:translate-x-0 active:translate-y-0`}
        >
          done!
        </span>
      </button>
    </form>
  );
};

export default DeleteButton;
