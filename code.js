const inputFileButton = document.getElementById("inputfilebutton");
inputFileButton.addEventListener("click", clickFileButton);

const inputNumberButton = document.getElementById("inputnumberbutton");
inputNumberButton.addEventListener("click", clickNumberButton);

criaLabel = document.createElement("label");



function clickFileButton(){
    arquivo = document.getElementById("inputfile");
    var fr=new FileReader();

    try{
        fr.readAsText(arquivo.files[0]);
        fr.onload=function(){
            info = fr.result; 
            document.getElementById('output').textContent=fr.result;
        }  
    }
    catch(erro){
        console.log(erro);
        alert(erro);
    }
    finally{
        alert("Obrigado pela visita");
    }
    
    
}

function clickNumberButton(){
    // 1) Inserir um campo de input com a mensagem "informe um valor entre 5 a 10"
    // 2) Verifica se é nulo, se for, lança exception "Informe um valor" 
    // 3) Verifica se é maior que 5 e menor que 10, se não for, lança exception 
    // "Informe um valor maior que 5 e menor que 10"
    // 4) Se o try falhar, lançar exception "Erro + erro javascript"
    // 5) No finnaly informar "O número escolhido foi + " numero
    
    number = document.getElementById("inputnumber").value
    console.log(number)

    

    try{        
        number = document.getElementById("inputnumber").value
        console.log(number)
        if (number <5 || number >10) throw 'Informe um valor entre 5 a 10';
        else if(number = "") throw "informe um valor";

    }
    catch(erro){
        document.getElementById("outputnumber").innerHTML = erro;
        if(erro != "informe um valor" && erro != "Informe um valor entre 5 a 10"){
        throw "Erro + erro javascript";
        }
        alert(erro)
    }
    finally{
        throw "O número escolhido foi " + number
    }

    console.log(number)
}

