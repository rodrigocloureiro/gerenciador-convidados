import { ObjectId } from 'mongodb';
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

  static async getVipGuests(req, res) {
    try {
      const { params : { id } } = req;
      const vips = await event.aggregate([
        { $match: { _id: ObjectId.createFromHexString(id) } }, // busca pelo id (ele cria um ObjectId a partir do id (string))
        { $unwind: "$guests" }, // descontrói o array para gerar um documento para cada elemento
        { $match: { "guests.vip": true } }, // busca todos os elementos descontruídos acima com vip: true
        { $replaceRoot: { newRoot: "$guests" } }, // esta etapa substitui o documento raiz pelo documento 'guests'
      ]);
      res.status(200).json({ vips });

    } catch (err) {
      res.status(500).json({ message: `Erro ao listar vips do evento: ${err.message}` });
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

  static async removeGuestEvent(req, res) {
    try {
      const { params : { eventId, guestId } } = req;
      const eventUpdated = await event.updateOne(
        { _id: ObjectId.createFromHexString(eventId) },
        { $pull: { guests: { _id: ObjectId.createFromHexString(guestId) } } },
      );
      res.status(200).json(eventUpdated);

    } catch (err) {
      res.status(500).json({ message: `Erro ao convidar para o evento: ${err.message}` });
    }
  }
}

export default EventController;
