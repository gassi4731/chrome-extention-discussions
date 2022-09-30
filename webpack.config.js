const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
	mode: process.env.NODE_ENV || "development",
	entry: {
		background: path.join(__dirname, "src/background.ts"),
		options: path.join(__dirname, "src/options.ts"),
		member: path.join(__dirname, "src/member.ts"),
		rename: path.join(__dirname, "src/rename.ts"),
	},
	output: {
		path: path.join(__dirname, "dist/js"),
		filename: "[name].js",
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: [".ts", ".js"],
	},
	plugins: [new CopyPlugin([{ from: ".", to: "../" }], { context: "public" })],
};
