// Implemente aqui as funções
let passed = false;


function didCandidatePassHeightTest(gender, height){
    if ((gender == "male" && height > 1.69) || (gender == "female" && height > 1.59)){  //Teste de altura.
        return true;
    }
}
function didCandidadePassAbsTest(gender, abs){
    if ((gender == "male" && abs > 40) || (gender == "female" && abs > 40)) {             // Teste de abdominais. 
        return true;
    }
}
function didCandidatePassBarTest(gender, barReps, barSeconds){
    if (gender == "male"){
        if (barReps > 5 || barSeconds < 16){                                            // Teste nas barras Masculino.
            return true;
        }
    } else if (gender == "female"){
        if (barReps > 4 || barSeconds < 13){                                            // Teste nas barras Feminino.
            return true;
        }
    }
}
function didCandidatePassSwimTest(gender, swimDistance, swimTime, diveTime){
    if (gender == "male"){
        if ((swimDistance > 99 && swimTime < 61) || diveTime < 31){                     // Teste de natação Masculino.
            return true;
        }
    } else if (gender == "female"){
        if ((swimDistance > 99 && swimTime < 61) || diveTime < 31){                     // Teste de natação Feminino.
            return true;
        }
    }
}
function didCandidadePassRunTest(gender, runDistance, runTime){
    if (gender == "male"){
        if ((runDistance > 2999 && runTime < 721) || (runDistance > 4999 && runTime < 1201)){          // Teste de corrida Masculino.
            return true;
        }
    } else if (gender == "female"){
        if ((runDistance > 3999 && runTime < 901 ) || (runDistance > 5999 && runTime < 1321)){         // Teste de corrida Feminino.
            return true;
        }
    }
}
function areCandidateResultsValid(gender, height, barReps, barSeconds, abs, runDistance, runTime, swimDistance, swimTime, diveTime) {
    let    heightPass = didCandidatePassHeightTest(gender, height);
    let    absPass = didCandidadePassAbsTest(gender, abs);
    let    barPass = didCandidatePassBarTest(gender, barReps, barSeconds);
    let    swimPass = didCandidatePassSwimTest(gender, swimDistance, swimTime, diveTime);
    let    runPass = didCandidadePassRunTest(gender, runDistance, runTime);
    if (heightPass && absPass && barPass && swimPass && runPass){
        return true;
    }
}
function showMessage(message){
        message = passed.toString();
    return message;
}
// Chamando a função com os parametros recebidos via script de teste
// e atribuindo a variavel que devera ser mostrada no console
const areCandidateValid = areCandidateResultsValid(
    process.argv[2], // Genero
    process.argv[3], // Altura
    process.argv[4], // Repetições de barra
    process.argv[5], // Tempo de barra em segundos
    process.argv[6], // Abdominais
    process.argv[7], // Distancia percorrida em metros
    process.argv[8], // Tempo total da corrida em segundos
    process.argv[9], // Distancia do nado em metros
    process.argv[10], // Tempo total de nado em segundos
    process.argv[11], // Tempo total de mergulho em segundos
);

// Chame aqui a função que mostra o resultado no console
if (areCandidateValid){
    passed = true;
}
const answer = showMessage();
console.log(answer.toUpperCase());