# Finesse Frontend

([*Le français est disponible au bas de la page*](#frontend-de-finesse))

## Getting Started

To get started with the project, follow the steps below:

### Prerequisites

- NPM

### Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory: `cd project-directory`.
3. Install the dependencies by running `npm install`.

### Configuration

1. In the root of the project directory, locate the file named `.env.template`.
2. Run the command `cp .env.template .env` to create a new `.env` file with the
   same contents.
3. Edit the `.env` file according to your specific needs.

### Running application

`npm run dev`

### Running the application with docker

1. Build the docker image:

   ```bash
   docker build \
   --build-arg ARG_VITE_BACKEND_URL=<finesse-backend-url> \
   -t finesse-frontend .
   ```

2. Run the image: `docker run -p 5000:3000 finesse-frontend`.

   Use arg `-e PORT=<port> -p 5000:<port>` if you wish to control the internal
   port.

### Docker-compose (optional)

You can also use `docker-compose` to run the API with the client. The API is the
backend that this client uses and is available at
<https://github.com/ai-cfia/finesse-backend>.

To run the API and the client together, make sure you have all the environment
variables required from the backend (see .env.template in the repository) and
then you can use the following command:

```bash
docker-compose up --build
```

You can then access the client at `http://localhost`.

### Testing application

`npm test`

### Updating test snapshots

`npm run test:update`

### Update app version

1. Change the version in `package.json`
2. Run `npm run prestart`

---

## Frontend de Finesse

## Démarrage

Pour commencer avec le projet, suivez les étapes ci-dessous :

### Prérequis

- NPM

### Installation

1. Clonez le dépôt sur votre machine locale.
2. Accédez au répertoire du projet : `cd project-directory`.
3. Installez les dépendances en exécutant `npm install`.

### Configuration

1. À la racine du répertoire du projet, localisez le fichier nommé
   `.env.template`.
2. Exécutez la commande `cp .env.template .env` pour créer un nouveau fichier
   `.env` avec le même contenu.
3. Modifiez le fichier `.env` selon vos besoins spécifiques.

### Lancement de l'application

`npm run dev`

### Lancement de l'application avec Docker

1. Construisez l'image Docker :

   ```bash
   docker build \
   --build-arg ARG_VITE_BACKEND_URL=<finesse-backend-url> \
   -t finesse-frontend .
   ```

2. Exécutez l'image : `docker run -p 5000:3000 finesse-frontend`.

   Utilisez l'argument `-e PORT=<port> -p 5000:<port>` si vous souhaitez
   contrôler le port interne.

### Docker-compose (optionnel)

Vous pouvez également utiliser `docker-compose` pour exécuter l'API avec le
client. L'API est le backend utilisé par ce client et est disponible à l'adresse
<https://github.com/ai-cfia/finesse-backend>.

Pour exécuter l'API et le client ensemble, assurez-vous d'avoir toutes les
variables d'environnement requises par le backend (voir `.env.template` dans le
dépôt), puis utilisez la commande suivante :

```bash
docker-compose up --build
```

Vous pouvez ensuite accéder au client à l'adresse `http://localhost`.

### Test de l'application

`npm test`

### Mise à jour des snapshots de test

`npm run test:update`

### Mise à jour de la version de l'application

1. Modifiez la version dans `package.json`.
2. Exécutez `npm run prestart`.
