# Collide Wizard Academy

Collide Wizard Academy roept een nieuwe generatie digitale tovenaars van heden en ver samen om de mensheid te redden van een catastrofale ondergang.
Via magische spreuken kunnen er oplossingen gevonden worden om de mensheid te redden van diverse natuurrampen. Maar let op… De vervuiling is reeds torenhoog en te veel vervuiling zal fatale gevolgen hebben.

Via fullstack technologieën ontwikkel je een manier om vergeten API spreuken op te roepen. Maar niet alle spreuken zijn even efficiënt, met jouw mede tovenaars schrijf je ook nieuwe API spreuken om het spreukenboek te verbeteren!

## TL;DR

Om de mensheid te redden van de ondergang ga je de problemen moeten oplossen door vergeten spreuken te vinden. Deze spreuken kan je vinden door oplossingen te coderen en deze op te sturen (al dan niet per postduif).

Maar maak je geen zorgen. We sturen jullie niet met lege handen de wereld uit. Je krijgt alvast een [spreukenboek](https://htf.bewire.org/swagger-ui.html) om je op weg te helpen.

## Hoe ga je te werk?

Om te beginnen, bedenk samen met je medetovenaar een coole teamnaam. Maak je team aan via onze API door je [teamnaam op te sturen](https://htf.bewire.org/swagger-ui.html#/team-controller/createTeamUsingPOST). Zodra dit gebeurd is, krijg je jouw unieke nummer terug.

```
path: /team
method: POST
body: {"name": "<jouw team naam>"}
```

> **Let op!** vergeet deze zeker niet te noteren 🪶 op een stukje perkament 📜 en deel deze met niemand 🤫.

### Quest starten

Met jouw unieke nummer kan je nu jouw queste starten. Spreek onze API opnieuw aan en vraag om [een nieuwe quest te starten](https://htf.bewire.org/swagger-ui.html#/problem-controller/startQuestUsingPOST) met jouw unieke nummer.

Zodra je een quest hebt gestart komt jouw team tevoorschijn in [het magische dashboard](https://htf-dashboard.bewire.org/).

```
path: /quest
method: POST
query: teamId
```

### Wereldproblemen

Met het starten van je queeste is er een hele set aan wereldproblemen op je afgevuurd. Je kan altijd je [quest opnieuw opvragen](https://htf.bewire.org/swagger-ui.html#/problem-controller/getQuestUsingGET) met alle wereldproblemen, mogelijke spreuken en bijbehorende hints, door de volgende endpoint op te roepen:

```
path: /problems/{teamId}
method: GET
```

### Spreuken vinden

Bij elk probleem krijg je een lijst van spreuken die het probleem mogelijks kunnen verhelpen. Maar let op, niet elke spreuk is even efficiënt. Hoe efficienter de spreuk, hoe moeilijker de opgave, en hoe hoger de punten gaan zijn.

Bij elke spreuk krijg je de id, de uitleg wat deze doet, het recept (de opgave) en de ingrediënten (input voor de opgave).

Om [een spreuk af te vuren](https://htf.bewire.org/swagger-ui.html#/problem-controller/castSpellUsingPOST) gebruik je volgende endpoint met je resultaat van de opgave:

```
path: /cast/{spellId}
method: POST
query: formula
```

> **Let op!** Voor sommige spreuken kan je maar een aantal keer de formule van doorgeven voordat dit brouwsel 🧪 ontploft 💥. Je kan deze spreuk dan helaas **niet meer oplossen**.
>
> ![Seamus Finnigan from Harry Potter blankly staring at his exploded feather, after failing to cast a levitation spell.](http://images5.fanpop.com/image/answers/2193000/2193846_1322245725814.36res_450_360.jpg)

### Badges & Score

Zodra je een spreuk correct hebt afgevuurd krijg je een badge voor deze spreuk. Je kan jouw behaalde badges bekijken per wereldprobleem op [het magische dashboard](https://htf-dashboard.bewire.org/).

Heb je twee spreuken van een wereld probleem correct uitgevoerd? Dan heb je deze wereldprobleem al goed verholpen en krijg je een score! Je kan ervoor kiezen om de laatste spreuk op te lossen voor een hogere score of een ander wereldprobleem op te lossen.

De mensheid bedankt je alvast!
