/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

///////////////////////////////////////////////////////////////////////////////////////////////////////////   
///////////////////////////////////////////////////////////////////////////////////////////////////////////        
        function enviando_produto_proximo_do_vencimento( ean, qtd, data, material_rec, umb_rec ){
            try{
                
                //alert( document.getElementById("usuario_logado_id_nome").value );
                var usuario_logado_nome = document.getElementById("usuario_logado_id_nome").value;
                var usuario_logado_autorizacao = document.getElementById("usuario_logado_autorizacao").value;
                
                var sel = document.getElementById('estabelecimento');
                var opt = sel.options[sel.selectedIndex];
                //var estabelecimento_selected = opt.value;
                var estabelecimento_selected = opt.text;
                
                //document.getElementById("div_conversa").innerHTML = mensagem_a_enviar;
                
                //*
                if ( ean.trim() === undefined || ean.trim() === "" || ean.trim() === null){
                    
                    //alert("Escreva algo para poder ser enviado!\n");
                }
                
                else {
                    
                    //alert( ean + " - " + qtd + " - " + data );
                
                    setTimeout(function(){ 
                        var now = new Date();
                        var id = now.getDate() + "/" + now.getMonth() + "/" + now.getFullYear() + " - " + 
                             now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds() + "." + now.getMilliseconds();
                        //alert( " id - " + id );
                     
                        var comando = "cadastrar";
                                                //https://docs.google.com/forms/d/1uTliHHrmR5OsPD0z-ByN-fZrkWDtg1TvPtIHy_i8F1I/edit?usp=sharing
                        var id_formulario_id = "1FAIpQLSe8QVFxolpWLGq7u_2p0LfrilPPVfhP2J__sasPP4VESb8d8g"; //id_formulario_tabela_controle_de_validade;
                        //alert( " id_formulario_id - " + id_formulario_id );
                        
                        var id_txt = "833181104"; //entry_formulario_controle_de_validade_id_texto; 
                        var id_ESTABELECIMENTO = "1076878183"; //entry_formulario_controle_de_validade_id_ESTABELECIMENTO;
                        var id_REMETENTE = "1402856830"; //entry_formulario_controle_de_validade_id_REMETENTE;
                        var id_DATA_DE_VENCIMENTO = "819632783"; //entry_formulario_controle_de_validade_id_DATA_DE_VENCIMENTO;
                        var id_QUANTIDADE = "802028795"; //entry_formulario_controle_de_validade_id_QUANTIDADE;
                        var id_EAN = "148684082"; //entry_formulario_controle_de_validade_id_EAN;
                        var id_MATERIAL = "1370090050"; //entry_formulario_controle_de_validade_id_MATERIAL;
                        var id_UMB = "1276313150"; //entry_formulario_controle_de_validade_id_UMB;
                     
                        //////////////////////////////////////////
                        var jm_id = exportar_Para_Alfabeto_JM_Sem_Arroba( id.trim() );
                        var jm_comando = exportar_Para_Alfabeto_JM_Sem_Arroba( comando.trim() );
                        var jm_auto_quantidade_de_alteracoes = "0";

                        var jm_destinatario = exportar_Para_Alfabeto_JM_Sem_Arroba( estabelecimento_selected );
                        var jm_remetente = exportar_Para_Alfabeto_JM_Sem_Arroba( usuario_logado_nome );
                        var jm_data = exportar_Para_Alfabeto_JM_Sem_Arroba( data );
                        var jm_qtd = exportar_Para_Alfabeto_JM_Sem_Arroba( qtd );
                        var jm_ean = exportar_Para_Alfabeto_JM_Sem_Arroba( ean );
                        var jm_material = exportar_Para_Alfabeto_JM_Sem_Arroba( material_rec );
                        var jm_umb = exportar_Para_Alfabeto_JM_Sem_Arroba( umb_rec );
                                                                                       
                        var id_txt2 = "@" + 
                            jm_id + "j" + 
                            jm_comando + "j" + 
                            jm_auto_quantidade_de_alteracoes + "j" +                            
                            jm_destinatario  + "j" +  
                            jm_remetente  + "j" +    
                            jm_data + "j" + 
                            jm_qtd + "j" + 
                            jm_ean + "j" +
                            jm_material + "j" + 
                            jm_umb +
                            "@";
                        //////////////////////////////////////////
                
                        var GET_URL = "https://docs.google.com/forms/d/e/" + id_formulario_id + "/formResponse" +
                            "?entry." + id_txt + "=" + id_txt2 + 
                            "&entry." + id_ESTABELECIMENTO + "=" + estabelecimento_selected + 
                            "&entry." + id_REMETENTE + "=" + usuario_logado_nome + 
                            "&entry." + id_DATA_DE_VENCIMENTO + "=" + 'data' + 
                            "&entry." + id_QUANTIDADE + "=" + qtd + 
                            "&entry." + id_EAN + "=" + ean + 
                            "&entry." + id_MATERIAL + "=" + material_rec + 
                            "&entry." + id_UMB + "=" + umb_rec;
                    
                        try{
                           
                                                     
                            $.post( GET_URL,
                                function(data, status){
                                    alert("Data: " + data + "\nStatus: " + status);
                                }
                            );
                            
                            
                            alert("Produto - " + ean + " - " + "Adicionado com sucesso!" );
                            window.open('controle_de_validade_0001_01_adicionar_produto.html', '_parent');

                        }catch(Exception){alert( " Exception - " + Exception );}         
                                            
                    }, 0);
                                        
                }
                //*/
            }catch(Exception){
                
                document.getElementById("div_conversa").innerHTML = "enviar_mensagem -- " + Exception;
            }     
        }
///////////////////////////////////////////////////////////////////////////////////////////////////////////   
///////////////////////////////////////////////////////////////////////////////////////////////////////////