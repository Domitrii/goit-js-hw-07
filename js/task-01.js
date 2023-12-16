const categories = document.querySelector("#categories")
const item = categories.getElementsByClassName("item")


console.log(`Number of categories: ${categories.children.length}`)

Array.from(item).forEach(item => {
    const itemTitel = item.querySelector("h2").textContent;
    
    const itemIndex = item.querySelectorAll('ul li').length;

    console.log(`Category: ${itemTitel}`)
    console.log(`Elements: ${itemIndex}`)
})
 