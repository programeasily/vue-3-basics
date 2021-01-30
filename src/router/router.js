import { createWebHistory, createRouter } from "vue-router";

import ComputedGetDemo from "../page/ComputedGetDemo";
import Home from "../components/Home";
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: "/", component: Home },
  { path: "/computedgetdemo", component: ComputedGetDemo }
];

// Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  history: createWebHistory,
  routes
});

export default router;
