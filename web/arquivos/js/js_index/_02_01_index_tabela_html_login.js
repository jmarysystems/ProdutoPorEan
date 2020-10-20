/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

///////////////////////////////////////////////////////////////////////////////////////////////////////////   
///////////////////////////////////////////////////////////////////////////////////////////////////////////         

        function _02_01_index_tabela_html_login(usuario_digitado, senha_digitada, conteudo_div){  
            if (usuario_digitado === "" || usuario_digitado === null){
                alert("Para efetuar login:\n01 informe o nome de usuário\n02 informe a senha");
            }
            else if (senha_digitada === "" || senha_digitada === null){
                
                alert("Para efetuar login:\n01 informe o nome de usuário\n02 informe a senha");
            }
            else{
                
                /////////////////////////////////////////////////////////////////
                var login__resposta = document.getElementById( "resposta" ).innerHTML; 
                setTimeout(function(){
                    
                    document.getElementById( "resposta" ).innerHTML = 
                        "<table border='0' cellpadding='0' cellspacing='0' style='width:100%;'> <tr><td style='width:30%;'> </td></tr>  <tr> <td align='center' style='width:40%;'> " + "Aguarde!: " + "Efetuando Login" + " </td> </tr> <tr><td style='width:30%;'> </td></tr> </table>" + 
                        "<table border='0' cellpadding='0' cellspacing='0' style='width:100%;'> <tr><td style='width:30%;'> </td></tr>  <tr> <td align='center' style='width:40%;'> <img src='arquivos/imagens/003_login/javafx-loading-100x100.gif' style='cursor: pointer; 'width='80' height='80'> </td> </tr> <tr><td style='width:30%;'> </td></tr> </table>";
                
                }, 0);
                /////////////////////////////////////////////////////////////////
                
                var count_x = 1;
                
                if( document.getElementById("tabela_usuarios").value === "null" ){
                                        
                    //alert("1  " + "_02_01_index_tabela_html_login");   
                    _02_01_index_tabela_html_login_controle_baixar_tabela( count_x, usuario_digitado, senha_digitada, conteudo_div );   
                }
                else{
                                       
                    //alert("2  " + "_02_01_index_tabela_html_login"); 
                    _02_01_index_tabela_html_login_verificando_se_tem_dados( count_x, usuario_digitado, senha_digitada, conteudo_div );
                }
                                    
            }
        }
        
        function _02_01_index_tabela_html_login_controle_loop( count_x, usuario_digitado, senha_digitada, conteudo_div ){
            if( count_x < 7 ){      
                
                setTimeout(function(){ 
                     var count_xx = count_x + 1;
                    _02_01_index_tabela_html_login_controle_baixar_tabela( count_xx, usuario_digitado, senha_digitada, conteudo_div );
                }, 1000);
            }
            else{
                
                alert("Usuário: " + usuario_digitado + " \nNão Cadastrado \nCadastre-se! \nSe você for cadastrado: verifique sua conexão com a internet.");
                document.getElementById("resposta").innerHTML = conteudo_div;
            }
        }
        
        function _02_01_index_tabela_html_login_controle_baixar_tabela( count_x, usuario_digitado, senha_digitada, conteudo_div ){
            
            try{

                jQuery.getJSON( url_planilha_tabela_usuarios ).success(function(data) {
                    
                    //console.log(data); 
                    //alert( JSON.stringify(data) );
                    document.getElementById("tabela_usuarios").value = JSON.stringify(data);
                    _01_02_listar_na_tabela_html_a_planilha_principal();
                    
                    _02_01_index_tabela_html_login_verificando_se_tem_dados( count_x, usuario_digitado, senha_digitada, conteudo_div );
                }).error(function(message) {
                    //console.error('error' + message); 
                    _02_01_index_tabela_html_login_controle_loop( count_x, usuario_digitado, senha_digitada, conteudo_div );
                }).complete(function() {
                    //console.log('completed!');                    
                });
                
                
            }
            catch(Exception){alert( "ErroXX: " + Exception );}
        }
        
        function _02_01_index_tabela_html_login_verificando_se_tem_dados( count_x, usuario_digitado, senha_digitada, conteudo_div ){
            
            try{
                
                var tem_dados = false;
                try{
                    var linha_recebida = document.getElementById("tabela_usuarios").value.split("@");
                    for( var i = 0; i < linha_recebida.length; i++ ) {
                        if( linha_recebida[i].includes("-") ){
                            tem_dados = true;
                            break;
                        }
                    }
                }catch(Exception){}
                
                if( tem_dados === true ){
                           
                    //alert("1  " + "_02_01_index_tabela_html_login_verificando_se_tem_dados"); 
                    _02_01_index_tabela_html_login_consultar_tabela_login( usuario_digitado, senha_digitada, conteudo_div );
                }
                else{
                    //alert("2  " + "_02_01_index_tabela_html_login_verificando_se_tem_dados"); 
                    _02_01_index_tabela_html_login_controle_loop(usuario_digitado, senha_digitada, conteudo_div, count_x);
                }
            }
            catch(Exception){}
        }
        
                
        function _02_01_index_tabela_html_login_consultar_tabela_login( usuario_digitado, senha_digitada, conteudo_div ){            
            try{           
                
                //alert("0  " + "_02_01_index_tabela_html_login_consultar_tabela_login"); 
                
                var usuario_nao_cadastrado = false;
                
////////////////////////////////////////////////////////////////////////////////////////////////// 
                try{
                    
                    var id_user_logado =                       "";
                    var login_user_logado =                    "";
                    var nome_digitado_user_logado =            "";
                    var email_de_recuperacao_user_logado =     "";
                    var senha_user_logado =                    "";
                    var imagem_user_logado =                   "";
                    var quantidade_de_alteracoes_user_logado = "";
        
                    var tabela = $('#tabela tbody');
        
                    $(tabela).find("tr").each(function(index, tr) {
            
                        var id_xx =                    $(tr).find('td:eq(0)').html();
                        var login =                    $(tr).find('td:eq(2)').html();
                        var nome_digitado =            $(tr).find('td:eq(3)').html();
                        var email_de_recuperacao =     $(tr).find('td:eq(4)').html();
                        var senha =                    $(tr).find('td:eq(5)').html();
                        var imagem_user =              $(tr).find('td:eq(6)').html();
                        var quantidade_de_alteracoes = $(tr).find('td:eq(7)').html();
            
                        if( login.trim().toUpperCase() === usuario_digitado.trim().toUpperCase() ){
                
                            var senha_letra = converter_base64(senha).trim();
                
                            if( senha_letra.trim() === senha_digitada.trim() ){
                    
                                try{
                        
                                    if( usuario_nao_cadastrado === false ){
                            
                                        usuario_nao_cadastrado = true;
                                        
                                        id_user_logado =                       id_xx;
                                        login_user_logado =                    login;
                                        nome_digitado_user_logado =            nome_digitado;
                                        email_de_recuperacao_user_logado =     email_de_recuperacao;
                                        senha_user_logado =                    senha;
                                        imagem_user_logado =                   importar_Para_Alfabeto_JM(imagem_user).trim().toUpperCase(); 
                                        quantidade_de_alteracoes_user_logado = quantidade_de_alteracoes;
                                    }

                                }catch(Exception){}
                            }
                            else{
                    
                                alert("Usuário: " + usuario_digitado + " OK\nSenha incorreta");
                            }
                        }
                        else{
                            //document.getElementById( _index_tela_div_login_id ).innerHTML = _index_tela_div_login_html;
                            //document.getElementById("resposta").innerHTML = conteudo_div;
                        }
            
                    });
        
        if( usuario_nao_cadastrado === true ){
            
            //alert("1  " + "_02_01_index_tabela_html_login_consultar_tabela_login" + "\nid_user_logado \n" +id_user_logado); 
            
            var count_yy = 1;                
            if( document.getElementById("tabela_imagens_dos_contatos").value === "null" ){
                
                //alert("2  " + "_02_01_index_tabela_html_login_consultar_tabela_login"); 

                ///*
                _02_01_index_tabela_html_login_baixar_imagem( 
                    count_yy, 
                    exportar_Para_Alfabeto_JM_Sem_Arroba(id_user_logado), 
                    usuario_digitado, 
                    nome_digitado_user_logado, 
                    senha_user_logado, 
                    email_de_recuperacao_user_logado,
                    quantidade_de_alteracoes_user_logado,
                    imagem_user_logado
                );
                //*/
            }
            else{
                
                //alert("3  " + "_02_01_index_tabela_html_login_consultar_tabela_login"); 
                
                if( verificar_igualdade_sem_espaco_no_final( imagem_user_logado, "SIM" ) === true ){    
                    
                    //alert("4  " + "_02_01_index_tabela_html_login_consultar_tabela_login"); 
                    
                    ///*
                    _02_01_index_tabela_html_login_verificar_se_tem_imagem_para_baixar( 
                        count_yy, 
                        exportar_Para_Alfabeto_JM_Sem_Arroba(id_user_logado),
                        usuario_digitado, 
                        nome_digitado_user_logado, 
                        senha_user_logado, 
                        email_de_recuperacao_user_logado,
                        quantidade_de_alteracoes_user_logado,
                        imagem_user_logado
                    );
                    //*/
                }
                else{
                    
                    //alert("5  " + "_02_01_index_tabela_html_login_consultar_tabela_login"); 
                               
                    var imagem_src_datat43 = "arquivos/imagens/003_login/sem_imagem.gif";
                                        
                    endereco_imagem_user_logado = imagem_src_datat43;
                    document.getElementById("usuario_logado_imagem").value = imagem_src_datat43;
                    
                    document.getElementById("cara_palida_img").src = imagem_src_datat43;
                        
                    _02_01_index_tabela_html_login_finalizando( usuario_digitado, nome_digitado_user_logado, exportar_Para_Alfabeto_JM_Sem_Arroba(id_user_logado), senha_user_logado, email_de_recuperacao_user_logado, quantidade_de_alteracoes_user_logado, imagem_user_logado  );
                    
                }
                
                
            }
        }
        else{
            
            //alert("6  " + "_02_01_index_tabela_html_login_consultar_tabela_login"); 
            
            alert("Usuário: " + usuario_digitado + " \nNão Cadastrado \nCadastre-se! \nSe você for cadastrado: verifique sua conexão com a internet.");
        }
        
    }catch(Exception){} 
//////////////////////////////////////////////////////////////////////////////////////////////////

            }catch(Exception){
                
                document.getElementById("resposta").innerHTML = "fazerLogin -- " + Exception;
            }     
        }
