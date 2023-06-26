const sortedItem = document.querySelectorAll("#today-sorted")

const listItems = ['ALOK', 'ANNA', 'Acraze', 'Aline Rocha', 'Antdot', 'Aura Vortex', 'Azteck', 'B Jones', 'Bakermat', 'Bassjackers', 'Beltran', 'Bhaskar', 'Binaryh', 'Blastoyz', 'Bora Uzer', 'Brennan Heart', 'Brina Knauss', 'Bruno Martini', 'Capoon', 'Carola', 'Cat Dealers', 'Chapeleiro', 'Chemical Surf', 'Coone', 'DJ Glen', 'Da Tweekaz', 'Deorro', 'Diego Miranda', 'Dimitri Vegas & Like Mike', 'Dino Lenny', 'Don Diablo', 'Doozie', 'Dubdogz', 'Fernanda Pistelli', 'Freedom Fighters', 'Gordo', 'Héctor Oaks', 'Indira Paganotto', 'Inndrive', 'Jørd', 'KENYA20HZ', 'Korolova', 'Layla Benitez', 'Liquid Soul', 'Liu', 'Lost Frequencies', 'MANDY', 'MC STRETCH', 'Maz', 'Meca', 'Mind Against', 'Patrick Mason', 'Paul Kalkbrenner', 'Pontifexx', 'Pretty Pink', 'Sara Landry', 'Sebastian Ingrosso', 'Sevenn', 'Steve Angello', 'Steve Aoki', 'Sub Zero Project', 'Vinne', 'Vintage Culture', 'Yves V', 'Âme', 'Öwnboss']


const lotteryItems = []

function checkHour() {
    const date = new Date()
    const currentHour = date.getHours()

    if(currentHour == 0) {
        let todayName = Math.floor(Math.random() * listItems.length)

        lotteryItems.push(listItems[todayName])    
        const todaySorted = document.querySelector("#today-sorted")
        todaySorted.children[5].innerText = listItems[todayName]
        todaySorted.children[5].setAttribute("href", `https://www.youtube.com/results?search_query=${listItems[todayName]}`)
        todaySorted.children[5].setAttribute("target", "_blank")

        listItems.splice(listItems.indexOf(listItems[todayName]), 1)

        const progress = document.querySelector("#progress")
        progress.children[5].innerText = `${lotteryItems.length}/${listItems.length + lotteryItems.length}`
    }
}

function changeAudio() {
    let todayName = Math.floor(Math.random() * 4)
    document.querySelector("#audio").innerHTML = `
        <audio autoplay loop>
            <source src="./assets/audio/audio${todayName}.wav">
        </audio>
    `
}

document.querySelector("body").addEventListener("click", () => { document.querySelector("audio").play() })


checkHour()
setInterval(checkHour, 3600000)

changeAudio()
setInterval(changeAudio, 3600000)