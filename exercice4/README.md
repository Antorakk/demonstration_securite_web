# **SUJET :**
<p>
Construire un formulaire avec contrôle front et contrôle middle des données ex : 
Gestion d’un profil utilisateur
Le profil de l’utilisateur authentifié affiché suite à une authentification peut être 
modifié. 

Mettez en place les contrôles au niveau de l’IHM et du serveur 
d’application pour refuser les champs vides. Un contrôle des champs au niveau 
de l’IHM ne suffit pas.

Dans le cas d’un changement de mot de passe celui-ci doit être hashé lors de la 
sauvegarde
</p>


## **Ce qui a été fait**


- ### **1 Contrôle Front end**

<p>
Dans notre fichier html (format pug) nous avons vérifié que les champs soient bien saisi avec un required
On vérifie aussi les type en précisant dans les inputs si le format est bien respectés.
</p>


- ### **2 Contrôle Middle**

Nous avons utilisé des sous libraries de express 
<br>
    - ```npm install mongo-sanitize```
<br>
    - ```npm install express-validator```

<p>
En effet, il est important de vérifier à la fois le front, mais aussi le back. Ici nous avons vérifié que l'email était bien de type email (voir fichier users.js dans route) mais aussi que le mot de passe était au moins de 5  de longueur, si des erreurs sont détectés, on renvoit les erreurs directement sur la page (voir ./controller/loginUser.js , ligne 13).
</p>

- ### **La modification du profile**

Lors de la modification du profile, si certains champs ne sont pas renseigné les anciennes valeurs sont automatiquement reprise.

On hache le mot de passe, et on vérifie que le mail est bien de format mail, sinon on renvoit sur une page d'erreur

### **Auteurs : ELUECQUE Anthony, BACQUET Antoine**









