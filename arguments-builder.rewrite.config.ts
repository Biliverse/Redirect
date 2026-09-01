import { defineConfig } from "@iringo/arguments-builder";

const endpoint = {
	key: "endpoint",
	name: "[重写] 服务端点",
	defaultValue: "redirect-4pm.pages.dev",
	type: "string" as const,
	options: [
		{ key: "redirect-4pm.pages.dev", label: "首选；直连；无需代理" },
		{ key: "dev.redirect-4pm.pages.dev", label: "开发版" },
		{ key: "redirect.nanocat.workers.dev", label: "Worker 版；需要代理" },
	],
};

export default defineConfig({
	args: [endpoint],
	output: {
		surge: { path: "./dist/BiliBili.Redirect.Rewrite.sgmodule", template: "./template/surge.rewrite.handlebars", transformEgern: { enable: true, path: "./dist/BiliBili.Redirect.Rewrite.yaml" } },
		loon: { path: "./dist/BiliBili.Redirect.Rewrite.plugin", template: "./template/loon.rewrite.handlebars" },
		customItems: [
			{ path: "./dist/BiliBili.Redirect.Rewrite.srmodule", template: "./template/shadowrocket.rewrite.handlebars" },
			{ path: "./dist/BiliBili.Redirect.Rewrite.stoverride", template: "./template/stash.rewrite.handlebars" },
		],
	},
});
