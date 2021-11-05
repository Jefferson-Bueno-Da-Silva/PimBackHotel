export const formatDate = (date: string) : string  => {
  const formattedDate = new Date(date).toLocaleDateString().split("/");
  return `${formattedDate[1]}/${formattedDate[0]}/${formattedDate[2]}`;
};