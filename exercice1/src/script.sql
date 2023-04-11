CREATE TABLE utilisateur (
  id SERIAL PRIMARY KEY,
  nom VARCHAR(255) NOT NULL,
  prenom VARCHAR(255) NOT NULL,
  mot_de_passe VARCHAR(255) NOT NULL,
  rank VARCHAR(255) NOT NULL
);

INSERT INTO utilisateur (nom, prenom, mot_de_passe , rank)
VALUES 
  ('Dupont', 'Jean', 'motdepasse1' , 1),
  ('Martin', 'Marie', 'motdepasse2' , 2);


