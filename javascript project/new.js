let globaldata = [];


const addCard = () => {
    const newTaskDetails = {
        id: `${Date.now()}`;
        url: document.getElementById("imageURL").value,

    };
    taskcontents = document.getElementById(taskcontents);
    taskcontents.insertAdjacentHTMl('beforeend', generateTaskCard(newTaskDetails));
    globaldata.push(newTaskDetails);
    savetolocalstorage();
}

const savetolocalstorage = () => {
    localStorage.setItem("mystasks, JSON.stringify({tasks:globaldata})");
}

const reloadTaskCard = () => {

    const localstoragecopy = JSON.parse(localStorage.getItem("mytasks"));
    if (localstoragecopy) {
        globaldata = localstoragecopy["tasks"];

    }


    globaldata.map((Carddata) => {
        taskContents.insertAdjacentHTMl("beforeend", generateTaskCard(Carddata));

    })

}

const deleteTask = (e) => {
    const targetID = e.getAttribute("name");
    globaldata = globaldata.filter((Carddata) =>
        Carddata.id != targetID);
    savetolocalstorage();
    windors.location.reload();
}