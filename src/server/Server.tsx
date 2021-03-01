import express from 'express';
import resultRoutes from './routes/result.route';
import './utils/mongodb';

const port = 3000;
const server = express();

server.use(express.json());
server.use('/api/result', resultRoutes);

server.listen(port, () => console.log(`Listening on port ${port}`));
