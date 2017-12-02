# Prj1

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


###Lalith-Notes
##Configuring with web server (Ex: Apache)
#httpd.conf:
DocumentRoot "C:/Lalith_apps/practicals/angular-prj/dist"
<Directory "C:/Lalith_apps/practicals/angular-prj/dist">
    Options FollowSymLinks Multiviews
    Order allow,deny
    Allow from all
    AllowOverride All
    Require all granted
</Directory>

#httpd-vhosts.conf:
<VirtualHost *:80>
    DocumentRoot "C:/Lalith_apps/practicals/angular-prj/dist"
    ServerName lalith-angular-local
    ServerAlias lalith-angular-local
    ErrorLog "C:/Lalith_apps/practicals/angular-prj/lalith.angular.local-error.log"
    CustomLog "C:/Lalith_apps/practicals/angular-prj/lalith.angular.local-access.log" common
</VirtualHost>

#hosts:
127.0.0.1 lalith-angular-local


##My Steps (from scratch)
#FRONT END::
- Using angular CLI, created new Angular application
ng new my-app-name
cd my-app-name
ng serve
- Perfomred building the angular application
ng build
(This created 'build' folder, and this folder path is defined in appache web server vhost file)
#BACK END::
- Created Node project for BackEnd
- Here i used my existing node application
- Started node application server
