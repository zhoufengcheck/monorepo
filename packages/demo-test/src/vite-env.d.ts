/// <reference types="vite/client" />

declare module '@nice_honycomb/utils'
declare module '*.vue' {
    import { DefineComponent } from 'vue'
    const Component: DefineComponent<{}, {}, any>
    export default Component
}