$(document).ready(function(){
$("<nav class=\'navbar\'><div class=\'container-fluid\'><ul class=\'nav navbar-nav\'><li><a href=\'index.html\'>Home</a></li><li class=\'dropdown\'><a class=\'dropdown-toggle\' data-toggle=\'dropdown\' href=\'statistiken.html\'>Statistiken<span class=\'caret\'></span></a><ul class=\'dropdown-menu\'><li><a href=\'statistiken.html\'>5geg5</a></li><li><a href=\'#\'>3geg3</a></li><li><a href=\'#\'>Einzelergebnisse</a></li></ul></li><li><a href=\'stories1.html\'>Stories</a></li><li><a href=\'profile.html\'>Profile</a></li><li><a href=\'rechtliches.html\'>Rechtliches</a></li></ul></div></nav>").prependTo("body");
$(".navbar").after("<div class=\'jumbotron\'><div class=\'container\'><h1 id=\'überschrift\'>Die neue Müsli Seite</h1><p>Wir haben die Seite aus Designgründen überarbeitet. Diese Seite verwendet nun Bootstrap für ein dynamisches Webpagevergnügen.</p><a href=\'https://mauld97.github.io/teammusli/\' target=\'_blank\' class=\'btn btn-primary btn-lg\' id=\'butt\'>Zur alten >></a></div></div>");
$("<link rel=\'shortcut icon\' href=\'meida/müslibot2.ico\'>").prependTo("head");

//alle Textüberschriften in Variablen
  $header1 = "Sind wir doch bronze?";
  $header2 = "Müslis schwach gegen Silber Team?";
  $header3 = "Böllern oder Untergang?";
  $header4 = "Hobbycamper666 doch boosted?";
  $header5 = "Schwächstes Teammitglied zieht nach";
  $header6 = "Müslis suchen Ersatz ADC";
  $header7 = "Ali Jhin Wombo";
//alles stories in Variablen einführen
  $text1 = "In der Vorsaison zur Season 2017 kann man sein Ranking für die Flex-Queue bereits jetzt beeinflussen. Denn es gab bisher keine Flex-Queue deshalb bildet das Ranking in der Vorsaison die Grundlage für den erneuten Einstieg. Doch es gab schon erste Anzeichen von Angst bei unseren Müsli Spielern. Denn NoAX12 höchstpersönlich wurde Bronze eingestuft. Was die einen verstummen lässt, belustigt andere. Hobbycamper666 und 13axtron finden es durchaus amüsant. Der letztere Beschwörer ist übrigends ebenfalls in Bronze gelandet und auch sonst ein typischer Scrubber aber dennoch Gastspieler bei Müsli auf Grund seiner persönlichen Beziehungen zu dem Diamond Spieler im Team. Doch NoAX12 ließ sich das nicht gefallen und forderte Hobbycamper666, 13axtron und plueschkanickel zum Duell heraus. An seiner Seite kämpften MaulD und Exmatrikulat0r, welche somit die Gründer der Weltbekannten Müslis repräsentierten. Der Kampf war schnell vorbei und es war schon von Angfang an klar, dass das Ursprungsteam erfolgreich den Gewundenen Wald verlassen kann. Hobbycamper war sichtlich getiltet und laut ihm war es nicht seine Schuld. \„Ich hatte einen Bronze Spieler im Jungle.\", war nur eine seiner jämmerlichen Verlustserklärungen. Wenn es um Eleganz und brachial guten Spielstil geht kann halt niemand diesem Trio das Wasser reichen.";
  $text2 = "Laut den neusten Berichten haben die Müslis im Moment starke Probleme gegen Silber Spieler zu gewinnen. Über einen Insider haben wir erfahren, dass die drei Müslis Eymatrikulat0r, MaulD und NoAX12 mit dem Ranglistenteam FabulusSteroidB0izAMK trainieren, doch durchaus Probleme haben gegen Silber Spieler zu gewinnen. So haben sie gegen das Platin Team kin3merda klar gewonnen doch gegen das Silber Team EUW Team Solo Top eine klare Niederlage eingefahren. \„Ich weiß auch nicht diese Silber Scrubs tilten einen einfach so hart.\", antwortete der Kassadin Main Exmatrikulat0r der dieses Game 0/3 verließ.  \„Wir haben einfach nicht zusammen gekämpft, wenig kommunizuiert und NoAX12 hatte ein 'unlucky Game.‘ \", sagte MaulD, der nicht komplett getiltet war. NoAX12 meldete sich auch zu Wort:  \„Ja was willste da auch machen? Der Gp fängt halt mit nem Dorans Ring an. Da konnte ich doch nur feeden. Ich meine DORANS RING DER NOOB UND DANN STEHT MAN HALT 1/5!\" Hier brach NoAX12 das Interview ab.\" Wir bleiben für Sie auf jeden Fall an der Story und hoffen das die Müslis bald wieder gewohnt rasieren.";
  $text3 = "Es ist schon bald soweit. Die Season 2016 ist beendet und 2017 steht bereits in den Startlöchern. Die Anspannung im Team ist gewaltig. \„Man hat halt übel Bock alles kahl zu rasieren. Jetzt mit den Asssassins bin ich viel vorsichtiger unterwegs. Sonst kommt da so ein dummer Talon angeschimmelt und schnibbelt die Arschhaare ganz schnell weg.\", sagt HartzFEAR4Life. Auch Captain MaulD ist positiv gestimmt. \„Das Courage of the Colossus hat mich schon mehrmals gerettet. Man engaged einfach mit Zac und die Gegner denken die bekommen nen Einlauf. Zumindest stell ich mir das bei dem Q immer vor.\" Aber nicht jeder ist positiv gestimmt. Der ADC Exmatrikulat0r hat einige Probleme mit den Änderungen. Laut ihm, könne der Rest des Teams mit ihrem \„mikrigen\" Verstand nicht weit genug denken um zu verstehen, dass die Season mehr verändert als die Assasssins und die Tanks. Er beschwört einen Meta-Change hervor, und zwar einen großen. Wie es zuletzt 2011 gab und viele Gamer beinahe das Leben nahm. Aussage des ADCs: \„Ihr werdet ja noch sehen. Ich habe immer Recht was sowas angeht aber dann ist es schon zu spät für euch. Sagt nicht ich hätte euch nicht gewarnt. Und jetzt macht die Kamera aus ich muss meinen Bunker vorbereiten. Harte (hehe) Zeiten stehen uns bevor.\"";
  $text4 = "Laut unseren Quellen bekommt Hobbycamper666 mehrmals im Jahr Rechnungen von verschiedenen Boostungsseiten.  \„Was f&uuml;r ein Skandal! Man kann niemandem mehr vertrauen.\", berichtet NoAX12 als er schockiert auf die Informationen schaut. Der Schuldige behauptet, dass diese Rechnungen für einen Freund seien. Dazu möchte sich der  \„Diamond\" Spieler nicht mehr äußern. Es gibt immer mehr Spieler die sich boosten lassen, sei es für Anerkennung oder um endlich aus Bronze zu gelangen. Hier spielt aber neben den hohen Kosten auch der Preis der Freundschaft eine wichtige Rolle den die Booster eventuell zahlen müssen. Somit wird diese Branche immer weiter finanziert und kann sich ausweiten. Wirtschaftswissenschaftler gehen von einer Wirtschaftskrise im Jahr 2020 aus, welche durch Booster wie Hobbycamper enstehen, da jene Unmengen an Geld in unseriöse und unerforschte Marktebenen investieren. Wir sagen dazu nur: \„Ehrenlos und r&uuml;ksichtslos!\"";
  $text5 = "Rund einen Monat vor dem Ende der Season 6 bzw. 2016, darf sich auch Schwächling Exmatrikulat0r als Goldprofi bezeichnen und ist somit nicht mehr die Witzfigur unter professionellen Talenten. \„Ich habe zwei Freewins bekommen. LOL.\", erklärt er stolz nach seinem Aufstieg. Kurze Zeit darauf kann auch NoAX12 erneut in Gold einziehen, nachdem er mehrere Monate unter sehr schwerem Internetentzug litt. Somit ist jetzt das komplette Team Gold oder höher. Eine Leistung auf die der Teamleiter MaulD stolz ist. \„Ich bin mit der Leistung meiner Jungs mehr als zufrieden. Gerade bei plueschkanickerl und HartzFEAR4Life, den Frischlingen, kann man sehen wie gut sie sich entwickeln. In der nächsten Season erwarte ich allerdings eine Leistungssteigerung aller Mitglieder. Schließlich wollen wir uns stetig verbessern.\", schwärmt der Chef. Wir wünschen den Müslis viel Erfolg beim erreichen dieses Ziels.";
  $text6 = "Am 20.10.2016 gibt der Leiter des Teams Müsli bei einer Pressekonferenz bekannt, dass er auf der Suche nach einem Ersatz ADC sei. Laut der Aussage MaulDs ist ADC Exmatrikulat0r zu selten in der Lage zu spielen. Das bringt das Team auseinander und den Leiter auf die Palme. Aber jetzt soll Schluss damit sein denn ein neuer Spieler soll her. Eigentlich dachte man an den LCS Carry Forg1ven. Doch die Mitglieder einigten sich darauf er sei nicht gut genug für die hoch angelegte Teamleistung. \„Was will ich mit so nem LCS Metaslave Spasti auf der Botlane?\", sagt Müsli Supporter plueschkanickel sichtlich genervt. Zur Not spiele auch Toplaner NoAX12 als ADC solange man einen Ersatz sucht. \„Die ganzen Angebote aus Korea lassen mich kalt. Die sind ja nicht einmal ne Millionen wert (damit, wenn überhaupt, halb soviel wie ein Müsli Spieler). Jeder weiß doch, dass deutsche Spieler im Goldbereich gefragter sind.\", meint MaulD während der Konferenz. Es ist wohl noch zu früh um sagen zu können, dass das Problem gelöst wurde.";
  $text7 = "Alistar hat vor kurzer Zeit zusammen mit den Assassins ein paar Änderungen in seinem Kit bekommen. Er ist zur  Zeit ein sehr beliebter Supporter, denn er verfügt nun über mehr Crowd Control und seine Heilfähigkeit bezieht sich nun nur auf einen Champion, aber dieser Heal ist um einiges stärker. Diese schöne Kombination hat es auch MaulD angetan der den neuen Alistar liebend gern spielt. Bis jetzt hat er mit diesem eine 100%ige Gewinnrate. Andere Spieler wie z.B. Faker haben sich deshalb schon beim Captian gemeldet und ihm Glückwünsche ausgesprochen. Angebote von mehreren LCS Teams sind schon rausgegeangen. \„Lol als ob ich im Leben so gescheitert bin ,dass  ich der LCS beitrete. Die Lappen tilten mich doch in den Boden.\" Zusammen mit Exmatrikulat0rs Jhin sei man besonders effizient laut MaulD. Der ADC meint: \„Ja also das ist schon super mit dem Captain. Ich kann ganz sicher farmen und der schreit mich wieder Full Life, wich is nice. Die W-Q Kombo sitzt zwar noch nicht so aber das ist auch ultra schwer. Wenn er aber trifft melken wir die Gegner allerdings hart auch wenn Ali ein Stier ist.\" So macht das Ranken doch Spaß.";
  //Start der Einbindung der Stories durch JQuery für automatischen Seitenwechsel
 var arr1=[$header7,$header6,$header5,$header4,$header3,$header2,$header1];
 var arr2=[$text7,$text6,$text5,$text4,$text3,$text2,$text1];
  
    for (i = 0; i < arr1.length; ++i) {
        $("<div class=\'page-header'><h3>"+arr1[i]+"</h3></div><p>"+arr2[i]+"</p>").prependTo("#story"+i);
    }
});
