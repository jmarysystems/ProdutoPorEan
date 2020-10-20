/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

///////////////////////////////////////////////////////////////////////////////////////////////////////////   
///////////////////////////////////////////////////////////////////////////////////////////////////////////        

    var _index_tela_div_login = "";

        function _0001_01_index_tabela_usuario_login(usuario_digitado, senha_digitada, conteudo_div){  
            if (usuario_digitado === "" || usuario_digitado === null){
                alert("Para efetuar login:\n01 informe o nome de usuário\n02 informe a senha");
            }
            else if (senha_digitada === "" || senha_digitada === null){
                
                alert("Para efetuar login:\n01 informe o nome de usuário\n02 informe a senha");
            }
            else{
                
                ////////////////////////////////////////////////////////////////////////////
                _index_tela_div_login = document.getElementById("resposta").innerHTML;
                setTimeout(function(){ 
                    //* 
                    document.getElementById("resposta").innerHTML = 
                        "<table border='0' cellpadding='0' cellspacing='0' style='width:100%;'> <tr><td style='width:30%;'> </td></tr>  <tr> <td align='center' style='width:40%;'> " + "Aguarde!: " + "carregando..." + " </td> </tr> <tr><td style='width:30%;'> </td></tr> </table>" + 
                        "<table border='0' cellpadding='0' cellspacing='0' style='width:100%;'> <tr><td style='width:30%;'> </td></tr>  <tr> <td align='center' style='width:40%;'> <img src='arquivos/imagens/003_login/javafx-loading-100x100.gif' style='cursor: pointer; 'width='80' height='80'> </td> </tr> <tr><td style='width:30%;'> </td></tr> </table>";
                    //*/
                    //  document.getElementById("resposta").innerHTML = _index_tela_div_login;
                }, 0);
                ///////////////////////////////////////////////////////////////////////////
                
                var count_x = 1;
                
                if( document.getElementById("tabela_usuarios").value === "null" ){
                                                        
                    _02_index_controle_baixar_tabela_login( count_x, usuario_digitado, senha_digitada, conteudo_div );   
                }
                else{
                    
                    //alert("Estou aqui 1");
                    _03_index_controle_verificar_se_tem_mensagem_login( count_x, usuario_digitado, senha_digitada, conteudo_div );
                }
            }
        }
        
        function _01_index_controle_loop_login( count_x, usuario_digitado, senha_digitada, conteudo_div ){
            if( count_x < 7 ){      
                
                setTimeout(function(){ 
                     var count_xx = count_x + 1;
                    _02_index_controle_baixar_tabela_login( count_xx, usuario_digitado, senha_digitada, conteudo_div );
                }, 1000);
            }
            else{
                
                alert("Usuário: " + usuario_digitado + " \nNão Cadastrado \nCadastre-se! \nSe você for cadastrado: verifique sua conexão com a internet.");
                //document.getElementById("resposta").innerHTML = conteudo_div;
            }
        }
        
        function _02_index_controle_baixar_tabela_login( count_x, usuario_digitado, senha_digitada, conteudo_div ){
            
            try{
                                                
                ////////////////////////////////////////////////////////////////////////////
                setTimeout(function(){ 
                    /* 
                     document.getElementById("resposta").innerHTML = 
                            "<table border='0' cellpadding='0' cellspacing='0' style='width:100%;'> <tr><td style='width:30%;'> </td></tr>  <tr> <td align='center' style='width:40%;'> " + "Tentativa de Conexão: " + count_x + " </td> </tr> <tr><td style='width:30%;'> </td></tr> </table>" + 
                            "<table border='0' cellpadding='0' cellspacing='0' style='width:100%;'> <tr><td style='width:30%;'> </td></tr>  <tr> <td align='center' style='width:40%;'> <img src='../arquivos/imagens/003_login/javafx-loading-100x100.gif' style='cursor: pointer; 'width='80' height='80'> </td> </tr> <tr><td style='width:30%;'> </td></tr> </table>";
                    */
                }, 0);
                ////////////////////////////////////////////////////////////////////////////

                jQuery.getJSON( url_planilha_tabela_usuarios ).success(function(data) {
                    
                    //console.log(data); 
                    //alert( JSON.stringify(data) );
                    document.getElementById("tabela_usuarios").value = JSON.stringify(data);
                    _0001_02_listar_tabela_usuarios();
                    
                    _03_index_controle_verificar_se_tem_mensagem_login( count_x, usuario_digitado, senha_digitada, conteudo_div );
                }).error(function(message) {
                    //console.error('error' + message); 
                    _01_index_controle_loop_login( count_x, usuario_digitado, senha_digitada, conteudo_div );
                }).complete(function() {
                    //console.log('completed!');                    
                });
                
                
            }
            catch(Exception){alert( "ErroXX: " + Exception );}
        }
        
        function _03_index_controle_verificar_se_tem_mensagem_login( count_x, usuario_digitado, senha_digitada, conteudo_div ){
            
            try{
                
                var tem_mensagem = false;
                try{
                    var linha_recebida = document.getElementById("tabela_usuarios").value.split("@");
                    for( var i = 0; i < linha_recebida.length; i++ ) {
                        if( linha_recebida[i].includes("-") ){
                            tem_mensagem = true;
                            break;
                        }
                    }
                }catch(Exception){}
                
                if( tem_mensagem === true ){
                           
                    //alert("Estou aqui 2");
                    _index_consultaTabelaLogin( usuario_digitado, senha_digitada, conteudo_div );
                }
                else{
                    
                    _01_index_controle_loop_login(usuario_digitado, senha_digitada, conteudo_div, count_x);
                }
            }
            catch(Exception){}
        }
        
                
        function _index_consultaTabelaLogin( usuario_digitado, senha_digitada, conteudo_div ){            
            try{           
                var usuario_nao_cadastrado = false;
                
                var linha_recebida = document.getElementById("tabela_usuarios").value.split("@");            
                for( var i = 0; i < linha_recebida.length; i++ ) {
                    if( linha_recebida[i].includes("-") ){
                        var id;
                        var comando;
                        var usuario;
                        var senha;
                        var nome_digitado;
                        var email_de_recuperacao;
                        var imagem_endereco_web_digitado;
                        var argumentos = linha_recebida[i].split("j");
                        for( var j = 0; j < argumentos.length; j++ ) {
                            if(j === 0){ 
                                id = argumentos[j];
                            }
                            else if(j === 1){
                                comando = argumentos[j];
                            }
                            else if(j === 2){
                                usuario = argumentos[j];
                            }
                            else if(j === 3){
                                senha = argumentos[j];
                            }
                            else if(j === 4){
                                nome_digitado = argumentos[j];
                            }
                            else if(j === 5){
                                email_de_recuperacao = argumentos[j];
                            }
                            else if(j === 6){
                                imagem_endereco_web_digitado = argumentos[j];
                            }
                        }
                        /*
                        document.getElementById("resposta").innerHTML = 
                            "<ul id=\"ul_resposta\" style=\"list-style:none; padding: 0px; margin: 0px;\"> </ul>";   
                        var usuario_txt = "<li>" + importar_Para_Alfabeto_JM(usuario) + "</li>";
                        var senha_txt = "<li>" + importar_Para_Alfabeto_JM(senha) + "</li>";                
                        document.getElementById("ul_resposta").innerHTML = usuario_txt + senha_txt;
                        */
                       var usuario_digitado_str = usuario_digitado.trim().toUpperCase();
                       var senha_digitada_str = senha_digitada.trim().toUpperCase();
                       
                       var usuario_da_linha = importar_Para_Alfabeto_JM(usuario).trim().toUpperCase();
                       var senha_da_linha = importar_Para_Alfabeto_JM(senha).trim().toUpperCase();
                       
                       var user_ok = usuario_da_linha.localeCompare(usuario_digitado_str);
                       var pass_ok = senha_da_linha.localeCompare(senha_digitada_str);
                       
                       if( user_ok === 0 ){ 
                            /*
                            document.getElementById("resposta").innerHTML = 
                                "<ul id=\"ul_resposta\" style=\"list-style:none; padding: 0px; margin: 0px;\"> </ul>";
                            document.getElementById("ul_resposta").innerHTML = "Sim " + senha_da_linha + " ** " + senha_digitada_str ;
                            */
                           
                            if( pass_ok === 0 ){ 
                                    try{
   
                                        var count_yy = 1;                
                                        if( document.getElementById("tabela_imagens_dos_contatos").value === "null" ){
                                                    
                                            //alert("Estou aqui 3");
                                            _02_index_controle_baixar_tabela_baixar_imagem( count_yy, id, usuario_digitado, nome_digitado, senha, email_de_recuperacao );
                                        }
                                        else{
                    
                                            _03_index_controle_verificar_se_tem_mensagem_baixar_imagem( count_yy, id, usuario_digitado, nome_digitado, senha, email_de_recuperacao  );
                                        }

                                    }catch(Exception){}
                            }
                            else{
                                
                                alert("Usuário: " + usuario_digitado + " OK\nSenha incorreta");
                                //document.getElementById("resposta").innerHTML = conteudo_div;
                            }
                            
                            // Fim do loop
                            usuario_nao_cadastrado = false;;
                            //alert("Usuário: " + usuario_digitado + "\nNão cadastrado" );
                            break;
                       }
                       else{
                            usuario_nao_cadastrado = true
                            //document.getElementById("resposta").innerHTML = conteudo_div;
                       }
                    }
                }   
                
                if( usuario_nao_cadastrado === true ){
                    
                    alert("Usuário: " + usuario_digitado + "\nNão cadastrado" );
                    //document.getElementById("resposta").innerHTML = conteudo_div;
                }
            }catch(Exception){
                
                document.getElementById("resposta").innerHTML = "fazerLogin -- " + Exception;
            }     
        }
