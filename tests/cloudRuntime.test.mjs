import assert from "node:assert/strict";
import test from "node:test";
import HonoWorkerAdapter from "../src/class/HonoWorkerAdapter.mjs";
import app from "../src/Hono.js";
import { Request } from "../src/process/Request.mjs";

test("restores the encoded CDN scheme, authority, port, and path", () => {
	const url = HonoWorkerAdapter.routeRewrite(new URL("https://redirect-4pm.pages.dev/https/example.mcdn.bilivideo.cn:4483/upgcxcode/video.m4s"), "https/example.mcdn.bilivideo.cn:4483/upgcxcode/video.m4s");
	assert.equal(url.toString(), "https://example.mcdn.bilivideo.cn:4483/upgcxcode/video.m4s");
});

test("parses settings and computes the configured CDN target", async () => {
	HonoWorkerAdapter.buildArgument({
		url: "https://upos-sz-mirroraliov.bilivideo.com/upgcxcode/video.m4s",
		headers: { "biliverse-args": "Storage=Argument&Host.OverseaVideo=upos-sz-mirrorcos.bilivideo.com&LogLevel=OFF" },
	});
	const request = { method: "GET", url: "https://upos-sz-mirroraliov.bilivideo.com/upgcxcode/video.m4s", headers: {} };
	const result = await Request(request);
	assert.equal(result.$response, undefined);
	assert.equal(result.$request.url, "https://upos-sz-mirrorcos.bilivideo.com/upgcxcode/video.m4s");
});

test("returns a temporary redirect without proxying the video body", async () => {
	const response = await app.request("https://redirect.nanocat.workers.dev/https/upos-sz-mirroraliov.bilivideo.com/upgcxcode/video.m4s?Storage=Argument&Host.OverseaVideo=upos-sz-mirrorhw.bilivideo.com&LogLevel=OFF");
	assert.equal(response.status, 307);
	assert.equal(response.headers.get("location"), "https://upos-sz-mirrorhw.bilivideo.com/upgcxcode/video.m4s");
});
