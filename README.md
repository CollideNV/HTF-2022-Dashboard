# Collide Wizard Academy

Collide Wizard Academy roept een nieuwe generatie digitale tovenaars van heden en ver samen om de mensheid te redden van een catastrofale ondergang. 
Via magische spreuken kunnen er oplossingen gevonden worden om de mensheid te redden op vlak van voedsel-, energie- en watertekorten. Maar let op… De vervuiling is reeds torenhoog en te veel vervuiling zal fatale gevolgen hebben.

Via fullstack technologieën ontwikkel je een manier om vergeten API spreuken op te kunnen roepen. Maar niet alle spreuken zijn even efficiënt, met jouw mede tovenaars schrijf je ook nieuwe API spreuken om het spreukenboek te verbeteren!

## TL;DR

Om de mensheid te redden van de ondergang ga je de problemen moeten oplossen door vergeten spreuken te vinden. Deze spreuken kan je vinden door oplossingen te coderen en deze op te sturen (al dan niet per postduif).

## Hoe ga je te werk?

Maak je team aan via onze API door je naam op te sturen. Zodra dit gebeurd is, krijg je jouw unieke nummer terug.
```
path: /team
method: POST
body: {"name": "<jouw team naam>"}
```
> **Let op!** vergeet deze zeker niet te noteren 🪶 op een stukje perkament 📜 en deel deze met niemand 🤫.

### Wereldproblemen

Bij het aanmelden van je team, is er een hele set aan wereldproblemen op je afgevuurd. Om de lijst van deze problemen te verkrijgen en de hints naar hun mogelijke spreuken, moet je deze endpoint oproepen:
```
path: /problems/{teamId}
method: GET
```

### Spreuken vinden

Bij elk probleem krijg je een lijst van spreuken die het probleem mogelijks kunnen verhelpen. Maar let op, niet elke spreuk is even efficiënt. Hoe efficienter de spreuk, hoe moeilijker de opgave, en hoe hoger de punten gaan zijn.

Bij elke spreuk krijg je de id, de uitleg wat deze doet, het recept (de opgave) en de ingrediënten (input voor de opgave).

Om een spreuk af te vuren gebruik je volgende endpoint met je resultaat van de opgave:
```
path: /cast/{spellId}
method: POST
body: {"formula": "<jouw oplossing>"}
```

> **Let op!** Voor sommige spreuken kan je maar een aantal keer de formule van doorgeven voordat dit brouwsel 🧪 ontploft 💥.
>
> ![](http://images5.fanpop.com/image/answers/2193000/2193846_1322245725814.36res_450_360.jpg)

