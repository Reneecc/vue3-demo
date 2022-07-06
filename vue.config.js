//按需引入vant配置
const { VantResolver } = require('unplugin-vue-components/resolvers');
const ComponentsPlugin = require('unplugin-vue-components/webpack');

module.exports = {
    configureWebpack: {
        plugins: [
            ComponentsPlugin({
                resolvers: [VantResolver()],
            }),
        ],
    },
};

//按需引入elementuiplus配置
// const AutoImport = require('unplugin-auto-import/webpack')
// const Components = require('unplugin-vue-components/webpack')
// const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

// module.exports = {
//     configureWebpack: {
//         plugins: [
//             AutoImport({
//                 resolvers: [ElementPlusResolver()],
//             }),
//             Components({
//                 resolvers: [ElementPlusResolver()],
//             }),
//         ],
//     }
// }
