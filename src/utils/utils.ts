export const transformData = (input: any) => {
  const { columns, data } = input;

  return data.map((row: any[]) => {
    const transformedItem: any = {};
    columns.forEach((col: any, index: number) => {
      transformedItem[col.key] = row[index];
    });
    return transformedItem;
  });
};
