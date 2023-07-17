const arr = ["Яблоко", "Апельсин", "Груша", "Мандарин", "Лошадь", "Ананас"];
console.log(arr);

function removeElement(array, element) {
  let indx = array.indexOf(element);
  if (indx > -1) {
    array.splice(indx, 1);
  } else {
    console.log("Елемента для видалення не знайдено");
  }
}

removeElement(arr, "Лошадь");
console.log(arr);