///////////////////////////////////////////////////////////////////////////////////////////////////////////   
///////////////////////////////////////////////////////////////////////////////////////////////////////////   


///////////////////////////////////////////////////////////////////////////////////////////////////////////
//BAIXANDO TABELA   
///////////////////////////////////////////////////////////////////////////////////////////////////////////
        function _01_index_controle_loop_baixar_imagem( count_x, web_id_da_tb_usuario, usuario_digitado, nome_digitado, senha, email_de_recuperacao  ){
            if( count_x < 20 ){      
                
                setTimeout(function(){ 
                     var count_xx = count_x + 1;
                    _02_index_controle_baixar_tabela_baixar_imagem( count_xx, web_id_da_tb_usuario, usuario_digitado, nome_digitado, senha, email_de_recuperacao  );
                }, 1000);
            }
            else{
                
                var imagem_src_datat43 = "arquivos/imagens/003_login/sem_imagem.gif";
                                        
                endereco_imagem_user_logado = imagem_src_datat43;
                document.getElementById("usuario_logado_imagem").value = imagem_src_datat43;
                        
                _index_finalizando( usuario_digitado, nome_digitado, web_id_da_tb_usuario, senha, email_de_recuperacao  );
            }
        }
        
        function _02_index_controle_baixar_tabela_baixar_imagem( count_x, web_id_da_tb_usuario, usuario_digitado, nome_digitado, senha, email_de_recuperacao  ){
            
            try{

                ////////////////////////////////////////////////////////////////////////////
                setTimeout(function(){ 
                    /* 
                     document.getElementById("resposta").innerHTML = 
                            "<table border='0' cellpadding='0' cellspacing='0' style='width:100%;'> <tr><td style='width:30%;'> </td></tr>  <tr> <td align='center' style='width:40%;'> " + "Baixando imagens: " + count_x + " </td> </tr> <tr><td style='width:30%;'> </td></tr> </table>" + 
                            "<table border='0' cellpadding='0' cellspacing='0' style='width:100%;'> <tr><td style='width:30%;'> </td></tr>  <tr> <td align='center' style='width:40%;'> <img src='../arquivos/imagens/003_login/javafx-loading-100x100.gif' style='cursor: pointer; 'width='80' height='80'> </td> </tr> <tr><td style='width:30%;'> </td></tr> </table>";
                    */
                }, 0);
                ////////////////////////////////////////////////////////////////////////////

                jQuery.getJSON( url_planilha_tabela_imagens_dos_contatos ).success(function(data) {
                    //console.log(data); 
                    //alert( JSON.stringify(data) );
                    document.getElementById("tabela_imagens_dos_contatos").value = JSON.stringify(data);
                    
                    //alert("Estou aqui 4");
                    _03_index_controle_verificar_se_tem_mensagem_baixar_imagem( count_x, web_id_da_tb_usuario, usuario_digitado, nome_digitado, senha, email_de_recuperacao  );
                    
                }).error(function(message) {
                    //console.error('error' + message); 
                    _01_index_controle_loop_baixar_imagem( count_x, web_id_da_tb_usuario, usuario_digitado, nome_digitado, senha, email_de_recuperacao  );
                }).complete(function() {
                    //console.log('completed!');                    
                });
                
            }
            catch(Exception){alert( "ErroXX: " + Exception );}
        }
        
        function _03_index_controle_verificar_se_tem_mensagem_baixar_imagem( count_x, web_id_da_tb_usuario, usuario_digitado, nome_digitado, senha, email_de_recuperacao  ){
            
            try{
                
                var tem_mensagem = false;
                var linha_recebida = document.getElementById("tabela_imagens_dos_contatos").value.split("@");
                for( var i = 0; i < linha_recebida.length; i++ ) {
                    if( linha_recebida[i].includes("-") ){
                        tem_mensagem = true;
                        break;
                    }
                }
                
                if( tem_mensagem === true ){
////******************************************************************************************************                       
                    var retorno_da_imagem_por_parte = "";
                                                            
                    //var imagem_src_data_web22 = pegando_imagem_do_usuario_logado( mensagem_x ); 
                    //document.getElementById("resposta").innerHTML = mensagem_x;
                    var linha_recebida = document.getElementById("tabela_imagens_dos_contatos").value.split("@");            
                    for( var i = 0; i < linha_recebida.length; i++ ) {
                        if( linha_recebida[i].includes("-") ){
                            var web_id_usuario;
                            var web_email_usuario;
                            var web_contador;                        
                            var web_parte;

                            //var id_txt2 = "@" + id_usuario + "j" + email_usuario + "j" + contador  + "j" + parte + "@";
                            var argumentos = linha_recebida[i].split("j");
                            for( var j = 0; j < argumentos.length; j++ ) {
                                if(j === 0){ 
                                    web_id_usuario = argumentos[j];
                                }
                                else if(j === 1){
                                    web_email_usuario = argumentos[j];
                                }
                                else if(j === 2){
                                    web_contador = argumentos[j];
                                }
                                else if(j === 3){
                                    web_parte = argumentos[j];
                                }
                            }
                            
                            var web_id_da_tb_usuario_str = importar_Para_Alfabeto_JM( web_id_da_tb_usuario.trim() ).trim().toUpperCase();                        
                            var web_id_usuario_da_linha = importar_Para_Alfabeto_JM( web_id_usuario.trim() ).trim().toUpperCase();
                            if( verificar_igualdade_sem_espaco_no_final( web_id_da_tb_usuario_str, web_id_usuario_da_linha ) === true ){   
                                
                                retorno_da_imagem_por_parte += web_parte;
                            }
                        }else{
                                                       
                        }
                    } 
////******************************************************************************************************                    
                    
                    //document.getElementById("resposta").innerHTML = retorno;
                    try{
                        //var imagem_src_data_web22 = baixar_imagem( id );    
                        //document.getElementById("resposta").innerHTML = imagem_src_data_web22;
                        var imagem_src_data22 = converter_base64( retorno_da_imagem_por_parte );
                        if ( imagem_src_data22 === undefined || imagem_src_data22 === "" || imagem_src_data22 === null){
                                            
                            imagem_src_data22 = "arquivos/imagens/003_login/sem_imagem.gif";
                        }
                                        
                        endereco_imagem_user_logado = imagem_src_data22;
                        document.getElementById("usuario_logado_imagem").value = imagem_src_data22;
                        
                        document.getElementById("cara_palida_img").src = imagem_src_data22;
                        
                        imgXX = imagem_src_data22;
                        
                        _index_finalizando( usuario_digitado, nome_digitado, web_id_da_tb_usuario, senha, email_de_recuperacao  );

                    }catch(Exception){}
                }
                else{
                    
                    _01_index_controle_loop_baixar_imagem( count_x, web_id_da_tb_usuario, usuario_digitado, nome_digitado, senha, email_de_recuperacao  );
                }
            }
            catch(Exception){}
        }
