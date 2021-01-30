import { createWebHistory, createRouter } from "vue-router";

import ComputedGetDemo from "../page/ComputedGetDemo";
import ComputedSetDemo from "../page/ComputedSetDemo";
import ComputedExpressionDemo from "../page/ComputedExpressionDemo";
import Home from "../components/Home";
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: "/", component: Home },
  { path: "/computedgetdemo", component: ComputedGetDemo },
  { path: "/computedsetdemo", component: ComputedSetDemo },
  { path: "/computedexpdemo", component: ComputedExpressionDemo }
];

// Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  history: createWebHistory(),
  mode: "history",
  routes
});

export default router;
