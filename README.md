# Dockerized Nuxt (Vite) App using Quasar & Pinia Module

-  This "Travelbuddy" app contents user generated content for finding Travelbuddys as well as an Admintool to manage the content. Clients can create posts and message each other without authentication. Email address will only be exposed if someone answers.

- Its kind of sad there is the need to tell this, but no line was generated with ChatGPT or any other Code AI. (Not because I think its bad, but this project is there to improve my coding skills)


## Progress

- After realising the quasar plugin for Vue CLI is not best practise (as also stated in the Documenation), I transfered to Quasar CLI.
  -> I noted that when using the transition component, as its not working properly when using the Plugin.
- Switching to NUXT: For obvious reasons I switched to nuxt. Quasar and pinia are now implemented as a module. Even its a very small testproject, it saves a lot of code! But thats not the only reason. All benefits of nuxt: https://nuxt.com/
- Switching to SUPABASE: After exploring the benefits of Supabase - its typesafe approach and its module made for Nuxt, I switched from Firebase to Supabase.

Note that this is a work in progress and the frontend design comes last :D

## Some core Features
- Creating Posts
- Managing Posts
- Sending Messages to each other via Email handled by backend but close to the user, via Edge Functions
- Serverside Pagination
- Serverside Live Filter & Search

## Stack used
- Nuxt 3
- Pinia
- Quasar
- Supabase
- Resend (Email API) linked with real domain and supabase

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
