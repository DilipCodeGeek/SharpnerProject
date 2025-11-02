const form = document.getElementById('expenseForm');
const list = document.getElementById('expenseList');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const amount = document.getElementById('amount').value;
  const desc = document.getElementById('description').value;
  const cat = document.getElementById('category').value;

  const expense = { amount, desc, cat };

  localStorage.setItem(desc, JSON.stringify(expense));
  showExpense(expense);
  form.reset();
});

function showExpense(expense) {
  const li = document.createElement('li');
  li.textContent = `${expense.amount} - ${expense.desc} - ${expense.cat} `;

  // Common button style
  const btnStyle = `
    border: none;
    border-radius: 6px;
    padding: 5px 12px;
    margin-left: 6px;
  `;

  // Edit button
  const editBtn = document.createElement('button');
  editBtn.textContent = 'Edit Expense';
  editBtn.style.cssText = btnStyle;
  editBtn.onclick = () => {
    document.getElementById('amount').value = expense.amount;
    document.getElementById('description').value = expense.desc;
    document.getElementById('category').value = expense.cat;

    localStorage.removeItem(expense.desc);
    li.remove();
  };

  // Delete button
  const delBtn = document.createElement('button');
  delBtn.textContent = 'Delete Expense';
  delBtn.style.cssText = btnStyle;
  delBtn.onclick = () => {
    localStorage.removeItem(expense.desc);
    li.remove();
  };

  li.appendChild(editBtn);
  li.appendChild(delBtn);
  list.appendChild(li);
}