///////////////////////////////////////////////////////////////////////////////////////////////////////////   
///////////////////////////////////////////////////////////////////////////////////////////////////////////   


///////////////////////////////////////////////////////////////////////////////////////////////////////////
//BAIXANDO TABELA   
///////////////////////////////////////////////////////////////////////////////////////////////////////////
        function _02_01_index_tabela_html_login_loop_baixar_imagem( count_x, web_id_da_tb_usuario, usuario_digitado, nome_digitado, senha, email_de_recuperacao, quantidade_de_alteracoes_user_logado, imagem_user_logado  ){
            if( count_x < 7 ){      
                
                setTimeout(function(){ 
                     var count_xx = count_x + 1;
                    _02_01_index_tabela_html_login_baixar_imagem( count_xx, web_id_da_tb_usuario, usuario_digitado, nome_digitado, senha, email_de_recuperacao, quantidade_de_alteracoes_user_logado, imagem_user_logado  );
                }, 1000);
            }
            else{
                
                var imagem_src_datat43 = "arquivos/imagens/003_login/sem_imagem.gif";
                                        
                endereco_imagem_user_logado = imagem_src_datat43;
                document.getElementById("usuario_logado_imagem").value = imagem_src_datat43;
                
                document.getElementById("cara_palida_img").src = imagem_src_datat43;
                        
                _02_01_index_tabela_html_login_finalizando( usuario_digitado, nome_digitado, web_id_da_tb_usuario, senha, email_de_recuperacao, quantidade_de_alteracoes_user_logado, imagem_user_logado  );
            }
        }
        
        function _02_01_index_tabela_html_login_baixar_imagem( count_x, web_id_da_tb_usuario, usuario_digitado, nome_digitado, senha, email_de_recuperacao, quantidade_de_alteracoes_user_logado, imagem_user_logado  ){
            
            try{

                jQuery.getJSON( url_planilha_tabela_imagens_dos_contatos ).success(function(data) {
                    //console.log(data); 
                    //alert( JSON.stringify(data) );
                    document.getElementById("tabela_imagens_dos_contatos").value = JSON.stringify(data);
                    
                    //alert("Estou aqui 4");
                    _02_01_index_tabela_html_login_verificar_se_tem_imagem_para_baixar( count_x, web_id_da_tb_usuario, usuario_digitado, nome_digitado, senha, email_de_recuperacao, quantidade_de_alteracoes_user_logado, imagem_user_logado  );
                    
                }).error(function(message) {
                    //console.error('error' + message); 
                    _02_01_index_tabela_html_login_loop_baixar_imagem( count_x, web_id_da_tb_usuario, usuario_digitado, nome_digitado, senha, email_de_recuperacao, quantidade_de_alteracoes_user_logado, imagem_user_logado  );
                }).complete(function() {
                    //console.log('completed!');                    
                });
                
            }
            catch(Exception){alert( "ErroXX: " + Exception );}
        }
        
        function _02_01_index_tabela_html_login_verificar_se_tem_imagem_para_baixar( count_x, web_id_da_tb_usuario, usuario_digitado, nome_digitado, senha, email_de_recuperacao, quantidade_de_alteracoes_user_logado, imagem_user_logado  ){
            
            try{
                
                //alert("0  " + "_02_01_index_tabela_html_login_verificar_se_tem_imagem_para_baixar");
                
                var tem_mensagem = false;
                var linha_recebida = document.getElementById("tabela_imagens_dos_contatos").value.split("@");
                for( var i = 0; i < linha_recebida.length; i++ ) {
                    if( linha_recebida[i].includes("-") ){
                        tem_mensagem = true;
                        break;
                    }
                }
                
                if( tem_mensagem === true ){
                    
                    //alert("1  " + "_02_01_index_tabela_html_login_verificar_se_tem_imagem_para_baixar");
                    
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
                            
                            //var web_id_da_tb_usuario_str = importar_Para_Alfabeto_JM( web_id_da_tb_usuario.trim() ).trim().toUpperCase(); 
                            var web_id_da_tb_usuario_str = converter_base64( web_id_da_tb_usuario.trim() );
                            
                            /////////////////////////////////////////////////////
                            //alert( "web_id_da_tb_usuario_str.trim() + '@' + jm_auto_quantidade_de_alteracoes \n" + web_id_da_tb_usuario_str.trim() + "@" + quantidade_de_alteracoes_user_logado );
                            var jm_id_da_imagem_externa = web_id_da_tb_usuario_str + "@" + quantidade_de_alteracoes_user_logado; 
                            /////////////////////////////////////////////////////
                                                                                    
                            var web_id_usuario_da_linha = converter_base64( web_id_usuario.trim() );
                            //alert("jm_id_da_imagem_externa \n  " + jm_id_da_imagem_externa + "\n\njm_id_da_imagem_externa \n  " + web_id_usuario_da_linha);
                            if( verificar_igualdade_sem_espaco_no_final( jm_id_da_imagem_externa, web_id_usuario_da_linha ) === true ){   
                                
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
                            
                            //alert("_02_01_index_tabela_html_login_verificar_se_tem_imagem_para_baixar" + "\n - tem_mensagem === true - \n Imagem Não Encontrada"  );
                                            
                            imagem_src_data22 = "arquivos/imagens/003_login/cont.png";
                        }
                        else{
                            
                            //alert("_02_01_index_tabela_html_login_verificar_se_tem_imagem_para_baixar" + "\n - tem_mensagem === true - \n Imagem Encontrada"  );
                        }
                                        
                        endereco_imagem_user_logado = imagem_src_data22;
                        document.getElementById("usuario_logado_imagem").value = imagem_src_data22;
                        
                        document.getElementById("cara_palida_img").src = imagem_src_data22;
                        
                        imgXX = imagem_src_data22;
                        
                        _02_01_index_tabela_html_login_finalizando( usuario_digitado, nome_digitado, web_id_da_tb_usuario, senha, email_de_recuperacao, quantidade_de_alteracoes_user_logado, imagem_user_logado  );

                    }catch(Exception){}
                }
                else{
                    
                    //alert("_02_01_index_tabela_html_login_verificar_se_tem_imagem_para_baixar" + "\n - tem_mensagem === false"  );
                    
                    _02_01_index_tabela_html_login_loop_baixar_imagem( count_x, web_id_da_tb_usuario, usuario_digitado, nome_digitado, senha, email_de_recuperacao, quantidade_de_alteracoes_user_logado, imagem_user_logado  );
                }
            }
            catch(Exception){}
        }
