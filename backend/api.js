import express from 'express'
import cors from 'cors'
const api = express();

api.use(express.json());
api.use(cors());

api.listen(7483,() => console.log('==> > SUPER API em funcionamento!!!'));