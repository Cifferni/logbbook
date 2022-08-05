interface ImportMetaEnv {
    readonly VITE_BASE_URL: string
    readonly MODE_ENV: string
}

declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    // eslint-disable-next-line @typescript-eslint/ban-types
    const component: DefineComponent<{}, {}, any>
    export default component
}
