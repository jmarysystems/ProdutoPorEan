/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

///////////////////////////////////////////////////////////////////////////////////////////////////////////   
///////////////////////////////////////////////////////////////////////////////////////////////////////////         
function _0003_03_index_X_tabela_usuario_X_alterar_usuario(
        usuario_logado_id,
                usuario_digitado, 
                    senha_digitada, 
                        nome_digitado,
                            email_de_recuperacao,
                                imagem_endereco_web_digitado,
                                    conteudo_div){  
            if (usuario_digitado === "" || usuario_digitado === null){
                alert("Para alterar um usuário:\n01 informe o DDD + Telefone\n02 informe a senha\n03 informe o nome do usuário");
            }
            else if (senha_digitada === "" || senha_digitada === null){
                
                alert("Para alterar um usuário:\n01 informe o DDD + Telefone\n02 informe a senha\n03 informe o nome do usuário");
            }
            else if (nome_digitado === "" || nome_digitado === null){
                
                alert("Para alterar um usuário:\n01 informe o DDD + Telefone\n02 informe a senha\n03 informe o nome do usuário");
            }
            else if (usuario_logado_id === "" || usuario_logado_id === null){
                
                alert("Para alterar um usuário:\n01 informe o DDD + Telefone\n02 informe a senha\n03 informe o nome do usuário\n04 É preciso está logado.");
            }
            else{
                
                /////////////////////////////////////////////////////////////////
                var alterar__div_novo_usuario = document.getElementById( "div_novo_usuario" ).innerHTML; 
                setTimeout(function(){
                    
                    document.getElementById( "div_novo_usuario" ).innerHTML = 
                        "<table border='0' cellpadding='0' cellspacing='0' style='width:100%;'> <tr><td style='width:30%;'> </td></tr>  <tr> <td align='center' style='width:40%;'> " + "Aguarde!: " + "Salvando Alterações" + " </td> </tr> <tr><td style='width:30%;'> </td></tr> </table>" + 
                        "<table border='0' cellpadding='0' cellspacing='0' style='width:100%;'> <tr><td style='width:30%;'> </td></tr>  <tr> <td align='center' style='width:40%;'> <img src='arquivos/imagens/003_login/javafx-loading-100x100.gif' style='cursor: pointer; 'width='80' height='80'> </td> </tr> <tr><td style='width:30%;'> </td></tr> </table>";
                
                }, 0);
                /////////////////////////////////////////////////////////////////
                
                /////////////////////////////////////////////////////////////////
                setTimeout(function(){
                    
                    var count_x_tabela_usuario_1 = 1;
                
                    //alert( imagem_endereco_web_digitado );
                
                    //var _2222_usuario_logado_id = exportar_Para_Alfabeto_JM_Sem_Arroba(usuario_logado_id);
                    //alert("_0003_03_index_X_tabela_usuario_X_alterar_usuario: " + "\nusuario_logado_id: " + usuario_logado_id );
                
                    _02_controle_baixar_tabela_usuario_index_X_tabela_usuario_X_alterar_usuario( 
                            usuario_logado_id,
                        count_x_tabela_usuario_1,    
                            usuario_digitado, 
                                senha_digitada, 
                                    nome_digitado, 
                                        email_de_recuperacao, 
                                            imagem_endereco_web_digitado, 
                                                conteudo_div);
                }, 100);   
                /////////////////////////////////////////////////////////////////
                
            }
        }
        
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
        function _01_controle_baixar_tabela_usuario_index_X_tabela_usuario_X_alterar_usuario(
                usuario_logado_id,
            count_x,    
                usuario_digitado_recebido, 
                    senha_digitada_recebido, 
                        nome_digitado_recebido, 
                            email_de_recuperacao_recebido, 
                                imagem_endereco_web_digitado_recebido, 
                                    conteudo_div){
            if( count_x < 5 ){      
                
                setTimeout(function(){ 
                     var count_xx = count_x + 1;
                     
                    _02_controle_baixar_tabela_usuario_index_X_tabela_usuario_X_alterar_usuario( 
                            usuario_logado_id,
                        count_xx,
                            usuario_digitado_recebido, 
                                senha_digitada_recebido, 
                                    nome_digitado_recebido, 
                                        email_de_recuperacao_recebido, 
                                            imagem_endereco_web_digitado_recebido, 
                                                conteudo_div);
                }, 1000);
            }
            else{
                
                alert("Usuário: " + usuario_digitado_recebido + " \nVerifique sua conexão \ncom a internet.");
                
                document.getElementById("resposta").style.display = 'block'; 
                document.getElementById("div_novo_usuario").style.display = 'none'; 
            }
        }
        
        function _02_controle_baixar_tabela_usuario_index_X_tabela_usuario_X_alterar_usuario( 
                usuario_logado_id,
                count_x,
                usuario_digitado_recebido, 
                    senha_digitada_recebido, 
                        nome_digitado_recebido, 
                            email_de_recuperacao_recebido, 
                                imagem_endereco_web_digitado_recebido, 
                                    conteudo_div){
            
            try{

                jQuery.getJSON( url_planilha_tabela_usuarios ).success(function(data) {
                    //console.log(data); 
                    //alert( JSON.stringify(data) );
                    _03_controle_baixar_tabela_usuario_index_X_tabela_usuario_X_alterar_usuario(
                            usuario_logado_id,
                        JSON.stringify(data),
                        count_x,    
                            usuario_digitado_recebido, 
                                senha_digitada_recebido, 
                                    nome_digitado_recebido, 
                                        email_de_recuperacao_recebido, 
                                            imagem_endereco_web_digitado_recebido, 
                                                conteudo_div);
                }).error(function(message) {
                    //console.error('error' + message); 
                    _01_controle_baixar_tabela_usuario_index_X_tabela_usuario_X_alterar_usuario(
                            usuario_logado_id,
                        count_x,    
                            usuario_digitado_recebido, 
                                senha_digitada_recebido, 
                                    nome_digitado_recebido, 
                                        email_de_recuperacao_recebido, 
                                            imagem_endereco_web_digitado_recebido, 
                                                conteudo_div);
                                                
                    //console.log('cleilson! ' + message);                            
                }).complete(function() {
                    //console.log('completed!');                    
                });
                
            }
            catch(Exception){alert( "ErroXX: " + Exception );}
        }
        
        function _03_controle_baixar_tabela_usuario_index_X_tabela_usuario_X_alterar_usuario( 
                usuario_logado_id,
                mensagem_x,
                count_x,
                usuario_digitado_recebido, 
                    senha_digitada_recebido, 
                        nome_digitado_recebido, 
                            email_de_recuperacao_recebido, 
                                imagem_endereco_web_digitado_recebido, 
                                    conteudo_div){
            
            try{
                
                var tem_mensagem = false;
                var linha_recebida = mensagem_x.split("@");
                for( var i = 0; i < linha_recebida.length; i++ ) {
                    if( linha_recebida[i].includes("-") ){
                        tem_mensagem = true;
                        break;
                    }
                }
                
                if( tem_mensagem === true ){
                    
                    _index_consultar_para_verificar_se_usuario_esta_cadastrado(
                            usuario_logado_id,
                        mensagem_x,
                            usuario_digitado_recebido, 
                                senha_digitada_recebido, 
                                    nome_digitado_recebido, 
                                        email_de_recuperacao_recebido, 
                                            imagem_endereco_web_digitado_recebido, 
                                                conteudo_div);
                }
                else{
                    
                    //alert( mensagem_x );
                    
                    //Tabela baixada e nenhum usuário cadastrado - cadastrando...
                    _index_alterar_tabela_login(usuario_logado_id, usuario_digitado_recebido, senha_digitada_recebido, nome_digitado_recebido, email_de_recuperacao_recebido, imagem_endereco_web_digitado_recebido, conteudo_div);
                    
                    /*
                    _01_controle_loop_usuario_cad(
                        count_x,    
                            usuario_digitado_recebido, 
                                senha_digitada_recebido, 
                                    nome_digitado_recebido, 
                                        email_de_recuperacao_recebido, 
                                            imagem_endereco_web_digitado_recebido, 
                                                conteudo_div);
                    */
                }
            }
            catch(Exception){}
        }
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////        
        
        
        function _index_consultar_para_verificar_se_usuario_esta_cadastrado( 
                usuario_logado_id,
            mensagem,
                usuario_digitado_recebido, 
                    senha_digitada_recebido, 
                        nome_digitado_recebido, 
                            email_de_recuperacao_recebido, 
                                imagem_endereco_web_digitado_recebido, 
                                    conteudo_div){
            try{           
                var usuario_nao_cadastrado = false;
                
                var linha_recebida = mensagem.split("@");            
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

                       var usuario_digitado_str = usuario_digitado_recebido.trim().toUpperCase();

                       var usuario_da_linha = importar_Para_Alfabeto_JM(usuario).trim().toUpperCase();
                       
                       //alert("usuario_digitado_str: " + usuario_digitado_str + "\nusuario_da_linha: " + usuario_da_linha );
                       
                       //Verificando se já tem um nome(login) igual
                       if( verificar_igualdade_sem_espaco_no_final( usuario_da_linha, usuario_digitado_str ) === true ){                                                     
                            
                            //alert("\verificar_igualdade_sem_espaco_no_final==true: \n" + "usuario_digitado_str: " + usuario_digitado_str + "\nusuario_da_linha: " + usuario_da_linha );

                            //Se o nome for igual e o id igual 
                            //alert("id: " + id + "\nusuario_logado_id: " + usuario_logado_id );
                            //
                            if( verificar_igualdade_sem_espaco_no_final( id, usuario_logado_id ) === true ){  
                                
                                //alert("\verificar_igualdade_sem_espaco_no_final==true: \n" + "id: " + id + "\nusuario_logado_id: " + usuario_logado_id );
                                
                                //Aceita alterar e para o for
                                usuario_nao_cadastrado = true;
                                break;
                            }
                            else{
                                //alert("\verificar_igualdade_sem_espaco_no_final==false: \n" + "id: " + id + "\nusuario_logado_id: " + usuario_logado_id );
                                
                                // Fim do loop
                                usuario_nao_cadastrado = false;
                                break;
                            }
                       }
                       else{
                           //alert("\verificar_igualdade_sem_espaco_no_final==false: \n" + "usuario_digitado_str: " + usuario_digitado_str + "\nusuario_da_linha: " + usuario_da_linha );
                           
                           //Aplica-se para o cadastro, não para a alteração.
                            usuario_nao_cadastrado = true;
                            //alert("Usuário: " + usuario_digitado + "\nNão cadastrado" );
                            //document.getElementById("resposta").innerHTML = conteudo_div;
                       }
                    }
                }   
                
                if( usuario_nao_cadastrado === true ){
                    
                    //alert("Usuário: " + usuario_digitado + "\nNão cadastrado" );
                    //document.getElementById("resposta").innerHTML = conteudo_div;
                    _index_alterar_tabela_login(usuario_logado_id, usuario_digitado_recebido, senha_digitada_recebido, nome_digitado_recebido, email_de_recuperacao_recebido, imagem_endereco_web_digitado_recebido, conteudo_div);
                }
                else{
                    
                    //alert("Número de telefone já cadastrado: " + usuario_digitado_recebido + "\nNão pode ser alterado." + "\n\nEscolha um número de telefone diferente para alterar este usuário\n\nEste já está cadastrado." );
                
                    document.getElementById("resposta").style.display = 'none'; 
                    document.getElementById("div_novo_usuario").style.display = 'block'; 
                }
            }catch(Exception){
                
                document.getElementById("resposta").innerHTML = "fazerLogin -- " + Exception;
            }     
        }
        
        
        function _index_alterar_tabela_login(
                usuario_logado_id,
                usuario_digitado, 
                    senha_digitada, 
                        nome_digitado,
                            email_de_recuperacao,
                                imagem_endereco_web_digitado,
                                    conteudo_div){  
            
            try{
                                                        
                setTimeout(function(){ 
                    /* Some tasks */ 
                    //document.getElementById("resposta").innerHTML = "<table border='0' cellpadding='0' cellspacing='0' style='width:100%;'> <tr><td style='width:30%;'> </td></tr>  <tr> <td align='center' style='width:40%;'> <img src='arquivos/imagens/003_login/javafx-loading-100x100.gif' style='cursor: pointer; 'width='80' height='80'> </td> </tr> <tr><td style='width:30%;'> </td></tr> </table>";
                    //document.getElementById("div_novo_usuario").style.display = 'none';
                }, 0);
            
                setTimeout(function(){
                    
                    //alert( "_index_alterar_tabela_login \n usuario_logado_id" + usuario_logado_id );
                    
                    var now = new Date();
                    var id = importar_Para_Alfabeto_JM(usuario_logado_id).trim().toUpperCase();//now.getDate() + "/" + now.getMonth() + "/" + now.getFullYear() + "-" + 
                             //now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds() + "." + now.getMilliseconds();
                     
                    var comando = "alterar";
                    
                    //////////////////////////////////////////
                    var jm_id = usuario_logado_id.trim();//exportar_Para_Alfabeto_JM_Sem_Arroba( id.trim() );  //
                    var jm_comando = exportar_Para_Alfabeto_JM_Sem_Arroba( comando.trim() );
                    
                    //////////////////////////////////////////
                    //alert( "document.getElementById('usuario_logado_quantidade_de_alteracoes').value = \n" + document.getElementById("usuario_logado_quantidade_de_alteracoes").value );
                    var x1 = document.getElementById("usuario_logado_quantidade_de_alteracoes").value.trim();
                    //alert( "x1 = " + x1 );
                    var x2 = parseInt( x1 ) + 1;
                    //alert( "x2 = " + x2 );
                    var jm_auto_quantidade_de_alteracoes = x2 + "";
                    //alert( "jm_auto_quantidade_de_alteracoes = " + jm_auto_quantidade_de_alteracoes );
                    //////////////////////////////////////////
                    
                    var jm_usuario_digitado = exportar_Para_Alfabeto_JM_Sem_Arroba( usuario_digitado.trim() );
                    var jm_senha_digitada = exportar_Para_Alfabeto_JM_Sem_Arroba( senha_digitada.trim() );
                    var jm_nome_digitado = exportar_Para_Alfabeto_JM_Sem_Arroba( nome_digitado.trim() );
                    //////////////////////////////////////////////////////////////////////////////////////////
                    //alert( "usuario_logado_id.trim() + '@' + jm_auto_quantidade_de_alteracoes.trim() \n" + id.trim() + "@" + jm_auto_quantidade_de_alteracoes );
                    var jm_id_da_imagem_externa = exportar_Para_Alfabeto_JM_Sem_Arroba( id.trim() + "@" + jm_auto_quantidade_de_alteracoes.trim() );
                    //////////////////////////////////////////////////////////////////////////////////////////
                    
                    //alert( "nome_digitado = " + nome_digitado + " -- " + "jm_nome_digitado " + jm_nome_digitado );
                    
                    var jm_email_de_recuperacao = "null";
                    var jm_email_de_recuperacao_digitado = "null";
                    if (email_de_recuperacao === "" || email_de_recuperacao === null){
                        
                    }
                    else{
                        jm_email_de_recuperacao_digitado = email_de_recuperacao.trim();
                        jm_email_de_recuperacao = exportar_Para_Alfabeto_JM_Sem_Arroba( email_de_recuperacao.trim() );
                    }

                    var jm_imagem_endereco_web_digitado = "null";
                    if (imgXX === "null" || imgXX === "" || imgXX === null){
                        
                        //alert( "NÃO TEM IMAGEM PARA SALVAR" + "\nimagem_endereco_web_digitado" + imagem_endereco_web_digitado );
                    }
                    else{
                        
                        //alert( "TEM IMAGEM PARA SALVAR" + "\nimagem_endereco_web_digitado" + imagem_endereco_web_digitado );
                        //alert( "jm_id_da_imagem_externa\n" +jm_id_da_imagem_externa );
                        //alert( "imagem\n" + imgXX );

                        //jm_imagem_endereco_web_digitado = exportar_Para_Alfabeto_JM_Sem_Arroba(imgXX);
                        //document.getElementById("resposta").innerHTML = "Size = " + imgXX.length + "<br>" + jm_imagem_endereco_web_digitado;
                        
                        jm_imagem_endereco_web_digitado = exportar_Para_Alfabeto_JM_Sem_Arroba( "sim" ); 
                        
                        try{
                            _index_salvar_imagem_do_perfil( 
                               exportar_Para_Alfabeto_JM_Sem_Arroba(imgXX), 
                                    jm_usuario_digitado,
                                        jm_id_da_imagem_externa );
                        }catch(Exception){}
                    }
                    
                    var id_txt2 = "@" + jm_id + "j" + jm_comando + "j" + jm_usuario_digitado  + "j" + 
                            jm_senha_digitada  + "j" +  jm_nome_digitado  + "j" + 
                            jm_email_de_recuperacao  + "j" +
                            jm_imagem_endereco_web_digitado + "j" +
                            jm_auto_quantidade_de_alteracoes + "@";
                    //////////////////////////////////////////
                
                    var GET_URL = "https://docs.google.com/forms/d/e/" + id_formulario_tabela_usuarios + "/formResponse" +
                            "?entry." + entry_texto_formulario_tabela_usuarios + "=" + id_txt2 +
                            "&entry." + entry_id_formulario_tabela_usuarios + "=" + id.trim() +
                            "&entry." + entry_comando_formulario_tabela_usuarios + "=" + comando.trim() +
                            "&entry." + entry_telefone_formulario_tabela_usuarios + "=" + usuario_digitado.trim() +
                            "&entry." + entry_nome_usuario_formulario_tabela_usuarios + "=" + nome_digitado.trim() +
                            "&entry." + entry_email_de_recuperacao_formulario_tabela_usuarios + "=" + jm_email_de_recuperacao_digitado.trim() +
                            "&entry." + entry_quantidade_de_alteracoes_formulario_tabela_usuarios + "=" + jm_auto_quantidade_de_alteracoes.trim();
                    
                    try{
                        
                        //**//                            
                        $.post( GET_URL,
                            function(data, status){
                                alert("Data: " + data + "\nStatus: " + status);
                            }
                        );
                        //**//

                        //var xhttp = new XMLHttpRequest();
                        //xhttp.open("GET", GET_URL, false);
                        //xhttp.send();//A execução do script pára aqui até a requisição retornar do servidor

                    }catch(Exception){
                
                        //alert("jm_id " + jm_id + " - " + "id " + id);
                       //document.getElementById("resposta").innerHTML = "Erro xhttp - cadastrarTabelaLogin -- <br>" + Exception;
                    }
                                            
                    alert("Usuário: " + usuario_digitado + " - OK\nAlterado com sucesso!");
 
                    window.open('index.html', '_parent');
                    //document.getElementById("resposta").style.display = 'block';  
                    //document.getElementById("div_novo_usuario").style.display = 'none'; 
                    
                }, 0);
            
            }catch(Exception){
                
                document.getElementById("resposta").innerHTML = "cadastrarTabelaLogin -- " + Exception;
            }     
        }
        
        function _index_salvar_imagem_do_perfil( imagem, email_usuario, id_usuario ){
            
            try{
                setTimeout(function(){ 
                                                            
                    //alert( "IMAGEM A SALVAR" + "\n" + imagem );

                    ////////////////////////////////////////////////////////////
                    var parte = "";
                    var count = 0;
                    var contador = 0;
                    var numero = imagem.split("-");
                    for( var i = 0; i < numero.length; i++ ) {
                        
                        parte += numero[i] + "-";
                        
                        if( count === 1900 ){
                                                                                    
                            contador += 1;
                                                                                          
                            try{
                                var id_txt2 = "@" + id_usuario + "j" + email_usuario + "j" + contador  + "j" + parte + "@";
                                                                                
                                var GET_URL = "https://docs.google.com/forms/d/e/" + id_formulario_tabela_imagens_dos_contatos + "/formResponse" +
                                    "?entry." + entry_texto_formulario_tabela_imagens_dos_contatos + "=" + id_txt2;
                            
                                /*                            
                                $.post( GET_URL,
                                    function(data, status){
                                        alert("Data: " + data + "\nStatus: " + status);
                                     }
                                );
                                */
                            
                                var xhttp = new XMLHttpRequest();
                                xhttp.open("GET", GET_URL, false);
                                xhttp.send();//A execução do script pára aqui até a requisição retornar do servidor
                                
                                /*
                                var anterior = document.getElementById("resposta").innerHTML;
                                document.getElementById("resposta").innerHTML = anterior + 
                                    "<br>" +                                    
                                    "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" +
                                    "-------------------------------------------------------------------------------------" + 
                                    "<br>" + 
                                    "Contador: " + contador + "<br>" + 
                                    parte;                        
                                */
                            }catch(Exception){}
                            
                            parte = "";
                            count = 0;
                        }
                        else{
                            
                            count += 1;
                        }
                        
                    }
                    ////////////////////////////////////////////////////////////
                    
                    try{
                        contador += 1;
                        
                                var id_txt2 = "@" + id_usuario + "j" + email_usuario + "j" + 
                                contador  + "j" + 
                                parte + "@";
                            
                                var GET_URL = "https://docs.google.com/forms/d/e/" + id_formulario_tabela_imagens_dos_contatos + "/formResponse" +
                                    "?entry." + entry_texto_formulario_tabela_imagens_dos_contatos + "=" + id_txt2;
                            
                                /*                            
                                $.post( GET_URL,
                                    function(data, status){
                                        alert("Data: " + data + "\nStatus: " + status);
                                     }
                                );
                                */
                            
                                var xhttp = new XMLHttpRequest();
                                xhttp.open("GET", GET_URL, false);
                                xhttp.send();//A execução do script pára aqui até a requisição retornar do servidor
                                
                                /*
                                var anterior = document.getElementById("resposta").innerHTML;
                                document.getElementById("resposta").innerHTML = anterior + 
                                    "<br>" +                                    
                                    "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" +
                                    "-------------------------------------------------------------------------------------" + 
                                    "<br>" + 
                                    "Contador: " + contador + "<br>" + 
                                    parte;                        
                                */
                    }catch(Exception){} 
                            
                }, 0);
            
            }catch(Exception){
                
                document.getElementById("resposta").innerHTML = "fazerRequisicao -- " + Exception;
            }     
        }
///////////////////////////////////////////////////////////////////////////////////////////////////////////   
/////////////////////////////////////////////////////////////////////////////////////////////////////////// 