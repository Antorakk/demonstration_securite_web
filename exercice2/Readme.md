# **SUJET :**
<p>
Mettre en place un système simple de traçabilité via des fichiers de logs
Les traces de modifications d’un profil utilisateurs doivent être stockées dans
un fichier de logs spécifique et horodaté (1 seul fichier par jour doit être créé)
Ces traces doivent répondre aux questions Qui ? Quoi ? Quand?
</p>


## **Ce qui a été fait**

### **Informations importantes**



- ### **1 Utilisation de Winston**

Nous avons utilisé la librarie suivante: 
<br> - ```npm install winston```

<p>
Cette librairie est utilisé pour créer un journal des événements de l'application, tels que les erreurs, les avertissements, les informations et les traces de modification. Ici elle est très utile afin de créer un JSON avec les modifications horodaté 
</p>


- ### **2 Qui ? Quoi ? Quand ? **

<p>
afin de répondre au question qui ? quand ?  quoi ? , Nous avons créer UserprofileController.js qui définit les fonctions qui permettent de créer, lire, mettre à jour et supprimer des profils utilisateur en interagissant avec le modèle de données correspondant et userProfileChangesLogger.js est un middleware qui utilise le module de logging Winston pour enregistrer les informations de modification dans un fichier de journal. Il enregistre les informations suivantes :

- L'heure de la modification
- L'identifiant de l'utilisateur qui a effectué la modification
- Les anciennes valeurs de profil
- Les nouvelles valeurs de profil
    
tout cela permet de répondre au questions qui ? quoi ? quand ? dans le JSON.
    
    

### **Auteurs : ELUECQUE Anthony, BACQUET Antoine**
