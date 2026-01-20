const fastify = require("fastify")({ logger: true });
const path = require("path");


// Register static file plugin
fastify.register(require("@fastify/static"), {
    root: path.join(__dirname, "public"),
});


// Declare route - updated path to index.html
fastify.get("/", async (request, reply) => {
    return reply.sendFile("html/index.html");  // Updated path
});

// Start server
const start = async () => {
    try {
        await fastify.listen({ port: 3000 });
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

start();
