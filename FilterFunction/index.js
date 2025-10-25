// Add input element inside form, before button, to take fruit description
const form = document.querySelector('form');
const description = document.createElement('input');
description.type = 'text';
description.id = 'description';
description.placeholder = 'Enter fruit description...';
form.insertBefore(description, document.querySelector('button'));


// Show the fruit description in italics on the next line
form.addEventListener('submit', function (event) {
    event.preventDefault();

    const fruitInput = document.getElementById('fruit-to-add');
    const fruitName = fruitInput.value.trim();
    const fruitDesc = description.value.trim();

    if (!fruitName || !fruitDesc) return;

    const li = document.createElement('li');
    li.className = 'fruit';

    // Fruit name
    const fruitNameText = document.createElement('p');
    fruitNameText.textContent = fruitName;
    li.appendChild(fruitNameText);

    // Fruit description in italics (on next line)
    const descPara = document.createElement('p');
    const italic = document.createElement('i');  // test expects italic tag
    italic.textContent = fruitDesc;
    descPara.appendChild(italic);
    li.appendChild(descPara);

    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'x';
    deleteBtn.className = 'delete-btn';
    li.appendChild(deleteBtn);

    // Append to fruit list
    const fruitList = document.querySelector('.fruits');
    fruitList.appendChild(li);

    // Clear inputs
    fruitInput.value = '';
    description.value = '';
});


// Create a filter that shows only those fruits whose either name or description or both matches the entered text
const filter = document.getElementById('filter');

filter.addEventListener('keyup', function (e) {
    const text = e.target.value.toLowerCase();
    const fruitItems = document.getElementsByClassName('fruit');

    for (let i = 0; i < fruitItems.length; i++) {
        const currentFruit = fruitItems[i].children[0].textContent.toLowerCase();
        const currentFruitDesc = fruitItems[i].querySelector('p i')
            ? fruitItems[i].querySelector('p i').textContent.toLowerCase()
            : '';

        // match name OR description
        if (currentFruit.includes(text) || currentFruitDesc.includes(text)) {
            fruitItems[i].style.display = 'flex';
        } else {
            fruitItems[i].style.display = 'none';
        }
    }
});
