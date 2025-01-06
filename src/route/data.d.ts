export type RouteType = {
    name?: any;
    path: string;
    children?: RouteType[];
    element: any;
};
