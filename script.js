window.onload = function(){
   const arrayPostagens = [
      {
         titulo:"Jogaço",
         data:"18/12/2022",
         texto:"Dizer o que de um jogo destes. Qualquer um que ganhase a Copa seria merecedor. Dá um pouco de raiva por ser a Argentina, mas o Messi mereceu. Mas, se não fosse a Argentina seria a França, que já nos ganhou demais"
      },
      {
         titulo:"Sabia, este site lazarento zicou",
         data:"13/12/2022",
         texto:"Este site zicador já havia postado a Argentina e a França bem na capa ANTES da Copa começar. Este site tem esquemas com casas de apostas, pode investigar que vai achar coisa aí"
      },
      {
         titulo:"Xiii está com cara de Argentina e França",
         data:"10/12/2022",
         texto:"Ou você acha que a Argentina vai vacilar como o Brasil vacilou e a França perderia para o Marrocos? Podem apostar, final mais que garantida"
      },
      {
         titulo:"Faltava 4 minutos",
         data:"09/12/2022",
         texto:"Como pode uma seleção ganhando na prorrogação e faltando 4 minutos tomar empate da Croácia?"
      },
	  {
         titulo:"Fora Tite - Queremos um técnico",
         data:"09/12/2022",
         texto:"CBF Corrupta. O que o Daniel Alves foi fazer lá?"
      },
	  {
         titulo:"Jogador profissional e não sabe bater pênalti",
         data:"09/12/2022",
         texto:"Todo mundo culpado. Quem é Rodrygo? Era para o Neymar bater o primeiro"
      },
      {
         titulo:"Só 4 minutos",
         data:"09/12/2022",
         texto:"Como pode uma seleção ganhando na prorrogação e faltando 4 minutos tomar empate da Croácia?"
      },
      {
         titulo:"Faltava 4 minutos",
         data:"09/12/2022",
         texto:"Como pode uma seleção ganhando na prorrogação e faltando 4 minutos tomar empate da Croácia?"
      },
	  {
         titulo:"Não fez mais que a obrigação",
         data:"05/12/2022",
         texto:"4x1 foi pouco. Me preocupo para o futuro. Ainda toma um gol da Coreia... Agora é passar pela Croácia"
      },
	  {
         titulo:"Que venha a Coréia do Sul",
         data:"02/12/2022",
         texto:"Se não golear a Coreia do Sul é crise. Manda todo mundo embora"
      },
	  {
         titulo:"HAHAHAHAHA Belgicanos e Alemães fora da Copa kkkkkkk",
         data:"01/12/2022",
         texto:"Quem sabe daqui 3 anos e meio para a Alemanha. A Bélgica é suco do mesmo e não preocupa ninguém"
      },
	  {
         titulo:"Ah Brasil",
         data:"28/11/2022",
         texto:"Só 1x0 na Suíça? Não vai longe assim"
      },
       {
         titulo:"Olha a Alemanha se complicando aí",
         data:"27/11/2022",
         texto:"Xiii sei não hein, deste jeito não passa nem para as oitavas"
      },
	  {
         titulo:"Valeu Marrocos",
         data:"27/11/2022",
         texto:"kkkkk cadê os belgicanos. Valeu Marrocos, 2x0 foi pouco."
      },
	  {
         titulo:"Ah México",
         data:"26/11/2022",
         texto:"Só tem o Chaves e o Chapolim de bom? Tomar 2 da Argentina que tinha perdido para a Arábia Saudita?"
      },
	  {
         titulo:"Ganhamos!",
         data:"24/11/2022",
         texto:"Para quem estava com medo da Sérvia, este jogo mostrou que temos chances"
      },
      {
         titulo:"Jogo decisivo hoje! Vamos torcer pela seleção",
         data:"24/11/2022",
         texto:"O Brasil inicia sua caminhada hoje. Dá para ganhar da Sérvia hein. Sem medo de colocar atacantes"
      },
	  {
         titulo:"Eita, a Espanha veio com tudo",
         data:"23/11/2022",
         texto:"7x0 e jogando bem. Pintou o campeão"
      },
	  {
         titulo:"Chupa Alemanha!",
         data:"23/11/2022",
         texto:"Eterno 1x2 pro Japão"
      },
	  {
         titulo:"Arábia Saudita Sapecou a Argentina",
         data:"22/11/2022",
         texto:"Quem diria hein, a Argentina chegou sem preder há muito tempo e perde para um time pequeno kkkkkkkk"
      },
      {
	  titulo:"Vai começar a Copa!",
        data:"20/11/2022",
        texto:"Esperamos por muito tempo o nosso sonhado evento"
       },
   ];
   
   // Loop
   for(let i = 0; i < arrayPostagens.length; i++){
      // Criar o elemento
      let section = document.createElement("section");
   
      // Popular o elemento
      section.innerHTML = `
      <section class="post">
      <h3>${arrayPostagens[i].titulo}</h3>
      <div class="data">${arrayPostagens[i].data}</div>
      <p>${arrayPostagens[i].texto}</p>
      </section>
      `;
   
      // Adicionar o elemento à página
      let article = document.querySelector("article");
      article.appendChild(section);
   }
   }
   