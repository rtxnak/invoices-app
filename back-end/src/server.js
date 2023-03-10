require('dotenv').config();

const port = process.env.PORT || 3001;
const cors = require('cors');
const app = require('./app');

app.use(cors());

app.listen(port);
console.log(`Api rodando na porta ${port}`);
