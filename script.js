function loadXMLDoc() {

   var xhttp = new XMLHttpRequest();
   var data;

   xhttp.onreadystatechange = function() {
   if (this.readyState == 4 && this.status == 200) {
       data = JSON.parse(this.responseText);
       var html = '';
       for( var i = 0; i < data.length && i<20; i++) {
           html += '<img src="';
           for( var j in data[i] ) {
               if(j==="url")
               {
                  html += data[i][j];
               }
           }
           html += '"/>';
           console.log(html);
       }
       document.getElementById("imageS").innerHTML = html;
   }
   
   };
   const api = "https://jsonplaceholder.typicode.com/photos?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-11";
   xhttp.open("GET", api, true);
   xhttp.send();
   
}

loadXMLDoc();