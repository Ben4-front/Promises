import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static load() {
    return read()                      // возвращает Promise с ArrayBuffer
      .then((buffer) => json(buffer))  // возвращает Promise со строкой JSON
      .then((jsonString) => JSON.parse(jsonString)) // парсим в объект
      .catch((error) => {
        // пробрасываем дальше, чтобы вызывающий код мог обработать ошибку
        throw error;
      });
  }
}