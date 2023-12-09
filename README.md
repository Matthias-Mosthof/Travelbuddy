# Dockerized Nuxt (Vite) App using Quasar & Pinia Module

- Just a small Test Project using Nuxt w/SUPABASE DB.
- Its kind of sad there is the need to tell this, but no line was generated with ChatGPT or any other Code AI.

## Progress

- After realising the quasar plugin for Vue CLI is not best practise (as also stated in the Documenation), I transfered to Quasar CLI.
  -> I noted that when using the transition component, as its not working properly when using the Plugin.
- Switching to NUXT: For obvious reasons I switched to nuxt. Quasar and pinia are now implemented as a module. Even its a very small testproject, it saves a lot of code! But thats not the only reason. All benefits of nuxt: https://nuxt.com/
- Switching to SUPABASE: After exploring the benefits if Supabase - its typesafe approach and its module made for Nuxt, I switched from Firebase to Supabase.

# Get this Project Running inside Docker

```bash
docker compose build
```

The Dockerfile will take care of installing packages, quasar etc

# Start the Container

```bash
docker compose up
```

Thats it! :) No need to install any dependecies locally.
