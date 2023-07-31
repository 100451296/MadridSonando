// productModel.test.js
import productModel from './productModel';

describe('productModel', () => {
  test('should create a new product', async () => {
    const product = {
      ProductName: 'Product 1',
      Brand: 'Brand 1',
      Price: 100.0,
      DiscountPrice: 80.0,
      Image_Url: 'image_url.jpg',
      Quantity: 10,
      Category: 'Category 1',
      SubCategory: 'Subcategory 1',
      Absolute_Url: 'absolute_url',
      Uds: 'units'
    };

    const productId = await productModel.createProduct(product);
    expect(typeof productId).toBe('number');
  });

  test('should get a product by ID', async () => {
    const productId = 1; // Assuming there's a product with ID 1 in the database
    const product = await productModel.getProductById(productId);
    expect(product).toBeDefined();
    expect(product.id).toBe(productId);
  });

  test('should update a product', async () => {
    const product = {
      id: 1, // Assuming there's a product with ID 1 in the database
      ProductName: 'Updated Product',
      Price: 150.0
      // Add other fields to update as needed
    };

    await productModel.updateProduct(product);
    const updatedProduct = await productModel.getProductById(product.id);
    expect(updatedProduct).toBeDefined();
    expect(updatedProduct.ProductName).toBe('Updated Product');
    expect(updatedProduct.Price).toBe(150.0);
  });

  test('should delete a product', async () => {
    const productId = 1; // Assuming there's a product with ID 1 in the database
    const product = await productModel.getProductById(productId);

    await productModel.deleteProduct(productId);
    const deletedProduct = await productModel.getProductById(productId);
    expect(deletedProduct).toBeNull();
  });
});
