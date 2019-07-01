"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    index(req, res) {
        res.send('index');
    }
}
exports.indexController = new IndexController();
