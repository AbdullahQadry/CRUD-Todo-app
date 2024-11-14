export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.CWrz0bjn.js","app":"_app/immutable/entry/app.C-XpUyy2.js","imports":["_app/immutable/entry/start.CWrz0bjn.js","_app/immutable/chunks/entry.DSjhj8xt.js","_app/immutable/chunks/runtime.DqfjNp1h.js","_app/immutable/chunks/index.BAQ0F6ZK.js","_app/immutable/entry/app.C-XpUyy2.js","_app/immutable/chunks/runtime.DqfjNp1h.js","_app/immutable/chunks/store.BL1LYlXE.js","_app/immutable/chunks/events.p3jffN_0.js","_app/immutable/chunks/disclose-version.B7WsYEyi.js","_app/immutable/chunks/this.CrwVlMEB.js","_app/immutable/chunks/index-client.DeCev_MU.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/dashboard",
				pattern: /^\/dashboard\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
