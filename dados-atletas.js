class Atleta{
  //fazendo o construtor da classe Atletas
  constructor (nome,idade,peso,altura,notas){
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
    this.altura = altura;
    this.notas = notas;
  }
//método para obter as categorias

calculaCategoria(){
  let categoria = "";

  if(this.idade >= 9 && this.idade <= 11){
    categoria = "Infantil";
  } else if(this.idade >= 12 && this.idade <= 13){
    categoria = "Juvenil";
  } else if(this.idade >= 14 && this.idade <= 15){
    categoria = "Intermediário";
  } else if(this.idade >= 16 && this.idade <= 30){
    categoria = "Adulto";
  } else {
    categoria =  "Sem categoria";
  }
  return categoria; // Agora retorna após avaliar todas as condições
}
//método para calcular o IMC do atleta
calculaIMC(){
  let imc = this.peso / (this.altura**2);
  return imc;
}
//método de calcular média , excluindo a menor e a maior nota
calculaMediaValida(){
  //ordenando crescentemente as notas do atleta
  let notasOrdenadas = this.notas.sort(function(a,b){
    return a-b
  });
  //excluindo a menor e a maior nota
  let notasSelecionadas = notasOrdenadas.slice(1,notasOrdenadas.length - 1);
  //somando todas as notas selecionadas
  let somaNotas = 0;
  notasSelecionadas.forEach(function(nota){
    somaNotas = somaNotas + nota;
  });
  //calculando a média
  let mediaValida = somaNotas / notasSelecionadas.length;
  return mediaValida;
}

obtemNomeAtleta(){
  return this.nome;
}

obtemIdadeAtleta(){
  return this.idade;
}

obtemPesoAtleta(){
  return this.peso;
}

obtemAlturaAtleta(){
  return this.altura;
}

obtemNotasAtleta(){
  let notasOrdenadas = this.notas.sort(function(a,b){
    return a-b
  });
  return notasOrdenadas.join(", ");
}

obtemCategoria(){
  return this.calculaCategoria();
}

obtemIMC(){
  return this.calculaIMC();
}

obtemMediaValida(){
  return this.calculaMediaValida();
}
}

//declarando um atleta
const atleta = new Atleta("Cesar Abascal",30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);
//exibindo os dados do atleta
console.log(`
Nome: ${atleta.obtemNomeAtleta()}
Idade: ${atleta.obtemIdadeAtleta()}
Peso: ${atleta.obtemPesoAtleta()}
Altura: ${atleta.obtemAlturaAtleta()}
Notas: ${atleta.obtemNotasAtleta()}
Categoria: ${atleta.obtemCategoria()}
IMC: ${atleta.obtemIMC()}
Média válida: ${atleta.obtemMediaValida()}`);