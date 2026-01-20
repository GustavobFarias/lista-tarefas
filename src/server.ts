import express from "express";

import createRouter from "./routes/create.js";

const app = express();
const port = 3000;

app.use(express.json());

// rotas
app.use('/api', createRouter)

app.listen(port, () => {
    console.log(`server running no http://localhost:${port}`);
});
