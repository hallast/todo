
async function fetchTasks() {
    const response = await fetch('/api/task')

    if (response.status !== 200) {
        console.log("Ülesannete laadimine ebaõnnestus")
        return
    }

    const toDos = await response.json()
    console.log(toDos)
}

fetchTasks()