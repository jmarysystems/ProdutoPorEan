/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

function _0000_01_controle_de_telas(tela_para_exibir){            
    try{
        
        //alert( tela_para_exibir );
        
        var telas = "div_novo_usuario@editar_perfil@resposta";
       
        var linha_recebida = telas.split("@");
       
        for( var i = 0; i < linha_recebida.length; i++ ) {
            
            var tela_digitado_str = tela_para_exibir.trim().toUpperCase();
            
            var tela_da_linha = linha_recebida[i].trim().toUpperCase();
            
            var tela_ok = tela_da_linha.localeCompare(tela_digitado_str);
            
            if( tela_ok === 0 ){ 
                
                document.getElementById( tela_para_exibir ).style.display = 'block'; 
            }
            else{
                
                document.getElementById( linha_recebida[i].trim() ).style.display = 'none';
            }               
       }
        
    }catch(Exception){}     
}