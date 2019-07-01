"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const rolesController_1 = __importDefault(require("../controllers/rolesController"));
class RolesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', rolesController_1.default.index);
        this.router.post('/', rolesController_1.default.add);
    }
}
const rolesRoutes = new RolesRoutes();
exports.default = rolesRoutes.router;
