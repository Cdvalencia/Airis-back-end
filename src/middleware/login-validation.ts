import { Request, Response, NextFunction } from 'express'

type RequestBody = {
    email: string;
    password: string
}

let users=[
    {
        id: "1",
        name:"User1",
        email:"email1@gmail.com",
        password:"1234"
    },
    {
        id: "2",
        name:"User2",
        email:"email2@gmail.com",
        password:"1234"
    },{
        id: "3",
        name:"User3",
        email:"email3@gmail.com",
        password:"1234"
    }    
]    

export const loginValidation = async (req: Request, res: Response, next: NextFunction) => {        
    const { email, password }: RequestBody = req.body;
    const user = await users.filter((it)=>{return it.email == email && it.password== password })
    if (user && user.length>0) {        
        console.log(user);    
            req.userId = user[0].id;
            next();
        }
        else
            res.status(400).send('Email o contraseña incorrectos.')    

}