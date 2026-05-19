import { Hono } from "hono";
import { serve } from "@hono/node-server";
import { serveStatic } from "@hono/node-server/serve-static";

import { auth } from "./api/auth.js";
import admin from "./api/admin.js";
import { user } from "./api/user.js";

const app = new Hono();

// serve file static dari folder public
app.use("/*", serveStatic({ root: "./public" }));

app.route("/auth", auth);
app.route("/admin", admin);
app.route("/user", user);

// Jalankan server
serve({
  fetch: app.fetch,
  port: 9898,
}, () => {
  console.log("Server berjalan di http://localhost:9898");
})