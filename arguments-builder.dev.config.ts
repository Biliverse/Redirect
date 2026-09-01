import { defineConfig } from "@iringo/arguments-builder";
import { argsFull } from "./arguments-builder.full.config";

export default defineConfig({
	args: argsFull,
	output: {
		surge: { path: "./dist/BiliBili.Redirect.dev.sgmodule", template: "./template/surge.dev.handlebars" },
		loon: { path: "./dist/BiliBili.Redirect.dev.plugin", template: "./template/loon.dev.handlebars" },
		customItems: [{ path: "./dist/BiliBili.Redirect.dev.stoverride", template: "./template/stash.dev.handlebars" }],
		boxjsSettings: { path: "./dist/BiliBili.Redirect.dev.boxjs.json", scope: "@BiliBili.Redirect.Settings" },
	},
});
