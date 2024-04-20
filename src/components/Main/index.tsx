import { mocksTitle } from "@/mocks";
import { useState } from "react";
import { ModalOfDelete } from "@/components/ModalOfDelete";
import { ModalOfEdit } from "@/components/ModalOfEdit";
import { IParamsEditTask } from "@/interfaces";
import { toast } from "react-toastify";

export const Main = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [textTask, setTextTask] = useState<string>("");
  const [taskClicked, setTaskClicked] = useState<string>("");
  const [taskIndex, setTaskIndex] = useState<number | null>(null);

  const [modalTrashIsOpen, setModalTrashIsOpen] = useState<boolean>(false);
  const [modalEditIsOpen, setModalEditIsOpen] = useState<boolean>(false);

  const addTask = (task: string) => {
    try {
      setTasks([...tasks, task]);
      toast.success("Task Adicionada!", {
        position: "top-center",
        theme: "dark",
      });
    } catch (error) {
      toast.error("Error! Verifique no console", {
        position: "top-center",
        theme: "dark",
      });
      console.log(`Error abaixo:\n ${error}`);
    }
  };

  const trashTask = (task: string) => {
    try {
      setTasks(tasks.filter((currentTask) => currentTask !== task));
      toast.success("Task Deletada!", {
        position: "top-center",
        theme: "dark",
      });
    } catch (error) {
      toast.error("Error! Verifique no console", {
        position: "top-center",
        theme: "dark",
      });
      console.log(`Error abaixo:\n ${error}`);
    }
  };

  const editTask = ({ oldTaskIndex, newTask }: IParamsEditTask) => {
    try {
      setTasks(
        tasks.map((currentTask, i) => {
          if (newTask.length === 0) {
            return currentTask;
          }

          return i === oldTaskIndex ? newTask : currentTask;
        })
      );

      toast.success("Task Editada!", {
        position: "top-center",
        theme: "dark",
      });
    } catch (error) {
      toast.error("Error! Verifique no console", {
        position: "top-center",
        theme: "dark",
      });
      console.log(`Error abaixo:\n ${error}`);
    }
  };

  const handleModalTrash = () => setModalTrashIsOpen(!modalTrashIsOpen);
  const handleModalEdit = () => setModalEditIsOpen(!modalEditIsOpen);

  return (
    <main className="w-screen">
      <div
        id="container-main"
        className="flex flex-col justify-start items-center"
      >
        <h2 className="text-[2.5rem] text-center font-[600] mt-[9.063rem]">
          Otimize seu tempo e se organize com o nosso Planejador Diário.
        </h2>
        <div id="to-do-list" className="w-[43%] mt-[11.25rem]">
          <div className="flex justify-between items-center border-b-[0.375rem] border-t-0 border-l-0 border-r-0 border-solid border-white pb-[0.875rem]">
            {mocksTitle.map((title, i) => (
              <span
                key={`title-${i + 1}`}
                className="text-[1.875rem] font-[600]"
              >
                {title}
              </span>
            ))}
          </div>
          <div id="list-items" className="mt-[2.063rem]">
            {tasks.map((task, i) => (
              <div
                key={`task-${i + 1}`}
                className="flex items-center justify-between w-[100%]"
              >
                <span className="w-[30%] text-[1.563rem] font-[200]">
                  {task}
                </span>
                <input type="checkbox" className="h-4 w-4 mr-[7rem]" />
                <div className=" flex items-center">
                  <button
                    className="ml-[0.313rem]"
                    onClick={() => {
                      setTaskIndex(i);
                      handleModalEdit();
                    }}
                  >
                    <img src="../../../public/svg/laps.svg" alt="#" />
                  </button>
                  <button
                    className="ml-[0.313rem]"
                    onClick={() => {
                      setTaskClicked(task);
                      handleModalTrash();
                    }}
                  >
                    <img src="../../../public/svg/trash.svg" alt="#" />
                  </button>
                </div>
              </div>
            ))}
            <div className="flex justify-between items-center w-[100%] mt-[0.75rem]">
              <input
                placeholder="Nova tarefa..."
                className="font-[200] text-[1.563rem] italic bg-transparent outline-none placeholder-white"
                onChange={(e) => setTextTask(e.target.value)}
                value={textTask}
                required
              />
              <button
                className="bg-transparent"
                onClick={() => {
                  addTask(textTask);
                  setTextTask("");
                }}
              >
                <img
                  src="../../../public/svg/add.svg"
                  alt="#"
                  className=" w-[1rem]"
                />
              </button>
            </div>
          </div>
        </div>
        {modalTrashIsOpen && (
          <ModalOfDelete
            handleModalTrash={handleModalTrash}
            trashTask={trashTask}
            taskClicked={taskClicked}
          />
        )}
        {modalEditIsOpen && (
          <ModalOfEdit
            handleModalEdit={handleModalEdit}
            editTask={editTask}
            taskIndex={taskIndex}
          />
        )}
      </div>
    </main>
  );
};
