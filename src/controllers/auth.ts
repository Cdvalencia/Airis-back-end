import { Response, Request } from "express";

import bcrypt from 'bcryptjs'
import jwt from "jsonwebtoken";

type RequestBody = {
    name: string;
    email: string;
    password: string
}

export const loginUser = async (req: Request, res: Response) => {    
    console.log(req.userId);    
    const token = jwt.sign({ id: req.userId }, "mykey", {
        expiresIn: "30d"
    });
    let data={
        id: req.userId,
        token
    }
    // res.header('Authorization', `Bearer ${token}`).send(token);    
    res.status(200).send(data)    

}