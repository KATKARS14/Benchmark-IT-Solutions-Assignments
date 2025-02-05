document.addEventListener("DOMContentLoaded", () => {
    const inputTodo = document.getElementById("input-todo");
    const buttonTodo = document.getElementById("button-todo");
    const ulTodo = document.getElementById("ul-todo");
    const deltodo = document.getElementById("button-del");
    const resetBtn = document.getElementById("button-reset");
    const fetchButton = document.getElementById("button-fetch");

    let editMode = false;
    let editElement = null;



    deltodo.addEventListener("click", () => {
        const confirmDel = window.confirm("Are u sure?");
        if (confirmDel) {
            document.getElementById("ul-todo").innerHTML = "";
        }
    })

    resetBtn.addEventListener("click", () => {

        inputTodo.value = "";
        location.reload();


    })

    buttonTodo.addEventListener("click", () => {
        const text = inputTodo.value;
        if (editMode) {
            editElement.querySelector(".text-todo").textContent = text;
            editMode = false;
            editElement = null;
            buttonTodo.textContent = "Add";
        } else {
            createTodo(text);
        }
        inputTodo.value = "";
        saveAllTodo();
    });



    const createTodo = (task) => {
        const li = document.createElement("li");
        li.className =
            "list-group-item d-flex justify-content-between align-items-start";
        li.innerHTML = `<span class="text-todo">${task}</span>
      <div class="btn-group" role="group" aria-label="Basic mixed styles example">
        <button type="button" class="btn btn-danger">Edit</button>
        <button type="button" class="btn btn-warning">Delete</button>
      </div>`;
        ulTodo.appendChild(li);
    };

    ulTodo.addEventListener("click", (e) => {
        if (e.target.classList.contains("btn-warning")) {
            const confirmDel = window.confirm("Are u sure?");
            if (confirmDel) {
                e.target.closest(".list-group-item").remove();
                saveAllTodo();
            }
        }

        if (e.target.classList.contains("btn-danger")) {
            const li = e.target.closest(".list-group-item");
            const taskTextElement = li.querySelector(".text-todo");

            /*inputTodo.value = taskText;
            buttonTodo.textContent = "Update";

            editElement = li;
            editMode = true;*/
            //creating input field

            if (!taskTextElement) return;

            const ipField = document.createElement("input");
            ipField.type = "text";
            ipField.value = taskTextElement.textContent;
            ipField.classList.add("form-control", "d-inline-block", "w-75");


            const savebtn = document.createElement("button");
            savebtn.textContent = "Save";
            savebtn.classList.add("btn", "btn-success", "btn-sm", "ms-2");

            taskTextElement.replaceWith(ipField);

            e.target.replaceWith(savebtn);

            ipField.focus();

            savebtn.addEventListener("click", () => {
                saveEditedTask(li, ipField, savebtn);
            });
        }
    });

    function saveEditedTask(li, ipField, savebtn) {
        const newText = ipField.value.trim();

        if (newText) {
            const span = document.createElement("span");
            span.classList.add("text-todo");
            span.textContent = newText;

            ipField.replaceWith(span);


            const editButton = document.createElement("button");
            editButton.textContent = "Edit";
            editButton.classList.add("btn", "btn-danger", "btn-sm", "ms-2");


            savebtn.replaceWith(editButton);

            saveAllTodo();

        }
    }

    const saveAllTodo = () => {
        const allTodos = [...document.querySelectorAll(".text-todo")].map(
            (task) => task.textContent
        );

        localStorage.setItem("allTodos", JSON.stringify(allTodos));
    };

    fetchButton.addEventListener("click", async () => {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/todos?_limit=2");
            const tasks = response.data;

            tasks.forEach(task => createTodo(task.title));
            saveAllTodo();
        } catch (error) {
            console.error("Error fetching tasks:", error);
        }
    });
    const loadAllTodo = () => {
        const allTodos = JSON.parse(localStorage.getItem("allTodos")) || [];
        allTodos.forEach((task) => createTodo(task));
    };

    loadAllTodo();
});


