const button = document.querySelector('.input__container button');
const input = document.querySelector('.input__container input');
const list = document.querySelector('.todo__list');

button.addEventListener('click', () => {
	const li = document.createElement('li');
	li.className = "todo__list-item";
	li.innerText = input.value;
	const deleteBtn = document.createElement("button");
	deleteBtn.innerText = "Delete";
	li.appendChild(deleteBtn);
	list.appendChild(li);
	input.value = "";

	deleteBtn.addEventListener('click', () => {
		list.removeChild(li);
	});
})
