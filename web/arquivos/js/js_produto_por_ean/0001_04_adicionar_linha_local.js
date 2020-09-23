/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

function adicionar_linha_local( ean, des, cat, umb, end_img ) {
    
setTimeout(function(){
try{  
    
    //$('#lista_de_produtos_jmary_systems').append( data );               
            
            var html = "<!-- INÍCIO DOS DADOS DO PRODUTO - id=\"ean\" +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->                        " +
"                        <li " + "id=produto_" + ean + " style=\"\">" +
"                            <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"width:100%; padding: 0; margin: 0;\">" +
"                                <tr>" +
"                                    <td align=\"center\">" +
"                                        <ul style=\"list-style:none; padding: 0px; margin: 0px; width:100%;\" >" +
"                                            " +

"                                            <li style=\" padding: 0; margin: 0; \">" +
"                                                " + "<hr style=\" background-color: #000; padding-bottom: 1; margin-bottom: 0;  \">" +
"                                            </li>" +

"<!-- id=\"nome_do_produto_consultado\" +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ #3A3A3A -->                                             " +
"                                            <li " + "id=nome_" + ean + " style=\"width:100%; background-color: #3A3A3A; color:#fff; font-family:  Arial, Helvetica, sans-serif; font-size: 120%;\">" +
"                                                " + des + 
"                                            </li>" +

"                                            <li style=\" padding: 0; margin: 0; \">" +
"                                                " + "<hr style=\" background-color: #000; padding-top: 1; margin-top: 0;  padding-bottom: 0; margin-bottom: 0;  \">" +
"                                            </li>" +

"                                            " +
"                                            <li style=\"\">" +
"                                                <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"padding: 0; margin: 0;\">" +
"                                                    <tr>" +
"                                                        <td>                                                                                                                    " +
"                                                            <ul style=\"list-style:none; padding: 0px; margin: 0px; width:100%;\" >" +
"                                                                " +
"                                                                <li style=\"float: left;\">" +
"                                                                    " +
"<!-- id=\"imagem_do_ean\" +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ .gif-->                                                                      " +
"                                                                    <img " + "id=" + ean + " class=\"prod_ean\"  src=\""+ end_img + "\" alt=" + ean + " onclick=\"aumentar_imagem(" + ean + ");\" width=\"150\" height=\"150\" style=\"cursor: zoom-in\" > " +
"                                                                </li>    " +
"                                                                " +
"                                                                <li style=\"float: left;\"> " +
"                                                                    " +
"                                                                    <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"padding: 0; margin: 0;\">" +
"                                                                        " +
"                                                                        <tr>" +
"                                                                                        " +
"                                                                            <td style=\"padding-top: 5px; color:#000; font-family:  Arial, Helvetica, sans-serif; font-size: 120%; padding-left: 5px; float: left; \" >" +
"                                                                                Ean:" +
"                                                                            </td> " +
"                                                                            " +
"<!-- id=\"ean_do_produto_consultado\" +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->                                                                                         " +
"                                                                            <td " + "id=ean_" + ean + " bgcolor='#3A3A3A' style=\"margin-top: 5px; background-color: #3A3A3A; color:#fff; font-family:  Arial, Helvetica, sans-serif; font-size: 120%; padding-left: 5px; float: left;\" >" +
"                                                                                            " + ean +
"                                                                            </td>" +
"                                                                        </tr>" +
                    
                                                                         "<tr>" +
"                                                                                        " +
"                                                                            <td style=\"padding-top: 5px; color:#000; font-family:  Arial, Helvetica, sans-serif; font-size: 120%; padding-left: 5px; float: left; \" >" +
"                                                                                Categoria:" +
"                                                                            </td>  " +
"                                                                        </tr>" +
 
"<!-- id=\"categoria_do_produto_consultado\" +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->  " +
                                                                         "<tr>" +
"                                                                            <td " + "id=categoria_" + ean + " style=\"margin-top: 5px; background-color: #3A3A3A; color:#fff; font-family:  Arial, Helvetica, sans-serif; font-size: 120%; padding-left: 5px; float: left;\" >" +
"                                                                                            " + cat + 
"                                                                            </td>" +
"                                                                        </tr>" +

                                                                         "<tr>" +
"                                                                                        " +
"                                                                            <td style=\"padding-top: 5px; color:#000; font-family:  Arial, Helvetica, sans-serif; font-size: 120%; padding-left: 5px; float: left; \" >" +
"                                                                                UMB:" +
"                                                                            </td>  " +
"                                                                            " +
"<!-- id=\"unidade_do_produto_consultado\" +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->                                                                                         " +
"                                                                            <td " + "id=umb_" + ean + " style=\"margin-top: 5px; background-color: #3A3A3A; color:#fff; font-family:  Arial, Helvetica, sans-serif; font-size: 120%; padding-left: 5px; float: left;\" >" +
"                                                                                            " + umb +
"                                                                            </td>" +
"                                                                        </tr>" +
                    
"                                                                        " +
"                                                                    </table> " +
"                                                                    " +
                    
"                                                                </li>" +
"                                                            </ul>" +
"                                                        </td>" +
"                                                    </tr>" +
"                                                </table>     " +
"                                            </li>                                            " +
"                                        </ul>                                                                         " +
"                                    </td>" +
"                                </tr>" +
"                            </table> " +
"                        </li> " +
"<!-- FIM DOS DADOS DO PRODUTO - id=\"ean\" +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ --> ";
            
            
            $('#lista_de_produtos_jmary_systems').append( html );      

}catch(Exception){}     
}, 0);    
    
}