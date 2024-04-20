export interface IModalOfEditProps {
  handleModalEdit: () => void;
  editTask: ({ oldTaskIndex, newTask }: IParamsEditTask) => void;
  taskIndex: number | null;
}

export interface IModalOfDeleteProps {
  handleModalTrash: () => void;
  trashTask: (task: string) => void;
  taskClicked: string;
}

export interface IParamsEditTask {
  oldTaskIndex: number | null;
  newTask: string;
}
