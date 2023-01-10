let today = new Date();
let christmas = new Date(today.getFullYear(), 11, 25);

if (today.getMonth() == 11 && today.getDate() > 25);
{
  christmas.getFullYear(christmas.getFullYear() + 1);
}

let dayDuration = 1000 * 60 * 60 * 24;
console.log(
  Math.ceil((christmas.getTime() - today.getTime()) / dayDuration) +
    " days left until Christmas!"
);
