import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    define: {
        "process.env": {}
    },
    build: {
        lib: {
            entry: "src/index.jsx",
            name: "MyPlugin",
            fileName: () => "index.es.js",
            formats: ["es"]
        },
        rollupOptions: {
            external: ["react", "react-dom"],
            treeshake: false,
            output: {
                format: "es",
                preserveModules: false,
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM"
                }
            }
        },
        commonjsOptions: {
            transformMixedEsModules: true
        }
    }
});
