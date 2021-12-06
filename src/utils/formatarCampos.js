import { format } from "date-fns";

export function formatarData(dateStr) {
  const dateFormat = dateStr.replace(/[^0-9]/g, ",");

  return format(new Date(dateFormat), "dd/MM/yyyy");
}
