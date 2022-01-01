"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = __importDefault(require("../contollers/user"));
const router = (0, express_1.Router)();
router
    .route('/')
    .post(user_1.default.postUser);
router
    .route('/:username')
    .get(user_1.default.getUser);
exports.default = router;
