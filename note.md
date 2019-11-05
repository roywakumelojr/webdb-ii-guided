Schema:- Means structure.

Notes:
- Every table need to have a primary key when working with relational databases
- remember to select SQLite3 on the drop down menu when creating a DB on SQlite

*** Reading Resources ***
Surrogate Vs Natural Keys
    Surrogate: made-up key (eg. id number)
    Natural: Real key (eg. vin number)
    https://www.databasejournal.com/features/mssql/article.php/3922066/SQL-Server-Natural-Key-Verses-Surrogate-Key.htm


# Requirements

Build an API to support managing pets.

The client wants to:

- save information about their pets. For each pet they'd like to record:
  - name.
  - species (dog, cat, iguana, hamster, fish, horse <- is a horse a pet?).
  - breed (optional, if any).
  - food (what does it eats?)
  - weight (as a floating number)
  - weightUnit (optional, lb, kg)
- see a list of all their pets.
- update their pet's information.
- mark a pet as 'owned' (true/false).

Started an Express JS API.

- run `git init`
- run `npm init -y`
- run `npx gitignore node`
- run `npm i express helmet knex sqlite3`
- run `npm i nodemon -D`

Migrations are a way to record changes to the database schema.

**It's like git, for the database structure**

**EVERY CHANGE TO THE DATABASE SCHEMA (STRUCTURE) MUST BE DONE WITH A NEW MIGRATION**

## Migrations

Optionally install knex globally on your system: `npm i -g knex` or `yarn global add knex`.

Initialize Knex for our project: `npx knex init`.

Create a migration: `npx knex migrate:make name`

Use the migration to declare the changes we plan to make to the schema.

Run a migration: `npx knex migrate:up`

Undo last migration: `npx knex migrate:down`

Update database to latest changes/migrations: `npx knex migrate:latest` <== multiple new migrations

Undo multiple migrations that ran together: `npx knex migrate:rollback`