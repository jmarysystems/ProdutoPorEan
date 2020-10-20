/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

function adicionar_produto( usuario_logado_nome, ean, quantidade, data, html_da_div_consultar_produto ){
            
    try{
                
        if( ean.trim() === "" || ean === null || quantidade.trim() === "" || quantidade.trim() === null ){
                             
            alert("Para adicionar um produto\n01 informe o EAN do produto solicitado\n02 informe a quantidade.\n03 informe a data de vencimento.");
        }
        else if( $.isNumeric( quantidade.trim() ) === false ){
            
            alert("Para adicionar um produto\n01 informe na quantidade\n02 Apenas números.");
        }
        else if( data.length !== 10 ){
            
            alert("Data Inválida!\n01 informe uma data válida.\n02 DD/MM/AAAA.");
        }
        else if( data.match(/^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.](19|20)\d\d$/) === false ){
            
            alert("Data Inválida!\n01 informe uma data válida.\n02 DD/MM/AAAA.");
        }
        else {
                
            setTimeout(function(){ 
                        
                window.open('controle_de_validade_0002_01_visualizar_produto.html?' + "usuario_logado" + "=" + usuario_logado_nome.trim() + "&" + "ean" + "=" + ean.trim() + "&" + "quantidade" + "=" + quantidade.trim() + "&" + "data" + "=" + data.trim(), '_parent');
      
            }, 0);

        }                                
            
    }catch(Exception){
                
        document.getElementById("div_consultar_produto").innerHTML = "abrir_div_mostrar_produto -- " + Exception;
    }     
}