# Quasar App using the CLI with Vite

- Just a small Test Project using Nuxt with Quasar & Pinia Module w/Firebase DB.
- Its kind of sad there is the need to tell this, but no line was generated with ChatGPT or any other Code AI.

## Progress

- After realising the quasar plugin for Vue CLI is not best practise (as also stated in the Documenation), I transfered to Quasar CLI.
  -> I noted that when using the transition component, as its not working properly when using the Plugin.
- Switching to NUXT: For obvious reasons I switched to nuxt. Quasar and pinia are now implemented as a module. Even its a very small testproject, it saves a lot of code! But thats not the only reason. All benefits of nuxt: https://nuxt.com/

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
