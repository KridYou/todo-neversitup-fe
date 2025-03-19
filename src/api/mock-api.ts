import { transformData } from '../utils/utils'
import { Todo } from '@/interface/todo.interface';

export const fetchTodos = async (data: any): Promise<Todo[]> => {
  const formatDateAndTime = (rawDate: Date) => {
    const date = new Date(rawDate);

    const formattedDate = date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
    });
    const formattedTime = date.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
    });

    return { formattedDate, formattedTime };
  };

  const jsonData: Todo[] = transformData(data);

  const formattedData = jsonData.map((item: any) => {
    const { formattedDate, formattedTime } = formatDateAndTime(item.date);
    return { ...item, formattedDate, formattedTime };
  });
  return formattedData;
};
