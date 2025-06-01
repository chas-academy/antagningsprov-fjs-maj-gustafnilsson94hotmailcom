

function uppg8()
{

    // skapa en array med fem person obkjet
    // varje person objekt ska ha två properties, name och age

    // skapa en fuktion som tar in en array som argument
    // skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
    //  över 30 år som skrivs ut i konsolen

    // anropa funktionen och skicka med arrayen som argument

    let persons = 
    [
        { name: "Nadja", age: 26 },
        { name: "Björn", age: 38 },
        { name: "Selma", age: 47 },
        { name: "Arvid", age: 28 },
        { name: "Rikard", age: 31 }
    ]

    function writeOverThirty(arr) 
    {
        for (let i = 0; i < arr.length; i++)
            if (arr[i].age > 30) {
                console.log(arr[i].name)
            }
    }

    writeOverThirty(persons)
}

module.exports = { uppg8 };
uppg8();