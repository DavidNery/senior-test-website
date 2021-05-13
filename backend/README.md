# Back end
This is the backend of the project.

# How to run it
1. Clone the repository with `git clone git@github.com:DavidNery/senior-test-website.git`
2. Open this folder with `cd ./backend`
2.1. REQUIRED IF FIRST EXECUTION: run `composer install`
3. Rename the file `.env.example` to `.env`
4. Configure your database details between the lines 11 and 15 (lines starting with `DB_`, without the `DB_CONNECTION`)
5. Run the migrations with `php artisan migrate`
6. Generate an app key with `php artisan key:generate`
7. Run the project with `php artisan serve`