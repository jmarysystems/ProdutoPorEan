/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

function pesquisar_dados_dos_produtos_imagens_e_listar( ean_p, qtd, data ){

setTimeout(function(){
    
    try{
        
        //var obj = JSON.parse( document.getElementById("tabela_produtos_por_ean_baixada").value ); 
        //var res = []; 
        
        //alert( dados_dos_produtos.length );
        
        var achou = false;
        
        var linha = tabela_de_dados_dos_produtos.trim().split( '@' );
        for( var j = 0; j < linha.length; j++ ) {

            if( linha[j].includes("&") ){
                
                //alert( linha[j] );      
                var argumentos = linha[j].split("&");
                var ean = argumentos[0].trim();
                //alert( ean_p.trim() + " - " + ean.trim() );  
                
                if( ean_p.trim() === ean.trim() ){
                    var des = argumentos[1].trim();
                    var cat = argumentos[2].trim();
                    var umb = argumentos[3].trim();
                    
                    //alert( ean_p.trim() + " - " + ean.trim() + " - " + des + " - " + cat + " - " + umb );
                    
                    //var end_img = "../Imagens/" + "sem_imagem" + ".gif";
                    
                    try{
                        var img = new Image();
	                img.src = "../../Imagens/" + ean + ".gif";
                        img.onload = function() {
                            
                            adicionando_produto_ao_html( ean_p, des, cat, umb, qtd, data, "../../Imagens/" + ean + ".gif" );
	                }
	                img.onerror = function() {
                            
                            img.src = "../../Imagens/" + ean + ".png";
                            img.onload = function() {
                                
                                adicionando_produto_ao_html( ean_p, des, cat, umb, qtd, data, "../../Imagens/" + ean + ".png" );
                            }
                            img.onerror = function() {
                                
                                img.src = "../../Imagens/" + ean + ".jpg";
                                img.onload = function() {
                                    
                                    adicionando_produto_ao_html( ean_p, des, cat, umb, qtd, data, "../../Imagens/" + ean + ".jpg" );
                                }
                                img.onerror = function() {
                                    
                                    adicionando_produto_ao_html( ean_p, des, cat, umb, qtd, data, "../../Imagens/" + "sem_imagem2" + ".gif" );
                                }
                            }
                        }
                    }catch(Exception){} 
                    
                    //adicionar_linha_local( ean_p, des, cat, umb, end_img );
                    achou = true;  
                    break;
                }
            }            
        }
        
        if( achou === false ){
            adicionando_produto_ao_html( ean_p, "Produto não Registrado!", "--------------", "----", qtd, data, "../../Imagens/" + "sem_imagem2" + ".gif" );
        }
                                                
    }catch(Exception){}  
    
}, 0);    
    
} 