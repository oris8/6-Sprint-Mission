export default function formatDate(inputDate: string | Date) {
  const date = new Date(inputDate);

  if (isNaN(date.getTime())) {
    // 입력 문자열이 유효하지 않은 경우 처리
    throw new Error("Invalid date string");
  }

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}. ${month}. ${day}`;
}
