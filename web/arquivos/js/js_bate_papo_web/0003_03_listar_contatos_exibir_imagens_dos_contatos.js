/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//BAIXANDO TABELA   
///////////////////////////////////////////////////////////////////////////////////////////////////////////
        function _01_controle_loop_sem_fim( primeira_vez ){   
                
            try{
                
                setTimeout(function(){ 
                    
                    //if( document.getElementById("tabela_conversas").value === "null" ){
                                                        
                        _02_controle_loop_sem_fim_baixar_tabela_conversa( primeira_vez );  
                    //}
                    //else{
                    
                    //    listando_todos_os_contatos_001();
                    //}
                                                            
                }, 1000);
            }
            catch(Exception){alert( "_01_controle_loop_sem_fim: " + Exception );}
        }
        
        function _02_controle_loop_sem_fim_baixar_tabela_conversa( primeira_vez ){
            
            try{

                jQuery.getJSON( url_planilha_tabela_conversas ).success(function(data) {
                    //console.log(data); 
                    //alert( JSON.stringify(data) );
                    try{
                        document.getElementById("tabela_conversas").value = JSON.stringify(data);
                        
                        if( primeira_vez === true ){
                            
                            listando_todos_os_contatos_e_mensagens_primeira_vez( primeira_vez );
                        }
                        else{
                            
                            listando_todos_os_contatos_e_mensagens_loop( primeira_vez );
                        }
                        
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
//LISTANDO TODOS OS CONTATOS E MENSAGENS PRIMEIRA VEZ
///////////////////////////////////////////////////////////////////////////////////////////////////////////  
function listando_todos_os_contatos_e_mensagens_primeira_vez( primeira_vez ){        
    try{         
                
        setTimeout(function(){ 
            var linha_recebida = document.getElementById("tabela_conversas").value.split("@");
            var linha_recebida_contatos = lista_de_contatos.split("@");            
            for( var cont_x = ( linha_recebida_contatos.length - 1 ); cont_x >= 0; cont_x-- ) {
                if( linha_recebida_contatos[cont_x].includes("-") ){
                    var argumentos_contatos = linha_recebida_contatos[cont_x].split("j");                                                
                    var web_id = argumentos_contatos[0];
                    document.getElementById( "contador" + web_id ).value = ( linha_recebida.length - 1 );
                }
            }
        }, 0);
        
        setTimeout(function(){             
            //alert( "quantidade_de_mensagens - " + quantidade_de_mensagens );           
            try{           
                
                var linha_recebida_contatos = lista_de_contatos.split("@");            
                for( var  i_quantidade_de_contatos  = ( linha_recebida_contatos.length - 1 );  i_quantidade_de_contatos  >= 0;  i_quantidade_de_contatos-- ) {
                    if( linha_recebida_contatos[ i_quantidade_de_contatos ].includes("-") ){
                        var argumentos_contatos = linha_recebida_contatos[ i_quantidade_de_contatos ].split("j");                                                
                        var web_id = argumentos_contatos[0];                       
                        var web_contato_email = argumentos_contatos[3];
                        var web_contato_nome = argumentos_contatos[4];
                        
                        //Verificar se este contato é deste usuário
                        var nome_principal = "";   try{ nome_principal = converter_base64(web_contato_nome).trim(); }catch(Exception){}
                        var web_contato_email_str      = importar_Para_Alfabeto_JM( web_contato_email ).trim().toUpperCase();
                    
                        //percorrer_todas_as_conversas( web_id, web_contato_email_str, nome_principal );
                        percorrer_todas_as_conversas_local_primeira_vez( primeira_vez, web_id, web_contato_email_str, nome_principal );
                    }
                }                  
            }catch(Exception){}
        }, 0);        
                 
    }catch(Exception){
                
        document.getElementById("ul_meus_contatos").innerHTML = "consultar_contato_antes_de_cadastrar_003 -- " + Exception;
    }finally {
        //alert("Acabou");
                setTimeout(function(){ 
                    
                    //alert("Reiniciando");
                    document.getElementById("ul_meus_contatos").style.display = 'block';
                        
                    document.getElementById("contato_tabela_xy_01").style.display = 'none';
                    document.getElementById("contato_tabela_xy_01").innerHTML = "";
                    
                    _01_controle_loop_sem_fim( false );
                    
                }, 0);        
    }
            
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////
//LISTANDO TODOS OS CONTATOS E MENSAGENS PRIMEIRA VEZ
/////////////////////////////////////////////////////////////////////////////////////////////////////////// 

/////////////////////////////////////////////////////////////////////////////////////////////////////////// 
//////ESCREVER E ENVIAR MENSAGENS - PRIMEIRA VEZ   
/////////////////////////////////////////////////////////////////////////////////////////////////////////// 
        function percorrer_todas_as_conversas_local_primeira_vez( primeira_vez, web_id, web_contato_email_str, nome_principal ){
            try{    
                
setTimeout(function(){                 
                //alert( web_id + "\n" + web_contato_email + "\n" + nome_principal );
                        
                        var linha_recebida = document.getElementById("tabela_conversas").value.split("@"); 
                        //alert( "\nlinha_recebida:\n" + linha_recebida );
                        for( var i = ( linha_recebida.length - 1 ); i >= 0; i-- ){       // for( var i = 0; i < linha_recebida.length; i++ ) {
                            
                            //alert( i + " - " + linha_recebida[i] );
////////////////////////////////////////////////////////////////////////////
                            if( carregado === 0 ){
                                setTimeout(function(){ 
                                    //document.getElementById("contato_tabela_xy_01").style.display = 'block';
                                    /* Some tasks */ 
                                    document.getElementById("contato_tabela_xy_01").innerHTML = 
                                        "<li> <table border='0' cellpadding='0' cellspacing='0' style='width:100%;'> <tr><td style='width:30%;'> </td></tr>  <tr> <td align='center' style='width:40%;'> " + "Por favor! Aguarde <br> Carregando..." + " </td> </tr> <tr><td style='width:30%;'> </td></tr> </table> </li>" +
                                        "<li> <table border='0' cellpadding='0' cellspacing='0' style='width:100%;'> <tr><td style='width:30%;'> </td></tr>  <tr> <td align='center' style='width:40%;'> <img src='../arquivos/imagens/003_login/javafx-loading-100x100.gif' style='cursor: pointer; 'width='80' height='80'> </td> </tr> <tr><td style='width:30%;'> </td></tr> </table> </li>" + 
                                        "<li> <table border='0' cellpadding='0' cellspacing='0' style='width:100%;'> <tr><td style='width:30%;'> </td></tr>  <tr> <td align='center' style='width:40%;'> " + i + " de " + linha_recebida.length + " </td> </tr> <tr><td style='width:30%;'> </td></tr> </table> </li>";
                                }, 0);
                            }
//////////////////////////////////////////////////////////////////////////// 

                            if( linha_recebida[i].includes("-") ){
                                
                                //alert( i + " - " + linha_recebida[i] );  
                                //                                
                                
                                /////////-------------------------------------------------------------------------------------------------------------------------------------
                                /////////-------------------------------------------------------------------------------------------------------------------------------------
                        //if( document.getElementById( "contador" + web_id ).value < i ){
                                    
                                    //alert( i + " - " + linha_recebida[i] );
                                    //*
                                    var jm_id_msg;
                                    var jm_comando;
                                    var jm_remetente;   
                                    var jm_destinatario;   
                                    var jm_mensagem_a_receber;

                                    var argumentos = linha_recebida[i].split("j");
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
                                            primeira_vez,
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
                            
                        //document.getElementById( "contador" + web_id ).value = i;
                                    //*
                        //}
                               /////////-------------------------------------------------------------------------------------------------------------------------------------
                               /////////------------------------------------------------------------------------------------------------------------------------------------- 
                            }
                        } 
                        
}, 0);                

            }catch(Exception){                
            }finally {   
                
            }
        }
/////////////////////////////////////////////////////////////////////////////////////////////////////////// 
//////ESCREVER E ENVIAR MENSAGENS - PRIMEIRA VEZ   
/////////////////////////////////////////////////////////////////////////////////////////////////////////// 






/////////////////////////////////////////////////////////////////////////////////////////////////////////// 
//////******************************************************************************************************************************************************************************  
/////////////////////////////////////////////////////////////////////////////////////////////////////////// 




///////////////////////////////////////////////////////////////////////////////////////////////////////////
//LISTANDO TODOS OS CONTATOS E MENSAGENS LOOP
///////////////////////////////////////////////////////////////////////////////////////////////////////////   
function listando_todos_os_contatos_e_mensagens_loop( primeira_vez ){        
    try{                   
        setTimeout(function(){ 
            
            //alert( "quantidade_de_mensagens - " + quantidade_de_mensagens );
            
            try{           
                
                var linha_recebida_contatos = lista_de_contatos.split("@");            
                for( var  i_quantidade_de_contatos  = ( linha_recebida_contatos.length - 1 );  i_quantidade_de_contatos  >= 0;  i_quantidade_de_contatos-- ) {
                    if( linha_recebida_contatos[ i_quantidade_de_contatos ].includes("-") ){
                        var argumentos_contatos = linha_recebida_contatos[ i_quantidade_de_contatos ].split("j");                                                
                        var web_id = argumentos_contatos[0];                       
                        var web_contato_email = argumentos_contatos[3];
                        var web_contato_nome = argumentos_contatos[4];
                        
                        //Verificar se este contato é deste usuário
                        var nome_principal = "";   try{ nome_principal = converter_base64(web_contato_nome).trim(); }catch(Exception){}
                        var web_contato_email_str      = importar_Para_Alfabeto_JM( web_contato_email ).trim().toUpperCase();
                    
                        percorrer_todas_as_conversas( primeira_vez, web_id, web_contato_email_str, nome_principal );
                    }
                }                  
            }catch(Exception){}
        }, 0);        
                 
    }catch(Exception){
                
        document.getElementById("ul_meus_contatos").innerHTML = "consultar_contato_antes_de_cadastrar_003 -- " + Exception;
    }finally {
                //alert("Acabou");
                setTimeout(function(){ 

                    //if( carregado === 1 ){
                        
                        _01_controle_loop_sem_fim( false );
                    //}
                    //else if( carregado === 0 ){
                        
                        //carregado = 0;
                        //document.getElementById("ul_meus_contatos").style.display = 'block';
                        
                        //document.getElementById("contato_tabela_xy_01").style.display = 'none';
                        //document.getElementById("contato_tabela_xy_01").innerHTML = "";
                        
                        //_01_controle_loop_sem_fim();
                    //}
                    
                }, 1000);
    }
            
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////
//LISTANDO TODOS OS CONTATOS E MENSAGENS LOOP
/////////////////////////////////////////////////////////////////////////////////////////////////////////// 






























































///////////////////////////////////////////////////////////////////////////////////////////////////////////
//LISTANDO TODAS AS MENSAGENS POR CONTATO
/////////////////////////////////////////////////////////////////////////////////////////////////////////// 
function listando_todas_as_mensagens_por_contato( i_quantidade_de_contatos, web_id, web_contato_email_str, nome_principal ){        
    try{           
             
        setTimeout(function(){ 
            
            //alert( i_quantidade_de_contatos + " - " + web_id + " - " + web_contato_email_str + " - " + nome_principal );
            
            var linha_recebida = document.getElementById("tabela_conversas").value.split("@");
            for( var i_quantidade_de_mensagens = 0; i_quantidade_de_mensagens < linha_recebida.length; i_quantidade_de_mensagens++ ){    //  for( var i_quantidade_de_mensagens = ( linha_recebida.length - 1 ); i_quantidade_de_mensagens >= 0; i_quantidade_de_mensagens -- ){
            
                if( linha_recebida[ i_quantidade_de_mensagens ].includes("-") ){
                
                    var argumentos = linha_recebida[ i_quantidade_de_mensagens ].split("j");
                
                    var jm_id_msg;
                    var jm_comando;
                    var jm_remetente;   
                    var jm_destinatario;   
                    var jm_mensagem_a_receber;
                
                    try{ jm_id_msg = argumentos[0]; }catch(Exception){}
                    try{ jm_comando = argumentos[1]; }catch(Exception){}
                    try{ jm_remetente = argumentos[2]; }catch(Exception){}
                    try{ jm_destinatario = argumentos[3]; }catch(Exception){}
                    try{ jm_mensagem_a_receber = argumentos[4]; }catch(Exception){}
                
                    var _00_local_usuario_logado_email_str            = document.getElementById("usuario_logado").value.trim().toUpperCase();                                   
                                                
                    var _00_web_usuario_logado_email_remetente_str    = importar_Para_Alfabeto_JM(jm_remetente).trim().toUpperCase();
                    var _11_web_usuario_logado_email_destinatario_str = importar_Para_Alfabeto_JM(jm_destinatario).trim().toUpperCase();     
                                    
                    var web_hora_str = importar_Para_Alfabeto_JM( jm_id_msg ).trim();
                    var web_mensagem_str = importar_Para_Alfabeto_JM( jm_mensagem_a_receber ).trim();
                    var mensagem = web_mensagem_str.trim().replace("\n", "<br>");
                    
                    var _11_local_contato_desta_tabela_email_str      = web_contato_email_str;
                    
                    if( document.getElementById( "contador" + web_id ).value < i_quantidade_de_mensagens ){
                        
                        document.getElementById( "contador" + web_id ).value = i_quantidade_de_mensagens;
                            
                        escolha_01(
                            _00_web_usuario_logado_email_remetente_str, 
                                _00_local_usuario_logado_email_str,
                                    _11_local_contato_desta_tabela_email_str,
                                        _11_web_usuario_logado_email_destinatario_str,
                                            jm_id_msg,
                                                web_id,
                                                    nome_principal,
                                                        web_hora_str,
                                                            mensagem
                        );
                    } 
                }
                
                if( i_quantidade_de_mensagens === linha_recebida.length - 1 ){
                        
                    if( i_quantidade_de_contatos === 0 ){
                        alert( " i_quantidade_de_contatos - " + i_quantidade_de_contatos + " i_quantidade_de_mensagens - " + i_quantidade_de_mensagens );
                        _01_controle_loop_sem_fim();
                    }
                }
            }
        }, 0);   
                 
    }catch(Exception){
                
        document.getElementById("ul_meus_contatos").innerHTML = "consultar_contato_antes_de_cadastrar_003 -- " + Exception;
    }finally {

    }
            
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////
//LISTANDO TODAS AS MENSAGENS POR CONTATO
///////////////////////////////////////////////////////////////////////////////////////////////////////////  


///////////////////////////////////////////////////////////////////////////////////////////////////////////
//LISTANDO TODAS AS MENSAGENS   
///////////////////////////////////////////////////////////////////////////////////////////////////////////
function listando_todas_as_mensagens_001(){        
    try{           
        
        setTimeout(function(){ 
            document.getElementById("ul_meus_contatos").style.display = 'block';
            document.getElementById("contato_tabela_xy_01").style.display = 'none';
            document.getElementById("contato_tabela_xy_01").innerHTML = "";
        }, 0);
        
        var linha_recebida = document.getElementById("tabela_conversas").value.split("@");
        setTimeout(function(){ 
            if( carregado === 0 ){
                var linha_recebida_contatos = lista_de_contatos.split("@");            
                for( var cont_x = ( linha_recebida_contatos.length - 1 ); cont_x >= 0; cont_x-- ) {
                    if( linha_recebida_contatos[cont_x].includes("-") ){
                        var argumentos_contatos = linha_recebida_contatos[cont_x].split("j");                                                
                        var web_id = argumentos_contatos[0];
                        document.getElementById( "contador" + web_id ).value = ( linha_recebida.length - 1 );
                    }
                }
            }
        }, 0);
        
        for( var i = ( linha_recebida.length - 1 ); i >= 0; i-- ){    //  for( var i = ( linha_recebida.length - 1 ); i >= 0; i-- ) {  
            
            if( linha_recebida[i].includes("-") ){
                
                var argumentos = linha_recebida[i].split("j");
                
                var jm_id_msg;
                var jm_comando;
                var jm_remetente;   
                var jm_destinatario;   
                var jm_mensagem_a_receber;
                
                try{ jm_id_msg = argumentos[0]; }catch(Exception){}
                try{ jm_comando = argumentos[1]; }catch(Exception){}
                try{ jm_remetente = argumentos[2]; }catch(Exception){}
                try{ jm_destinatario = argumentos[3]; }catch(Exception){}
                try{ jm_mensagem_a_receber = argumentos[4]; }catch(Exception){}
                
                var _00_local_usuario_logado_email_str            = document.getElementById("usuario_logado").value.trim().toUpperCase();                                   
                                                
                var _00_web_usuario_logado_email_remetente_str    = importar_Para_Alfabeto_JM(jm_remetente).trim().toUpperCase();
                var _11_web_usuario_logado_email_destinatario_str = importar_Para_Alfabeto_JM(jm_destinatario).trim().toUpperCase();     
                                    
                var web_hora_str = importar_Para_Alfabeto_JM( jm_id_msg ).trim();
                var web_mensagem_str = importar_Para_Alfabeto_JM( jm_mensagem_a_receber ).trim();
                var mensagem = web_mensagem_str.trim().replace("\n", "<br>");
                              
                //var web_mensagem_str = importar_Para_Alfabeto_JM( jm_mensagem_a_receber ).trim();                
                //var anterior = document.getElementById( "ul_meus_contatos" ).innerHTML;
                //document.getElementById( "ul_meus_contatos" ).innerHTML = anterior + "<li>" + i + " - " + web_mensagem_str + " - " + jm_remetente + "</li>";
                                
                
                receber_mensagem_e_percorrer_todos_os_contatos_001(
                    jm_id_msg,
                    i,
                        _00_local_usuario_logado_email_str,
                            _00_web_usuario_logado_email_remetente_str,
                                _11_web_usuario_logado_email_destinatario_str,
                                    web_hora_str,
                                        mensagem
                                        );
                
                                
            }
        }
                         
    }catch(Exception){
                
        document.getElementById("ul_meus_contatos").innerHTML = "consultar_contato_antes_de_cadastrar_003 -- " + Exception;
    }finally {   
           
        //*
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
        //*/
    }
            
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////
//LISTANDO TODAS AS MENSAGENS   
///////////////////////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////////////////////////////
//RECEBER MENSAGEM E PERCORRER TODOS OS CONTATOS 
///////////////////////////////////////////////////////////////////////////////////////////////////////////
function receber_mensagem_e_percorrer_todos_os_contatos_001( 
                jm_id_msg,
                    cont_msg,
                        _00_local_usuario_logado_email_str,
                            _00_web_usuario_logado_email_remetente_str,
                                _11_web_usuario_logado_email_destinatario_str,
                                    web_hora_str,
                                        mensagem
                                        ){        
    try{     
        
setTimeout(function(){   
    
        try{           
                
            var linha_recebida_contatos = lista_de_contatos.split("@");            
            for( var cont_x = ( linha_recebida_contatos.length - 1 ); cont_x >= 0; cont_x-- ) {
                if( linha_recebida_contatos[cont_x].includes("-") ){
                    var argumentos_contatos = linha_recebida_contatos[cont_x].split("j");                                                
                    var web_id = argumentos_contatos[0];                       
                    var web_contato_email = argumentos_contatos[3];
                    var web_contato_nome = argumentos_contatos[4];
                        
                    //Verificar se este contato é deste usuário
                    var nome_principal = "";   try{ nome_principal = converter_base64(web_contato_nome).trim(); }catch(Exception){}
                    var web_contato_email_str      = importar_Para_Alfabeto_JM( web_contato_email ).trim().toUpperCase();
                    
                    var _11_local_contato_desta_tabela_email_str      = web_contato_email_str;
                    
                    if( carregado === 0 ){
                        
                        if( document.getElementById( "contador" + web_id ).value > cont_msg ){
                            
                            //var anterior = document.getElementById( "ul_meus_contatos" ).innerHTML;
                            //document.getElementById( "ul_meus_contatos" ).innerHTML = anterior + "<li>" + "cont_user: " + cont_x + " - cont_msg - " + cont_msg + " - contador web_id: " + document.getElementById( "contador" + web_id ).value + " - Remetente - " + _00_web_usuario_logado_email_remetente_str + " - Destinatário - " + _11_web_usuario_logado_email_destinatario_str + " - Mensagem - " + mensagem + "</li>";
                            escolha_01(
                                        _00_web_usuario_logado_email_remetente_str, 
                                            _00_local_usuario_logado_email_str,
                                                _11_local_contato_desta_tabela_email_str,
                                                    _11_web_usuario_logado_email_destinatario_str,
                                                            jm_id_msg,
                                                                web_id,
                                                                    nome_principal,
                                                                        web_hora_str,
                                                                            mensagem
                                    );
                        } 
                    }
                    else if( carregado === 1 ){
                        
                        if( document.getElementById( "contador" + web_id ).value < cont_msg ){
                            
                            var anterior = document.getElementById( "ul_meus_contatos" ).innerHTML;
                            document.getElementById( "ul_meus_contatos" ).innerHTML = anterior + "<li>" + "cont_user: " + cont_x + " - cont_msg - " + cont_msg + " - contador web_id: " + document.getElementById( "contador" + web_id ).value + " - Remetente - " + _00_web_usuario_logado_email_remetente_str + " - Destinatário - " + _11_web_usuario_logado_email_destinatario_str + " - Mensagem - " + mensagem + "</li>";
                            
                            //
                            document.getElementById( "contador" + web_id ).value = cont_msg;
                        }
                    }
                    
                    //Não repetir a mesma leitura de uma mensagem para um contato.
                    /*
                    receber_mensagem_e_percorrer_todos_os_contatos_002_nao_repetir( 
                    cont_msg,
                        _00_local_usuario_logado_email_str,
                            _00_web_usuario_logado_email_remetente_str,
                                _11_web_usuario_logado_email_destinatario_str,
                                    web_hora_str,
                                        mensagem,
                                            _11_local_contato_desta_tabela_email_str,
                                                web_id
                                                );
                                        */
                }
            }                  
        }catch(Exception){}
}, 0);

    }catch(Exception){
                
        document.getElementById("ul_meus_contatos").innerHTML = "consultar_contato_antes_de_cadastrar_003 -- " + Exception;
    }finally {   

    }            
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////
//RECEBER MENSAGEM E PERCORRER TODOS OS CONTATOS 
///////////////////////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////////////////////////////
//RECEBER MENSAGEM E PERCORRER TODOS OS CONTATOS 
///////////////////////////////////////////////////////////////////////////////////////////////////////////
function receber_mensagem_e_percorrer_todos_os_contatos_002_nao_repetir( 
                    cont_msg,
                        _00_local_usuario_logado_email_str,
                            _00_web_usuario_logado_email_remetente_str,
                                _11_web_usuario_logado_email_destinatario_str,
                                    web_hora_str,
                                        mensagem,
                                            _11_local_contato_desta_tabela_email_str,
                                                web_id
                                                ){        
    try{     
        
setTimeout(function(){   
    
        if( carregado === 0 ){
                        
                        if( document.getElementById( "contador" + web_id ).value < cont_msg ){
                            
                            var anterior = document.getElementById( "ul_meus_contatos" ).innerHTML;
                            document.getElementById( "ul_meus_contatos" ).innerHTML = anterior + "<li>" + "cont_user: " + cont_x + " - cont_msg - " + cont_msg + " - contador web_id: " + document.getElementById( "contador" + web_id ).value + "</li>";
                        }
                    }
    
        //Não repetir a mesma leitura de uma mensagem para um contato.
        //if( document.getElementById( "contador" + web_id ).value > cont_msg  ){
                     
            var anterior = document.getElementById( "ul_meus_contatos" ).innerHTML;
            document.getElementById( "ul_meus_contatos" ).innerHTML = anterior + "<li>" + "cont_msg: " + cont_msg + " - " + " - contador web_id: " + document.getElementById( "contador" + web_id ).value + " - Percorrendo Contato: " + i + " - " + _11_local_contato_desta_tabela_email_str + " - " + cont_msg + " - " + mensagem + " - " + _00_web_usuario_logado_email_remetente_str + " - " + _11_web_usuario_logado_email_destinatario_str + "</li>"; 
            
            //document.getElementById( "contador" + web_id ).value = cont_msg;
        //}
}, 0);

    }catch(Exception){
                
        document.getElementById("ul_meus_contatos").innerHTML = "consultar_contato_antes_de_cadastrar_003 -- " + Exception;
    }finally {   

    }            
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////
//RECEBER MENSAGEM E PERCORRER TODOS OS CONTATOS 
///////////////////////////////////////////////////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////////////////////////////////////////////////
//LISTANDO TODOS OS CONTATOS   
///////////////////////////////////////////////////////////////////////////////////////////////////////////
function listando_todos_os_contatos_001(){        
            try{           
                
                var linha_recebida_contatos = lista_de_contatos.split("@");            
                for( var i = ( linha_recebida_contatos.length - 1 ); i >= 0; i-- ) {
                    if( linha_recebida_contatos[i].includes("-") ){
                        var argumentos_contatos = linha_recebida_contatos[i].split("j");                                                
                        var web_id = argumentos_contatos[0];                       
                        var web_contato_email = argumentos_contatos[3];
                        var web_contato_nome = argumentos_contatos[4];
                        
                        //Verificar se este contato é deste usuário
                        var nome_principal = "";   try{ nome_principal = converter_base64(web_contato_nome).trim(); }catch(Exception){}
                        var web_contato_email_str      = importar_Para_Alfabeto_JM( web_contato_email ).trim().toUpperCase();
                    
                        percorrer_todas_as_conversas( web_id, web_contato_email_str, nome_principal );                       
                    }
                }                  
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