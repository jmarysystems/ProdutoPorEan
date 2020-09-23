/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

function printDiv(divID) {
    
    /*
var pdf = new jsPDF('p', 'pt', 'letter');
    var canvas = pdf.canvas;

    canvas.width = 8.5 * 72;

    html2canvas(document.body, {
        canvas:canvas,
        onrendered: function(canvas) {
            var iframe = document.createElement('iframe');
            iframe.setAttribute('style','height:100%; width:100%');
            document.body.appendChild(iframe);
            iframe.src = pdf.output('datauristring');

           //var div = document.createElement('pre');
           //div.innerText=pdf.output();
           //document.body.appendChild(div);
        }
    });
    */
    

   var body = document.body.innerHTML;
   var conteudo = document.getElementById(divID).innerHTML;
   
   document.body.innerHTML = conteudo;
   
   window.print();
   
   document.body.innerHTML = body;

}


