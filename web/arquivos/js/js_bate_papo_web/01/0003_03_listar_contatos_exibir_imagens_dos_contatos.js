/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//BAIXANDO TABELA   
///////////////////////////////////////////////////////////////////////////////////////////////////////////
        function _01_controle_loop_sem_fim(){   
                
            try{
                
                setTimeout(function(){ 
                    
                    _02_controle_loop_sem_fim_baixar_tabela_conversa();
                    
                }, 1000);
            }
            catch(Exception){alert( "_01_controle_loop_sem_fim: " + Exception );}
        }
        
        function _02_controle_loop_sem_fim_baixar_tabela_conversa(){
            
            try{
                var id_planilha = "10n3TYa4DlEbwduXiXU94yY5tHeStfoFeeod6EO-ST_o";
                var url = "https://sheets.googleapis.com/v4/spreadsheets/"+ id_planilha +"/values/A:B?key=AIzaSyBwiMCywJRFQHuuksWdhqwjOrR5mDaWJYs";

                jQuery.getJSON(url).success(function(data) {
                    //console.log(data); 
                    //alert( JSON.stringify(data) );
                    try{
                        document.getElementById("tabela_conversas").value = JSON.stringify(data);
                        percorrer_todas_as_conversas();
                    }catch(Exception){}
                }).error(function(message) {
                    //console.error('error' + message); 
                    //_01_controle_loop_sem_fim();
                    //alert("Erro: " + message );
                    _01_controle_loop_sem_fim();
                }).complete(function() {
                    //console.log('completed!');                    
                });
                
            }
            catch(Exception){
                alert( "_02_controle_loop_sem_fim_baixar_tabela_conversa: " + Exception );
            }finally {   
                
                //_01_controle_loop_sem_fim();
                //////////////////////////////////////////////////////////////////////
                //document.getElementById("ul_meus_contatos").style.display = 'block'; 
                //////////////////////////////////////////////////////////////////////
            }
        }
///////////////////////////////////////////////////////////////////////////////////////////////////////////
//BAIXANDO TABELA   
///////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//LISTANDO TODOS OS CONTATOS   
///////////////////////////////////////////////////////////////////////////////////////////////////////////
function percorrer_todas_as_conversas(){        
            try{           
                
setTimeout(function(){                 
                //alert( web_id + "\n" + web_contato_email + "\n" + nome_principal );
                        
                        var linha_recebida = document.getElementById("tabela_conversas").value.split("@"); 
////////////////////////////////////////////////////////////////////////////
                            if( carregado === 0 ){
                                setTimeout(function(){ 
                                    //document.getElementById("contato_tabela_xy_01").style.display = 'block';
                                    /* Some tasks */ 
                                    document.getElementById("contato_tabela_xy_01").innerHTML = 
                                        "<li> <table border='0' cellpadding='0' cellspacing='0' style='width:100%;'> <tr><td style='width:30%;'> </td></tr>  <tr> <td align='center' style='width:40%;'> " + "Por favor! Aguarde <br> Carregando..." + " </td> </tr> <tr><td style='width:30%;'> </td></tr> </table> </li>" +
                                        "<li> <table border='0' cellpadding='0' cellspacing='0' style='width:100%;'> <tr><td style='width:30%;'> </td></tr>  <tr> <td align='center' style='width:40%;'> <img src='../arquivos/imagens/003_login/javafx-loading-100x100.gif' style='cursor: pointer; 'width='80' height='80'> </td> </tr> <tr><td style='width:30%;'> </td></tr> </table> </li>" + 
                                        "<li> <table border='0' cellpadding='0' cellspacing='0' style='width:100%;'> <tr><td style='width:30%;'> </td></tr>  <tr> <td align='center' style='width:40%;'> " + " Msg's: " + linha_recebida.length + " </td> </tr> <tr><td style='width:30%;'> </td></tr> </table> </li>";
                                }, 0);
                            }
//////////////////////////////////////////////////////////////////////////// 
                        //alert( "\nlinha_recebida:\n" + linha_recebida );
                        for( var i = 0; i < linha_recebida.length; i++ ) {
                            
                            //alert( i + " - " + linha_recebida[i] );
                            if( linha_recebida[i].includes("-") ){
                                
                                //alert( i + " - " + linha_recebida[i] );  
                                recebendo_linha_e_listando_todos_os_contatos_001( linha_recebida[i], i );
                            }
                        } 
                        
}, 0);                  
            }catch(Exception){
                
                document.getElementById("ul_meus_contatos").innerHTML = "consultar_contato_antes_de_cadastrar_003 -- " + Exception;
            }finally {   
                
                //alert("Acabou");
                setTimeout(function(){ 
                    
                    //alert("Reiniciando");
                    if( carregado === 1 ){
                        
                        _01_controle_loop_sem_fim();
                    }
                    else if( carregado === 0 ){
                        
                        carregado = 0;
                        document.getElementById("ul_meus_contatos").style.display = 'block';
                        
                        document.getElementById("contato_tabela_xy_01").style.display = 'none';
                        document.getElementById("contato_tabela_xy_01").innerHTML = "";
                        
                        _01_controle_loop_sem_fim();
                    }
                    
                }, 1000);
            }
            
        }
///////////////////////////////////////////////////////////////////////////////////////////////////////////
//LISTANDO TODOS OS CONTATOS   
///////////////////////////////////////////////////////////////////////////////////////////////////////////   