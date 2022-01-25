let ajouter = document.querySelector(".ajouter")

ajouter.addEventListener("click", () => {
    let ul = document.querySelector("ul")
    let li = document.createElement("li");
    li.className = "d-flex my-2"
    let div = document.createElement("div")
    div.className = "icons"
    let p = document.createElement("p")
    p.className = "m-0"
    p.innerText = document.querySelector("input").value
    li.append(p, div)
    // Validate

    let validate = document.createElement("button")
    validate.className = "btn bg-green mx-1"
    validate.type = "button"

    let iconValidate = document.createElement("i")
    iconValidate.className = "fas fa-check"
    validate.appendChild(iconValidate)

    validate.addEventListener("click", () => {
        li.classList.toggle("bg-success")
    })

    // Edit
    let edit = document.createElement("button")
    edit.className = "btn btn-warning mx-1"
    edit.type = "button"

    let iconEdit = document.createElement("i")
    iconEdit.className = "far fa-edit"
    edit.appendChild(iconEdit)


    // Delete
    let deleted = document.createElement("button")
    deleted.className = "btn btn-danger mx-1"
    deleted.type = "button"

    let iconDelete = document.createElement("i")
    iconDelete.className = "far fa-trash-alt"
    deleted.appendChild(iconDelete)

    deleted.addEventListener("click", () => {
        li.remove()
    })

    div.append(validate, edit, deleted)

    ul.appendChild(li)
    document.querySelector("input").value = ""

    edit.addEventListener("click", () => {
        let inputEdit = document.createElement("input")
        inputEdit.value = li.querySelector("p").textContent
        li.insertAdjacentElement("afterbegin", inputEdit)
        li.querySelector("p").remove()

        inputEdit.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                let newText = document.createElement("p")
                newText.className = "m-0"
                newText.innerText = inputEdit.value
                li.insertAdjacentElement("afterbegin", newText)
                inputEdit.remove()
            }
        })
    })

})

let all = document.querySelector(".all")
let done = document.querySelector(".done")
let todo = document.querySelector(".todo")
let deleteAll = document.querySelector(".deleteAll")

all.addEventListener("click", () => {
    let liste = document.querySelectorAll("ul>li")
    liste.forEach(e => {
        e.classList.add("d-flex")
        e.classList.remove("d-none")
    })
})

done.addEventListener("click", () => {
    let liste = document.querySelectorAll("ul>li")
    liste.forEach(e => {
        if (e.classList.contains("bg-success") === false) {
            e.classList.add("d-none")
            e.classList.remove("d-flex")
        } else {
            e.classList.remove("d-none")
            e.classList.add("d-flex")
        }
    })
})

todo.addEventListener("click", () => {
    let liste = document.querySelectorAll("ul>li")
    liste.forEach(e => {
        if (e.classList.contains("bg-success")) {
            e.classList.add("d-none")
            e.classList.remove("d-flex")
        } else {
            e.classList.remove("d-none")
            e.classList.add("d-flex")
        }
    })
})

deleteAll.addEventListener("click", () => {
    let liste = document.querySelectorAll("ul>li")
    liste.forEach(e => {
        e.remove()
    })
})