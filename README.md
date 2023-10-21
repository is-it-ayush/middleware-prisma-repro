#### limitation repro

nextjs middleware limitation. since middlewares (since their birth) run on "edge" runtime.
they run with minimal node features & do not support the full node runtime. you cannot
call prisma or anything that requires a long-lived connection. this is a repro of the
error it throws if you were to call such in a middleware. : )
