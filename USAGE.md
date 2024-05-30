# Project Finesse

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
2. Run the command `cp .env.template .env` to create a new `.env` file with
   the same contents.
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

You can also use `docker-compose` to run the API with the client. The API is
the backend that this client uses and is available at <https://github.com/ai-cfia/finesse-backend>.

To run the API and the client together, you can use the following command:

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
