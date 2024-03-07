import event from '../models/Event.js';
import { guest } from '../models/Guest.js';

class EventController {
  static async getAll(req, res) {
    try {
      res.status(200).json(await event.find());
    } catch (err) {
      res.status(500).json({ message: `Erro ao listar eventos: ${err.message}` });
    }
  }

  static async getById(req, res) {
    try {
      const { params: { id } } = req;
      res.status(500).json(await event.findById(id));
    } catch (err) {
      res.status(500).json({ message: `Erro ao listar evento: ${err.message}` });
    }
  }

  static async addEvent(req, res) {
    try {
      const { body } = req;
      const newEvent = await event.create(body);
      res.status(201).json(newEvent);
    } catch (err) {
      res.status(500).json({ message: `Erro ao criar evento: ${err.message}` });
    }
  }

  static async registerGuestForEvent(req, res) {
    try {
      const { params: { id }, body } = req;
      const eventById = await event.findById(id);
      const guestById = await guest.findById(body.guest);

      eventById.guests.push(guestById);
      res.status(201).json(await eventById.save());

    } catch (err) {
      res.status(500).json({ message: `Erro ao convidar para o evento: ${err.message}` });
    }
  }
}

export default EventController;
