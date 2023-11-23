import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@study/application",
  app: () => System.import("@study/application") as any,
  activeWhen: ["/", "/home"],
});

registerApplication({
  name: "@study/common",
  app: () => System.import("@study/common") as any,
  activeWhen: "/common",
});

start({
  urlRerouteOnly: true,
});
