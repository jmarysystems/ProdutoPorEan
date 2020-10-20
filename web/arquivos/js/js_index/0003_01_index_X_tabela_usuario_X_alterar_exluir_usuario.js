/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

function _0003_01_index_X_tabela_usuario_X_alterar_exluir_usuario__f1(usuario_digitado, senha_digitada, html_do_solicitante){            
    try{                
        
        if (usuario_digitado === "" || usuario_digitado === null){
            alert("Para editar o perfil do usuário logado:\n01 informe o nome de usuário\n02 informe a senha");
        }
        else if (senha_digitada === "" || senha_digitada === null){
                
            alert("Para editar o perfil do usuário logado:\n01 informe o nome de usuário\n02 informe a senha");
        }
        else{
                
            var usuario_digitado_str = usuario_digitado.trim().toUpperCase();
            var senha_digitada_str = senha_digitada.trim().toUpperCase();
                
            //var usuario_da_linha  = converter_base64( document.getElementById("usuario_logado").value.trim().toUpperCase() ); 
            var usuario_da_linha  = document.getElementById("usuario_logado").value.trim().toUpperCase(); 
            
            var senha_da_linha    = converter_base64( document.getElementById("usuario_logado_pass").value.trim().toUpperCase() ); 
            
           /*
            alert("document.getElementById('usuario_logado').value" + " - " + usuario_da_linha + "\n"+
                   "usuario_digitado_str" + " - " +  usuario_digitado_str );
          */
           
            /*
            alert("document.getElementById('usuario_logado_pass'').value" + " - " + senha_da_linha + "\n"+
                   "senha_digitada_str" + " - " +  senha_digitada_str );
           */
           
                
            var user_ok = usuario_da_linha.toUpperCase().localeCompare(usuario_digitado_str.toUpperCase());
            var pass_ok = senha_da_linha.toUpperCase().localeCompare(senha_digitada_str.toUpperCase());
                
            if( user_ok === 0 ){ 
                           
                if( pass_ok === 0 ){ 
                    
                    document.getElementById("output_image").src = document.getElementById("usuario_logado_imagem").value;
                    //imgXX = document.getElementById("usuario_logado_imagem").value;
                    
                    if( verificar_igualdade_sem_espaco_no_final( document.getElementById("usuario_logado_imagem_sim_ou_null").value, "SIM" ) === true ){    
                        
                        //imgXX = _0003_01_index_X_getBase64Image( document.getElementById("output_image") );
                        imgXX = document.getElementById("usuario_logado_imagem").value;
                        
                        document.getElementById("output_image").src = imgXX;
                    }
                                        
                    document.getElementById("div_novo_usuario").style.display = 'block'; 
                    document.getElementById("resposta").style.display = 'none'; 
                    document.getElementById("editar_perfil").style.display = 'none'; 
                    
                    document.getElementById('novo_usuario_alterar').style.display = 'block';  
                    document.getElementById('novo_usuario_excluir').style.display = 'block';
                    document.getElementById('novo_usuario_cadastrar').style.display = 'none';
                          
                    document.getElementById('form_novo_login').value = document.getElementById('usuario_logado').value.trim();  
                    document.getElementById('form_novo_senha').value = converter_base64( document.getElementById('usuario_logado_pass').value.trim() );  
                    document.getElementById('form_novo_nome').value = document.getElementById('usuario_logado_id_nome').value.trim();
                    document.getElementById('form_novo_recuperacao').value = document.getElementById('usuario_logado_email').value.trim(); 
                    
                    document.getElementById("status_novo_user_cadastrar_alterar").innerHTML = "Alterar/Excluir Usuário";
                                             
                    document.getElementById("editar_form_login_login").value = "";
                    document.getElementById("editar_form_login_senha").value = "";
                    
                    //alert( imgXX );
                }
                else{
                        
                    alert("Usuário: " + usuario_digitado + " OK\nSenha incorreta");
                }
            }
            else{
                    
                alert("Usuário: " + usuario_digitado + " OK\nUsuário incorreto");
            }
        }
        
    }catch(Exception){}     
}

function _0003_01_index_X_getBase64Image( img ){            
    try{                
        
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        var dataURL = canvas.toDataURL("image/png");
        return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
        
    }catch(Exception){}     
}