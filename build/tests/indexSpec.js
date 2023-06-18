"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
// check if the unedited image exists
it('Should expect original image to exist', () => {
    expect(fs_1.default.existsSync('./images/Original/encenadaport.jpg')).toBeTruthy();
});
// check if the edited image exists
it('Should expect modified image to exist', () => {
    expect(fs_1.default.existsSync('./images/Modified/encenadaport_new.jpg')).toBeTruthy();
});
