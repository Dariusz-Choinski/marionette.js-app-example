import NewProductTest from './new-test';
import ShowProductTest from './show-test';
import EditProductTest from './edit-test';
import DeleteProductTest from './delete-test';

export default function ProductsTests() {
  QUnit.module('products', () => {
    NewProductTest();
    ShowProductTest();
    EditProductTest();
    DeleteProductTest();
  });
}

