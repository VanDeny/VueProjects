import Vue from "vue"
import Router from "vue-router"
import about from "./views/about.vue"

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/about",
            name: "about",
            component: about,
            meta: {
                title: 'About Denis'
            }
        },
        {
            path: "/todoApp",
            name: "todo",
            meta: {
                title: 'Todo app'
            },

            component: () =>
                import("./views/todo.vue")
        }
    ]
})
