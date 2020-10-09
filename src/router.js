import Vue from "vue"
import Router from "vue-router"
import about from "./views/about.vue"

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/",
            name: "about",
            component: about
        },
        {
            path: "/todo",
            name: "todo",

            component: () =>
                import("./views/todo.vue")
        }
    ]
})
