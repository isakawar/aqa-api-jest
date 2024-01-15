import { test } from '@jest/globals';
import { expect } from 'chai';
import axios from 'axios';

test('should return todo item', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
  expect(response.data).to.include({
    userId: 1, id: 1, title: 'delectus aut autem', completed: false,
  });
});
