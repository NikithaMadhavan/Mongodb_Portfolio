import { Router } from "express";
import ContactController from "../controllers/contact.controller";

class ContactRoutes {
  router = Router();
  controller = new ContactController();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {
    // Create a new Tutorial
    this.router.post("/", this.controller.create);

    
}
}

export default new ContactRoutes().router;
