# Quasar App using the CLI with Vite

- This is just a side Project, it progresses at inconsistent pace.

## Progress

- After realising the quasar plugin for Vue CLI is not best practise (as also stated in the Documenation), I transfered to Quasar CLI.
  -> I noted that when using the transition component, as its not working properly when using the Plugin.

# Get this Project Running inside Docker

```bash
docker compose build
```

The Dockerfile will take care of installing packages, quasar etc

# Start the Container

```bash
docker compose up
```

# Or without Docker

## Install the dependencies

```bash
yarn
# or
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
quasar dev
```

### Lint the files

```bash
yarn lint
# or
npm run lint
```

### Format the files

```bash
yarn format
# or
npm run format
```

### Build the app for production

```bash
quasar build
```

### Customize the configuration

> > > > > > > Stashed changes
> > > > > > > See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-vite/quasar-config-js).
