"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../db"));
class RolesController {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var rols = yield db_1.default.query('SELECT * FROM roles');
            res.send(rols);
        });
    }
    add(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield db_1.default.query('INSERT INTO roles set ?', [req.body]);
            res.json(req.body);
        });
    }
}
const rolesController = new RolesController();
exports.default = rolesController;
