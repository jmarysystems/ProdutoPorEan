/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

///////////////////////////////////////////////////////////////////////////////////////////////////////////   
///////////////////////////////////////////////////////////////////////////////////////////////////////////        
        function enviando_produto_proximo_do_vencimento( ean, qtd, data ){
            try{
                
                //document.getElementById("div_conversa").innerHTML = mensagem_a_enviar;
                
                ///*
                if ( ean.trim() === undefined || ean.trim() === "" || ean.trim() === null){
                    
                    //alert("Escreva algo para poder ser enviado!\n");
                }
                else{
                    
                    //alert( ean + " - " + qtd + " - " + data );
                
                    setTimeout(function(){ 
                        var now = new Date();
                        var id = now.getDate() + "/" + now.getMonth() + "/" + now.getFullYear() + " - " + 
                             now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds() + "." + now.getMilliseconds();
                     
                        var comando = "cadastrar";
                                                //https://docs.google.com/forms/d/1uTliHHrmR5OsPD0z-ByN-fZrkWDtg1TvPtIHy_i8F1I/edit?usp=sharing
                        var id_formulario_id = "1FAIpQLSe8QVFxolpWLGq7u_2p0LfrilPPVfhP2J__sasPP4VESb8d8g";
                
                        var id_txt = "833181104";   
                        var id_rem = "1076878183";   
                        var id_data = "1402856830";  
                        var id_qtd = "819632783";  
                        var id_ean = "802028795";   
                    
                       //////////////////////////////////////////
                       var jm_id = exportar_Para_Alfabeto_JM_Sem_Arroba( id.trim() );
                       var jm_comando = exportar_Para_Alfabeto_JM_Sem_Arroba( comando.trim() );
                       //var jm_remetente = exportar_Para_Alfabeto_JM_Sem_Arroba( document.getElementById("usuario_logado").value.trim() );
                        //var jm_destinatario = exportar_Para_Alfabeto_JM_Sem_Arroba( email_do_contato_atual_selecionado.trim() );
                        var jm_remetente = exportar_Para_Alfabeto_JM_Sem_Arroba( "-" );
                        var jm_destinatario = exportar_Para_Alfabeto_JM_Sem_Arroba( "teste" );
                        var jm_ean = exportar_Para_Alfabeto_JM_Sem_Arroba( ean );
                        var jm_qtd = exportar_Para_Alfabeto_JM_Sem_Arroba( qtd );
                        var jm_data = exportar_Para_Alfabeto_JM_Sem_Arroba( data );
                                       
                        var id_txt2 = "@" + jm_id + "j" + jm_comando + "j" + jm_remetente  + "j" + 
                            jm_destinatario  + "j" +  
                            jm_ean + "j" +
                            jm_qtd + "j" + 
                            jm_data +
                            "@";
                        //////////////////////////////////////////
                
                        var GET_URL = "https://docs.google.com/forms/d/e/" + id_formulario_id + "/formResponse" +
                            "?entry." + id_txt + "=" + id_txt2 + "&entry." + id_rem + "=" + "teste" + "&entry." + 
                            id_data + "=" + data + "&entry." + id_qtd + "=" + qtd + "&entry." + id_ean + "=" + ean;
                    
                        try{
                           
                            //**//                            
                            $.post( GET_URL,
                                function(data, status){
                                    alert("Data: " + data + "\nStatus: " + status);
                                }
                            );
                            //**//
                            
                            alert("Produto - " + ean + " - " + "Adicionado com sucesso!" );
                            window.open('controle_de_validade_0001_01_adiciona_produto.html', '_parent');

                        }catch(Exception){}         
                                            
                    }, 0);
                                        
                }
                //*/
            }catch(Exception){
                
                document.getElementById("div_conversa").innerHTML = "enviar_mensagem -- " + Exception;
            }     
        }
///////////////////////////////////////////////////////////////////////////////////////////////////////////   
///////////////////////////////////////////////////////////////////////////////////////////////////////////