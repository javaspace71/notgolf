module.exports = {
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg');
 
    svgRule.uses.clear();
 
    svgRule
      .use('vue-svg-loader')
		.loader('vue-svg-loader')
		.options({
		  svgo: {
		  	full: false,
		    plugins: [{ removeDimensions: false }, { removeViewBox: false }, {cleanupAttrs: true }, {cleanupIDs: false }, {convertShapeToPath: false}]
		  }
		})
  },
};

