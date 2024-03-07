import event from '../models/Event.js';

class EventController {
  static async addEvent(req, res) {
    try {
      const { body } = req;
      const newEvent = await event.create(body);
      res.status(201).json(newEvent);
    } catch (err) {
      res.status(500).json({ message: `Erro ao criar evento: ${err.message}` });
    }
  }
}

export default EventController;
