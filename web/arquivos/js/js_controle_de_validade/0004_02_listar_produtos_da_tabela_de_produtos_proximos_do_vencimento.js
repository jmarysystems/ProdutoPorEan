/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

function listar_produtos_da_tabela_de_produtos_proximos_do_vencimento(){
    
    var linha_recebida = document.getElementById("tabela_de_produtos_proximos_do_vencimento_xls").value.split("@");
    for( var i = 0; i < linha_recebida.length; i++ ) {   
        
        if( linha_recebida[i].includes("-") ){
            
            var argumentos = linha_recebida[i].split("j");
            
            var jm_id = argumentos[ 0 ];
            var jm_comando = argumentos[ 1 ];
            var jm_auto_quantidade_de_alteracoes = argumentos[ 2 ];                       
            var jm_destinatario = argumentos[ 3 ];
            var jm_remetente = argumentos[ 4 ];
            var jm_data = argumentos[ 5 ];
            var jm_qtd = argumentos[ 6 ];
            var jm_ean = argumentos[ 7 ];
            var jm_material = argumentos[ 8 ];
            var jm_umb = argumentos[ 9 ];

            var jm_id_txt                            = ""; try{ jm_id_txt                            = converter_base64(jm_id).trim().toUpperCase(); }catch(Exception){}
            var jm_comando_txt                       = ""; try{ jm_comando_txt                       = converter_base64(jm_comando).trim().toUpperCase(); }catch(Exception){}
            var jm_auto_quantidade_de_alteracoes_txt = ""; try{ jm_auto_quantidade_de_alteracoes_txt = converter_base64(jm_auto_quantidade_de_alteracoes).trim().toUpperCase(); }catch(Exception){}                       
            var jm_destinatario_txt                  = ""; try{ jm_destinatario_txt                  = converter_base64(jm_destinatario).trim().toUpperCase(); }catch(Exception){}
            var jm_remetente_txt                     = ""; try{ jm_remetente_txt                     = converter_base64(jm_remetente).trim().toUpperCase(); }catch(Exception){}
            var jm_data_txt                          = ""; try{ jm_data_txt                          = converter_base64(jm_data).trim().toUpperCase(); }catch(Exception){}
            var jm_qtd_txt                           = ""; try{ jm_qtd_txt                           = converter_base64(jm_qtd).trim().toUpperCase(); }catch(Exception){}
            var jm_ean_txt                           = ""; try{ jm_ean_txt                           = converter_base64(jm_ean).trim().toUpperCase(); }catch(Exception){}
            var jm_material_txt                      = ""; try{ jm_material_txt                      = converter_base64(jm_material).trim().toUpperCase(); }catch(Exception){}
            var jm_umb_txt                           = ""; try{ jm_umb_txt                           = converter_base64(jm_umb).trim().toUpperCase(); }catch(Exception){}

            
            //alert( jm_ean_txt + " - " + jm_qtd_txt + " - " + jm_data_txt + " - " + jm_remetente_txt + " - " );
            
            _listar_produtos_locais_javascript( jm_ean_txt, jm_qtd_txt, jm_data_txt, jm_remetente_txt, jm_destinatario_txt );
        }
    }
}