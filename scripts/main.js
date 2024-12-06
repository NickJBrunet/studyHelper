
const levelContainer = document.getElementById("level-container")
const mainContainer = document.getElementById("main-container")
const brainContainer = document.getElementById("brain-container")
const brainIcon = document.getElementById("brain-icon")

const brainDamageElement = document.getElementById("damage")
const brainXpElement = document.getElementById("xpPer")
const brainHealthElement = document.getElementById("brainHealth")
const brainLevelElement = document.getElementById("level")

let brainDamage = true
let brainXp = 0
let brainLevel = 1
const brainHealth = 100

function prependChild(parentEle, newFirstChildEle) {
    console.log(newFirstChildEle)
    console.log(parentEle)
    parentEle.insertBefore(newFirstChildEle, parentEle.firstElementChild)
}






function addBrainXp(xp)
{
    brainXp += xp
    let percentage = (brainXp/getBrainXpMax()) * 100
    setPercent(levelInterval, percentage)

    if (brainXp > getBrainXpMax())
    {
        brainLevel += 1
        brainXp = 0
    }
}

function getBrainXpMax()
{
    return brainLevel * 100
}

function stopBrainDamage()
{
    brainDamage = false
}

function startBrainDamage(damage=100)
{
    let iterationTime = brainHealth/(damage/100)
    let iterationCount = 10
    let count = 0

    brainDamage = true

    let brainDamageInterval = setInterval(function(){
        count += 1
        let timePassed = count * iterationTime
        let percentage = (timePassed/iterationTime) * iterationCount

        if (count >= iterationCount) 
        {
            percentage = 0
            count = 0
            addBrainXp(1)
        }
        brainDamageElement.innerHTML = damage
        brainXpElement.innerHTML = brainXp + "/" + getBrainXpMax()
        brainHealthElement.innerHTML = Math.round(100 - percentage) + "/" + "100"
        brainLevelElement.innerHTML = brainLevel

        setPercent(brainInterval, 100 - percentage)
        
        if (brainDamage === false) 
        {
            setPercent(brainInterval, 100)
            clearInterval(brainDamageInterval)
            return
        }
    }, iterationTime)
}




let levelInterval = createContainer(100, 20) 
let brainInterval = createContainer(10, 10, false) 
setPercent(brainInterval, 100)
levelContainer.appendChild(levelInterval)
brainContainer.appendChild(brainInterval)

startBrainDamage()