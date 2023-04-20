# Eau

<img width="1280" alt="Capture d’écran 2023-04-20 à 18 00 21" src="https://user-images.githubusercontent.com/26972581/233428072-c44a68bf-5612-4ffa-8849-68803bd88f56.png">

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.6.

## Mockoon conf :


`{"openapi":"3.0.0","info":{"title":"Moments","version":"1.0.0"},"servers":[{"url":"http://localhost:3000/"}],"paths":{"/":{"get":{"description":"","responses":{"200":{"description":"","content":{"application/json":{}},"headers":{"Access-Control-Allow-Origin":{"schema":{"type":"string"},"example":"*"},"Access-Control-Allow-Methods":{"schema":{"type":"string"},"example":"GET,POST,PUT,PATCH,DELETE,HEAD,OPTIONS"},"Access-Control-Allow-Headers":{"schema":{"type":"string"},"example":"Content-Type, Origin, Accept, Authorization, Content-Length, X-Requested-With"}}}}}},"/user/{id}":{"get":{"description":"","responses":{"200":{"description":"","content":{"application/json":{}},"headers":{"Access-Control-Allow-Origin":{"schema":{"type":"string"},"example":"*"},"Access-Control-Allow-Methods":{"schema":{"type":"string"},"example":"GET,POST,PUT,PATCH,DELETE,HEAD,OPTIONS"},"Access-Control-Allow-Headers":{"schema":{"type":"string"},"example":"Content-Type, Origin, Accept, Authorization, Content-Length, X-Requested-With"}}}},"parameters":[{"name":"id","in":"path","schema":{"type":"string"},"required":true}]}}}}`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
