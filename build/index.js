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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const indexRoute_1 = __importDefault(require("./Routers/indexRoute"));
const path_1 = __importDefault(require("path"));
const sharp_1 = __importDefault(require("./sharp"));
const app = (0, express_1.default)();
const port = 3000;
app.use('/api', indexRoute_1.default);
app.use('./images/Original', express_1.default.static(path_1.default.join(__dirname, 'Original')));
app.use('./images/Modified', express_1.default.static(path_1.default.join(__dirname, 'Modified')));
app.get('/resize', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const imageUrl = './images/Original/encenadaport.jpg';
    const width = parseInt(req.query.width);
    const height = parseInt(req.query.height);
    try {
        const buffer = yield (0, sharp_1.default)(imageUrl, width, height);
        res.set('Content-Type', 'image/jpeg');
        res.send(buffer);
    }
    catch (err) {
        console.error(err);
        res.status(200).send('Internal server error');
    }
}));
app.listen(port, () => {
    console.log(`server started at localhost:${port}`);
});
