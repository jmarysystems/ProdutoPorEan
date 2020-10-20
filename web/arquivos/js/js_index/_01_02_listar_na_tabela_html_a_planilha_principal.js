/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

///////////////////////////////////////////////////////////////////////////////////////////////////////////   
///////////////////////////////////////////////////////////////////////////////////////////////////////////         
function _01_02_listar_na_tabela_html_a_planilha_principal(){ 
    
    try{
                                                
        if( document.getElementById("tabela_usuarios").value === "null" ){
                                                        
            //
        }
        else{
                    
            _01_02_listar_na_tabela_html_a_planilha_principal_verificando_se_tem_dados();
        }
            
    }catch(Exception){
        
        document.getElementById("resposta").innerHTML = "_0001_02_listar_tabela_usuarios -- \n\n" + Exception;
    }
}

function _01_02_listar_na_tabela_html_a_planilha_principal_verificando_se_tem_dados(){
            
    try{
                
        var tem_dados = false;
        var linha_recebida = document.getElementById("tabela_usuarios").value.split("@");
        
        for( var i = 0; i < linha_recebida.length; i++ ) {
            
            if( linha_recebida[i].includes("-") ){
                tem_dados = true;
                break;
            }
        }
                
        if( tem_dados === true ){
                                                                
            _01_02_listar_na_tabela_html_a_planilha_principal_listando_dados();
        }
        else{
                    
            //
        }
    }catch(Exception){
        
        document.getElementById("resposta").innerHTML = "_0001_02_listar_tabela_usuarios_verificar_se_a_tabela_esta_vazia -- \n\n" + Exception;
    }
}

function _01_02_listar_na_tabela_html_a_planilha_principal_listando_dados(){            
    try{           
        
        ////////////////////////////////////////////////////////////////////////////
        var modificador = document.getElementById("resposta").innerHTML;
        setTimeout(function(){ 
        //* 
            document.getElementById("resposta").innerHTML = 
                "<table border='0' cellpadding='0' cellspacing='0' style='width:100%;'> <tr><td style='width:30%;'> </td></tr>  <tr> <td align='center' style='width:40%;'> " + "Aguarde!: " + "carregando..." + " </td> </tr> <tr><td style='width:30%;'> </td></tr> </table>" + 
                "<table border='0' cellpadding='0' cellspacing='0' style='width:100%;'> <tr><td style='width:30%;'> </td></tr>  <tr> <td align='center' style='width:40%;'> <img src='arquivos/imagens/003_login/javafx-loading-100x100.gif' style='cursor: pointer; 'width='80' height='80'> </td> </tr> <tr><td style='width:30%;'> </td></tr> </table>";
        //*/
        }, 0);
        ///////////////////////////////////////////////////////////////////////////
                
        var linha_recebida = document.getElementById("tabela_usuarios").value.split("@");            
 
        for( var i = 0; i < linha_recebida.length; i++ ) {
        
            if( linha_recebida[i].includes("-") ){
            
                var id = "";
                var comando = "";
                var usuario = "";
                var senha = "";
                var nome_digitado = "";
                var email_de_recuperacao = "";
                var imagem_endereco_web_digitado = "";
                var quantidade_de_alteracoes = "";
                
                var argumentos = linha_recebida[i].split("j");
                
                try{
                    
                    id = argumentos[0];
                    comando = argumentos[1];
                    usuario = argumentos[2];
                    senha = argumentos[3];
                    nome_digitado = argumentos[4];
                    email_de_recuperacao = argumentos[5];
                    imagem_endereco_web_digitado = argumentos[6];
                    quantidade_de_alteracoes = argumentos[7];
                }catch(Exception){}
                               
                $('#tabela > tbody:last').append(
                    '<tr>' + 
                        '<td>' + importar_Para_Alfabeto_JM(id).trim()      + '</td>' + 
                        '<td>' + importar_Para_Alfabeto_JM(comando).trim() + '</td>' + 
                        '<td>' + importar_Para_Alfabeto_JM(usuario).trim() + '</td>' + 
                        '<td>' + importar_Para_Alfabeto_JM(nome_digitado).trim() + '</td>' +  
                        '<td>' + importar_Para_Alfabeto_JM(email_de_recuperacao).trim() + '</td>' + 
                        '<td>' + senha.trim() + '</td>' + 
                        '<td>' + imagem_endereco_web_digitado + '</td>' + 
                        '<td>' + quantidade_de_alteracoes + '</td>' + 
                    '</tr>'
                );

            }   
        }

        //Após adicionar todas as linhas na tabela, adicionar eventos nas linhas ao selecioná-las
        setTimeout(function(){    
            
            try{ _01_03_percorrer_tabela_html_fazer_alteracoes_e_exclusoes(); }catch(Exception){} 
            
            try{ _01_04_tabela_html_configuracoes_adicionar_eventos_a_todas_as_linhas(); }catch(Exception){} 
                        
        }, 1000);
        
        
        
        ////////////////////////////////////////////////////////////////////////////
        setTimeout(function(){ 
        //* 
            document.getElementById("resposta").innerHTML = modificador;
        //*/
        }, 1000);
        ///////////////////////////////////////////////////////////////////////////
        
    }catch(Exception){
        
        document.getElementById("resposta").innerHTML = "_0001_02_listar_tabela_usuarios_verificar_se_a_tabela_esta_vazia -- \n\n" + Exception;
    }   
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////