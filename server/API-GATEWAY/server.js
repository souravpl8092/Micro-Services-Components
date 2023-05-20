const gateway = require("fast-gateway");
const port = 8080;

const server = gateway({
  routes: [
    {
      prefix: "/get",
      target: "http://localhost:8081/",
      hooks: {},
    },
    {
      prefix: "/post",
      target: "http://localhost:8082/",
      hooks: {},
    },
    {
      prefix: "/update",
      target: "http://localhost:8084/",
      hooks: {},
    },
    {
      prefix: "/export",
      target: "http://localhost:8085/",
      hooks: {},
    },
  ],
});

server.get("/", (req, res) => res.send("Welcome to Api-Gateway"));

server.start(port).then((server) => {
  console.log("Api Gateway is running 8080 port");
});
