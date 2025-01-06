import react, { useEffect } from 'react';
import routes from '@/route/routes';
import { Navigate, useLocation, useNavigate } from 'react-router';
import { GlobalContext } from './GlobalContext';
import { renderRoutes } from '@/route/routes';
import 'moment/locale/zh-cn';
import React from 'react';

const App = (props: any) => {
    return (
        <div>
            <GlobalContext.Provider value={{ data: 1 }}>
                {renderRoutes(routes)}
            </GlobalContext.Provider>
        </div>
    );
};

export default App;
