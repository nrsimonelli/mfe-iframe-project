# Microfrontend iFrame Proof Of Concept

## Purpose
This project is a Hello World Proof Of Concept demonstrating how Microfrontends and Single SPA works.

[Information about the Single SPA package can be found here](https://single-spa.js.org/docs/faq/)

## How This Project Was Developed
This project contains two Microfrontend applications.

- The `root-config/` directory contains the module whose sole purpose is to register the two microfrontends and route the user between them.\
The only UI component that lives here is a navigation bar. Typically the nav bar would be another microfrontend module as well.\
\
Details about the concept of a Root Config and Application Registration can be found [here](https://single-spa.js.org/docs/configuration).


- The `invincible-spa-world/` and `single-spa-poc/` directories contain the two microfrontend SPAs that the application contains. These are simply two pages that the user routes between.

## How To Deploy
1. Run the `deploy.sh` script\
2. Navigate to ```localhost:9000``` on your browser of choice to view the application.

You might have to set the proper permissions on the shell script by running the command ```sudo chmod +x "deploy.sh"```

The shell script will install the NPM packages for every Single SPA module and serve the applications.
