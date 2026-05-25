const submit = document.querySelector(".submit");
const clearAll = document.querySelector(".clearAll");
const input = document.querySelector("input");
const taskList = document.querySelector("ul");

// logic of functions
const clearAllTask = () => {
    taskList.innerHTML = "";
}
const addTask = () => {
    let task = input.value;
    if (task === "") {
        alert("Please enter a task!");
        return;
    }
    let item = document.createElement("li");
    item.innerHTML = `<p>${task}</p>
                        <div>
                            <button class="check"><i class="fa-solid fa-check" ></i></button>
                            <button class="delete"><i class="fa-solid fa-trash" ></i></button>
                        </div>    
    `
    // event listerner for check and delete button
    let checkBtn = item.querySelector(".check");
    let deleteBtn = item.querySelector(".delete");
    checkBtn.addEventListener("click", () => {
        let taskText = item.querySelector("p").style.textDecoration = "line-through";
    });
    deleteBtn.addEventListener("click", () => {
        item.remove();
    });
    taskList.appendChild(item);
    input.value = "";
}


// Eventlisterners of fuction
submit.addEventListener("click", addTask);
clearAll.addEventListener("click", clearAllTask);