# Income Planner

This is a toy project where I will try to implement a complex cash flow planner.

## Features

- [ ] Define a set of income sources
- [ ] Define a set of expenses
- [ ] Plans an investment calendar to maximize passive cash flow using velocity banking

## Development

This project is built using Deno and Fresh. To start the project, run the following command:

```bash
deno task start
```

This will start the project and watch for changes.

guide here: https://fresh.deno.dev/docs/getting-started

### Environment Variables

You'll need to create a `.env` file by copying the `.env.templaqte` file and providing relevant values. This file is used to store sensitive information like API keys and secrets.

## Tech Stack

- Typescript on the Deno runtime
- Deno Deploy
- Fresh
- PicoCSS (for a nice HTML/CSS reset)
- TailwindCSS (because I can't live without it)
- Turso (sqlite DB)
- Drizzle ORM
- Auth.js
