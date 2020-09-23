/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

function pesquisar_ean_linha_por_linha( ean_p ){

setTimeout(function(){
    
    try{
        
        //var obj = JSON.parse( document.getElementById("tabela_produtos_por_ean_baixada").value ); 
        //var res = []; 
        
        //alert( dados_dos_produtos.length );
        
        var achou = false;
        
        var linha = dados_dos_produtos.trim().split( '@' );
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
	                img.src = "../../Imagens/" + ean_p.trim() + ".gif";
                        img.onload = function() {
                            
                            adicionar_linha_local( ean_p.trim(), des, cat, umb, "../../Imagens/" + ean_p.trim() + ".gif" );
	                }
	                img.onerror = function() {
                            
                            img.src = "../../Imagens/" + ean_p.trim() + ".png";
                            img.onload = function() {
                                
                                adicionar_linha_local( ean_p.trim(), des, cat, umb, "../../Imagens/" + ean_p.trim() + ".png" );
                            }
                            img.onerror = function() {
                                
                                img.src = "../../Imagens/" + ean_p.trim() + ".jpg";
                                img.onload = function() {
                                    
                                    adicionar_linha_local( ean_p.trim(), des, cat, umb, "../../Imagens/" + ean_p.trim() + ".jpg" );
                                }
                                img.onerror = function() {
                                    
                                    adicionar_linha_local( ean_p.trim(), des, cat, umb, "../../Imagens/" + "sem_imagem2" + ".gif" );
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
            
            try{
                        var img = new Image();
	                img.src = "../../Imagens/" + ean_p.trim() + ".gif";
                        img.onload = function() {
                            
                            adicionar_linha_local( ean_p.trim(), "Produto não Registrado!", "--------------", "----", "../../Imagens/" + ean_p.trim() + ".gif" );
	                }
	                img.onerror = function() {
                            
                            img.src = "../../Imagens/" + ean_p.trim() + ".png";
                            img.onload = function() {
                                
                                adicionar_linha_local( ean_p.trim(), "Produto não Registrado!", "--------------", "----", "../../Imagens/" + ean_p.trim() + ".png" );
                            }
                            img.onerror = function() {
                                
                                img.src = "../../Imagens/" + ean_p.trim() + ".jpg";
                                img.onload = function() {
                                    
                                    adicionar_linha_local( ean_p.trim(), "Produto não Registrado!", "--------------", "----", "../../Imagens/" + ean_p.trim() + ".jpg" );
                                }
                                img.onerror = function() {
                                    
                                    adicionar_linha_local( ean_p.trim(), "Produto não Registrado!", "--------------", "----", "../../Imagens/" + "sem_imagem" + ".gif" );
                                }
                            }
                        }
                    }catch(Exception){}
        }
                                                
    }catch(Exception){}  
    
}, 0);    
    
} 