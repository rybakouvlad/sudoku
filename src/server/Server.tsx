import express from 'express';
import resultRoutes from './routes/result.route';
import './utils/mongodb';
import cors from 'cors';

const port = 3000;
const server = express();

server.use(cors());
server.use(express.json());
server.use('/api/result', resultRoutes);

server.listen(port, () => console.log(`Listening on port ${port}`));
