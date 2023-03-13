CREATE TABLE utilisateur (
  id SERIAL PRIMARY KEY,
  nom VARCHAR(255) NOT NULL,
  prenom VARCHAR(255) NOT NULL,
  numero_tel VARCHAR(20) NOT NULL,
  mot_de_passe VARCHAR(255) NOT NULL,
  rank INTEGER not null
);

INSERT INTO utilisateur(nom,prenom,numero_tel,mot_de_passe,rank) VALUES
    ('Dupont', 'Jean', '06 12 34 56 78', 'motdepasse1' , 1);--"test",2);

`INSERT INTO utilisateur(nom,prenom,numero_tel,mot_de_passe,rank) VALUES ('Dupont', 'Jean', '06 12 34 56 78', 'motdepasse1' , 1);-- ,2);)`


INSERT INTO utilisateur (nom, prenom, numero_tel, mot_de_passe , rank)
VALUES 
  ('Dupont', 'Jean', '06 12 34 56 78', 'motdepasse1' , 1),
  ('Martin', 'Marie', '07 23 45 67 89', 'motdepasse2' , 2);




