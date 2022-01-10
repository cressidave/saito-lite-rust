"use strict";(self.webpackChunksaito=self.webpackChunksaito||[]).push([[162],{6162:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// EXPORTS\n__webpack_require__.d(__webpack_exports__, {\n  "BaseHash": () => (/* reexport */ browser.BaseHash),\n  "BaseHashReader": () => (/* reexport */ browser.BaseHashReader),\n  "BrowserHasher": () => (/* reexport */ browser.BrowserHasher),\n  "createHash": () => (/* reexport */ browser.createHash),\n  "createKeyed": () => (/* reexport */ browser.createKeyed),\n  "defaultHashLength": () => (/* reexport */ browser.defaultHashLength),\n  "deriveKey": () => (/* reexport */ browser.deriveKey),\n  "hash": () => (/* reexport */ browser.hash),\n  "inputToArray": () => (/* reexport */ browser.inputToArray),\n  "keyedHash": () => (/* reexport */ browser.keyedHash),\n  "maxHashBytes": () => (/* reexport */ browser.maxHashBytes),\n  "using": () => (/* reexport */ browser.using)\n});\n\n// NAMESPACE OBJECT: ./node_modules/blake3/dist/wasm/browser/blake3_js.js\nvar blake3_js_namespaceObject = {};\n__webpack_require__.r(blake3_js_namespaceObject);\n__webpack_require__.d(blake3_js_namespaceObject, {\n  "Blake3Hash": () => (blake3_js_bg/* Blake3Hash */.Tf),\n  "HashReader": () => (blake3_js_bg/* HashReader */.g1),\n  "__wbindgen_throw": () => (blake3_js_bg/* __wbindgen_throw */.Or),\n  "create_derive": () => (blake3_js_bg/* create_derive */.q0),\n  "create_hasher": () => (blake3_js_bg/* create_hasher */.dM),\n  "create_keyed": () => (blake3_js_bg/* create_keyed */.jf),\n  "hash": () => (blake3_js_bg/* hash */.vp)\n});\n\n// EXTERNAL MODULE: ./node_modules/blake3/esm/browser/wasm.js\nvar wasm = __webpack_require__(23380);\n// EXTERNAL MODULE: ./node_modules/blake3/dist/wasm/browser/blake3_js_bg.js\nvar blake3_js_bg = __webpack_require__(97741);\n;// CONCATENATED MODULE: ./node_modules/blake3/dist/wasm/browser/blake3_js.js\n\n\n// EXTERNAL MODULE: ./node_modules/blake3/esm/browser/index.js + 10 modules\nvar browser = __webpack_require__(51425);\n;// CONCATENATED MODULE: ./node_modules/blake3/browser.js\n\n\n\n(0,wasm/* provideWasm */.E)(blake3_js_namespaceObject);\n\n\n\n\n//# sourceURL=webpack://saito/./node_modules/blake3/browser.js_+_1_modules?')},97741:(module,__webpack_exports__,__webpack_require__)=>{eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"vp\": () => (/* binding */ hash),\n/* harmony export */   \"dM\": () => (/* binding */ create_hasher),\n/* harmony export */   \"jf\": () => (/* binding */ create_keyed),\n/* harmony export */   \"q0\": () => (/* binding */ create_derive),\n/* harmony export */   \"Tf\": () => (/* binding */ Blake3Hash),\n/* harmony export */   \"g1\": () => (/* binding */ HashReader),\n/* harmony export */   \"Or\": () => (/* binding */ __wbindgen_throw)\n/* harmony export */ });\n/* harmony import */ var _blake3_js_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78928);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachegetUint8Memory0 = null;\nfunction getUint8Memory0() {\n    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== _blake3_js_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.memory.buffer) {\n        cachegetUint8Memory0 = new Uint8Array(_blake3_js_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.memory.buffer);\n    }\n    return cachegetUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n\nlet WASM_VECTOR_LEN = 0;\n\nfunction passArray8ToWasm0(arg, malloc) {\n    const ptr = malloc(arg.length * 1);\n    getUint8Memory0().set(arg, ptr / 1);\n    WASM_VECTOR_LEN = arg.length;\n    return ptr;\n}\n/**\n* @param {Uint8Array} data\n* @param {Uint8Array} out\n*/\nfunction hash(data, out) {\n    try {\n        var ptr0 = passArray8ToWasm0(data, _blake3_js_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_malloc);\n        var len0 = WASM_VECTOR_LEN;\n        var ptr1 = passArray8ToWasm0(out, _blake3_js_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_malloc);\n        var len1 = WASM_VECTOR_LEN;\n        _blake3_js_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.hash(ptr0, len0, ptr1, len1);\n    } finally {\n        out.set(getUint8Memory0().subarray(ptr1 / 1, ptr1 / 1 + len1));\n        _blake3_js_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_free(ptr1, len1 * 1);\n    }\n}\n\n/**\n* @returns {Blake3Hash}\n*/\nfunction create_hasher() {\n    var ret = _blake3_js_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.create_hasher();\n    return Blake3Hash.__wrap(ret);\n}\n\n/**\n* @param {Uint8Array} key_slice\n* @returns {Blake3Hash}\n*/\nfunction create_keyed(key_slice) {\n    var ptr0 = passArray8ToWasm0(key_slice, _blake3_js_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_malloc);\n    var len0 = WASM_VECTOR_LEN;\n    var ret = _blake3_js_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.create_keyed(ptr0, len0);\n    return Blake3Hash.__wrap(ret);\n}\n\nconst lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;\n\nlet cachedTextEncoder = new lTextEncoder('utf-8');\n\nconst encodeString = (typeof cachedTextEncoder.encodeInto === 'function'\n    ? function (arg, view) {\n    return cachedTextEncoder.encodeInto(arg, view);\n}\n    : function (arg, view) {\n    const buf = cachedTextEncoder.encode(arg);\n    view.set(buf);\n    return {\n        read: arg.length,\n        written: buf.length\n    };\n});\n\nfunction passStringToWasm0(arg, malloc, realloc) {\n\n    if (realloc === undefined) {\n        const buf = cachedTextEncoder.encode(arg);\n        const ptr = malloc(buf.length);\n        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);\n        WASM_VECTOR_LEN = buf.length;\n        return ptr;\n    }\n\n    let len = arg.length;\n    let ptr = malloc(len);\n\n    const mem = getUint8Memory0();\n\n    let offset = 0;\n\n    for (; offset < len; offset++) {\n        const code = arg.charCodeAt(offset);\n        if (code > 0x7F) break;\n        mem[ptr + offset] = code;\n    }\n\n    if (offset !== len) {\n        if (offset !== 0) {\n            arg = arg.slice(offset);\n        }\n        ptr = realloc(ptr, len, len = offset + arg.length * 3);\n        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);\n        const ret = encodeString(arg, view);\n\n        offset += ret.written;\n    }\n\n    WASM_VECTOR_LEN = offset;\n    return ptr;\n}\n/**\n* @param {string} context\n* @returns {Blake3Hash}\n*/\nfunction create_derive(context) {\n    var ptr0 = passStringToWasm0(context, _blake3_js_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_malloc, _blake3_js_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_realloc);\n    var len0 = WASM_VECTOR_LEN;\n    var ret = _blake3_js_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.create_derive(ptr0, len0);\n    return Blake3Hash.__wrap(ret);\n}\n\nconst u32CvtShim = new Uint32Array(2);\n\nconst uint64CvtShim = new BigUint64Array(u32CvtShim.buffer);\n/**\n*/\nclass Blake3Hash {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Blake3Hash.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    free() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        _blake3_js_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_blake3hash_free(ptr);\n    }\n    /**\n    * @returns {HashReader}\n    */\n    reader() {\n        var ret = _blake3_js_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.blake3hash_reader(this.ptr);\n        return HashReader.__wrap(ret);\n    }\n    /**\n    * @param {Uint8Array} input_bytes\n    */\n    update(input_bytes) {\n        var ptr0 = passArray8ToWasm0(input_bytes, _blake3_js_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_malloc);\n        var len0 = WASM_VECTOR_LEN;\n        _blake3_js_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.blake3hash_update(this.ptr, ptr0, len0);\n    }\n    /**\n    * @param {Uint8Array} out\n    */\n    digest(out) {\n        try {\n            var ptr0 = passArray8ToWasm0(out, _blake3_js_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_malloc);\n            var len0 = WASM_VECTOR_LEN;\n            _blake3_js_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.blake3hash_digest(this.ptr, ptr0, len0);\n        } finally {\n            out.set(getUint8Memory0().subarray(ptr0 / 1, ptr0 / 1 + len0));\n            _blake3_js_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_free(ptr0, len0 * 1);\n        }\n    }\n}\n/**\n*/\nclass HashReader {\n\n    static __wrap(ptr) {\n        const obj = Object.create(HashReader.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    free() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        _blake3_js_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_hashreader_free(ptr);\n    }\n    /**\n    * @param {Uint8Array} bytes\n    */\n    fill(bytes) {\n        try {\n            var ptr0 = passArray8ToWasm0(bytes, _blake3_js_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_malloc);\n            var len0 = WASM_VECTOR_LEN;\n            _blake3_js_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.hashreader_fill(this.ptr, ptr0, len0);\n        } finally {\n            bytes.set(getUint8Memory0().subarray(ptr0 / 1, ptr0 / 1 + len0));\n            _blake3_js_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_free(ptr0, len0 * 1);\n        }\n    }\n    /**\n    * @param {BigInt} position\n    */\n    set_position(position) {\n        uint64CvtShim[0] = position;\n        const low0 = u32CvtShim[0];\n        const high0 = u32CvtShim[1];\n        _blake3_js_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.hashreader_set_position(this.ptr, low0, high0);\n    }\n}\n\nconst __wbindgen_throw = function(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\n\n\n//# sourceURL=webpack://saito/./node_modules/blake3/dist/wasm/browser/blake3_js_bg.js?")},78928:(module,__unused_webpack_exports,__webpack_require__)=>{eval('"use strict";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.id];\n\n// export exports from WebAssembly module\nmodule.exports = wasmExports;\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(97741);\n\n\n// exec wasm module\nwasmExports[""]()\n\n//# sourceURL=webpack://saito/./node_modules/blake3/dist/wasm/browser/blake3_js_bg.wasm?')}}]);