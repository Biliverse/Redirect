import assert from "node:assert/strict";
import { readdir, readFile } from "node:fs/promises";
import test from "node:test";

test("settings integration installs only the Redirect configuration", async () => {
	for (const name of await readdir(new URL("../template/", import.meta.url))) {
		if (!name.endsWith(".handlebars") || name.includes("rewrite")) continue;
		const template = await readFile(new URL(`../template/${name}`, import.meta.url), "utf8");
		assert.doesNotMatch(template, /NSNanoCat\/PreferencePanes\/releases\/latest\/download\/(?:api|web)\.js/, name);
		assert.doesNotMatch(template, /PreferencePanes\.(?:API|Web)|\\\/settings\\\//, name);
		assert.doesNotMatch(template, /api\\\/\(\?:get\|set\|delete\)\|settings/);
		const line = template.split("\n").find(line => line.includes("api") && line.includes("Redirect") && line.includes("biliverse"));
		assert.ok(line, name);
		const pattern = line.startsWith("response if") ? line.match(/~= \/(.+)\/ then/)[1] : name.startsWith("shadowrocket") ? line.match(/pattern=([^,]+)/)[1] : name.startsWith("stash") ? line.trim().slice("- match: ".length) : line.split(" ")[0];
		const matcher = new RegExp(pattern);
		assert.ok(matcher.test("https://biliverse.github.io/api/Redirect"));
		assert.ok(matcher.test("https://app.bilibili.com/api/Redirect"));
		assert.equal(matcher.test("https://app.bilibili.com/x/v2/account/mine"), false);
		assert.ok(matcher.test("https://biliverse.github.io/api/Redirect?v=1"));
		for (const pathname of ["/api/Redirect/", "/api/Redirect/get", "/settings/", "/settings/Redirect", "/configs/Redirect", "/api/Unknown", "/settings/assets/Redirect.boxjs.json", "/settings/assets/Redirect.config.js"]) assert.equal(matcher.test(`https://biliverse.github.io${pathname}`), false, name);
		assert.doesNotMatch(template, /biliverse\.github\.io\/settings\/assets\//);
		const development = name.includes(".dev.");
		const source = development ? "https://gist.githubusercontent.com/VirgilClyne/0c193c4ff4b930d765b1ca4b406ec1b9/raw/" : "https://github.com/Biliverse/Redirect/releases/download/v{{@package 'version'}}/";
		const file = /^(surge|loon)/.test(name) ? `BiliBili.Redirect${development ? ".dev" : ""}.boxjs.json` : `config${development ? ".dev" : ""}.bundle.js`;
		assert.ok(template.includes(source + file), name);
	}
});
