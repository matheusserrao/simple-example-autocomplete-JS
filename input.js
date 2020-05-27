const input = document.querySelector('.input')
const suggestions = document.querySelector('.suggestions')

input.addEventListener('input', ( {target }) => {

    const { value } = target

    if (value && value.length)
    {
        const fruits = autoComplete(value)
        

        suggestions.innerHTML = `
            ${fruits.map( fruit => {
                return ( `<li>${fruit}</li>`)
            }).join('')}
        `
    }
})