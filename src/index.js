import express from "express";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

// Routes
import indexRoutes from './routes/index.js'

// Initialize express
const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url))


// settings
app.set('views', join(__dirname, 'view'));
app.set('view engine', 'ejs');

app.use(indexRoutes)

app.use(express.static(join(__dirname, 'public')))

// listening the Server
app.listen(3000)
console.log('Server is listening on port', 3000)