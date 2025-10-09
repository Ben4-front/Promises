import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static async load() {
    const buffer = await read(); // Ждем, пока read() вернет ArrayBuffer
    const jsonString = await json(buffer); // Ждем, пока json() вернет строку
    return JSON.parse(jsonString); // Парсим строку и возвращаем объект
  }
}