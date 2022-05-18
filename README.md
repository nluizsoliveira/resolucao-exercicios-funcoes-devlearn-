# resolucao-exercicios-funcoes-devlearn-Codelab Sanca

## Exercício 1
Implementar uma função `getNames()`que recebe como argumento uma string `name` e retorna 2 Strings:

1. firstName
2. surnames

EXEMPLO:

- `name`: Maria Joaquina da Silva
- `firstName`: Maria
- `surnames`: Joaquina da Silva

```
const getNames = function(name){
    ...

    return {firstName, surnames}
}
```
## Exercício 2

2) faça uma "fábrica de elementos html".
Você deve implementar uma função generate_element que recebe dois argumentos: 

1. nome da tag
2. conteúdo da tag
   
A função deve criar a tag e inserí-la ao final do body. 

OBS: Existe um método chamado document.createElement() que cria elementos no javascript.
```
create_element("p", "aula de funcoes")
```
resultado ao fim do `<body>`:
```
<p>aula de funcoes</p>
```
