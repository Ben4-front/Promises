import GameSavingLoader from '../GameSavingLoader';

// Мы больше не импортируем read и json и не используем jest.mock()

describe('GameSavingLoader integration test', () => {
  test('should load and parse data through real modules', async () => {
    // Jest будет ждать, пока Promise не разрешится
    const saving = await GameSavingLoader.load();

    // Ожидаемый результат, который захардкожен в reader.js
    const expected = {
      id: 9,
      created: 1546300800,
      userInfo: {
        id: 1,
        name: 'Hitman',
        level: 10,
        points: 2000,
      },
    };

    // Сверяем полученный объект с ожидаемым
    expect(saving).toEqual(expected);
  });

  // Тест на ошибку в данном случае написать сложнее,
  // так как наши заглушки read() и json() никогда не возвращают ошибок.
  // Для 100% покрытия GameSavingLoader.js и его зависимостей
  // достаточно одного успешного сценария.
});