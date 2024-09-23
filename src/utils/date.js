const date = new Date();
const day = date.getDay();
const dayOfMonth = date.getDate()
const month = date.getMonth();
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const dayName = dayNames[day]
const monthName = monthNames[month]

export {dayOfMonth,dayName,monthName}