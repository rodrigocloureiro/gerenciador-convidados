import { guest } from '../models/Guest.js';

class GuestController {
  static async getAll(req, res) {
    try {
      res.status(200).json(await guest.find());
    } catch (err) {
      res.status(500).json({ message: `Erro: ${err.message}` });
    }
  }

  static async getVips(req, res) {
    try {
      const vips = await guest.find({ vip: true });
      res.status(200).json(vips);
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

  static async updateGuest(req, res) {
    try {
      const { params: { id }, body } = req;
      await guest.findByIdAndUpdate(id, body);
      res.status(200).json({ message: 'Convidado atualizado com sucesso!' } );
    } catch (err) {
      res.status(500).json({ message: `Erro: ${err.message}` });
    }
  }

  static async removeGuest(req, res) {
    try {
      const { params: { id } } = req;
      await guest.findByIdAndDelete(id);
      res.status(200).json({ message: 'Convidado removido com sucesso' });
    } catch (err) {
      res.status(500).json({ message: `Erro: ${err.message}` });
    }
  }
}

export default GuestController;
