# CRUD in Angular11

CRUD example in angular based on 

https://medium.com/techiediaries-com/angular-11-crud-tutorial-with-example-9612aee3c32e

Adding PDF with same instructions than link above
angular-10-crud-bootstrap-tutorial.pdf

Step so far:
Step 1 — Creating a New Angular 11 Project
Step 2 — Generating Angular 11 CRUD Components and Service
Step 3 — Importing FormsModule and HttpClientModule
Step 4 — Adding Routes for the CRUD Components. Plus the following steps:
	$ npm install bootstrap
	$ npm install jquery
	Modify the angular.json and add:
            "styles": [
              "./node_modules/bootstrap/dist/css/bootstrap.css",
              "src/styles.css"
            ],
            "scripts": [
              "./node_modules/jquery/dist/jquery.js",
              "./node_modules/bootstrap/dist/js/bootstrap.js"
            ]
Step 6 — Creating an Angular 10 CRUD Service
	Altough the services create/update work with 'any' as parameter, an interface (IProduct) and a class (Product) were added to avoid the use of 'raw' data
Step 7 — Implementing the Angular 10 CRUD Components. This step was split as shown below:
	a) Creating a New Product Component
	b) Displaying the List of Products Component
