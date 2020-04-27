const changeValue = () => {
var teste = document.getElementById("fname").value;  
function kilostoPounds(teste) { return ((teste * 2.2046).toFixed()) }
const finalPound = kilostoPounds(teste);


switch (true) {
    case finalPound == 0:
        document.getElementById("resultPound").innerHTML = `Coloque seu peso e vamos transformar em libras para descobrir em que categoria do UFC você lutaria!`;
        break;
    case finalPound <= 123:
        document.getElementById("resultPound").innerHTML = `Você seria da categoria <b>Peso Mosca</b>, pois você tem o que equivale a ${finalPound}lb`;
        break;
    case finalPound <= 135:
        document.getElementById("resultPound").innerHTML = `Você seria da categoria <b>Peso Galo</b>, pois você tem o que equivale a ${finalPound}lb`;
        break;
    case finalPound <= 145:
        document.getElementById("resultPound").innerHTML = `Você seria da categoria <b>Peso Pena</b>, pois você tem o que equivale a ${finalPound}lb`;
        break;
    case finalPound <= 155:
        document.getElementById("resultPound").innerHTML = `Você seria da categoria <b>Peso Leve</b>, pois você tem o que equivale a ${finalPound}lb`;
        break;
    case finalPound <= 171:
        document.getElementById("resultPound").innerHTML = `Você seria da categoria <b>Peso Meio Medio</b>, pois você tem o que equivale a ${finalPound}lb`;
        break;
    case finalPound <= 185:
        document.getElementById("resultPound").innerHTML = `Você seria da categoria <b>Peso Medio</b>, pois você tem o que equivale a ${finalPound}lb`;
        break;
    case finalPound <= 205:
        document.getElementById("resultPound").innerHTML = `Você seria da categoria <b>Peso Meio Pesado</b>, pois você tem o que equivale a ${finalPound}lb`;
        break;
    case finalPound <= 265:
        document.getElementById("resultPound").innerHTML = `Você seria da categoria <b>Peso Pesado</b>, pois você tem o que equivale a ${finalPound}lb`;
        break;
    default: document.getElementById("resultPound").innerHTML = "Digite um peso correto";
}
}