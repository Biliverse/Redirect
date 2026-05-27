import { defineConfig } from "@iringo/arguments-builder";

export default defineConfig({
	output: {
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
	},
	args: [
		{
			key: "Host.OverseaVideo",
			name: "[主机名] 重定向 OverseaVideo CDN (港澳台)",
			defaultValue: "upos-sz-mirrorali.bilivideo.com",
			type: "string",
			boxJsType: "selects",
			description: "请选择 OverseaVideo 要重定向的主机名。",
			options: [
				{
					"key": "upos-sz-mirrorali.bilivideo.com",
					"label": "阿里云 CDN"
				},
				{
					"key": "upos-sz-mirrorcos.bilivideo.com",
					"label": "腾讯云 CDN"
				},
				{
					"key": "upos-sz-mirrorhw.bilivideo.com",
					"label": "华为云 CDN，融合 CDN"
				},
				{
					"key": "upos-sz-mirroraliov.bilivideo.com",
					"label": "阿里云 CDN，海外"
				},
				{
					"key": "upos-sz-mirrorcosov.bilivideo.com",
					"label": "腾讯云 CDN，海外"
				},
				{
					"key": "upos-sz-mirrorhwov.bilivideo.com",
					"label": "华为云 CDN，海外"
				},
				{
					"key": "cn-hk-eq-01-01.bilivideo.com",
					"label": "Equinix IX CDN，香港"
				},
				{
					"key": "cn-hk-eq-01-03.bilivideo.com",
					"label": "Equinix IX CDN，香港"
				},
				{
					"key": "cn-hk-eq-01-09.bilivideo.com",
					"label": "Equinix IX CDN，香港"
				},
				{
					"key": "cn-hk-eq-01-10.bilivideo.com",
					"label": "Equinix IX CDN，香港"
				},
				{
					"key": "cn-hk-eq-01-12.bilivideo.com",
					"label": "Equinix IX CDN，香港"
				},
				{
					"key": "cn-hk-eq-01-13.bilivideo.com",
					"label": "Equinix IX CDN，香港"
				},
				{
					"key": "cn-hk-eq-01-14.bilivideo.com",
					"label": "Equinix IX CDN，香港"
				}
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
					"key": "upos-sz-mirrorali.bilivideo.com",
					"label": "阿里云 CDN"
				},
				{
					"key": "upos-sz-mirrorcos.bilivideo.com",
					"label": "腾讯云 CDN"
				},
				{
					"key": "upos-sz-mirrorhw.bilivideo.com",
					"label": "华为云 CDN，融合 CDN"
				},
				{
					"key": "upos-sz-mirroraliov.bilivideo.com",
					"label": "阿里云 CDN，海外"
				},
				{
					"key": "upos-sz-mirrorcosov.bilivideo.com",
					"label": "腾讯云 CDN，海外"
				},
				{
					"key": "upos-sz-mirrorhwov.bilivideo.com",
					"label": "华为云 CDN，海外"
				},
				{
					"key": "cn-hk-eq-01-01.bilivideo.com",
					"label": "Equinix IX CDN，香港"
				},
				{
					"key": "cn-hk-eq-01-03.bilivideo.com",
					"label": "Equinix IX CDN，香港"
				},
				{
					"key": "cn-hk-eq-01-09.bilivideo.com",
					"label": "Equinix IX CDN，香港"
				},
				{
					"key": "cn-hk-eq-01-10.bilivideo.com",
					"label": "Equinix IX CDN，香港"
				},
				{
					"key": "cn-hk-eq-01-12.bilivideo.com",
					"label": "Equinix IX CDN，香港"
				},
				{
					"key": "cn-hk-eq-01-13.bilivideo.com",
					"label": "Equinix IX CDN，香港"
				},
				{
					"key": "cn-hk-eq-01-14.bilivideo.com",
					"label": "Equinix IX CDN，香港"
				}
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
					"key": "upos-sz-mirrorali.bilivideo.com",
					"label": "阿里云 CDN"
				},
				{
					"key": "upos-sz-mirrorcos.bilivideo.com",
					"label": "腾讯云 CDN"
				},
				{
					"key": "upos-sz-mirrorhw.bilivideo.com",
					"label": "华为云 CDN，融合 CDN"
				},
				{
					"key": "upos-sz-mirroraliov.bilivideo.com",
					"label": "阿里云 CDN，海外"
				},
				{
					"key": "upos-sz-mirrorcosov.bilivideo.com",
					"label": "腾讯云 CDN，海外"
				},
				{
					"key": "upos-sz-mirrorhwov.bilivideo.com",
					"label": "华为云 CDN，海外"
				},
				{
					"key": "cn-hk-eq-01-01.bilivideo.com",
					"label": "Equinix IX CDN，香港"
				},
				{
					"key": "cn-hk-eq-01-03.bilivideo.com",
					"label": "Equinix IX CDN，香港"
				},
				{
					"key": "cn-hk-eq-01-09.bilivideo.com",
					"label": "Equinix IX CDN，香港"
				},
				{
					"key": "cn-hk-eq-01-10.bilivideo.com",
					"label": "Equinix IX CDN，香港"
				},
				{
					"key": "cn-hk-eq-01-12.bilivideo.com",
					"label": "Equinix IX CDN，香港"
				},
				{
					"key": "cn-hk-eq-01-13.bilivideo.com",
					"label": "Equinix IX CDN，香港"
				},
				{
					"key": "cn-hk-eq-01-14.bilivideo.com",
					"label": "Equinix IX CDN，香港"
				}
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
					"key": "proxy-tf-all-ws.bilivideo.com",
					"label": "proxy-tf-all-ws.bilivideo.com"
				}
			],
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
	],
});
