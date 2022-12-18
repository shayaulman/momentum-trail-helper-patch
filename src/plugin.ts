import { App } from "vue"
import state from "./state"
import type { RouterGlobal } from "./router"

export interface TrailPluginOptions {
  routes?: RouterGlobal
}

export const trail = (app: App, options?: TrailPluginOptions) => {
  if (options?.routes) {
    state.setRoutes(options.routes)
  }
}