///////////////////////////////////////////////////////////////////////////////////////////////////////////
//BAIXANDO TABELA   
///////////////////////////////////////////////////////////////////////////////////////////////////////////      

        function _02_01_index_tabela_html_login_finalizando( usuario_digitado, nome_digitado, id, senha, email_de_recuperacao, quantidade_de_alteracoes_user_logado, imagem_user_logado  ){
                           
            //document.getElementById("resposta").style.display = 'none'; 
            //document.getElementById("div_meus_contatos").style.display = 'none';  
            
            //document.getElementById("apos_o_login").style.display = 'block';  
            
            /*
            alert("_02_01_index_tabela_html_login_finalizando" 
                    + "\n Id " +  id
                    + "\n Login " +  usuario_digitado 
                    + "\n Senha " +  senha 
                    + "\n Nome " +  nome_digitado 
                    + "\n E-mail " +  email_de_recuperacao 
            );
            */
            
                                
            //LOGIN EFETUADO COM SUCESSO 
            document.getElementById("cara_palida").innerHTML = "-)-> " + "JMarySystems" + " <-(-";
            //document.getElementById("cara_palida").innerHTML = "-)-> " + "Cara Pálida Web" + " <-(-";
            document.getElementById("cara_palida_img").style.display = 'block'; 
            
            
            
            //document.getElementById("usuario_logado").value = exportar_Para_Alfabeto_JM_Sem_Arroba(usuario_digitado);
            document.getElementById("usuario_logado").value = usuario_digitado;
            
            //var nome_digitado_da_linha = importar_Para_Alfabeto_JM(nome_digitado).trim().toUpperCase();
            //document.getElementById("usuario_logado_id_nome").value = exportar_Para_Alfabeto_JM_Sem_Arroba(nome_digitado_da_linha);
            document.getElementById("usuario_logado_id_nome").value = nome_digitado;                                               
                        
            /////////////////////////////////////////////////////////            
            document.getElementById("usuario_logado_id").value = id.trim();   //exportar_Para_Alfabeto_JM_Sem_Arroba( id.trim() );
            document.getElementById("usuario_logado_id_x").value = id.trim();   //id;   
            ////////////////////////////////////////////////////////
            
            document.getElementById("usuario_logado_pass").value = senha;  
            
            document.getElementById("usuario_logado_email").value = email_de_recuperacao;  
            
            document.getElementById("form_login_login").value = ""; 
            document.getElementById("form_login_senha").value = ""; 
                        
            document.getElementById("usuario_logado_quantidade_de_alteracoes").value = quantidade_de_alteracoes_user_logado; 
            document.getElementById("usuario_logado_imagem_sim_ou_null").value = imagem_user_logado; 
            
            /////////////////////////////////////////////////////////////////    apos_o_login
                setTimeout(function(){ 
                    document.getElementById( "resposta" ).innerHTML = document.getElementById( "apos_o_login" ).innerHTML;
                }, 0);
            /////////////////////////////////////////////////////////////////
            
            //alert("_02_01_index_tabela_html_login_finalizando" + "\n - finalizando"  );
                                
            //LISTAR CONTATOS DO USUÁRIO LOGADO 
            //listar_contatos( document.getElementById("usuario_logado").value );                                            
        }