// userModel.test.js
import userModel from './userModel';

describe('userModel', () => {
  test('should create a new user', async () => {
    const user = {
      nombre: 'John Doe',
      email: 'johndoe@example.com',
      direccion: '123 Main St',
      contraseña: 'password'
    };

    const userId = await userModel.createUser(user);
    expect(typeof userId).toBe('number');
  });

  test('should get a user by email', async () => {
    const email = 'johndoe@example.com';
    const user = await userModel.getUserByEmail(email);
    expect(user).toBeDefined();
    expect(user.email).toBe(email);
  });

  test('should update a user', async () => {
    const user = {
      id: 1, // Assuming there's a user with ID 1 in the database
      nombre: 'John Doe',
      email: 'johndoe@example.com',
      direccion: '123 Main St',
      contraseña: 'newpassword'
    };

    await userModel.updateUser(user);
    const updatedUser = await userModel.getUserByEmail(user.email);
    expect(updatedUser).toBeDefined();
    expect(updatedUser.contraseña).toBe('newpassword');
  });

  test('should delete a user', async () => {
    const email = 'johndoe@example.com';
    const user = await userModel.getUserByEmail(email);

    await userModel.deleteUser(user.id);
    const deletedUser = await userModel.getUserByEmail(email);
    expect(deletedUser).toBeNull();
  });
});
