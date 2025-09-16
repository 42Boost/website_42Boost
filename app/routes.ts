import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("nos-services", "routes/nos-services.tsx"),
  route("notre-structure", "routes/notre-structure.tsx"),
  route("notre-procede", "routes/notre-procede.tsx"),
  route("junior-entreprises", "routes/junior-entreprises.tsx"),
  route("contact", "routes/contact.tsx"),
  route("mentions-legales", "routes/mentions-legales.tsx"),
  route("api/contact", "routes/api/contact.tsx"),
] satisfies RouteConfig;
