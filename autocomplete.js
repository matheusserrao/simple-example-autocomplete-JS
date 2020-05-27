const fruits = 
[
    'abacate',
    'abacaxi',
    'bacaba',
    'banana',
    'cacau',
    'cajá',
    'figo',
    'framboesa',
    'goiaba',
    'groselha',
    'ingá',
    'jabuticaba',
    'jaca',
    // more...
]

const autoComplete = (fruit) =>
{
    fruit = fruit.toLowerCase()
    
    return fruits.filter( value => {
        const lowerCaseValue = value.toLowerCase()
        
        return lowerCaseValue.includes(fruit)
    })
}