const ingredients = ["Картошка", "Грибы", "Чеснок", "Помидоры", "Зелень", "Приправы"]
const listRef = document.querySelector("#ingredients")

const insertItems = (array) => {
  const createItems = (array) =>
    array.map((item) => {
      const itemRef = document.createElement("li")
      itemRef.textContent = item
      return itemRef
    })

  listRef.append(...createItems(array))
}

insertItems(ingredients)
