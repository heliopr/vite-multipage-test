import { resolve } from "path"
import { defineConfig } from "vite"

export default defineConfig(({ mode }) => {
    const BASE_URL = mode == "development" ? "/" : "/vite-multipge-test/"

    return {
        base: BASE_URL,
        root: "src",
        publicDir: "public",
        envDir: "../",
        build: {
            outDir: "../dist",
            emptyOutDir: true,
            rollupOptions: {
                input: {
                    main: resolve(__dirname, "src/index.html"),
                    about: resolve(__dirname, "src/about/index.html"),
                    coolthing: resolve(__dirname, "src/coolthing/index.html")
                }
            }
        },
    }
})