# Back end
This is the backend of the project.

# How to run it
1. Clone the repository with `git clone git@github.com:DavidNery/senior-test-website.git`
2. Open this folder with `cd ./backend`
2.1. REQUIRED IF FIRST EXECUTION: run `composer install`
3. Rename the file `.env.example` to `.env`
4. Configure your database details between the lines 11 and 15 (lines starting with `DB_`, without the `DB_CONNECTION`)
5. Run these commands:
   1. `php artisan migrate`
   2. `php artisan key:generate`
   3. `php artisan jwt:secret`
   4. `php artisan cache:clear`
   5 `php artisan config:clear`
6. Run the project with `php artisan serve`

# Technologies
I used these technologies in the project:
- [X] PHP
- [X] Laravel 8