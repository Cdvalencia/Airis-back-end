"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginValidation = void 0;
let users = [
    {
        id: "1",
        name: "User1",
        email: "email1@gmail.com",
        password: "1234"
    },
    {
        id: "2",
        name: "User2",
        email: "email2@gmail.com",
        password: "1234"
    }, {
        id: "3",
        name: "User3",
        email: "email3@gmail.com",
        password: "1234"
    }
];
const loginValidation = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const user = yield users.filter((it) => { return it.email == email && it.password == password; });
    if (user && user.length > 0) {
        console.log(user);
        req.userId = user[0].id;
        next();
    }
    else
        res.status(400).send('Email o contraseña incorrectos.');
});
exports.loginValidation = loginValidation;
