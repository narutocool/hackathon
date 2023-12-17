export function formatDate(date: Date) {
  // get the hour, minute, and month from the date object
  let hour = date.getHours();
  let minute = date.getMinutes();
  let day = date.getDate();
  let month = date.toLocaleString("default", { month: "long" }); // returns the full month name
  let year = date.getFullYear();

  // return the formatted string
  return (
    hour.toString().padStart(2, "0") +
    ":" +
    minute.toString().padStart(2, "0") +
    ", " +
    day +
    " " +
    month +
    " " +
    year
  );
}