///////////////////////////////////////////////////////////////////////////////////////////////////////////
//BAIXANDO TABELA   
///////////////////////////////////////////////////////////////////////////////////////////////////////////

        function _index_finalizando( usuario_digitado, nome_digitado, id, senha, email_de_recuperacao  ){
                           
            //document.getElementById("resposta").style.display = 'none'; 
            //document.getElementById("div_meus_contatos").style.display = 'none';  
            
            //document.getElementById("apos_o_login").style.display = 'block';  
            
                                
            //LOGIN EFETUADO COM SUCESSO 
            document.getElementById("usuario_logado").value = exportar_Para_Alfabeto_JM_Sem_Arroba(usuario_digitado);
            
            var nome_digitado_da_linha = importar_Para_Alfabeto_JM(nome_digitado).trim().toUpperCase();
            document.getElementById("cara_palida").innerHTML = "-)-> " + "CONTROLE DE VALIDADE" + " <-(-";
            //document.getElementById("cara_palida").innerHTML = "-)-> " + "Cara Pálida Web" + " <-(-";
            document.getElementById("usuario_logado_id_nome").value = exportar_Para_Alfabeto_JM_Sem_Arroba(nome_digitado_da_linha);
            
            document.getElementById("cara_palida_img").style.display = 'block'; 
            
            document.getElementById("usuario_logado_id").value = id;  
            
            document.getElementById("usuario_logado_pass").value = senha;  
            document.getElementById("usuario_logado_email").value = email_de_recuperacao;  
            
            document.getElementById("form_login_login").value = ""; 
            document.getElementById("form_login_senha").value = ""; 
                                                        
            //LISTAR CONTATOS DO USUÁRIO LOGADO 
            //listar_contatos( document.getElementById("usuario_logado").value );                                            
        }