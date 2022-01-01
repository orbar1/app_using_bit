"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const user_1 = __importDefault(require("./routes/user"));
const PORT = 3000;
mongoose_1.default
    .connect('mongodb+srv://orbar:Aa123456@cluster1.plrb4.mongodb.net/users_db?retryWrites=true&w=majority')
    .then(mongoRes => {
    console.log('db connected');
    const app = (0, express_1.default)();
    app.use(body_parser_1.default.json());
    app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        next();
    });
    app.use('/api/v1/users', user_1.default);
    app.listen(PORT, () => {
        console.log(`App is running on port ${PORT}...`);
    });
})
    .catch(err => console.log(err));
