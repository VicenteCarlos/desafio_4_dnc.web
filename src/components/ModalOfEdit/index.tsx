import { IModalOfEditProps } from "@/interfaces";
import { useState } from "react";
import { createPortal } from "react-dom";

export const ModalOfEdit = ({
  handleModalEdit,
  editTask,
  taskIndex,
}: IModalOfEditProps) => {
  const portal = document.getElementById("portal-edit");
  const [newTask, setNewTask] = useState<string>("");
  console.log(taskIndex)

  return portal
    ? createPortal(
        <div
          id="container-portal"
          className="fixed top-0 bottom-0 right-0 left-0 flex justify-center items-center bg-transparent"
        >
          <div
            id="modal-edit"
            className="bg-white text-black flex flex-col justify-center items-center w-[47.375rem] h-[27.25rem] rounded-[0.625rem]"
          >
            <h2 className="font-[600] text-[2.188rem]">
              Deseja editar esse item?
            </h2>
            <input
              placeholder="Colocar as descrições das tarefas aqui."
              className="font-[400] text-[1.563rem] text-center mt-[3.563rem] mb-[2.563rem] w-full outline-none placeholder-[#000000]"
              onChange={(e) => setNewTask(e.target.value)}
            />

            <div className="flex mt-[5.313rem]">
              <button
                onClick={handleModalEdit}
                className="w-[16.776rem] h-[4.813rem] text-center text-white text-[1.875rem] font-[600] bg-[#0C70F2] border border-solid border-[#0C70F2] rounded-[0.625rem] mr-[1rem]"
              >
                Não
              </button>
              <button
                onClick={() => {
                  editTask({ oldTaskIndex: taskIndex, newTask });
                  handleModalEdit();
                }}
                className="w-[16.776rem] h-[4.813rem] text-center text-[1.875rem] font-[500] bg-transparent border border-solid rounded-[0.625rem]"
              >
                Sim
              </button>
            </div>
          </div>
        </div>,
        portal
      )
    : null;
};
