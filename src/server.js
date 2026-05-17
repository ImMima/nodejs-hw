import express from 'express';
import 'dotenv/config';
import cors from 'cors';

import { connectMongoDB } from './db/connectMongoDB';
import { logger } from './middleware/logger';
import { router } from './routes/notesRoutes';
import { notFoundHandler } from './middleware/notFoundHandler';
import { errorHandler } from './middleware/errorHandler';

const app = express();
const PORT = process.env.PORT ?? 3030;

app.use(logger);
app.use(express.json());
app.use(cors());

app.use(router);
app.use(notFoundHandler);
app.use(errorHandler);

await connectMongoDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
