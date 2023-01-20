import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Register from '../auth/Register';
import Login from '../auth/Login';

function CustomRoutes() {
    return (
        <section className='container'>
            <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <PrivateRoute
                exact
                path='/add-review/:movie_id'
                element={ReviewForm}
            />
            <Route element={NotFound} />
            </Routes>
      </section>
    );
}

export default CustomRoutes;