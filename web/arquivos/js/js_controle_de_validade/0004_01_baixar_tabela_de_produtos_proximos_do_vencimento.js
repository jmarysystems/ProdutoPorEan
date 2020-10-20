/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

        function _00_inicio_baixar_tabela_de_produtos_proximos_do_vencimento(){
            if( document.getElementById("tabela_de_produtos_proximos_do_vencimento_xls").value === "null" ){  
                
                var count_x = 1;
                baixar_tabela_de_produtos_proximos_do_vencimento( count_x );
            }
            else{
                
                listar_produtos_da_tabela_de_produtos_proximos_do_vencimento();
            }
        }

        function _01_controle_loop_baixar_tabela_de_produtos_proximos_do_vencimento( count_x ){
            if( count_x < 5 ){      
                
                setTimeout(function(){ 
                    var count_xx = count_x + 1;
                    baixar_tabela_de_produtos_proximos_do_vencimento( count_xx );
                }, 1000);
            }
            else{
                
                alert( "Verifique sua conexão com a internet." );
                
                //document.getElementById("html_da_div_remetente").innerHTML = html_da_div_remetente;
            }
        }
        
        function baixar_tabela_de_produtos_proximos_do_vencimento( count_x ){
            
            try{
                var id_planilha = "15jMWfheYb16dOi-Nu5aYN__gjNoVGrMq4QpL4UcoxPQ";
                var urlxx = "https://sheets.googleapis.com/v4/spreadsheets/"+ id_planilha +"/values/A:D?key=AIzaSyBwiMCywJRFQHuuksWdhqwjOrR5mDaWJYs";
                
                ////////////////////////////////////////////////////////////////////////////
                setTimeout(function(){ 
                    /* Some tasks */ 
                     document.getElementById("lista_de_produtos_controle_de_vencimento").innerHTML = 
                            "<table border='0' cellpadding='0' cellspacing='0' style='width:100%;'> <tr><td style='width:30%;'> </td></tr>  <tr> <td align='center' style='width:40%;'> " + "Carregando...: " + count_x + " </td> </tr> <tr><td style='width:30%;'> </td></tr> </table>" + 
                            "<table border='0' cellpadding='0' cellspacing='0' style='width:100%;'> <tr><td style='width:30%;'> </td></tr>  <tr> <td align='center' style='width:40%;'> <img src='../arquivos/imagens/003_login/javafx-loading-100x100.gif' style='cursor: pointer; 'width='80' height='80'> </td> </tr> <tr><td style='width:30%;'> </td></tr> </table>";
                }, 0);
                ////////////////////////////////////////////////////////////////////////////

                var url = urlxx;
                jQuery.getJSON(url).success(function(data) {
                    //console.log(data); 
                    //alert( JSON.stringify(data) );
                    document.getElementById("tabela_de_produtos_proximos_do_vencimento_xls").value = JSON.stringify(data);
                    
                    ////////////////////////////////////////////////////////////////////////////
                    setTimeout(function(){ 
                        /* Some tasks */ 
                        document.getElementById("lista_de_produtos_controle_de_vencimento").innerHTML = "";
                    }, 0);
                    setTimeout(function(){ 
                        
                        listar_produtos_da_tabela_de_produtos_proximos_do_vencimento();
                    }, 0);
                    ////////////////////////////////////////////////////////////////////////////                    
                }).error(function(message) {
                    //console.error('error' + message); 
                    _01_controle_loop_baixar_tabela_de_produtos_proximos_do_vencimento( count_x );
                }).complete(function() {
                    //console.log('completed!');                    
                });
                
            }
            catch(Exception){alert( "ErroXX: " + Exception );}
        }