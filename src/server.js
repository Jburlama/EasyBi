const fastify = require("fastify")({ logger: true });
const path = require("path");

fastify.register(require("@fastify/static"), {
    root: path.join(__dirname, "public"),
    prefix: "/",
});

// API routes
// fastify.get("/api/*", async (request, reply) => {
//     // Handle API or return 404
//     return reply.code(404).send({ error: "API endpoint not found" });
// });

const routes = [
    "/",
    "/criar-integracao",
    "/integracao",
]

fastify.setNotFoundHandler((request, reply) => {
    const url = request.url;

    // Skip static files and API
    if (url.match(/\.(js|css|png|jpg|jpeg|gif|ico|svg|txt|json)$/) || 
        url.startsWith("/api/")) {
        return reply.code(404).send("Not found");
    }
    if (routes.some(route => route === url)) {
        return reply.sendFile("html/index.html");
    }

    return reply.code(404).send("Not found");
});


// Start server
const start = async () => {
    try {
        await fastify.listen({ port: 3000 });
    }
    catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

start();
