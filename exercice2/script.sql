CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    prenom VARCHAR(255) NOT NULL,
    nom VARCHAR(255) NOT NULL,
    pwd VARCHAR(255) NOT NULL
);


INSERT INTO users(email,prenom,nom,pwd) VALUES(
    'anthony76520.ae@gmail.com','anthony','eluecque','$2b$10$6TLYe/p/eK/CGcXRZ5VVjeuwfJqqjSszX7nTB7RBERPtFITzWzDMq'
)


INSERT INTO users(email,prenom,nom,pwd) VALUES(
    'antoinebacquet62@gmail.com','antoine','bacquet','$2b$10$eYOZXkWtF2z8lP7VEDDfHO/6pdRzInrHLu5B7w68bQhUCvQaerunu'
)
