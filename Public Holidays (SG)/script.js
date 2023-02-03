n = new Date();
y = n.getFullYear();
const month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
m = month[n.getMonth()];
d = n.getDate();

document.getElementById("date").innerHTML = d + " " + m + " " + y;
