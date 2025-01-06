module.exports = {
    plugins: {
        "postcss-px-to-viewport": {
            viewportWidth: 375, // 设计稿宽度
            viewportHeight: 667, // 可选
            unitPrecision: 5, // 转换后保留的小数位数
            viewportUnit: "vw", // 使用的单位
            selectorBlackList: [".ignore"], // 忽略转换的类
            minPixelValue: 1, // 小于或等于1px不转换
            mediaQuery: false // 是否转换媒体查询中的px
        }
    }
};
