import { Hono } from "hono/tiny";
import HonoWorkerAdapter from "./class/HonoWorkerAdapter.mjs";
import { Request } from "./process/Request.mjs";

/***************** 处理 *****************/
/***************** Processing *****************/
export default new Hono()
	.get("/", c => c.text("OK"))
	.all("/:rest{.*}", async c => {
		let $request = await HonoWorkerAdapter.buildRequest(c.req);
		$request = HonoWorkerAdapter.buildArgument($request);
		const originalURL = $request.url;
		const result = await Request($request);
		$request = result.$request;
		const $response = result.$response;
		if ($response) return HonoWorkerAdapter.writeResponse(c, $response);
		if ($request.url === originalURL) return c.body(null, 204);
		return c.redirect($request.url, 307);
	})
	.onError((error, c) => {
		console.error(error);
		return c.body(error.message, 500);
	});
