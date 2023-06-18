import fs from 'fs';

it('Should expect original image to exist', () => {
  expect(fs.existsSync('./images/Original/encenadaport.jpg')).toBeTruthy();
});

it('Should expect modified image to exist', () => {
  expect(fs.existsSync('./images/Modified/encenadaport_new.jpg')).toBeTruthy();
});
