import GameSavingLoader from '../GameSavingLoader';
import * as readerModule from '../reader';
import * as parserModule from '../parser';

describe('GameSavingLoader integration test', () => {
  test('should load and parse data through real modules', async () => {
    // здесь используем реальные модули, никаких моков
    const result = await GameSavingLoader.load();

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

    expect(result).toEqual(expected);
  });

  test('should throw if read() rejects', async () => {
    // Создаём мок только для этого теста
    const spy = jest.spyOn(readerModule, 'default').mockRejectedValue(new Error('read failed'));
    // parser подменять не нужно
    await expect(GameSavingLoader.load()).rejects.toThrow('read failed');
    spy.mockRestore();
  });
});