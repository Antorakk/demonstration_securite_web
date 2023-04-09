# **SUJET :**
<p>
Démontrer une faille XSS:
Dans ce TP vous devez créer un scénario utilisant un simple formulaire
permettant de démontrer faille XSS.
Vous devez ensuite dans un second formulaire montrer comment éviter et traiter ce problème de faille XSS. 
Pour rappel un faille XSS est un l’intégration dans un formalaire d’un code malicieux
permettant de réaliser une action non désirée de l’utilisateur ou de récupérer
des données à son insue.
Vous pouvez créer vos deux formulaires dans une seule page PHP ( ou JS )
</p>


## **Ce qui a été fait**

### **Informations importantes**

Nous avons utilisé deux formulaires celui ci ( sans XSS filter actif ) 
<br>http://localhost/
et celui ci ( avec XSS filter actif )
<br>http://localhost/good

- ### **1 Utilisation d'un "Anti XSS"**

Nous avons utilisé la librarie suivante: 
<br> - ```npm install xss```

<p>
Cette librairie agis lorsqu'elle va détecter une anomalie dans les données du formulaires , si elle apperçoit une requette ou des entrées malveillante elle va prévenir les attaques de type XSS en nettoyant et en échappant les entrées utilisateur.
</p>


- ### **2 Nettoyage du JSON**

<p><strong>Il est recommandé de nettoyer les données JSON envoyées par les utilisateurs avant de les stocker ou de les afficher dans une application web pour prévenir les attaques XSS. </strong></p>

<p>
via ce code : """const xss = require('xss');
const userInput = {
    name: "<script>alert('XSS!');</script>",
    email: "user@example.com"
};
const cleaned = xss(JSON.stringify(userInput));
"""
Le JSON va être néttoyé et l'email malveillante sera supprimé et non stocké.

### **Auteurs : ELUECQUE Anthony, BACQUET Antoine**
