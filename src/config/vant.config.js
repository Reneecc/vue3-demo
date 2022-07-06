import { Button, Icon, Swipe, SwipeItem } from 'vant';

export function vant(app) {
    app.use(Button)
    app.use(Icon)
    app.use(Swipe)
    app.use(SwipeItem)
}