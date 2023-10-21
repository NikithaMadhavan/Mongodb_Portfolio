import { Request, Response } from "express";
import contact from "../models/contact.model";
import mongoose from 'mongoose';
export default class ContactController {
    async create(req: Request, res: Response) {
        const { name, email, phone, message } = req.body
        const createContact = await contact.create({ name, email, phone, message });
        console.log(createContact);
        if (name?.length <= 0) {
            res.json({ message: "Validation error" })
            return;
        }
        if (email?.length <= 0) {
            res.json({ message: "Validation error" })
            return;
        }
        if (message?.length <= 0) {
            res.json({ message: "Validation error" })
            return;
        }
        if (phone?.length <= 0) {
            res.json({ message: "Validation error" })
            return;
        }
        try {
            res.status(201).json({
                message: "Created successfully",
                contact: createContact
            })
        } catch (err) {
            console.error("Error in creating", err);
            res.status(500).json({
                message: "Internal server error"
            });
        }

    }
}