import { format } from "date-fns";

export default function formatarData(dateStr) {
  const dateToNumber = dateStr.replace(/[^0-9]/g, ",");

  return format(new Date(dateToNumber), "dd/MM/yyyy");
}
