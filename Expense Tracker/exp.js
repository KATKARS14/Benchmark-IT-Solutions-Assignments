// Get elements from DOM
var expenseForm = document.getElementById("expense-form");
var amountInput = document.getElementById("amount");
var dateInput = document.getElementById("date");
var categoryInput = document.getElementById("category");
var descriptionInput = document.getElementById("description");
var expenseList = document.getElementById("expense-list");
var totalExpensesDisplay = document.getElementById("total-expenses");
var filterCategory = document.getElementById("filter-category");
// Load expenses from localStorage
var expenses = JSON.parse(localStorage.getItem("expenses") || "[]");
// Function to render expenses in the UI
function renderExpenses() {
    expenseList.innerHTML = "";
    var total = 0;
    if (expenses.length === 0) {
        expenseList.innerHTML = "<p style='text-align:center; color:gray;'>No expenses added yet.</p>";
        totalExpensesDisplay.textContent = "0";
        return;
    }
    var filteredExpenses = (filterCategory === null || filterCategory === void 0 ? void 0 : filterCategory.value) === "All"
        ? expenses
        : expenses.filter(function (expense) { return expense.category === filterCategory.value; });
    filteredExpenses.forEach(function (expense) {
        var li = document.createElement("li");
        li.innerHTML = "".concat(expense.date, " - <strong>").concat(expense.category, "</strong>: Rs").concat(expense.amount, " (").concat(expense.description, ")");
        // Delete button
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "❌";
        deleteButton.addEventListener("click", function () { return deleteExpense(expense.id); });
        li.appendChild(deleteButton);
        expenseList.appendChild(li);
        total += expense.amount;
    });
    totalExpensesDisplay.textContent = total.toString();
}
// Add expense event listener
if (expenseForm) {
    expenseForm.addEventListener("submit", function (event) {
        event.preventDefault();
        var newExpense = {
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
// Delete an expense
var deleteExpense = function (id) {
    expenses = expenses.filter(function (expense) { return expense.id !== id; });
    localStorage.setItem("expenses", JSON.stringify(expenses));
    renderExpenses();
};
// Filter expenses when category changes
filterCategory === null || filterCategory === void 0 ? void 0 : filterCategory.addEventListener("change", renderExpenses);
// Load expenses when page loads
document.addEventListener("DOMContentLoaded", renderExpenses);
