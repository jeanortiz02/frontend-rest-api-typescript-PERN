import { createBrowserRouter } from 'react-router-dom';
import Layout from './layout/Layout';
import Products, { loader as productLoader, action as updateAvailabilityAction } from './views/Products';
import NewProduct, { action as newProductAction } from './views/NewProduct';
import EditProduct, { loader as editProduct, action as editProductAction } from './views/EditProduct';
import { action as deleteProductAction } from './components/ProductDetail';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
               index: true,
               element: <Products/>,
               loader: productLoader,
               action: updateAvailabilityAction
            },
            {
                path: 'productos/nuevo',
                element: <NewProduct/>,
                action: newProductAction
            },
            {
                path: 'productos/:id/editar', // ROA Pattern - Resource-oriented design
                element: <EditProduct/>,
                loader: editProduct,
                action: editProductAction
            }, 
            {
                path: 'productos/:id/eliminar',
                action: deleteProductAction
            }
        ]
    }
])