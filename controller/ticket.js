import AsyncStorage from "@react-native-async-storage/async-storage";
import jsonpack from "jsonpack";
import uuid from "react-native-uuid";

class TicketController {
  ASYNC_STORAGE_KEY = "TICKETS";

  createKey() {
    return this.ASYNC_STORAGE_KEY;
  }

  async getTicketsFromStorage(key) {
    const ticketsString = await AsyncStorage.getItem(key);
    const tickets = ticketsString ? jsonpack.unpack(ticketsString) : [];
    return tickets;
  }

  async setTicketsToStorage(key, tickets) {
    await AsyncStorage.setItem(key, jsonpack.pack(tickets));
  }

  createTicket(dl, route, start, end, count, fare, color) {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const date = new Date();
    var mer = date.getHours() >= 12 ? "PM" : "AM";
    var hour = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
    const time =
      date.getDate() +
      " " +
      months[date.getMonth() - 1] +
      ", " +
      (date.getFullYear() - 2000) +
      " | " +
      hour +
      ":" +
      date.getMinutes() +
      " " +
      mer;
    const ticket = {
      id: uuid.v4().toString(),
      dl,
      route,
      start,
      end,
      count,
      fare,
      cost: count * fare * 0.9,
      color,
      time,
    };
    return ticket;
  }

  async addTicket(ticket) {
    const tickets = await this.getTicketsFromStorage(this.createKey());
    tickets.unshift(ticket);
    await this.setTicketsToStorage(this.createKey(), tickets);
  }

  async getTickets() {
    const tickets = await this.getTicketsFromStorage(this.createKey());
    return tickets;
  }
}
const ticketController = new TicketController();
export default ticketController;
