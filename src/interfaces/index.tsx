export interface IModalOfEditProps {
  handleModalTrash: () => void;
  trashTask: (task: string) => void;
  taskClicked: string;
}

export interface IModalOfDeleteProps {
  handleModalTrash: () => void;
  trashTask: (task: string) => void;
  taskClicked: string;
}
