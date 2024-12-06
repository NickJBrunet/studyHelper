const sessionContainerMain = document.getElementById("session-container-main")
const sessionContainerPrevious = document.getElementById("session-container-previous")
const sessionContainerPreviousItems = document.getElementById("previous-sessions")






function getSessionCurrent()
{
    let sessionContainerCurrent = document.createElement("div")
    sessionContainerCurrent.id = "session-container-current"

    let header = document.createElement("h1")
    header.innerHTML = "CURRENT SESSION"

    sessionContainerCurrent.appendChild(header)

    return sessionContainerCurrent
}

function getSessionCreate()
{
    let sessionContainerCreate = document.createElement("div")
    sessionContainerCreate.id = "session-container-create"

    let header = document.createElement("h1")
    header.innerHTML = "CREATE SESSION"

    sessionContainerCreate.appendChild(header)

    return sessionContainerCreate
}

function getSessionPreviousItem()
{
    let sessionPreviousItem = document.createElement("div")
    // sessionPreviousItem.id = "session-container-create"
    sessionPreviousItem.classList.add("session-previous-item")

    return sessionPreviousItem
}


// console.log(sessionContainerMain.firstElementChild)
prependChild(sessionContainerMain, getSessionCreate())


for (let i = 0; i < 10; i++)
{
    sessionContainerPreviousItems.appendChild(getSessionPreviousItem())
}