import { useState } from "react";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

function Todolist() {
    const [todoTitle, setTodoTitle] = useState("");
    const [todo, setTodo] = useState("");
    const [todoList, setTodoList] = useState([]);

    const handleForm = (e) => {
        e.preventDefault();
        const newTodo = {
            title: todoTitle,
            content: todo,
            copy: false
        };
        setTodoList([...todoList, newTodo]);
        setTodoTitle("");
        setTodo("");
    };

    const deleteTodo = (todo) => {
        const updatedTodoList = todoList.filter((val) => {
            return val !== todo;
        });
        setTodoList(updatedTodoList);
    };

    const copyTodo = (todo) => {
        const updatedTodoList = todoList.map((val) => {
            if (val === todo) {
                return { ...val, copy: true };
            }
            return val;
        });
        setTodoList(updatedTodoList);

        // Copiar para a área de transferência
        navigator.clipboard.writeText(todo.content);
    };

    const cancelCopy = (todo) => {
        const updatedTodoList = todoList.map((val) => {
            if (val === todo) {
                return { ...val, copy: false };
            }
            return val;
        });
        setTodoList(updatedTodoList);
    };
    return (
        <div className=" ">
      <div className="w-[25rem] h-[23rem] text-center rounded-xl bg-gray-900 p-5">
        <h1 className="text-5xl text-white font-extralight mb-8">Técnicas</h1>
        <form onSubmit={handleForm}>
          <input
            className="border-2 placeholder:text-gray-500 rounded-lg border-black w-full p-5 mb-5 text-black"
            type="text"
            placeholder="Título"
            value={todoTitle}
            onChange={(e) => setTodoTitle(e.target.value)}
          />
          <textarea
            className="border-2 placeholder:text-gray-500 rounded-lg border-black w-full p-5 mb-5 text-black"
            placeholder="Descrição"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          ></textarea>
          <button
            type="submit"
            className="bg-red-600 text-white py-3 px-8 rounded-lg mb-8"
          >
            + Técnica
          </button>
        </form>
        <div className="todo-show-area max-h-96 w-96 h-full overflow-auto">
          <ul>
                        {todoList.map((singleTodo, index) => {
                            return (
                                <li
                                    key={index}
                                    className={`bg-gray-800 mb-5 flex justify-between text-white py-5 rounded-lg text-3xl px-5 ${singleTodo.copy ? "opacity-50" : ""
                                        }`}
                                >
                                    <div>
                                        <h3 className="text-lg font-bold mb-2">{singleTodo.title}</h3>
                                        <p className="text-justify">{singleTodo.content}</p>
                                    </div>
                                    {!singleTodo.copy ? (
                                        <>
                                            <span
                                                onClick={() => copyTodo(singleTodo)}
                                                className="text-blue-600 cursor-pointer ml-4"
                                            >
                                                <ContentCopyIcon />
                                            </span>
                                            <span
                                                onClick={() => deleteTodo(singleTodo)}
                                                className="text-red-600 cursor-pointer ml-4"
                                            >
                                                x
                                            </span>
                                        </>
                                    ) : (
                                        <span
                                            onClick={() => cancelCopy(singleTodo)}
                                            className="text-blue-600 cursor-pointer ml-4"
                                        >
                                            X
                                        </span>
                                    )}
                                </li>
                            );
                        })}

                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Todolist;