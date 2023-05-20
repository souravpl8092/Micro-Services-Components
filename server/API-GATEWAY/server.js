const gateway = require("fast-gateway");
const port = 8080;

/* Creates an API gateway server that forwards requests to different targets based on 
route prefixes. */

const server = gateway({
  routes: [
    {
      /* This server is responsible for handling "GET" requests and forwarding them to the target URL specified above. It has been successfully deployed and is ready to handle incoming requests.
    This server only handles "GET" requests and is specific to the "/get" endpoint. */
      prefix: "/get",
      target: "https://long-jade-armadillo-veil.cyclic.app/",
      hooks: {},
    },

    {
      /* This server is responsible for handling "POST" requests and forwarding them to the target URL specified above. It has been successfully deployed and is ready to handle incoming requests.
      This server only handles "POST" requests and is specific to the "/post" endpoint. */
      prefix: "/post",
      target: "https://kind-blue-chimpanzee-suit.cyclic.app/",
      hooks: {},
    },
    {
      /* This server is responsible for handling "PUT" requests and forwarding them to the target URL specified above. It has been successfully deployed and is ready to handle incoming requests.
      This server only handles "PUT" requests and is specific to the "/update" endpoint. */
      prefix: "/update",
      target: "https://vast-red-crane-boot.cyclic.app/",
      hooks: {},
    },
    {
      /* This server is responsible for handling "GET" requests and forwarding them to the target URL specified above. It has been successfully deployed and is ready to handle export requests.
      This server only handles "GET" requests and is specific to the "/export" endpoint. */
      prefix: "/export",
      target: "https://giddy-pinafore-tick.cyclic.app/",
      hooks: {},
    },
  ],
});

//  Handles the root ("/") route and sends a welcome message.
server.get("/", (req, res) => res.send("Welcome to Api-Gateway"));

server.start(port).then((server) => {
  console.log("Api Gateway is running 8080 port");
});
