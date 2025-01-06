import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Navigate } from "react-router";
import type { RouteType } from "./data";
import Home from "@/pages/Home";
import React from "react";
const Login = lazy(() => import("@/pages/User/login"));
const NotFound = lazy(() => import("@/pages/NotFound"));

const SusComp = (Component: any, key?: string) => (
    <Suspense fallback="load">
        <Component key={key} />
    </Suspense>
);
const routes: RouteType[] = [
    { path: "/", name: "首页", element: <Home /> },
    { path: "/login", name: "登录", element: SusComp(Login) },
    { path: "*", element: SusComp(NotFound) }
];

/**
 * 处理标签页title
 * @param param
 * @returns
 */
const HandleTitle = ({ routeParams }: { routeParams: RouteType }) => {
    document.title = routeParams.name;
    return routeParams.element;
};
/**
 * load routes
 * @param rs
 * @returns
 */
export const renderRoutes = (rs: RouteType[]) => {
    return (
        <Routes>
            {rs.map(item => {
                const { path, children } = item;
                return (
                    <Route key={path} path={path} element={<HandleTitle routeParams={item} />}>
                        {!!children &&
                            children.map(i => (
                                <Route
                                    key={i.path}
                                    path={i.path}
                                    element={<HandleTitle routeParams={i} />}
                                />
                            ))}
                    </Route>
                );
            })}
        </Routes>
    );
};

export default routes;
