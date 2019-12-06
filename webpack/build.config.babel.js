import { name, version, description, homepage } from "../package.json";
import { BannerPlugin, DefinePlugin } from "webpack";
import TerserJSPlugin from "terser-webpack-plugin";
import OptimizeCSSAssetsPlugin from "optimize-css-assets-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import nib from "nib";

export default {
	entry: ["./src/index.ts", "./src/index.styl"],
	output: {
		path: __dirname + "/../build",
		filename: `${name}.js`
	},
	resolve: {
		alias: {
			Components: __dirname + "/../src/Components",
			utils: __dirname + "/../src/utils"
		}
	},
	externals: {
		lodash: "lodash",
		react: "React",
		"react-dom": "ReactDOM",
		"@wordpress/i18n": "wp.i18n",
		"@wordpress/api-fetch": "wp.apiFetch",
		"@wordpress/block-editor": "wp.blockEditor",
		"@wordpress/blocks": "wp.blocks",
		"@wordpress/components": "wp.components",
		"@wordpress/data": "wp.data",
		"@wordpress/element": "wp.element"
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				loader: "babel-loader",
				resolve: {
					extensions: [".tsx", ".ts", ".js", ".jsx"]
				}
			},
			{
				test: /\.(css|styl)$/,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader",
					{
						loader: "stylus-loader",
						options: {
							use: [nib()],
							import: ["~nib/index.styl"]
						}
					}
				]
			}
		]
	},
	plugins: [
		new DefinePlugin({
			l: (...args) => console.log(...args)
		}),
		new MiniCssExtractPlugin({
			filename: `${name}.css`
		}),
		new BannerPlugin({
			banner: [`/*! ${description} | ${version} | ${homepage} */`].join(""),
			raw: true,
			include: new RegExp(/.*?\.js/)
		}),
		new BannerPlugin({
			banner: `${description} | ${version} | ${homepage}`,
			include: new RegExp(/.*?\.css/)
		})
	],
	optimization: {
		minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})]
	}
};
