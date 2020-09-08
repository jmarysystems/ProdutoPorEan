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
                    
                    adicionar_linha_local( ean_p, des, cat, umb );     
                    achou = true;
                    break;
                }
            }            
        }
        
        if( achou === false ){
            adicionar_linha_local( ean_p, "Produto não Registrado!", "--------------", "----" );  
        }
                                                
    }catch(Exception){}  
    
}, 0);    
    
} 