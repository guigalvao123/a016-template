const filmes = [
  {
    titulo: 'O Auto da Compadecida',
    ano: 2000,
    diretor: 'Guel Arraes',
    elenco: [
      'Selton Mello',
      'Mateus Nachtergaele',
      'Marco Nanini',
      'Fernanda Montenegro',
    ],
  },
  {
    titulo: 'Carandiru',
    ano: 2001,
    diretor: 'Hector Babenco',
    elenco: [
      'Wagner Moura',
      'José Carlos Vasconcelos',
      'Ailton Graça',
      'Caio Blat',
    ],
  },
  {
    titulo: 'Aquarius',
    ano: 2012,
    diretor: 'Kléber Mendonça Filho',
    elenco: [
      'Sônia Braga',
      'Humberto Carrão',
      'Maeve Jinkings',
      'Bárbara Colen',
    ],
  },
]

for (let filme in filmes){
  console.log(`${filmes[filme].titulo} de ${filmes[filme].ano} foi dirigido por ${filmes[filme].diretor} e tem como elenco ${filmes[filme].elenco}.`)
}
console.log(`============================================`)

for (let filme of filmes){
  console.log(`${filme.titulo} de ${filme.ano} foi dirigido por ${filme.diretor} e tem como elenco ${filme.elenco}.`)
}

// Use o array de filmes que esta no template
// Crie um laço for para exibir o título, o ano e o diretor dos filmes como uma String
// Crie um laço for dentro do primeiro, para concatenar o elenco numa String
// A saída deve se parecer com:
// “O Homem que copiava, de 2003, dirigido por Jorge Furtado”
// “Tem no elenco: Lázaro Ramos, Leandra Leal, Pedro Cardoso”

/*
laço pra cada filme {
  console.log('titulo, ano, diretor')
  console.log("estrelando: ")
  laço no elenco{
    cada pessoa no elen*
laço pra cada filme {
  console.log('titulo, ano, diretor')
  console.log("estrelando: ")
  laço no elenco{
    cada pessoa no elenco
  }
}
*/


// escreva seu código abaixo 👇🏻

// Vamos criar um código que cria e recebe um array com os últimos 4 resultados da Mega-sena. Portanto, precisaremos de um array de arrays.
// Depois, devemos verificar se o número de itens do array que contém os jogos contém exatamente 4 resultados
// Caso seja diferente, imprima que é necessário alterar o número de itens do array.

/*const resultadosMegaSena = [
[6, 10, 15, 60, 65, 69], //0
[2, 11, 15, 36, 41, 42], //1
[1, 20, 60, 75, 81, 90], //2
[11, 13, 17, 80, 90, 99] //3
]*/
//console.log(resultadosMegaSena.length)

//    inicial;      limite                 ; a cada iteracao/incremento
/*for (let i = 0; i<resultadosMegaSena.length; i++){
  console.log(resultadosMegaSena[i])
  if(resultadosMegaSena[i].length !== 6){
  alert("Resultado do sorteio esta errado. ")
  }else{
  console.log(`Confira os resultado da Mega! ${resultadosMegaSena[i]}`)
  }
}*/

/*for (let i= 0; i<resultadosMegaSena.length; i++){
  console.log(`Sorteio ${i+1}:`)
  for (let indice = 0; indice < resultadosMegaSena[i].length; indice++){
    const sorteio = resultadosMegaSena[i] // variavel para pegar cada sorteio
    //console.log(sorteio[indice])
    console.log(resultadosMegaSena[i][indice])
  }
}*/

// Altere o laco externo do programa anterior para que ele seja um for...in (olha para o indice)
// for (let indice in array)
// pra cada indice do array

// Altera o laco interno do programa anterior para que ele seja for...of (olha para o elemento)
// for (let elemento of array)
// pra cada elemento do array

/*for (let i in resultadosMegaSena){
  console.log(`Sorteio ${Number(i)+1}`)
  for (let numero of resultadosMegaSena[i]){
    console.log(numero)
  }
}*/

