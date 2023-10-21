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
const contact_model_1 = __importDefault(require("../models/contact.model"));
class ContactController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, email, phone, message } = req.body;
            const createContact = yield contact_model_1.default.create({ name, email, phone, message });
            console.log(createContact);
            if ((name === null || name === void 0 ? void 0 : name.length) <= 0) {
                res.json({ message: "Validation error" });
                return;
            }
            if ((email === null || email === void 0 ? void 0 : email.length) <= 0) {
                res.json({ message: "Validation error" });
                return;
            }
            if ((message === null || message === void 0 ? void 0 : message.length) <= 0) {
                res.json({ message: "Validation error" });
                return;
            }
            if ((phone === null || phone === void 0 ? void 0 : phone.length) <= 0) {
                res.json({ message: "Validation error" });
                return;
            }
            try {
                res.status(201).json({
                    message: "Created successfully",
                    contact: createContact
                });
            }
            catch (err) {
                console.error("Error in creating", err);
                res.status(500).json({
                    message: "Internal server error"
                });
            }
        });
    }
}
exports.default = ContactController;
