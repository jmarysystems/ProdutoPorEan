/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

function _01_03_percorrer_tabela_html_fazer_alteracoes_e_exclusoes(){            
    try{
        
        var tabela = $('#tabela tbody');
        
        $(tabela).find("tr").each(function(index, tr) {
            
            var id = $(tr).find('td:eq(0)').html();
            var cmd = $(tr).find('td:eq(1)').html();
            
            //alert( "id: " + id + " - cmd:" + cmd);
            if( cmd.trim() === "cadastrar" ){
                
                //alert( "id: " + id + " - cmd:" + cmd);
                _01_03_percorrer_tabela_html_fazer_alteracoes_e_exclusoes_receber_id_e_ver_se_tem_duplicados( id, cmd, tr );
            }
            else if( cmd.trim() === "alterar" ){
                
                _01_03_percorrer_tabela_html_fazer_alteracoes_e_exclusoes_receber_id_e_ver_se_tem_duplicados( id, cmd, tr );
            }
            
        });
        
    }catch(Exception){}     
}

function _01_03_percorrer_tabela_html_fazer_alteracoes_e_exclusoes_receber_id_e_ver_se_tem_duplicados( id_pesq, cmd_pesq, tr_pesq ){ 
    try{
        
        //alert( "id: " + id_pesq + " - cmd:" + cmd_pesq);
        
        var count = 1;
        
        var dados = "";
        
        var tabela = $('#tabela tbody');
        
        $(tabela).find("tr").each(function(index, tr) {
            
            var id = $(tr).find('td:eq(0)').html();
            var cmd = $(tr).find('td:eq(1)').html();
            
            if( id.trim() === id_pesq.trim() ){
                
                if( count === 1 ){
                    
                    count++;
                }
                else{
                    
                    if( cmd.trim() === "excluir" ){
                        
                        $(tr_pesq).remove();
                        $(tr).remove();
                    }
                    else if( cmd.trim() === "alterar" ){
                        
                        $(tr_pesq).remove();
                    }
                    
                    //dados += id.trim() + "@" + cmd.trim() + "@";
                }
            }
            
        });
        
        /*
        if( dados.trim() !== "" ){
            
            alert( dados );
        }
        */
                                      
    }catch(Exception){}     
}