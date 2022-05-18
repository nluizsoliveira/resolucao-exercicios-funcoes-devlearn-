// string.split("separador") -> Separa a string em um vetor a partir de um 
// separador. 

// Podemos usar o .split() usando espaço " " como um separador. Conseguindo
// assim um array em que cada posição possui um dos nomes como substring. 
const getNames = function(name) {
    // 1. Separar os nomes a partir de um padrão (v)
    // 2. Pegar o primeiro e colocar em firstName (v)
    // 3. Pegar todos os outros e colocar em surnames (+-)
    //     3.1: Colocar todos em um array usando spread operator (v)
    //     3.2: Re-construir o array em uma string
    //          Usar método .join(), que faz o contrário de .split. 
    //          Ele opera sobre um array e junta seus elementos usando
    //          um aglutinador.  
    const token = " "
    const namesArray = name.split(token)
    const [firstName, ...surnamesArray] = namesArray
    const surnames = surnamesArray.join(token)

    // Existem 2 abordagens: Usando for e usando spread operator. 
    return { firstName, surnames }
}

const alternativeGetSurnames = function(namesArray) {
        let surnames = ""
        for (let pos = 1; pos < namesArray.length; pos++) {
            // Corrrigir o espaço a mais com um if se quiser
            surnames += " "
            surnames += namesArray[pos]
        }

        return surnames
    }
    // Dúvida: Como atrelar uma função ao botão que eu nem tenho o argumento
    // Ainda? (v)

// Resposta: Criar uma função handler. 
const handleName = function() {
    // 1. pegar referência ao input e recupear seu valor (v)
    // 2. chamar a função getNames
    // 3. imprimir o resultado da função getNames

    const name = document.getElementById("1").value
    const { firstName, surnames } = getNames(name)
    console.log("First Name:", firstName)
    console.log("Surnames:", surnames)
}

const generateTag = function(name, content) {
    // 1. criar um elemento html no js com document.createElement(name) (v)
    // 2. modificar conteúdo do elemento criado usando .innerText (v)
    // 3. appendar elemento ao fim do body usando .appendChild

    let tag = document.createElement(name)
    tag.innerText = content
    document.body.appendChild(tag)

}

const handleTag = function() {
    //1. recuperar valor de input 2tagName (v)
    //2. recuperar valor de input 2tagContent (v)
    //3. chamar função generateTag(name, content) (v)
    const name = document.getElementById("2tagName").value
    const content = document.getElementById("2tagContent").value
    generateTag(name, content)
}