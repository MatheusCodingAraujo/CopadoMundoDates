function creategame(p1,hour,p2){
    return `
    <li>
        <img src="./bandeiras/icon=${p1}.svg" alt="${p1}" />
        <strong>${hour}</strong>
        <img src="./bandeiras/icon=${p2}.svg" alt="${p2}" />
    </li>`
}

function createcard(date,day,games){
    return`
    <div class="card">
    <h2>${date}<span>${day}</span></h2>
  
    <ul>
      ${games}
    </ul>
  </div>`
}


function createcardgroup(grupo){
    aux=grupo
    return`
    <div class="card">
        <h2>Grupo ${grupo}</h2>
        <p class="teste" onclick="clicou('${grupo}')">Ver Jogos</p>
    </div>`
}


function clicou(group){
    switch(group){
        case 'A' :
        document.querySelector("#app").innerHTML=`
            <div class='voltar' onclick='iniciar()'> Menu</div>
            ${createcard('20/11', 'domingo', creategame('qatar',' 0 - 2 ','ecuador'))}
            ${createcard('21/11', 'segunda', creategame('senegal','0 - 2','netherlands'))}
            ${createcard('25/11', 'sexta', creategame('qatar','1 - 3','senegal')+creategame('netherlands','1 - 1','ecuador'))}
            ${createcard('29/11', 'terça', creategame('ecuador','7:00','senegal')+creategame('netherlands','10:00','qatar'))}
        `
        break;
        
        case 'B':
        document.querySelector("#app").innerHTML=
            `
            <div class='voltar' onclick='iniciar()'> Menu</div>
            ${createcard('21/11', 'segunda', creategame('england','6 - 2','iran')+creategame('united states','1 - 1','wales'))}
            ${createcard('25/11', 'sexta', creategame('wales','0 - 2','iran')+creategame('england','0 - 0','united states'))}
            ${createcard('29/11', 'terça', creategame('iran','13:00','united states')+creategame('wales','16:00','england'))}
            `
        break;
    
        case 'C':
        document.querySelector("#app").innerHTML=
            `
            <div class='voltar' onclick='iniciar()'> Menu</div>
            ${createcard('22/11', 'terça', creategame('argentina','1 - 2','saudi arabia')+creategame('mexico','0 - 0','poland'))}
            ${createcard('26/11', 'sábado', creategame('poland','2 - 0','saudi arabia')+creategame('argentina','2 - 0','mexico'))}
            ${createcard('30/11', 'quarta', creategame('poland','13:00','argentina')+creategame('saudi arabia','16:00','mexico'))}
            `
        break;

        case 'D':
        document.querySelector("#app").innerHTML=
            `
            <div class='voltar' onclick='iniciar()'> Menu</div>
            ${createcard('22/11', 'terça', creategame('denmark','0 - 0','tunisia')+creategame('france','4 - 1','australia'))}
            ${createcard('26/11', 'sábado', creategame('tunisia','0 - 1','australia')+creategame('france','2 - 1','denmark'))}
            ${createcard('30/11', 'quarta', creategame('tunisia','7:00','france')+creategame('australia','10:00','denmark'))}
            `
        break;

        case 'E':
        document.querySelector("#app").innerHTML=
            `
            <div class='voltar' onclick='iniciar()'> Menu</div>
            ${createcard('23/11', 'quarta', creategame('germany','1 - 2','japan')+creategame('spain','7 - 0','costa rica'))}
            ${createcard('27/11', 'domingo', creategame('japan','0 - 1','costa rica')+creategame('spain','1 - 1','germany'))}
            ${createcard('01/12', 'quinta', creategame('japan','13:00','spain')+creategame('costa rica','16:00','germany'))}
            `
        break;

        case 'F':
        document.querySelector("#app").innerHTML=
            `
            <div class='voltar' onclick='iniciar()'> Menu</div>
            ${createcard('23/11', 'quarta', creategame('morocco','0 - 0','croatia')+creategame('belgium','1 - 0','canada'))}
            ${createcard('27/11', 'domingo', creategame('belgium','0 - 2','morocco')+creategame('croatia','4 - 1','canada'))}
            ${createcard('01/12', 'quinta', creategame('croatia','7:00','belgium')+creategame('canada','10:00','morocco'))}
            `
        break;

        case 'G':
        document.querySelector("#app").innerHTML=
            `
            <div class='voltar' onclick='iniciar()'> Menu</div>
            ${createcard('24/11', 'quinta', creategame('switzerland','1 - 0','cameroon')+creategame('brazil','2 - 0','serbia'))}
            ${createcard('28/11', 'segunda', creategame('cameroon','3 - 3','serbia')+creategame('brazil','1 - 0','switzerland'))}
            ${createcard('02/12', 'sexta', creategame('serbia','7:00','switzerland')+creategame('cameroon','16:00','brazil'))}
            `
        break;

        case 'H':
        document.querySelector("#app").innerHTML=
            `
            <div class='voltar' onclick='iniciar()'> Menu</div>
            ${createcard('24/11', 'sexta', creategame('uruguay','0 - 0','south korea')+creategame('portugal','3 - 2','ghana'))}
            ${createcard('28/11', 'segunda', creategame('south korea','2 - 3','ghana')+creategame('portugal','2 - 0','uruguay'))}
            ${createcard('02/12', 'sexta', creategame('south korea','7:00','portugal')+creategame('ghana','10:00','uruguay'))}
            `
        break;
    }
}

function iniciar(){
    document.querySelector("#app").innerHTML = `
    <form>
        <main id="cards">
        
        ${createcardgroup("A")}
        ${createcardgroup("B")}
        ${createcardgroup("C")}
        ${createcardgroup("D")}
        ${createcardgroup("E")}
        ${createcardgroup("F")}
        ${createcardgroup("G")}
        ${createcardgroup("H")}
        </main>
    </form>`
}

iniciar()