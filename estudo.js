let tabuada = 5;

function escreva(){
    document.write("Tabuada do " + tabuada + "<br>")
    document.write(tabuada + " x 1 = " + (tabuada*1) + "<br>");
    document.write(tabuada + " x 2 = " + (tabuada*2) + "<br>");
    document.write(tabuada + " x 3 = " + (tabuada*3) + "<br>");
    document.write(tabuada + " x 4 = " + (tabuada*4) + "<br>");
    document.write(tabuada + " x 5 = " + (tabuada*5) + "<br>");
    document.write(tabuada + " x 6 = " + (tabuada*6) + "<br>");
    document.write(tabuada + " x 7 = " + (tabuada*7) + "<br>");
    document.write(tabuada + " x 8 = " + (tabuada*8) + "<br>");
    document.write(tabuada + " x 9 = " + (tabuada*9) + "<br>");
    document.write(tabuada + " x 10 = " + (tabuada*10) + "<br>");
}
let lista = ["Jorge","Duarte","Waldete","Raquel"];

function mostra(){
    document.write(lista.lenght + "<br>");
    for(let i = 0; i < lista.lenght; i++){ //começa o for
    document.write(lista[i] + "<br>");
    }//termina for
    
}

function mostraTabuada(){
    for(let i = 1; i <= 10; i++){
        document.write("O valor do i " + i + "<br>");
    }
}
function total(){
    let v = documento.getElementById("valor").value;
    let v = documento.getElementById("juros").value;
    let v = documento.getElementById("meses").value;
    for(let i =1; i <=tabuada; i++){
        r = v * (1 + (j/100));
        document.writw("mês " + i + " - valor: " + r + "<br>");
        v = r;
    }
    document.writw("resultado: " + r);
}














