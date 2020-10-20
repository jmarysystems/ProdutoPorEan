/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

function _01_04_tabela_html_configuracoes_adicionar_eventos_a_todas_as_linhas(){
    
    var tabela = document.getElementById("tabela");
    var linhas = tabela.getElementsByTagName("tr");

    for(var i = 0; i < linhas.length; i++){
    	var linha = linhas[i];
      linha.addEventListener("click", function(){
      	//Adicionar ao atual
        //alert(linha);
    		//selLinha(this, false); //Selecione apenas um
            selLinha(this, true); //Selecione quantos quiser
    	});
    }
};

/**
Caso passe true, você pode selecionar multiplas linhas.
Caso passe false, você só pode selecionar uma linha por vez.
**/
function selLinha(linha, multiplos){
	if(!multiplos){
  	var linhas = linha.parentElement.getElementsByTagName("tr");
    for(var i = 0; i < linhas.length; i++){
      var linha_ = linhas[i];
      linha_.classList.remove("selecionado");    
    }
  }
  linha.classList.toggle("selecionado");
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////

function _01_04_tabela_html_configuracoes_adicionando_evento_enviando_dados_selecionados_da_tabela(){
    /**
    Exemplo de como capturar os dados
    **/
    var tabela = document.getElementById("tabela");
   
    var btnVisualizar = document.getElementById("visualizarDados");
        
    btnVisualizar.addEventListener("click", function(){
                        
	var selecionados = tabela.getElementsByClassName("selecionado");
        //Verificar se eestá selecionado
        if(selecionados.length < 1){
   	    alert("Selecione pelo menos uma linha");
            return false;
        }
        
        var dados_x = "";
        
        for(var i = 0; i < selecionados.length; i++){
            
      	    var selecionado = selecionados[i];
            selecionado = selecionado.getElementsByTagName("td");
            
            dados_x += "ID: " + selecionado[0].innerHTML + " - CMD: " + selecionado[1].innerHTML + " - Login: " + selecionado[2].innerHTML + "\n";
        }
  
        if( dados_x.trim() !== "" ){
            
            alert( dados_x );
            
            dados_x = "";
        }
    });  
};