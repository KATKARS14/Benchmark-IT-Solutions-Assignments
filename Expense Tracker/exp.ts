
interface Expense {
    id: string;
    amount: number;
    date: string;
    category: string;
    description: string;
}



const expenseForm = document.getElementById("expense-form") as HTMLFormElement;
const amountInput = document.getElementById("amount") as HTMLInputElement;
const dateInput = document.getElementById("date") as HTMLInputElement;
const categoryInput = document.getElementById("category") as HTMLSelectElement;
const descriptionInput = document.getElementById("description") as HTMLInputElement;

const expenseList = document.getElementById("expense-list") as HTMLUListElement;
const totalExpensesDisplay = document.getElementById("total-expenses") as HTMLSpanElement;
const filterCategory = document.getElementById("filter-category") as HTMLSelectElement;



let expenses: Expense[] = JSON.parse(localStorage.getItem("expenses") || "[]");


function renderExpenses() {
    expenseList.innerHTML = "";
    let total = 0;

    if (expenses.length === 0) {
        expenseList.innerHTML = "<p style='text-align:center; color:gray;'>No expenses added yet.</p>";
        totalExpensesDisplay.textContent = "0";
        return;
    }

    const filteredExpenses = filterCategory?.value === "All"
        ? expenses
        : expenses.filter(expense => expense.category === filterCategory.value);

    filteredExpenses.forEach(expense => {
        const li = document.createElement("li");
        li.innerHTML = `${expense.date} - <strong>${expense.category}</strong>: Rs${expense.amount} (${expense.description})`;


        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => deleteExpense(expense.id));

        li.appendChild(deleteButton);
        expenseList.appendChild(li);

        total += expense.amount;
    });

    totalExpensesDisplay.textContent = total.toString();
}


if (expenseForm) {
    expenseForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const newExpense: Expense = {
            id: Date.now().toString(),
            amount: Number(amountInput.value),
            date: dateInput.value,
            category: categoryInput.value,
            description: descriptionInput.value
        };

        expenses.push(newExpense);
        localStorage.setItem("expenses", JSON.stringify(expenses));

        amountInput.value = "";
        dateInput.value = "";
        descriptionInput.value = "";

        alert("Expense added successfully!");
    });
}


const deleteExpense = (id: string) => {
    expenses = expenses.filter(expense => expense.id !== id);
    localStorage.setItem("expenses", JSON.stringify(expenses));
    renderExpenses();
};


filterCategory?.addEventListener("change", renderExpenses);


document.addEventListener("DOMContentLoaded", renderExpenses);
