import { type ArgumentItem, defineConfig } from "@iringo/arguments-builder";

export const output = {
	surge: {
		path: "./dist/BiliBili.Redirect.sgmodule",
		transformEgern: {
			enable: true,
			path: "./dist/BiliBili.Redirect.yaml",
		},
	},
	loon: {
		path: "./dist/BiliBili.Redirect.plugin",
	},
	customItems: [
		{
			path: "./dist/BiliBili.Redirect.stoverride",
			template: "./template/stash.handlebars",
		},
	],
	dts: {
		isExported: true,
		path: "./src/types.d.ts",
	},
	boxjsSettings: {
		path: "./template/boxjs.settings.json",
		scope: "@BiliBili.Redirect.Settings",
	},
};

export const args: ArgumentItem[] = [
	{
		key: "Host.OverseaVideo",
		name: "[主机名] 重定向 OverseaVideo CDN (港澳台)",
		defaultValue: "upos-sz-mirrorali.bilivideo.com",
		type: "string",
		boxJsType: "selects",
		description: "请选择 OverseaVideo 要重定向的主机名。",
		options: [
			{
				key: "upos-sz-mirrorali.bilivideo.com",
				label: "阿里云 CDN",
			},
			{
				key: "upos-sz-mirrorcos.bilivideo.com",
				label: "腾讯云 CDN",
			},
			{
				key: "upos-sz-mirrorhw.bilivideo.com",
				label: "华为云 CDN，融合 CDN",
			},
			{
				key: "upos-sz-mirroraliov.bilivideo.com",
				label: "阿里云 CDN，海外",
			},
			{
				key: "upos-sz-mirrorcosov.bilivideo.com",
				label: "腾讯云 CDN，海外",
			},
			{
				key: "upos-sz-mirrorhwov.bilivideo.com",
				label: "华为云 CDN，海外",
			},
			{
				key: "cn-hk-eq-01-01.bilivideo.com",
				label: "Equinix IX CDN，香港",
			},
			{
				key: "cn-hk-eq-01-03.bilivideo.com",
				label: "Equinix IX CDN，香港",
			},
			{
				key: "cn-hk-eq-01-09.bilivideo.com",
				label: "Equinix IX CDN，香港",
			},
			{
				key: "cn-hk-eq-01-10.bilivideo.com",
				label: "Equinix IX CDN，香港",
			},
			{
				key: "cn-hk-eq-01-12.bilivideo.com",
				label: "Equinix IX CDN，香港",
			},
			{
				key: "cn-hk-eq-01-13.bilivideo.com",
				label: "Equinix IX CDN，香港",
			},
			{
				key: "cn-hk-eq-01-14.bilivideo.com",
				label: "Equinix IX CDN，香港",
			},
		],
	},
	{
		key: "Host.BStar",
		name: "[主机名] 重定向 BStar CDN (国际版)",
		defaultValue: "upos-sz-mirrorali.bilivideo.com",
		type: "string",
		boxJsType: "selects",
		description: "请选择 BStar 要重定向的主机名。",
		options: [
			{
				key: "upos-sz-mirrorali.bilivideo.com",
				label: "阿里云 CDN",
			},
			{
				key: "upos-sz-mirrorcos.bilivideo.com",
				label: "腾讯云 CDN",
			},
			{
				key: "upos-sz-mirrorhw.bilivideo.com",
				label: "华为云 CDN，融合 CDN",
			},
			{
				key: "upos-sz-mirroraliov.bilivideo.com",
				label: "阿里云 CDN，海外",
			},
			{
				key: "upos-sz-mirrorcosov.bilivideo.com",
				label: "腾讯云 CDN，海外",
			},
			{
				key: "upos-sz-mirrorhwov.bilivideo.com",
				label: "华为云 CDN，海外",
			},
			{
				key: "cn-hk-eq-01-01.bilivideo.com",
				label: "Equinix IX CDN，香港",
			},
			{
				key: "cn-hk-eq-01-03.bilivideo.com",
				label: "Equinix IX CDN，香港",
			},
			{
				key: "cn-hk-eq-01-09.bilivideo.com",
				label: "Equinix IX CDN，香港",
			},
			{
				key: "cn-hk-eq-01-10.bilivideo.com",
				label: "Equinix IX CDN，香港",
			},
			{
				key: "cn-hk-eq-01-12.bilivideo.com",
				label: "Equinix IX CDN，香港",
			},
			{
				key: "cn-hk-eq-01-13.bilivideo.com",
				label: "Equinix IX CDN，香港",
			},
			{
				key: "cn-hk-eq-01-14.bilivideo.com",
				label: "Equinix IX CDN，香港",
			},
		],
	},
	{
		key: "Host.PCDN",
		name: "[主机名] 重定向 PCDN 主机名 (中国大陆)",
		defaultValue: "upos-sz-mirrorali.bilivideo.com",
		type: "string",
		boxJsType: "selects",
		description: "请选择 PCDN 要重定向的主机名。",
		options: [
			{
				key: "upos-sz-mirrorali.bilivideo.com",
				label: "阿里云 CDN",
			},
			{
				key: "upos-sz-mirrorcos.bilivideo.com",
				label: "腾讯云 CDN",
			},
			{
				key: "upos-sz-mirrorhw.bilivideo.com",
				label: "华为云 CDN，融合 CDN",
			},
			{
				key: "upos-sz-mirroraliov.bilivideo.com",
				label: "阿里云 CDN，海外",
			},
			{
				key: "upos-sz-mirrorcosov.bilivideo.com",
				label: "腾讯云 CDN，海外",
			},
			{
				key: "upos-sz-mirrorhwov.bilivideo.com",
				label: "华为云 CDN，海外",
			},
			{
				key: "cn-hk-eq-01-01.bilivideo.com",
				label: "Equinix IX CDN，香港",
			},
			{
				key: "cn-hk-eq-01-03.bilivideo.com",
				label: "Equinix IX CDN，香港",
			},
			{
				key: "cn-hk-eq-01-09.bilivideo.com",
				label: "Equinix IX CDN，香港",
			},
			{
				key: "cn-hk-eq-01-10.bilivideo.com",
				label: "Equinix IX CDN，香港",
			},
			{
				key: "cn-hk-eq-01-12.bilivideo.com",
				label: "Equinix IX CDN，香港",
			},
			{
				key: "cn-hk-eq-01-13.bilivideo.com",
				label: "Equinix IX CDN，香港",
			},
			{
				key: "cn-hk-eq-01-14.bilivideo.com",
				label: "Equinix IX CDN，香港",
			},
		],
	},
	{
		key: "Host.MCDN",
		name: "[主机名] 重定向 MCDN 主机名 (中国大陆)",
		defaultValue: "proxy-tf-all-ws.bilivideo.com",
		type: "string",
		boxJsType: "selects",
		description: "请选择 MCDN 要重定向的主机名。",
		options: [
			{
				key: "proxy-tf-all-ws.bilivideo.com",
				label: "proxy-tf-all-ws.bilivideo.com",
			},
		],
	},
	{
		key: "Storage",
		name: "[储存] 配置类型",
		defaultValue: "Argument",
		type: "string",
		options: [
			{ key: "Argument", label: "优先使用来自 $argument 的配置，$argument 不包含的设置项由 PersistentStore (BoxJs) 提供" },
			{ key: "PersistentStore", label: "只使用 PersistentStore (BoxJs) 提供的配置" },
			{ key: "database", label: "只使用由作者的 database.mjs 文件提供的默认配置，其他任何自定义配置不再起作用" },
		],
		description: "选择要使用的配置类型。未设置此选项或不通过此选项的旧版本的配置顺序依旧是 PersistentStore (BoxJs) > $argument > database.",
	},
	{
		key: "LogLevel",
		name: "[调试] 日志等级",
		type: "string",
		defaultValue: "WARN",
		description: "选择脚本日志的输出等级，低于所选等级的日志将全部输出。",
		options: [
			{ key: "OFF", label: "关闭" },
			{ key: "ERROR", label: "❌ 错误" },
			{ key: "WARN", label: "⚠️ 警告" },
			{ key: "INFO", label: "ℹ️ 信息" },
			{ key: "DEBUG", label: "🅱️ 调试" },
			{ key: "ALL", label: "全部" },
		],
	},
];

export const argsFull: ArgumentItem[] = [...args];

export default defineConfig({ output, args: argsFull });
