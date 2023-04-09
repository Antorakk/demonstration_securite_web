# **SUJET :**
<p>
Créer une système d’authentification forte via OTP email.
Vous devez créer un formulaire d’authentification de vos utilisateurs.
Ce formulaire doit s’appuyer sur une base de données qui gère les logins et 
mot de passe de vos utilisateurs. Ces mots de passe doivent être hashé en 
base. 

Lors de l’authentification, l’utilisateur reçoit un OTP email qui a une durée 
de validité de 5 minutes.

Vous pouvez réaliser ce formulaire en PHP. Il n’est pas demandé de créer des 
utilisateurs via un formulaire, vous pouvez initialiser votre base de données 
avec 5 utilisateurs disposant de login, mot de passe, email, nom, prénom.
Dans le but de préparer l’atelier suivant, suite à une authentification réussie le formulaire de modification de l’utilisateur s’affiche à l’écran.
</p>


## **Ce qui a été fait**

 ### **Informations importantes**

Nous avons utilisé une base mongodb pour cette exercice et nous mettons à disposition une méthode createUser 
<br>http://localhost/create-user

Nous avons utilisé insomnia pour rentré des utilisateurs dans la base de données avec les champs suivants dans l'onglet query :

- nom
- prenom 
- mail
- mot de passe (le hachage est automatiquement effectué)

- ### **1 Le Hachage des mots de passe**

Nous avons utilisé la librarie suivante: 
<br> - ```npm install bcrypt```

<p>
Pour une question de sécurité, il est important de haché les mots de passe en base de donnée. bcrypt possède en effet deux fonctions pour haché et comparer les mots de passes.

Lors de la création d'un utilisateur , le mot de passe est haché afin d'éviter que celui-ci soit utiliser par une autre personne.

Si une personne souhaite se connecter via notre formulaire, on compare le mot de passe rentré avec celui en base de donnée (nécessite que l'utilisateur existe)
</p>


- ### **2 La vérification d'identité et l'envoie & vérification du code OTP**

Nous avons utilisé la librarie suivante: 
<br> - ```npm install nodemailer``` => Permet d'envoyer un mail depuis un script nodejs
<br> - ```npm install otp-generator``` => Permet la génération de code OTP

<p><strong>Pour une question de sécurité, le mot de passe application gmail ne sera pas fourni ici car il permet d'envoie un mail à partir d'une autre identité</strong></p>

<p>
Lorsque la personne s'est identifié (voir 1.), on envoie un code sur son adresse mail (pour les tests, nous nous sommes envoyer des mails à nous même) , celle-ci dispose de 5 minutes pour entrer le code dans la formulaire qui s'affiche

Si celui-ci est correct => La personne est autorisé à modifier son profile (simulé ici par OTP correct)
<br>
Sinon => La personne reçoit un message que l'otp entré est incorrect
</p>

### **Auteurs : ELUECQUE Anthony, BACQUET Antoine**


