export interface TaskData {
  id: string;
  title: string;
  content: string;
  idColumn: string;
}

export interface ColumnData {
  id: string;
  title: string;
}

export interface DialogParams {
  id: string;
  title: string;
  message: string;
  isOpen: boolean;
}
