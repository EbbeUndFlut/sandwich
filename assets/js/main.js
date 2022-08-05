let gesamtPreis = 0
let basisPreis = 0
let zutatenPreis = 0
let extraPreis = 0
const apfelmus = 2.49
const knoblauch = 5.99

const resultDiv = document.getElementsByClassName('result')[0]


const calc = (e) => {
    console.log(e.target.value)

    switch (e.target.value) {
        case 'apfelmus': e.target.checked ? zutatenPreis += apfelmus : zutatenPreis -= apfelmus
            break
        case 'knoblauch': e.target.checked ? zutatenPreis += knoblauch : zutatenPreis -= knoblauch
            break
        default: console.log('first')
    }


    gesamtPreis = basisPreis + zutatenPreis + extraPreis
    setResultDiv()
}
const basisSandwich = (event) => {
    switch (event.target.value) {
        case 'hamburger': basisPreis = 8.99
            break
        case 'chicken': basisPreis = 11.99
            break
        case 'leder': basisPreis = 2.99
            break
        default: console.log('Error')

    }
    createZutaten(event.target.value)
}

const createZutaten = (base) => {
    let parent = document.querySelector('.zutaten')
    parent.innerHTML = ""

    switch (base) {
        case 'hamburger':
            let zutat1 = document.createElement('input')
            zutat1.setAttribute('type', 'checkbox')
            zutat1.setAttribute('value', 'knoblauch')
            parent.appendChild(zutat1)

            let label = document.createElement('label')
            label.innerHTML = "Knoblauch"
            parent.appendChild(label)

            zutat1 = document.createElement('input')
            zutat1.setAttribute('type', 'checkbox')
            zutat1.setAttribute('value', 'apfelmus')
            parent.appendChild(zutat1)

            label = document.createElement('label')
            label.innerHTML = "Apfelmus (+ 2,49€)"
            parent.appendChild(label)

            break;
        case 'chicken':
            let zutat2 = document.createElement('input')
            zutat2.setAttribute('type', 'checkbox')
            zutat2.setAttribute('value', 'beef')
            parent.appendChild(zutat2)

            let label1 = document.createElement('label')
            label1.innerHTML = "Beef"
            parent.appendChild(label1)

            zutat2 = document.createElement('input')
            zutat2.setAttribute('type', 'checkbox')
            zutat2.setAttribute('value', 'banana')
            parent.appendChild(zutat2)

            label1 = document.createElement('label')
            label1.innerHTML = "Banana"
            parent.appendChild(label1)

            break;
        case 'leder':
            let zutat3 = document.createElement('input')
            zutat3.setAttribute('type', 'checkbox')
            zutat3.setAttribute('value', 'senkel')
            parent.appendChild(zutat3)

            let label2 = document.createElement('label')
            label2.innerHTML = "Schnürsenkel"
            parent.appendChild(label2)

            zutat3 = document.createElement('input')
            zutat3.setAttribute('type', 'checkbox')
            zutat3.setAttribute('value', 'sahne')
            parent.appendChild(zutat3)

            label2 = document.createElement('label')
            label2.innerHTML = "Sahne"
            parent.appendChild(label2)

            break;

    }
}

const setResultDiv = () => {
    resultDiv.innerHTML = gesamtPreis + '€'
}



