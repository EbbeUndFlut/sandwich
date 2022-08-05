let gesamtPreis = 0
let basisPreis = 0
let zutatenPreis = 0
let extraPreis = 0

const calc = (e) => {
    console.log(e.target.value)
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
            zutat1.setAttribute('type', 'radio')
            zutat1.setAttribute('value', 'knoblauch')
            zutat1.setAttribute('onchange', 'calc(event)')
            parent.appendChild(zutat1)

            let label = document.createElement('label')
            label.innerHTML = "Knoblauch"
            parent.appendChild(label)

            zutat1 = document.createElement('input')
            zutat1.setAttribute('type', 'radio')
            zutat1.setAttribute('value', 'apfelmus')
            zutat1.setAttribute('onchange', 'calc(event)')
            parent.appendChild(zutat1)

            label = document.createElement('label')
            label.innerHTML = "Apfelmus"
            parent.appendChild(label)

            break;
        case 'chicken':
            let zutat2 = document.createElement('input')
            zutat2.setAttribute('type', 'radio')
            zutat2.setAttribute('value', 'beef')
            zutat2.setAttribute('onchange', 'calc(event)')
            parent.appendChild(zutat2)

            let label1 = document.createElement('label')
            label1.innerHTML = "Beef"
            parent.appendChild(label1)

            zutat2 = document.createElement('input')
            zutat2.setAttribute('type', 'radio')
            zutat2.setAttribute('value', 'banana')
            zutat2.setAttribute('onchange', 'calc(event)')
            parent.appendChild(zutat2)

            label1 = document.createElement('label')
            label1.innerHTML = "Banana"
            parent.appendChild(label1)

            break;
        case 'leder':
            let zutat3 = document.createElement('input')
            zutat3.setAttribute('type', 'radio')
            zutat3.setAttribute('value', 'senkel')
            zutat3.setAttribute('onchange', 'calc(event)')
            parent.appendChild(zutat3)

            let label2 = document.createElement('label')
            label2.innerHTML = "Schnürsenkel"
            parent.appendChild(label2)

            zutat3 = document.createElement('input')
            zutat3.setAttribute('type', 'radio')
            zutat3.setAttribute('value', 'sahne')
            zutat3.setAttribute('onchange', 'calc(event)')
            parent.appendChild(zutat3)

            label2 = document.createElement('label')
            label2.innerHTML = "Sahne"
            parent.appendChild(label2)

            break;

    }


}





