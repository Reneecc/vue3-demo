import { Button, Icon, Swipe, SwipeItem, NavBar, Field, CellGroup, Divider, Form } from 'vant';

export function vant(app) {
    app.use(Button)
    app.use(Icon)
    app.use(Swipe)
    app.use(SwipeItem)
    app.use(NavBar)
    app.use(Field)
    app.use(CellGroup)
    app.use(Divider)
    app.use(Form)
}