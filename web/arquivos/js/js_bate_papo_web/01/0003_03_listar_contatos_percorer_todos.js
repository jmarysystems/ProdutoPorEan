/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/////////////////////////////////////////////////////////////////////////////////////////////////////////// 
//////ESCREVER E ENVIAR MENSAGENS - INÍCIO   
/////////////////////////////////////////////////////////////////////////////////////////////////////////// 
    function recebendo_linha_e_listando_todos_os_contatos_001( linha_recebidaXXX, ctrl_msg ){  
        try{    
            
setTimeout(function(){       
    
                var linha_recebida = lista_de_contatos.split("@");            
                for( var i = ( linha_recebida.length - 1 ); i >= 0; i-- ) {
                    if( linha_recebida[i].includes("-") ){
                        var web_id;
                        var web_comando;
                        var web_usuario_logado;
                        
                        var web_contato_email;
                        var web_contato_nome;
                        var web_contato_nome_meio;
                        var web_contato_ultimo_nome;

                        var argumentos = linha_recebida[i].split("j");
                        for( var j = 0; j < argumentos.length; j++ ) {
                            if(j === 0){ 
                                web_id = argumentos[j];
                            }
                            else if(j === 1){
                                web_comando = argumentos[j];
                            }
                            else if(j === 2){
                                web_usuario_logado = argumentos[j];
                            }
                            else if(j === 3){
                                web_contato_email = argumentos[j];
                            }
                            else if(j === 4){
                                web_contato_nome = argumentos[j];
                            }
                            else if(j === 5){
                                web_contato_nome_meio = argumentos[j];
                            }
                            else if(j === 6){
                                web_contato_ultimo_nome = argumentos[j];
                            }
                        }

                        if( document.getElementById( "contador" + web_id ).value < ctrl_msg ){
                            //Verificar se este contato é deste usuário
                            var nome_principal = "";   try{ nome_principal = converter_base64(web_contato_nome).trim(); }catch(Exception){}
                            var web_contato_email_str      = importar_Para_Alfabeto_JM( web_contato_email ).trim().toUpperCase();
                    
                            //alert( nome_principal + " - " + web_contato_email_str + " \n " + linha_recebidaXXX );
                            percorrer_todas_as_conversas_com_cada_linha_uma_de_cada_vez( web_id, web_contato_email_str, nome_principal, linha_recebidaXXX, ctrl_msg );
                        }
                    }
                } 
 }, 0);        
 
        }catch(Exception){}    
    }

        function percorrer_todas_as_conversas_com_cada_linha_uma_de_cada_vez( web_id, web_contato_email_str, nome_principal, linha_recebidaXXX, i ){
            try{    
                
setTimeout(function(){        
    
                                /////////-------------------------------------------------------------------------------------------------------------------------------------
                                /////////-------------------------------------------------------------------------------------------------------------------------------------
                                    //alert( i + " - " + linha_recebida[i] );
                                    
                                    var jm_id_msg;
                                    var jm_comando;
                                    var jm_remetente;   
                                    var jm_destinatario;   
                                    var jm_mensagem_a_receber;

                                    var argumentos = linha_recebidaXXX.split("j");
                                    for( var j = 0; j < argumentos.length; j++ ) {
                                        if(j === 0){ 
                                            jm_id_msg = argumentos[j];
                                        }
                                        else if(j === 1){
                                            jm_comando = argumentos[j];
                                        }
                                        else if(j === 2){
                                            jm_remetente = argumentos[j];
                                        }
                                        else if(j === 3){
                                            jm_destinatario = argumentos[j];
                                        }
                                        else if(j === 4){
                                            jm_mensagem_a_receber = argumentos[j];
                                        }
                                    }
                                
                                    var _00_local_usuario_logado_email_str            = document.getElementById("usuario_logado").value.trim().toUpperCase();
                                    
                                    var _11_local_contato_desta_tabela_email_str      = web_contato_email_str;
                                
                                    var _00_web_usuario_logado_email_remetente_str    = importar_Para_Alfabeto_JM(jm_remetente).trim().toUpperCase();
                                    var _11_web_usuario_logado_email_destinatario_str = importar_Para_Alfabeto_JM(jm_destinatario).trim().toUpperCase();     
                                    
                                    var web_hora_str = importar_Para_Alfabeto_JM( jm_id_msg ).trim();
                                    var web_mensagem_str = importar_Para_Alfabeto_JM( jm_mensagem_a_receber ).trim();
                                    var nova_mensagem = web_mensagem_str.trim().replace("\n", "<br>");
                                    
                                    escolha_01(
                                        _00_web_usuario_logado_email_remetente_str, 
                                            _00_local_usuario_logado_email_str,
                                                _11_local_contato_desta_tabela_email_str,
                                                    _11_web_usuario_logado_email_destinatario_str,
                                                            jm_id_msg,
                                                                web_id,
                                                                    nome_principal,
                                                                        web_hora_str,
                                                                            nova_mensagem
                                    );
                            
                                    document.getElementById( "contador" + web_id ).value = i;
                               /////////-------------------------------------------------------------------------------------------------------------------------------------
                               /////////------------------------------------------------------------------------------------------------------------------------------------- 
    
}, 0); 
            }catch(Exception){                
            }finally {   
                
            }
        }
 
/////////////////////////////////////////////////////////////////////////////////////////////////////////// 
//////ESCREVER E ENVIAR MENSAGENS - FIM   
/////////////////////////////////////////////////////////////////////////////////////////////////////////// 