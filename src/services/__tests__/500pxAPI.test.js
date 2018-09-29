import { getPictures } from '../UnsplashApi'

test('the data should be an array of objects', async () => {
  expect.assertions(1)
  const data = await getPictures()
  expect(typeof data).toBe('object')
});