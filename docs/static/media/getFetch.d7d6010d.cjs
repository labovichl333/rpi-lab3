var fetchApi;
if ("function" === typeof fetch && ("undefined" !== typeof global && global.fetch ? fetchApi = global.fetch : "undefined" !== typeof window && window.fetch && (fetchApi = window.fetch)), "undefined" !== typeof require && ("undefined" === typeof window || "undefined" === typeof window.document)) {
    var f = fetchApi || require("node-fetch");
    f.default && (f = f.default), exports.default = f, module.exports = exports.default
}