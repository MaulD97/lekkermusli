$(document).ready(function(){
$("<nav class=\'navbar\'><div class=\'container-fluid\'><ul class=\'nav navbar-nav\'><li><a href=\'index.html\'>Home</a></li><li class=\'dropdown\'><a class=\'dropdown-toggle\' data-toggle=\'dropdown\' href=\'statistiken.html\'>Statistiken<span class=\'caret\'></span></a><ul class=\'dropdown-menu\'><li><a href=\'statistiken.html\'>5geg5</a></li><li><a href=\'#\'>3geg3</a></li><li><a href=\'#\'>Einzelergebnisse</a></li></ul></li><li><a href=\'stories1.html\'>Stories</a></li><li><a href=\'profile.html\'>Profile</a></li><li><a href=\'rechtliches.html\'>Rechtliches</a></li></ul></div></nav>").prependTo("body");
$(".navbar").after("<div class=\'jumbotron\'><div class=\'container\'><h1 id=\'überschrift\'>Die neue Müsli Seite</h1><p>Wir haben die Seite aus Designgründen überarbeitet. Diese Seite verwendet nun Bootstrap für ein dynamisches Webpagevergnügen.</p><a href=\'https://mauld97.github.io/teammusli/\' target=\'_blank\' class=\'btn btn-primary btn-lg\' id=\'butt\'>Zur alten >></a></div></div>");
$("<link rel=\'shortcut icon\' href=\'meida/müslibot2.ico\'>").prependTo("head");
  
  
  
//Start der Einbindung der Stories durch JQuery für automatischen Sietenwechsel
 var number = 1;
 var arr1=["Sind wir doch bronze?","Ali Jhin Wombo","Müslis schwach gegen Silber Team?","Böllern oder Untergang?","Hobbycamper666 doch boosted?","Schwächstes Teammitglied zieht nach","Müslis suchen Ersatz ADC"];
 var arr2=["In der Vorsaison zur Season 2017 kann man sein Ranking für die Flex-Queue bereits jetzt beeinflussen. Denn es gab bisher keine Flex-Queue deshalb bildet das Ranking in der Vorsaison die Grundlage für den erneuten Einstieg. Doch es gab schon erste Anzeichen von Angst bei unseren Müsli Spielern. Denn NoAX12 höchstpersönlich wurde Bronze eingestuft. Was die einen verstummen lässt, belustigt andere. Hobbycamper666 und 13axtron finden es durchaus amüsant. Der letztere Beschwörer ist übrigends ebenfalls in Bronze gelandet und auch sonst ein typischer Scrubber aber dennoch Gastspieler bei Müsli auf Grund seiner persönlichen Beziehungen zu dem Diamond Spieler im Team. Doch NoAX12 ließ sich das nicht gefallen und forderte Hobbycamper666, 13axtron und plueschkanickel zum Duell heraus. An seiner Seite kämpften MaulD und Exmatrikulat0r, welche somit die Gründer der Weltbekannten Müslis repräsentierten. Der Kampf war schnell vorbei und es war schon von Angfang an klar, dass das Ursprungsteam erfolgreich den Gewundenen Wald verlassen kann. Hobbycamper war sichtlich getiltet und laut ihm war es nicht seine Schuld. \„Ich hatte einen Bronze Spieler im Jungle.\", war nur eine seiner jämmerlichen Verlustserklärungen. Wenn es um Eleganz und brachial guten Spielstil geht kann halt niemand diesem Trio das Wasser reichen."];
    
    for (i = 0; i < arr1.length; ++i) {
      if(number <= 8){
        $("<div class=\'page-header'><h3>"+arr1[i]+"</h3><p>"+arr2[i]+"</p></div>").appendTo("#story"+i);
      } 
      number++;
    }
});
