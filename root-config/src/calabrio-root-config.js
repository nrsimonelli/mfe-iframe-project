import { registerApplication, start } from "single-spa";
import "./root.css";

import {
  constructRoutes,
  constructApplications,
  constructLayoutEngine,
} from "single-spa-layout";

const routes = constructRoutes(document.querySelector("#single-spa-layout"));

const applications = constructApplications({
  routes,
  loadApp: ({ name }) => System.import(name)
});

const layoutEngine = constructLayoutEngine({
  routes,
  applications,
  active: true
});

applications.forEach(registerApplication);
layoutEngine.activate();
start();