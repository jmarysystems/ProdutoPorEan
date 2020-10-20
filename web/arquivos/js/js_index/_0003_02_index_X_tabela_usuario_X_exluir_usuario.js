/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

function _0003_02_index_X_tabela_usuario_X_exluir_usuario(
    jm_id,
                jm_usuario_digitado, 
                    jm_senha_digitada, 
                        jm_nome_digitado,
                            jm_email_de_recuperacao,
                                jm_imagem_endereco_web_digitado,
                                    conteudo_div){  
            if (jm_usuario_digitado === "" || jm_usuario_digitado === null){
                alert("Para excluir um usuário:\n01 informe o DDD + Telefone\n02 informe a senha\n03 informe o nome do usuário");
            }
            else if (jm_senha_digitada === "" || jm_senha_digitada === null){
                
                alert("Para excluir um usuário:\n01 informe o DDD + Telefone\n02 informe a senha\n03 informe o nome do usuário");
            }
            else if (jm_nome_digitado === "" || jm_nome_digitado === null){
                
                alert("Para excluir um usuário:\n01 informe o DDD + Telefone\n02 informe a senha\n03 informe o nome do usuário");
            }
            else{
                
             /*   
               alert( 
                "_index_usuario_logado_id" + " - " + jm_id + "\n" +
                "usuario_digitado" + " - " + jm_usuario_digitado + "\n" +
                        "senha_digitada" + " - " + jm_senha_digitada + "\n" +
                                "nome_digitado" + " - " + jm_nome_digitado + "\n" +
                                        "email_de_recuperacao" + " - " + jm_email_de_recuperacao + "\n" +
                                                "imagem_endereco_web_digitado" + " - " + jm_imagem_endereco_web_digitado + "\n" 
                );
        */
        
                try{
                    var comando = "excluir";
                    var jm_comando = exportar_Para_Alfabeto_JM_Sem_Arroba( comando );
        
                    var id_txt2 = "@" + jm_id + "j" + jm_comando + "j" + jm_usuario_digitado  + "j" + 
                            jm_senha_digitada  + "j" +  jm_nome_digitado  + "j" + 
                            jm_email_de_recuperacao  + "j" +
                            jm_imagem_endereco_web_digitado + "@";
                    //////////////////////////////////////////
                
                    var GET_URL = "https://docs.google.com/forms/d/e/" + id_formulario_tabela_usuarios + "/formResponse" +
                            "?entry." + entry_texto_formulario_tabela_usuarios + "=" + id_txt2 +
                            "&entry." + entry_id_formulario_tabela_usuarios + "=" + converter_base64( jm_id.trim() ) +
                            "&entry." + entry_comando_formulario_tabela_usuarios + "=" + comando.trim() +
                            "&entry." + entry_telefone_formulario_tabela_usuarios + "=" + converter_base64( jm_usuario_digitado.trim() ) +
                            "&entry." + entry_nome_usuario_formulario_tabela_usuarios + "=" + converter_base64( jm_nome_digitado.trim() ) +
                            "&entry." + entry_email_de_recuperacao_formulario_tabela_usuarios + "=" + converter_base64( jm_email_de_recuperacao.trim() );
                    
                    
                        
                        //**//                            
                        $.post( GET_URL,
                            function(data, status){
                                alert("Data: " + data + "\nStatus: " + status);
                            }
                        );
                        //**//

                        //var xhttp = new XMLHttpRequest();
                        //xhttp.open("GET", GET_URL, false);
                        //xhttp.send();//A execução do script pára aqui até a requisição retornar do servidor
                        
                        alert("Usuário: " + " \nExcluído com sucesso!");
                        
                        window.open('index.html', '_parent');

                    }catch(Exception){
                
                        alert(Exception);
                       //document.getElementById("resposta").innerHTML = "Erro xhttp - cadastrarTabelaLogin -- <br>" + Exception;
                    }                                            
            }
        }
        
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////