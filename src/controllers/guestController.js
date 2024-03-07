import guest from '../models/Guest.js';

class GuestController {
  static async getAll(req, res) {
    try {
      res.status(200).json(await guest.find());
    } catch (err) {
      res.status(500).json({ message: `Erro: ${err.message}` });
    }
  }

  static async addGuest(req, res) {
    try {
      const { body } = req;
      const created = await guest.create(body);
      res.status(201).json(created);
    } catch (err) {
      res.status(500).json({ message: `Erro: ${err.message}` });
    }
  }
}

export default GuestController;
