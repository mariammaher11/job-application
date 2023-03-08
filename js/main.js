window.addEventListener("load", () => {
    local = JSON.parse(localStorage.getItem("Tasks")) || [];
    const form = document.querySelector("form");
    task_input = document.querySelector("form input");
    imageInput = document.querySelector("#image-url");
    image = document.querySelector("img");



    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const todo = {
            task: e.target.elements.task.value,
            img: e.target.elements.img.value,
            job: e.target.elements.job.value,
            salary: e.target.elements.salary.value
        };


        if (!e.target.elements.task.value && !e.target.elements.img.value) {
            alert("Fill the input");
        } else {
            local.push(todo);
            localStorage.setItem("Tasks", JSON.stringify(local));
        }



        e.target.reset();
        displayTasks();

    });
    displayTasks();
});

function displayTasks() {
    const list_task = document.querySelector("#Tasks");
    list_task.innerHTML = "";

    local.forEach((todo) => {
        list_task.innerHTML += `<div class="row mb-2">
        <div class="col-10">
            <input type="text" class=" col-12 py-2 " value="${todo.task}" readonly>
            <img src="${todo.img}" alt="" value="" id="image" class="materialboxed">
            <input type="text" class=" col-12 py-2 " value="${todo.job}" readonly>
            <input type="text" class=" col-12 py-2 " value="${todo.salary}" readonly>

        </div>
        <div class="col-lg-2">
            <div class="row">
                <button class="btn btn-dark edit col-lg-5 col-4 me-2">Edit</button>
                <button id="button-36" class="btn btn-light delete col-lg-5 col-4 ">Delete</button>
            </div>
        </div>
      </div>`;

        //edit 
        edit_btn = document.querySelectorAll("button.edit")
        edit_input = document.querySelectorAll("#Tasks input")

        edit_btn.forEach((edt, i) => {
            edt.addEventListener("click", () => {

                if (edt.innerText == "Edit") {
                    edt.innerText = "Update";
                    edit_input[i].removeAttribute("readonly");
                } else {
                    edt.innerText = "Edit";
                    edit_input[i].setAttribute("readonly", "readonly");
                    local[i].task = edit_input[i].value;
                    localStorage.setItem("Tasks", JSON.stringify(local));
                }

            });
        });
        //delete
        delete_btn = document.querySelectorAll("button.delete")
        delete_btn.forEach((del, i) => {
                del.addEventListener("click", () => {
                    local.splice(i, 1);
                    localStorage.setItem("Tasks", JSON.stringify(local));
                    displayTasks();
                });
            })
            // image


    });



}