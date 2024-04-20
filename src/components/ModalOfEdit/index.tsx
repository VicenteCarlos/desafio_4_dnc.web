import { IModalOfEditProps } from "@/interfaces";
import { createPortal } from "react-dom";

export const ModalOfDelete = ({
  handleModalTrash,
  trashTask,
  taskClicked,
}: IModalOfEditProps) => {
  const portal = document.getElementById("portal-edit");

  return portal
    ? createPortal(
        <div
          id="container-portal"
          className="fixed top-0 bottom-0 right-0 left-0 flex justify-center items-center bg-transparent"
        >
          <div
            id="modal-delete"
            className="bg-white text-black flex flex-col justify-center items-center w-[47.375rem] h-[27.25rem] rounded-[0.625rem]"
          >
            <h2 className="font-[600] text-[2.188rem]">
              Deseja excluir esse item?
            </h2>
            <p className="font-[400] text-[1.563rem] mt-[3.563rem] mb-[2.563rem]">
              Colocar as descrições das tarefas aqui.
            </p>
            <div className="flex mt-[5.313rem]">
              <button
                onClick={handleModalTrash}
                className="w-[16.776rem] h-[4.813rem] text-center text-white text-[1.875rem] font-[600] bg-[#0C70F2] border border-solid border-[#0C70F2] rounded-[0.625rem] mr-[1rem]"
              >
                Não
              </button>
              <button
                onClick={() => {
                  trashTask(taskClicked);
                  handleModalTrash();
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
