import express from 'express';
import morgan from 'morgan';
import connect from './db/db.js';
import userRoutes from './routes/user.routes.js';
import teacherRoutes from './routes/teacher.route.js';
import studentRoutes from './routes/student.routes.js';

import resultRoutes from "./routes/result.routes.js";
import cookieParser from 'cookie-parser';
import cors from 'cors';
connect();


const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/users', userRoutes);

app.use('/api/teacher', teacherRoutes);
app.use('/api/student', studentRoutes); 

app.use("/api/results", resultRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!');
});
export default app; 