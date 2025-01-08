import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import vitePluginImp from "vite-plugin-imp";

const path = require("path");
export default defineConfig({
    server: {
        host: "0.0.0.0" // 使服务器可通过局域网访问
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
            "@components": path.resolve(__dirname, "src/components"),
            "@mobx": path.resolve(__dirname, "src/mobx"),
            "@assets": path.resolve(__dirname, "src/assets"),
            "@locales": path.resolve(__dirname, "src/locales"),
            "@utils": path.resolve(__dirname, "src/utils"),
            "@servers": path.resolve(__dirname, "src/servers"),
            "@pages": path.resolve(__dirname, "src/pages"),
            "@mock": path.resolve(__dirname, "src/mock")
        }
    },
    plugins: [
        reactRefresh(),
        vitePluginImp({
            libList: [
                {
                    libName: "antd",
                    libDirectory: "es",
                    style: name => `antd/es/${name}/style`
                },
                {
                    libName: "antd-mobile",
                    libDirectory: "es",
                    style: name => `antd-mobile/es/components/${name}/${name}.css`
                }
            ]
        })
    ],
    css: {
        preprocessorOptions: {
            less: {
                javascriptEnabled: true
            }
        }
    },
    build: {
        sourcemap: true // 启用 source map，有助于调试源代码
    }
});
