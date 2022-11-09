import {
  __commonJS,
  init_define_process_env_UNI_STAT_TITLE_JSON
} from "./chunk-5YD7MHHC.js";

// ../../../../../../Users/liqian/Desktop/demo2/uni-app-vue3.0/node_modules/tslib/tslib.js
var require_tslib = __commonJS({
  "../../../../../../Users/liqian/Desktop/demo2/uni-app-vue3.0/node_modules/tslib/tslib.js"(exports, module) {
    init_define_process_env_UNI_STAT_TITLE_JSON();
    var __extends;
    var __assign;
    var __rest;
    var __decorate;
    var __param;
    var __metadata;
    var __awaiter;
    var __generator;
    var __exportStar;
    var __values;
    var __read;
    var __spread;
    var __spreadArrays;
    var __spreadArray;
    var __await;
    var __asyncGenerator;
    var __asyncDelegator;
    var __asyncValues;
    var __makeTemplateObject;
    var __importStar;
    var __importDefault;
    var __classPrivateFieldGet;
    var __classPrivateFieldSet;
    var __classPrivateFieldIn;
    var __createBinding;
    (function(factory) {
      var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
      if (typeof define === "function" && define.amd) {
        define("tslib", ["exports"], function(exports2) {
          factory(createExporter(root, createExporter(exports2)));
        });
      } else if (typeof module === "object" && typeof module.exports === "object") {
        factory(createExporter(root, createExporter(module.exports)));
      } else {
        factory(createExporter(root));
      }
      function createExporter(exports2, previous) {
        if (exports2 !== root) {
          if (typeof Object.create === "function") {
            Object.defineProperty(exports2, "__esModule", { value: true });
          } else {
            exports2.__esModule = true;
          }
        }
        return function(id, v) {
          return exports2[id] = previous ? previous(id, v) : v;
        };
      }
    })(function(exporter) {
      var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b)
          if (Object.prototype.hasOwnProperty.call(b, p))
            d[p] = b[p];
      };
      __extends = function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      __rest = function(s, e) {
        var t = {};
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
          for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
          }
        return t;
      };
      __decorate = function(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          r = Reflect.decorate(decorators, target, key, desc);
        else
          for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
              r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      __param = function(paramIndex, decorator) {
        return function(target, key) {
          decorator(target, key, paramIndex);
        };
      };
      __metadata = function(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
          return Reflect.metadata(metadataKey, metadataValue);
      };
      __awaiter = function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        return new (P || (P = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      __generator = function(thisArg, body) {
        var _ = { label: 0, sent: function() {
          if (t[0] & 1)
            throw t[1];
          return t[1];
        }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
          return this;
        }), g;
        function verb(n) {
          return function(v) {
            return step([n, v]);
          };
        }
        function step(op) {
          if (f)
            throw new TypeError("Generator is already executing.");
          while (g && (g = 0, op[0] && (_ = 0)), _)
            try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                return t;
              if (y = 0, t)
                op = [op[0] & 2, t.value];
              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;
                case 4:
                  _.label++;
                  return { value: op[1], done: false };
                case 5:
                  _.label++;
                  y = op[1];
                  op = [0];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }
                  if (t && _.label < t[2]) {
                    _.label = t[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t[2])
                    _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _);
            } catch (e) {
              op = [6, e];
              y = 0;
            } finally {
              f = t = 0;
            }
          if (op[0] & 5)
            throw op[1];
          return { value: op[0] ? op[1] : void 0, done: true };
        }
      };
      __exportStar = function(m, o) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
            __createBinding(o, m, p);
      };
      __createBinding = Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      };
      __values = function(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
          return m.call(o);
        if (o && typeof o.length === "number")
          return {
            next: function() {
              if (o && i >= o.length)
                o = void 0;
              return { value: o && o[i++], done: !o };
            }
          };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
      };
      __read = function(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
          return o;
        var i = m.call(o), r, ar = [], e;
        try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
            ar.push(r.value);
        } catch (error) {
          e = { error };
        } finally {
          try {
            if (r && !r.done && (m = i["return"]))
              m.call(i);
          } finally {
            if (e)
              throw e.error;
          }
        }
        return ar;
      };
      __spread = function() {
        for (var ar = [], i = 0; i < arguments.length; i++)
          ar = ar.concat(__read(arguments[i]));
        return ar;
      };
      __spreadArrays = function() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
          s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
          for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
        return r;
      };
      __spreadArray = function(to, from, pack) {
        if (pack || arguments.length === 2)
          for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
              if (!ar)
                ar = Array.prototype.slice.call(from, 0, i);
              ar[i] = from[i];
            }
          }
        return to.concat(ar || Array.prototype.slice.call(from));
      };
      __await = function(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
      };
      __asyncGenerator = function(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
          return this;
        }, i;
        function verb(n) {
          if (g[n])
            i[n] = function(v) {
              return new Promise(function(a, b) {
                q.push([n, v, a, b]) > 1 || resume(n, v);
              });
            };
        }
        function resume(n, v) {
          try {
            step(g[n](v));
          } catch (e) {
            settle(q[0][3], e);
          }
        }
        function step(r) {
          r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
        }
        function fulfill(value) {
          resume("next", value);
        }
        function reject(value) {
          resume("throw", value);
        }
        function settle(f, v) {
          if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]);
        }
      };
      __asyncDelegator = function(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function(e) {
          throw e;
        }), verb("return"), i[Symbol.iterator] = function() {
          return this;
        }, i;
        function verb(n, f) {
          i[n] = o[n] ? function(v) {
            return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v;
          } : f;
        }
      };
      __asyncValues = function(o) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
          return this;
        }, i);
        function verb(n) {
          i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
              v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
          };
        }
        function settle(resolve, reject, d, v) {
          Promise.resolve(v).then(function(v2) {
            resolve({ value: v2, done: d });
          }, reject);
        }
      };
      __makeTemplateObject = function(cooked, raw) {
        if (Object.defineProperty) {
          Object.defineProperty(cooked, "raw", { value: raw });
        } else {
          cooked.raw = raw;
        }
        return cooked;
      };
      var __setModuleDefault = Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      };
      __importStar = function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      __classPrivateFieldGet = function(receiver, state, kind, f) {
        if (kind === "a" && !f)
          throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
          throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
      };
      __classPrivateFieldSet = function(receiver, state, value, kind, f) {
        if (kind === "m")
          throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
          throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
          throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
      };
      __classPrivateFieldIn = function(state, receiver) {
        if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function")
          throw new TypeError("Cannot use 'in' operator on non-object");
        return typeof state === "function" ? receiver === state : state.has(receiver);
      };
      exporter("__extends", __extends);
      exporter("__assign", __assign);
      exporter("__rest", __rest);
      exporter("__decorate", __decorate);
      exporter("__param", __param);
      exporter("__metadata", __metadata);
      exporter("__awaiter", __awaiter);
      exporter("__generator", __generator);
      exporter("__exportStar", __exportStar);
      exporter("__createBinding", __createBinding);
      exporter("__values", __values);
      exporter("__read", __read);
      exporter("__spread", __spread);
      exporter("__spreadArrays", __spreadArrays);
      exporter("__spreadArray", __spreadArray);
      exporter("__await", __await);
      exporter("__asyncGenerator", __asyncGenerator);
      exporter("__asyncDelegator", __asyncDelegator);
      exporter("__asyncValues", __asyncValues);
      exporter("__makeTemplateObject", __makeTemplateObject);
      exporter("__importStar", __importStar);
      exporter("__importDefault", __importDefault);
      exporter("__classPrivateFieldGet", __classPrivateFieldGet);
      exporter("__classPrivateFieldSet", __classPrivateFieldSet);
      exporter("__classPrivateFieldIn", __classPrivateFieldIn);
    });
  }
});

// ../../../../../../Users/liqian/Desktop/demo2/uni-app-vue3.0/node_modules/@mew/request/dist/request.js
var require_request = __commonJS({
  "../../../../../../Users/liqian/Desktop/demo2/uni-app-vue3.0/node_modules/@mew/request/dist/request.js"(exports) {
    "use strict";
    init_define_process_env_UNI_STAT_TITLE_JSON();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.mewRequest = exports.mewMsRequest = exports.mewMsRemove = exports.mewMsDelete = exports.mewMsPut = exports.mewMsGet = exports.mewMsPost = exports.Request = void 0;
    var tslib_1 = require_tslib();
    var Request = function() {
      function Request2(uri, service, isDebugMode, timeout) {
        if (isDebugMode === void 0) {
          isDebugMode = false;
        }
        if (timeout === void 0) {
          timeout = 1e4;
        }
        this._uri = uri;
        this._service = service;
        this._isDebugMode = isDebugMode;
        this._timeout = timeout;
      }
      Request2.prototype.insert = function(params) {
        return tslib_1.__awaiter(this, void 0, void 0, function() {
          return tslib_1.__generator(this, function(_a) {
            switch (_a.label) {
              case 0:
                return [4, mewMsPost(this._uri + "/insert", params, this._service, this._isDebugMode, this._timeout)];
              case 1:
                return [2, _a.sent()];
            }
          });
        });
      };
      Request2.prototype.delete = function(params) {
        return tslib_1.__awaiter(this, void 0, void 0, function() {
          return tslib_1.__generator(this, function(_a) {
            switch (_a.label) {
              case 0:
                return [4, mewMsDelete(this._uri + "/delete", params, this._service, this._isDebugMode, this._timeout)];
              case 1:
                return [2, _a.sent()];
            }
          });
        });
      };
      Request2.prototype.remove = function(params) {
        return tslib_1.__awaiter(this, void 0, void 0, function() {
          return tslib_1.__generator(this, function(_a) {
            switch (_a.label) {
              case 0:
                return [4, mewMsRemove(this._uri + "/delete", params, this._service, this._isDebugMode, this._timeout)];
              case 1:
                return [2, _a.sent()];
            }
          });
        });
      };
      Request2.prototype.update = function(params) {
        return tslib_1.__awaiter(this, void 0, void 0, function() {
          return tslib_1.__generator(this, function(_a) {
            switch (_a.label) {
              case 0:
                return [4, mewMsPost(this._uri + "/update", params, this._service, this._isDebugMode, this._timeout)];
              case 1:
                return [2, _a.sent()];
            }
          });
        });
      };
      Request2.prototype.find = function(params) {
        return tslib_1.__awaiter(this, void 0, void 0, function() {
          return tslib_1.__generator(this, function(_a) {
            switch (_a.label) {
              case 0:
                return [4, mewMsPost(this._uri + "/find", params, this._service, this._isDebugMode, this._timeout)];
              case 1:
                return [2, _a.sent()];
            }
          });
        });
      };
      Request2.prototype.select = function(params) {
        return tslib_1.__awaiter(this, void 0, void 0, function() {
          return tslib_1.__generator(this, function(_a) {
            switch (_a.label) {
              case 0:
                return [4, mewMsPost(this._uri + "/select", params, this._service, this._isDebugMode, this._timeout)];
              case 1:
                return [2, _a.sent()];
            }
          });
        });
      };
      return Request2;
    }();
    exports.Request = Request;
    function mewMsPost(url, params, service, isDebugMode, timeout) {
      if (params === void 0) {
        params = {};
      }
      if (isDebugMode === void 0) {
        isDebugMode = false;
      }
      if (timeout === void 0) {
        timeout = 1e4;
      }
      return tslib_1.__awaiter(this, void 0, void 0, function() {
        return tslib_1.__generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              return [4, mewMsRequest(url, params, "POST", service, isDebugMode, timeout)];
            case 1:
              return [2, _a.sent()];
          }
        });
      });
    }
    exports.mewMsPost = mewMsPost;
    function mewMsGet(url, params, service, isDebugMode, timeout) {
      if (params === void 0) {
        params = {};
      }
      if (isDebugMode === void 0) {
        isDebugMode = false;
      }
      if (timeout === void 0) {
        timeout = 1e4;
      }
      return tslib_1.__awaiter(this, void 0, void 0, function() {
        return tslib_1.__generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              return [4, mewMsRequest(url, params, "GET", service, isDebugMode, timeout)];
            case 1:
              return [2, _a.sent()];
          }
        });
      });
    }
    exports.mewMsGet = mewMsGet;
    function mewMsPut(url, params, service, isDebugMode, timeout) {
      if (params === void 0) {
        params = {};
      }
      if (isDebugMode === void 0) {
        isDebugMode = false;
      }
      if (timeout === void 0) {
        timeout = 1e4;
      }
      return tslib_1.__awaiter(this, void 0, void 0, function() {
        return tslib_1.__generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              return [4, mewMsRequest(url, params, "PUT", service, isDebugMode, timeout)];
            case 1:
              return [2, _a.sent()];
          }
        });
      });
    }
    exports.mewMsPut = mewMsPut;
    function mewMsDelete(url, params, service, isDebugMode, timeout) {
      if (params === void 0) {
        params = {};
      }
      if (isDebugMode === void 0) {
        isDebugMode = false;
      }
      if (timeout === void 0) {
        timeout = 1e4;
      }
      return tslib_1.__awaiter(this, void 0, void 0, function() {
        return tslib_1.__generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              return [4, mewMsRequest(url, params, "POST", service, isDebugMode, timeout)];
            case 1:
              return [2, _a.sent()];
          }
        });
      });
    }
    exports.mewMsDelete = mewMsDelete;
    function mewMsRemove(url, params, service, isDebugMode, timeout) {
      if (params === void 0) {
        params = {};
      }
      if (isDebugMode === void 0) {
        isDebugMode = false;
      }
      if (timeout === void 0) {
        timeout = 1e4;
      }
      return tslib_1.__awaiter(this, void 0, void 0, function() {
        return tslib_1.__generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              return [4, mewMsRequest(url, params, "POST", service, isDebugMode, timeout)];
            case 1:
              return [2, _a.sent()];
          }
        });
      });
    }
    exports.mewMsRemove = mewMsRemove;
    function mewMsRequest(url, params, method, service, isDebugMode, timeout) {
      if (params === void 0) {
        params = {};
      }
      if (method === void 0) {
        method = "POST";
      }
      if (isDebugMode === void 0) {
        isDebugMode = false;
      }
      if (timeout === void 0) {
        timeout = 1e4;
      }
      return tslib_1.__awaiter(this, void 0, void 0, function() {
        var res;
        return tslib_1.__generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              return [4, mewRequest(url, params, method, service, isDebugMode, timeout)];
            case 1:
              res = _a.sent();
              if (res.code === 0) {
                return [2, res];
              } else {
                throw new Error(res.error);
              }
              return [2];
          }
        });
      });
    }
    exports.mewMsRequest = mewMsRequest;
    function mewRequest(url, params, method, service, isDebugMode, timeout) {
      if (params === void 0) {
        params = {};
      }
      if (method === void 0) {
        method = "POST";
      }
      if (isDebugMode === void 0) {
        isDebugMode = false;
      }
      if (timeout === void 0) {
        timeout = 1e4;
      }
      return tslib_1.__awaiter(this, void 0, void 0, function() {
        var config, res, error_1;
        return tslib_1.__generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              _a.trys.push([0, 2, , 3]);
              config = {
                url,
                method,
                data: params
              };
              if (isDebugMode)
                console.log(config);
              return [4, service.request(config)];
            case 1:
              res = _a.sent();
              if (isDebugMode)
                console.log(url, res);
              return [2, res.data];
            case 2:
              error_1 = _a.sent();
              console.log(service.defaults.baseURL + url, JSON.stringify(params), error_1);
              throw error_1;
            case 3:
              return [2];
          }
        });
      });
    }
    exports.mewRequest = mewRequest;
  }
});

// ../../../../../../Users/liqian/Desktop/demo2/uni-app-vue3.0/node_modules/@mew/request/dist/ms/ac.js
var require_ac = __commonJS({
  "../../../../../../Users/liqian/Desktop/demo2/uni-app-vue3.0/node_modules/@mew/request/dist/ms/ac.js"(exports) {
    "use strict";
    init_define_process_env_UNI_STAT_TITLE_JSON();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Ac = void 0;
    var tslib_1 = require_tslib();
    var request_1 = require_request();
    function Ac(service, isDebugMode) {
      var _this = this;
      if (isDebugMode === void 0) {
        isDebugMode = false;
      }
      return {
        process: new request_1.Request("/ac/process", service, isDebugMode),
        process_type: new request_1.Request("/ac/process_type", service, isDebugMode),
        file: new request_1.Request("/ac/file", service, isDebugMode),
        setting: new request_1.Request("/ac/setting", service, isDebugMode),
        carousel: new request_1.Request("/ac/carousel", service, isDebugMode),
        task: new request_1.Request("/ac/task", service, isDebugMode),
        alarm: new request_1.Request("/ac/alarm", service, isDebugMode),
        feedback: new request_1.Request("/ac/feedback", service, isDebugMode),
        getVersion: function() {
          return request_1.mewRequest("/ac/select/version", {}, "POST", service);
        },
        processNext: function(json) {
          return request_1.mewRequest("/ac/process/next", json, "POST", service, isDebugMode);
        },
        processStart: function(json) {
          return request_1.mewRequest("/ac/process/start", json, "POST", service, isDebugMode);
        },
        messageNotice: function(json) {
          return request_1.mewRequest("/ac/message/message_notice", json, "POST", service, isDebugMode);
        },
        getTaskNumber: function(json) {
          return tslib_1.__awaiter(_this, void 0, void 0, function() {
            var res;
            return tslib_1.__generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  return [4, request_1.mewRequest("/ac/task/get_task_number", json, "POST", service, isDebugMode)];
                case 1:
                  res = _a.sent();
                  return [2, {
                    code: res.code,
                    data: res.data
                  }];
              }
            });
          });
        }
      };
    }
    exports.Ac = Ac;
  }
});

// ../../../../../../Users/liqian/Desktop/demo2/uni-app-vue3.0/node_modules/@mew/request/dist/ms/dc.js
var require_dc = __commonJS({
  "../../../../../../Users/liqian/Desktop/demo2/uni-app-vue3.0/node_modules/@mew/request/dist/ms/dc.js"(exports) {
    "use strict";
    init_define_process_env_UNI_STAT_TITLE_JSON();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Dc = exports.LocationEmptyCabinetProperty = exports.PortType = exports.IoModuleType = exports.ScreenType = exports.CabinetType = exports.KeyBoard = exports.SensorType = exports.MachineType = exports.TerminalType = exports.DeviceMode = exports.Version = exports.NetType = void 0;
    var request_1 = require_request();
    var NetType;
    (function(NetType2) {
      NetType2["internet"] = "internet";
      NetType2["intranet"] = "intranet";
    })(NetType = exports.NetType || (exports.NetType = {}));
    var Version;
    (function(Version2) {
      Version2["v33"] = "v33";
      Version2["v4"] = "v4";
      Version2["v501"] = "v501";
      Version2["v502"] = "v502";
      Version2["v510"] = "v510";
    })(Version = exports.Version || (exports.Version = {}));
    var DeviceMode;
    (function(DeviceMode2) {
      DeviceMode2["gm"] = "gm";
      DeviceMode2["rfid"] = "rfid";
      DeviceMode2["cd"] = "cd";
      DeviceMode2["ck"] = "ck";
      DeviceMode2["bjk"] = "bjk";
      DeviceMode2["sale"] = "sale";
    })(DeviceMode = exports.DeviceMode || (exports.DeviceMode = {}));
    var TerminalType;
    (function(TerminalType2) {
      TerminalType2["server"] = "server";
      TerminalType2["readonly"] = "readonly";
      TerminalType2["login"] = "login";
      TerminalType2["readPlatform"] = "readPlatform";
    })(TerminalType = exports.TerminalType || (exports.TerminalType = {}));
    var MachineType;
    (function(MachineType2) {
      MachineType2["none"] = "none";
      MachineType2["x64"] = "none";
      MachineType2["arm"] = "none";
    })(MachineType = exports.MachineType || (exports.MachineType = {}));
    var SensorType;
    (function(SensorType2) {
      SensorType2["card"] = "card";
      SensorType2["finger"] = "finger";
      SensorType2["face"] = "face";
      SensorType2["photosensitive"] = "photosensitive";
      SensorType2["rfid"] = "rfid";
      SensorType2["charge"] = "charge";
      SensorType2["io"] = "io";
      SensorType2["weight"] = "weight";
    })(SensorType = exports.SensorType || (exports.SensorType = {}));
    var KeyBoard;
    (function(KeyBoard2) {
      KeyBoard2["default"] = "default";
      KeyBoard2["diy"] = "diy";
    })(KeyBoard = exports.KeyBoard || (exports.KeyBoard = {}));
    var CabinetType;
    (function(CabinetType2) {
      CabinetType2["drawer"] = "drawer";
      CabinetType2["cabinet"] = "cabinet";
      CabinetType2["ck"] = "ck";
      CabinetType2["mixin"] = "mixin";
      CabinetType2["gmcw"] = "gmcw";
      CabinetType2["charge"] = "charge";
      CabinetType2["sell"] = "sell";
      CabinetType2["trolleyCase"] = "trolleyCase";
      CabinetType2["keysCabinet"] = "keysCabinet";
      CabinetType2["jdCabinet"] = "jdCabinet";
    })(CabinetType = exports.CabinetType || (exports.CabinetType = {}));
    var ScreenType;
    (function(ScreenType2) {
      ScreenType2["none"] = "none";
      ScreenType2["android_21_5"] = "android_21_5";
      ScreenType2["android_15_6"] = "android_15_6";
      ScreenType2["android_11_6"] = "android_11_6";
      ScreenType2["android_10_1"] = "android_10_1";
      ScreenType2["common_7"] = "common_7";
    })(ScreenType = exports.ScreenType || (exports.ScreenType = {}));
    var IoModuleType;
    (function(IoModuleType2) {
      IoModuleType2["di"] = "di";
      IoModuleType2["do"] = "do";
      IoModuleType2["dio"] = "dio";
    })(IoModuleType = exports.IoModuleType || (exports.IoModuleType = {}));
    var PortType;
    (function(PortType2) {
      PortType2["net"] = "net";
      PortType2["serialport"] = "serialport";
    })(PortType = exports.PortType || (exports.PortType = {}));
    var LocationEmptyCabinetProperty = function() {
      function LocationEmptyCabinetProperty2() {
      }
      return LocationEmptyCabinetProperty2;
    }();
    exports.LocationEmptyCabinetProperty = LocationEmptyCabinetProperty;
    function Dc(service, isDebugMode) {
      if (isDebugMode === void 0) {
        isDebugMode = false;
      }
      return {
        content: new request_1.Request("/dc/content", service, isDebugMode),
        province: new request_1.Request("/dc/province", service, isDebugMode),
        city: new request_1.Request("/dc/city", service, isDebugMode),
        area: new request_1.Request("/dc/area", service, isDebugMode),
        village: new request_1.Request("/dc/village", service, isDebugMode),
        building: new request_1.Request("/dc/building", service, isDebugMode),
        family: new request_1.Request("/dc/family", service, isDebugMode),
        location: new request_1.Request("/dc/location", service, isDebugMode),
        group: new request_1.Request("/dc/group", service, isDebugMode),
        company: new request_1.Request("/dc/company", service, isDebugMode),
        department: new request_1.Request("/dc/department", service, isDebugMode),
        device: new request_1.Request("/dc/device", service, isDebugMode),
        team: new request_1.Request("/dc/team", service, isDebugMode),
        charger: new request_1.Request("/dc/charger", service, isDebugMode),
        ioAttr: new request_1.Request("/dc/ioAttr", service, isDebugMode),
        io: new request_1.Request("/dc/io", service, isDebugMode),
        io_type: new request_1.Request("/dc/io_type", service, isDebugMode),
        cabinet: new request_1.Request("/dc/cabinet", service, isDebugMode),
        drawer: new request_1.Request("/dc/drawer", service, isDebugMode),
        verification: new request_1.Request("/dc/verification", service, isDebugMode),
        android: new request_1.Request("/dc/androId", service, isDebugMode),
        device_type: new request_1.Request("/dc/device_type", service, isDebugMode),
        device_type_company: new request_1.Request("/dc/device_type_company", service, isDebugMode),
        attributeName: new request_1.Request("/dc/attributeName", service, isDebugMode),
        getVersion: function() {
          return request_1.mewRequest("/dc/select/version", {}, "POST", service, isDebugMode);
        },
        deviceSelectChange: function(json) {
          return request_1.mewRequest("/device/list_drawer_id/", json, "GET", service, isDebugMode);
        },
        selectTeamBelong: function(json) {
          return request_1.mewRequest("/dc/team/belong/select", json, "POST", service, isDebugMode);
        },
        password: function(json) {
          return request_1.mewRequest("/dc/verification/password", json, "POST", service, isDebugMode);
        },
        getEmptyCabinet: function(json) {
          return request_1.mewRequest("/dc/location/get_empty_cabinet", json, "POST", service, isDebugMode);
        }
      };
    }
    exports.Dc = Dc;
  }
});

// ../../../../../../Users/liqian/Desktop/demo2/uni-app-vue3.0/node_modules/@mew/request/dist/ms/gc.js
var require_gc = __commonJS({
  "../../../../../../Users/liqian/Desktop/demo2/uni-app-vue3.0/node_modules/@mew/request/dist/ms/gc.js"(exports) {
    "use strict";
    init_define_process_env_UNI_STAT_TITLE_JSON();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Gc = void 0;
    var request_1 = require_request();
    function Gc(service, isDebugMode) {
      if (isDebugMode === void 0) {
        isDebugMode = false;
      }
      return {
        rent: new request_1.Request("/gc/rent", service, isDebugMode),
        type: new request_1.Request("/gc/type", service, isDebugMode),
        step_price: new request_1.Request("/gc/step_price", service, isDebugMode),
        shopping_cart: new request_1.Request("/gc/shopping_cart", service, isDebugMode),
        rfid: new request_1.Request("/gc/rfid", service, isDebugMode),
        goods: new request_1.Request("/gc/goods", service, isDebugMode),
        location: new request_1.Request("/gc/location", service, isDebugMode),
        garbage: new request_1.Request("/gc/garbage", service, isDebugMode),
        part: new request_1.Request("/gc/part", service, isDebugMode),
        getVersion: function() {
          return request_1.mewRequest("/gc/select/version", {}, "POST", service, isDebugMode);
        }
      };
    }
    exports.Gc = Gc;
  }
});

// ../../../../../../Users/liqian/Desktop/demo2/uni-app-vue3.0/node_modules/@mew/request/dist/ms/lc.js
var require_lc = __commonJS({
  "../../../../../../Users/liqian/Desktop/demo2/uni-app-vue3.0/node_modules/@mew/request/dist/ms/lc.js"(exports) {
    "use strict";
    init_define_process_env_UNI_STAT_TITLE_JSON();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Lc = void 0;
    var tslib_1 = require_tslib();
    var request_1 = require_request();
    function Lc(service, isDebugMode) {
      var _this = this;
      if (isDebugMode === void 0) {
        isDebugMode = false;
      }
      return {
        log_clean: new request_1.Request("/lc/log_clean", service, isDebugMode),
        log_rent: new request_1.Request("/lc/log_rent", service, isDebugMode),
        log_modification_integral: new request_1.Request("/lc/log_modification_integral", service, isDebugMode),
        email_template: new request_1.Request("/lc/email_template", service, isDebugMode),
        log_measurement: new request_1.Request("/lc/log_measurement", service, isDebugMode),
        log_scrap: new request_1.Request("/lc/log_scrap", service, isDebugMode),
        log_test: new request_1.Request("/lc/log_test", service, isDebugMode),
        log_process: new request_1.Request("/lc/log_process", service, isDebugMode),
        log: new request_1.Request("/lc/log", service, isDebugMode),
        log_feedback: new request_1.Request("/lc/log_feedback", service, isDebugMode),
        log_alarm: new request_1.Request("/lc/log_alarm", service, isDebugMode),
        log_user_login: new request_1.Request("/lc/log_user_login", service, isDebugMode),
        log_shelf: new request_1.Request("/lc/log_shelf", service, isDebugMode),
        log_charge: new request_1.Request("/lc/log_charge", service, isDebugMode),
        log_apply: new request_1.Request("/lc/log_apply", service, isDebugMode),
        log_lock: new request_1.Request("/lc/log_lock", service, isDebugMode),
        log_epc_goods: new request_1.Request("/lc/log_device_login", service, isDebugMode),
        log_device_login: new request_1.Request("/lc/Request", service, isDebugMode),
        log_purchase: new request_1.Request("/lc/log_purchase", service, isDebugMode),
        log_purchase_details: new request_1.Request("/lc/log_purchase_details", service, isDebugMode),
        log_device_transfer: new request_1.Request("/lc/log_device_transfer", service, isDebugMode),
        log_overhaul: new request_1.Request("/lc/log_overhaul", service, isDebugMode),
        log_periodical_examination: new request_1.Request("/lc/log_periodical_examination", service, isDebugMode),
        log_patrol_inspection: new request_1.Request("/lc/log_patrol_inspection", service, isDebugMode),
        log_pre_inspection: new request_1.Request("/lc/log_pre_inspection", service, isDebugMode),
        log_verification: new request_1.Request("/lc/log_pre_inspection", service, isDebugMode),
        log_sdxx_file: new request_1.Request("/lc/log_sdxx_file", service, isDebugMode),
        log_IO: new request_1.Request("/lc/log_io", service, isDebugMode),
        log_goods: new request_1.Request("/lc/log_goods", service, isDebugMode),
        log_rfid_shelf: new request_1.Request("/lc/log_rfid_shelf", service, isDebugMode),
        log_stock: new request_1.Request("/lc/log_stock", service, isDebugMode),
        log_meter: new request_1.Request("/lc/log_meter", service, isDebugMode),
        log_receive: new request_1.Request("/lc/log_receive", service, isDebugMode),
        log_garbage: new request_1.Request("/lc/log_garbage", service, isDebugMode),
        log_garbage_details: new request_1.Request("/lc/log_garbage_details", service, isDebugMode),
        getVersion: function() {
          return request_1.mewRequest("/lc/select/version", {}, "POST", service, isDebugMode);
        },
        toolStatusChange: function(params) {
          return tslib_1.__awaiter(_this, void 0, void 0, function() {
            var res;
            return tslib_1.__generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  return [4, request_1.mewRequest("/lc/log/toolStatus/change", params, "POST", service, isDebugMode)];
                case 1:
                  res = _a.sent();
                  console.log(165, res);
                  return [2, res];
              }
            });
          });
        },
        logFeedbackArrInsert: function(params) {
          return tslib_1.__awaiter(_this, void 0, void 0, function() {
            var url;
            return tslib_1.__generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  url = "/lc/log_feedback/insert/toolArr";
                  return [4, request_1.mewRequest(url, params, "POST", service, isDebugMode)];
                case 1:
                  return [2, _a.sent()];
              }
            });
          });
        },
        logRentInsertBatch: function(params) {
          return tslib_1.__awaiter(_this, void 0, void 0, function() {
            var url;
            return tslib_1.__generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  url = "/lc/log_rent/insert/batch";
                  return [4, request_1.mewRequest(url, params, "POST", service, isDebugMode)];
                case 1:
                  return [2, _a.sent()];
              }
            });
          });
        },
        logInsertBatch: function(params) {
          return tslib_1.__awaiter(_this, void 0, void 0, function() {
            return tslib_1.__generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  return [4, request_1.mewRequest("/lc/log/insert/batch", params, "POST", service, isDebugMode)];
                case 1:
                  return [2, _a.sent()];
              }
            });
          });
        },
        logFeedbackGoods: function(params) {
          return tslib_1.__awaiter(_this, void 0, void 0, function() {
            return tslib_1.__generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  return [4, request_1.mewRequest("/lc/log_feedback/select/goods", params, "POST", service, isDebugMode)];
                case 1:
                  return [2, _a.sent()];
              }
            });
          });
        },
        sendEmail: function(json) {
          return request_1.mewRequest("/lc/email_template/sendEmail", json, "POST", service, isDebugMode);
        },
        getStepTotalPrice: function(json) {
          return request_1.mewRequest("/lc/log_rent/getStepTotalPrice", json, "POST", service, isDebugMode);
        },
        getTopTenUsageTimes: function(json) {
          return request_1.mewRequest("/lc/log/getTopTenUsageTimes", json, "POST", service, isDebugMode);
        }
      };
    }
    exports.Lc = Lc;
  }
});

// ../../../../../../Users/liqian/Desktop/demo2/uni-app-vue3.0/node_modules/@mew/request/dist/ms/mc.js
var require_mc = __commonJS({
  "../../../../../../Users/liqian/Desktop/demo2/uni-app-vue3.0/node_modules/@mew/request/dist/ms/mc.js"(exports) {
    "use strict";
    init_define_process_env_UNI_STAT_TITLE_JSON();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getAuth = exports.Mc = exports.AppGetDingTalkUserInfo = exports.RoleName = void 0;
    var tslib_1 = require_tslib();
    var request_1 = require_request();
    var RoleName;
    (function(RoleName2) {
      RoleName2["unauthorized"] = "unauthorized";
      RoleName2["company"] = "company";
      RoleName2["company2"] = "company2";
      RoleName2["admin"] = "admin";
      RoleName2["super"] = "super";
      RoleName2["gtadmin"] = "gtadmin";
      RoleName2["gtdepart"] = "gtdepart";
      RoleName2["gtdepart1"] = "gtdepart1";
    })(RoleName = exports.RoleName || (exports.RoleName = {}));
    var AppGetDingTalkUserInfo = function() {
      function AppGetDingTalkUserInfo2() {
      }
      return AppGetDingTalkUserInfo2;
    }();
    exports.AppGetDingTalkUserInfo = AppGetDingTalkUserInfo;
    function Mc(service, isDebugMode) {
      var _this = this;
      if (isDebugMode === void 0) {
        isDebugMode = false;
      }
      return {
        role: new request_1.Request("/mc/role", service, isDebugMode),
        manager: new request_1.Request("/mc/manager", service, isDebugMode),
        access: new request_1.Request("/mc/access", service, isDebugMode),
        role_access: new request_1.Request("/mc/role_access", service, isDebugMode),
        app: new request_1.Request("/mc/app", service, isDebugMode),
        getAuth: function(json) {
          return request_1.mewRequest("/auth", json, "POST", service);
        },
        getVersion: function() {
          return request_1.mewRequest("/mc/select/version", {}, "POST", service, isDebugMode);
        },
        getAccessToken: function(appid) {
          return tslib_1.__awaiter(_this, void 0, void 0, function() {
            return tslib_1.__generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  return [4, request_1.mewRequest("/mc/app/getAccessToken", { appid }, "POST", service, isDebugMode)];
                case 1:
                  return [2, _a.sent()];
              }
            });
          });
        },
        getDingTalkUserInfo: function(json) {
          return tslib_1.__awaiter(_this, void 0, void 0, function() {
            return tslib_1.__generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  return [4, request_1.mewRequest("/mc/app/getDingTalkUserInfo", json, "POST", service, isDebugMode)];
                case 1:
                  return [2, _a.sent()];
              }
            });
          });
        },
        getAppUserInfo: function(json) {
          return tslib_1.__awaiter(_this, void 0, void 0, function() {
            return tslib_1.__generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  return [4, request_1.mewRequest("/mc/app/getUserInfo", json, "POST", service, isDebugMode)];
                case 1:
                  return [2, _a.sent()];
              }
            });
          });
        },
        getUserPhoneNo: function(json) {
          return tslib_1.__awaiter(_this, void 0, void 0, function() {
            return tslib_1.__generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  return [4, request_1.mewRequest("/mc/app/getUserPhoneNo", json, "POST", service, isDebugMode)];
                case 1:
                  return [2, _a.sent()];
              }
            });
          });
        },
        sendDingTalkMessage: function(json) {
          return tslib_1.__awaiter(_this, void 0, void 0, function() {
            return tslib_1.__generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  return [4, request_1.mewRequest("/mc/app/sendDingTalkMessage", json, "POST", service, isDebugMode)];
                case 1:
                  return [2, _a.sent()];
              }
            });
          });
        },
        sendWeiXinMessage: function(json) {
          return tslib_1.__awaiter(_this, void 0, void 0, function() {
            return tslib_1.__generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  return [4, request_1.mewRequest("/mc/app/sendWxMessage", json, "POST", service, isDebugMode)];
                case 1:
                  return [2, _a.sent()];
              }
            });
          });
        },
        getAccessByRole: function(roleId) {
          return tslib_1.__awaiter(this, void 0, void 0, function() {
            var res, arr, accessIds, arr2, results, arr3;
            var _this2 = this;
            return tslib_1.__generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  return [4, this.role_access.select({ roleId })];
                case 1:
                  res = _a.sent();
                  console.log(res);
                  arr = res.data;
                  accessIds = [];
                  arr2 = [];
                  if (arr.length > 0) {
                    arr.forEach(function(item) {
                      accessIds.push(item.accessId);
                      arr2.push(_this2.access.select({ id: item.accessId, type: 1 }));
                    });
                  }
                  return [4, Promise.all(arr2)];
                case 2:
                  results = _a.sent();
                  arr3 = [];
                  results.forEach(function(element) {
                    if (element.data.length === 1) {
                      element.data[0].children = element.data[0].children.filter(function(item) {
                        return accessIds.indexOf(item.id) >= 0;
                      });
                      if (element.data[0].children.length > 0) {
                        var _loop_1 = function(i2) {
                          var children = element.data[0].children[i2].children;
                          var children2 = [];
                          if (children.length > 0) {
                            children.forEach(function(item) {
                              for (var j = 0; j < arr.length; j++) {
                                if (item.id == arr[j].accessId && roleId == arr[j].roleId) {
                                  children2.push(item);
                                }
                              }
                            });
                            element.data[0].children[i2].children = children2;
                          }
                        };
                        for (var i = 0; i < element.data[0].children.length; i++) {
                          _loop_1(i);
                        }
                      }
                      arr3.push(element.data[0]);
                    }
                  });
                  return [2, arr3];
              }
            });
          });
        },
        updateRoleAccessBatch: function(json) {
          return tslib_1.__awaiter(_this, void 0, void 0, function() {
            var res;
            return tslib_1.__generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  return [4, request_1.mewMsPost("/mc/role_access/update/batch", json, service, isDebugMode)];
                case 1:
                  res = _a.sent();
                  return [2, res];
              }
            });
          });
        }
      };
    }
    exports.Mc = Mc;
    function getAuth(json, service) {
      return request_1.mewRequest("/auth", json, "POST", service);
    }
    exports.getAuth = getAuth;
  }
});

// ../../../../../../Users/liqian/Desktop/demo2/uni-app-vue3.0/node_modules/@mew/request/dist/ms/tc.js
var require_tc = __commonJS({
  "../../../../../../Users/liqian/Desktop/demo2/uni-app-vue3.0/node_modules/@mew/request/dist/ms/tc.js"(exports) {
    "use strict";
    init_define_process_env_UNI_STAT_TITLE_JSON();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Tc = void 0;
    var tslib_1 = require_tslib();
    var request_1 = require_request();
    function Tc(service, isDebugMode) {
      var _this = this;
      if (isDebugMode === void 0) {
        isDebugMode = false;
      }
      return {
        type: new request_1.Request("/tc/type", service, isDebugMode),
        specifications: new request_1.Request("/tc/specifications", service, isDebugMode),
        item: new request_1.Request("/tc/item", service, isDebugMode),
        suit: new request_1.Request("/tc/suit", service, isDebugMode),
        suit_template: new request_1.Request("/tc/suit_template", service, isDebugMode),
        suit_template_item: new request_1.Request("/tc/suit_template_item", service, isDebugMode),
        recycling_type: new request_1.Request("/tc/recycling_type", service, isDebugMode),
        tool: new request_1.Request("/tc/tool", service, isDebugMode),
        rfid: new request_1.Request("/tc/rfid", service, isDebugMode),
        rent: new request_1.Request("/tc/rent", service, isDebugMode),
        transfer: new request_1.Request("/tc/transfer", service, isDebugMode),
        transfer_item: new request_1.Request("/tc/transfer_item", service, isDebugMode),
        workorder: new request_1.Request("/tc/workorder", service, isDebugMode),
        workorder_item: new request_1.Request("/tc/workorder_item", service, isDebugMode),
        bill: new request_1.Request("/tc/bill", service, isDebugMode),
        part: new request_1.Request("/tc/part", service, isDebugMode),
        getVersion: function(service2) {
          return request_1.mewRequest("/gc/select/version", {}, "POST", service2, isDebugMode);
        },
        insertTransferItemBatch: function(service2) {
          return function(json) {
            return tslib_1.__awaiter(this, void 0, void 0, function() {
              var res;
              return tslib_1.__generator(this, function(_a) {
                switch (_a.label) {
                  case 0:
                    return [4, request_1.mewMsPost("/tc/transfer/insert/batch", json, service2, isDebugMode)];
                  case 1:
                    res = _a.sent();
                    return [2, {
                      code: res.code,
                      data: res.data
                    }];
                }
              });
            });
          };
        },
        insertToolBatch: function(json) {
          return tslib_1.__awaiter(this, void 0, void 0, function() {
            var res;
            return tslib_1.__generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  return [4, request_1.mewMsDelete("/tc/tool/insert/batch", json, service, isDebugMode)];
                case 1:
                  res = _a.sent();
                  return [2, {
                    code: res.code,
                    data: res.data
                  }];
              }
            });
          });
        },
        chartData: function(service2) {
          return function(params) {
            return tslib_1.__awaiter(this, void 0, void 0, function() {
              return tslib_1.__generator(this, function(_a) {
                switch (_a.label) {
                  case 0:
                    return [4, request_1.mewMsPost("/tc/workorder/chartData", params, service2, isDebugMode)];
                  case 1:
                    return [2, _a.sent()];
                }
              });
            });
          };
        },
        rfidUpdateBatch: function(service2) {
          return function(params) {
            return tslib_1.__awaiter(this, void 0, void 0, function() {
              var url, msg, res;
              return tslib_1.__generator(this, function(_a) {
                switch (_a.label) {
                  case 0:
                    url = "/tc/rfid/update/batch";
                    msg = "\u6807\u7B7E\u72B6\u6001\u66F4\u65B0";
                    return [4, request_1.mewMsPost(url, params, service2, isDebugMode)];
                  case 1:
                    res = _a.sent();
                    return [2, res.code === 0];
                }
              });
            });
          };
        },
        workorderItemInit: function(params) {
          return tslib_1.__awaiter(this, void 0, void 0, function() {
            var url, res;
            return tslib_1.__generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  url = "/tc/workorder_item/init";
                  return [4, request_1.mewMsPost(url, params, service, isDebugMode)];
                case 1:
                  res = _a.sent();
                  return [2, res.data];
              }
            });
          });
        },
        workorderPro: function(params) {
          return tslib_1.__awaiter(_this, void 0, void 0, function() {
            var res;
            return tslib_1.__generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  return [4, request_1.mewRequest("/tc/workorder/workorderPro", params, "POST", service, isDebugMode)];
                case 1:
                  res = _a.sent();
                  console.log("workorderPro", res);
                  return [2, res];
              }
            });
          });
        },
        locationStatus: function(params) {
          return tslib_1.__awaiter(_this, void 0, void 0, function() {
            var res;
            return tslib_1.__generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  return [4, request_1.mewRequest("/tc/workorder/locationStatus", params, "POST", service, isDebugMode)];
                case 1:
                  res = _a.sent();
                  console.log("locationStatus", res);
                  return [2, res];
              }
            });
          });
        },
        unInspectTop: function(params) {
          return tslib_1.__awaiter(_this, void 0, void 0, function() {
            var res;
            return tslib_1.__generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  return [4, request_1.mewRequest("/tc/workorder/unInspectTop", params, "POST", service, isDebugMode)];
                case 1:
                  res = _a.sent();
                  console.log("unInspectTop", res);
                  return [2, res];
              }
            });
          });
        },
        receivedTop: function(params) {
          return tslib_1.__awaiter(_this, void 0, void 0, function() {
            var res;
            return tslib_1.__generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  return [4, request_1.mewRequest("/tc/workorder/receivedTop", params, "POST", service, isDebugMode)];
                case 1:
                  res = _a.sent();
                  console.log("receivedTop", res);
                  return [2, res];
              }
            });
          });
        },
        inspectTop: function(params) {
          return tslib_1.__awaiter(_this, void 0, void 0, function() {
            var res;
            return tslib_1.__generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  return [4, request_1.mewRequest("/tc/workorder/inspectTop", params, "POST", service, isDebugMode)];
                case 1:
                  res = _a.sent();
                  console.log("inspectTop", res);
                  return [2, res];
              }
            });
          });
        },
        depPreInspectStatistics: function(params) {
          return tslib_1.__awaiter(_this, void 0, void 0, function() {
            var res;
            return tslib_1.__generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  return [4, request_1.mewRequest("/tc/workorder/depPreInspectStatistics", params, "POST", service, isDebugMode)];
                case 1:
                  res = _a.sent();
                  console.log("depPreInspectStatistics", res);
                  return [2, res];
              }
            });
          });
        },
        depPreInspectPro: function(params) {
          return tslib_1.__awaiter(_this, void 0, void 0, function() {
            var res;
            return tslib_1.__generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  return [4, request_1.mewRequest("/tc/workorder/depPreInspectPro", params, "POST", service, isDebugMode)];
                case 1:
                  res = _a.sent();
                  console.log("depPreInspectPro", res);
                  return [2, res];
              }
            });
          });
        },
        depPreInspectProByWeek: function(params) {
          return tslib_1.__awaiter(_this, void 0, void 0, function() {
            var res;
            return tslib_1.__generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  return [4, request_1.mewRequest("/tc/workorder/depPreInspectProByWeek", params, "POST", service, isDebugMode)];
                case 1:
                  res = _a.sent();
                  console.log("depPreInspectProByWeek", res);
                  return [2, res];
              }
            });
          });
        },
        totalWorkorderNumAndOther: function(params) {
          return tslib_1.__awaiter(_this, void 0, void 0, function() {
            var res;
            return tslib_1.__generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  return [4, request_1.mewRequest("/tc/workorder/totalWorkorderNumAndOther", params, "POST", service, isDebugMode)];
                case 1:
                  res = _a.sent();
                  console.log("totalWorkorderNumAndOther", res);
                  return [2, res];
              }
            });
          });
        },
        bindParentTool: function(params) {
          return tslib_1.__awaiter(_this, void 0, void 0, function() {
            return tslib_1.__generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  return [4, request_1.mewRequest("/tc/tool/bindParentTool", params, "POST", service, isDebugMode)];
                case 1:
                  return [2, _a.sent()];
              }
            });
          });
        },
        rfidShelf: function(params) {
          return tslib_1.__awaiter(_this, void 0, void 0, function() {
            return tslib_1.__generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  return [4, request_1.mewRequest("/tc/rfid/shelf", params, "POST", service, isDebugMode)];
                case 1:
                  return [2, _a.sent()];
              }
            });
          });
        }
      };
    }
    exports.Tc = Tc;
  }
});

// ../../../../../../Users/liqian/Desktop/demo2/uni-app-vue3.0/node_modules/@mew/request/dist/ms/uc.js
var require_uc = __commonJS({
  "../../../../../../Users/liqian/Desktop/demo2/uni-app-vue3.0/node_modules/@mew/request/dist/ms/uc.js"(exports) {
    "use strict";
    init_define_process_env_UNI_STAT_TITLE_JSON();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Uc = void 0;
    var tslib_1 = require_tslib();
    var request_1 = require_request();
    function Uc(service, isDebugMode) {
      if (isDebugMode === void 0) {
        isDebugMode = false;
      }
      return {
        role: new request_1.Request("/uc/role", service, isDebugMode),
        personnel: new request_1.Request("/uc/personnel", service, isDebugMode),
        address: new request_1.Request("/uc/address", service, isDebugMode),
        access: new request_1.Request("/uc/access", service, isDebugMode),
        user_tool: new request_1.Request("/uc/user_tool", service, isDebugMode),
        role_tool_access: new request_1.Request("/uc/role_tool_access", service, isDebugMode),
        occupation: new request_1.Request("/uc/occupation", service, isDebugMode),
        position: new request_1.Request("/uc/position", service, isDebugMode),
        rfid: new request_1.Request("/gc/rfid", service, isDebugMode),
        user: new request_1.Request("/uc/user", service, isDebugMode),
        device_user: new request_1.Request("/uc/device_user", service, isDebugMode),
        card: new request_1.Request("/uc/card", service, isDebugMode),
        finger: new request_1.Request("/uc/finger", service, isDebugMode),
        face: new request_1.Request("/uc/face", service, isDebugMode),
        wx: new request_1.Request("/uc/wx", service, isDebugMode),
        wx_user: new request_1.Request("/uc/wx_user", service, isDebugMode),
        ding_talk_user: new request_1.Request("/uc/ding_talk_user", service, isDebugMode),
        village: new request_1.Request("/uc/village", service, isDebugMode),
        user_company: new request_1.Request("/uc/user_company", service, isDebugMode),
        user_department: new request_1.Request("/uc/user_department", service, isDebugMode),
        user_group: new request_1.Request("/uc/user_group", service, isDebugMode),
        user_team: new request_1.Request("/uc/user_team", service, isDebugMode),
        rank: new request_1.Request("/uc/rank", service, isDebugMode),
        device_role_access: new request_1.Request("/uc/device_role_access", service, isDebugMode),
        getVersion: function() {
          return request_1.mewRequest("/gc/select/version", {}, "POST", service, isDebugMode);
        },
        registerUser: function(json) {
          return tslib_1.__awaiter(this, void 0, void 0, function() {
            var res;
            return tslib_1.__generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  return [4, request_1.mewMsPost("/uc/user/register", json, service, isDebugMode)];
                case 1:
                  res = _a.sent();
                  return [2, {
                    code: res.code,
                    msg: res.msg,
                    data: res.data
                  }];
              }
            });
          });
        },
        modifyUser: function(json) {
          return tslib_1.__awaiter(this, void 0, void 0, function() {
            var res;
            return tslib_1.__generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  return [4, request_1.mewMsPost("/uc/user/modify", json, service, isDebugMode)];
                case 1:
                  res = _a.sent();
                  return [2, {
                    code: res.code,
                    data: res.data
                  }];
              }
            });
          });
        }
      };
    }
    exports.Uc = Uc;
  }
});

// ../../../../../../Users/liqian/Desktop/demo2/uni-app-vue3.0/node_modules/@mew/request/dist/ms/rabbit.js
var require_rabbit = __commonJS({
  "../../../../../../Users/liqian/Desktop/demo2/uni-app-vue3.0/node_modules/@mew/request/dist/ms/rabbit.js"(exports) {
    "use strict";
    init_define_process_env_UNI_STAT_TITLE_JSON();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Rabbit = void 0;
    var tslib_1 = require_tslib();
    var request_1 = require_request();
    function Rabbit(service, isDebugMode) {
      if (isDebugMode === void 0) {
        isDebugMode = false;
      }
      return {
        getClients: function() {
          return tslib_1.__awaiter(this, void 0, void 0, function() {
            return tslib_1.__generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  return [4, request_1.mewRequest("/rabbit/clients", {}, "GET", service, isDebugMode)];
                case 1:
                  return [2, _a.sent()];
              }
            });
          });
        },
        getNodes: function() {
          return tslib_1.__awaiter(this, void 0, void 0, function() {
            return tslib_1.__generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  return [4, request_1.mewRequest("/rabbit/nodes", {}, "GET", service, isDebugMode)];
                case 1:
                  return [2, _a.sent()];
              }
            });
          });
        }
      };
    }
    exports.Rabbit = Rabbit;
  }
});

// ../../../../../../Users/liqian/Desktop/demo2/uni-app-vue3.0/node_modules/@mew/request/dist/ms/common.js
var require_common = __commonJS({
  "../../../../../../Users/liqian/Desktop/demo2/uni-app-vue3.0/node_modules/@mew/request/dist/ms/common.js"(exports) {
    "use strict";
    init_define_process_env_UNI_STAT_TITLE_JSON();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Common = void 0;
    var tslib_1 = require_tslib();
    var request_1 = require_request();
    function Common(service, isDebugMode) {
      var _this = this;
      if (isDebugMode === void 0) {
        isDebugMode = false;
      }
      return {
        cacheGetData: function(service2) {
          return function() {
            return tslib_1.__awaiter(_this, void 0, void 0, function() {
              return tslib_1.__generator(this, function(_a) {
                switch (_a.label) {
                  case 0:
                    return [4, request_1.mewMsPost("/cache/get", { key: "localStatus", index: 0 }, service2, isDebugMode)];
                  case 1:
                    return [2, _a.sent()];
                }
              });
            });
          };
        },
        cacheGet: function(service2) {
          return function() {
            return tslib_1.__awaiter(_this, void 0, void 0, function() {
              return tslib_1.__generator(this, function(_a) {
                switch (_a.label) {
                  case 0:
                    return [4, request_1.mewMsPost("/cache/get", { key: "conf" }, service2, isDebugMode)];
                  case 1:
                    return [2, _a.sent()];
                }
              });
            });
          };
        },
        cacheSet: function(service2) {
          return function(params) {
            return tslib_1.__awaiter(_this, void 0, void 0, function() {
              return tslib_1.__generator(this, function(_a) {
                switch (_a.label) {
                  case 0:
                    return [4, request_1.mewMsPost("/cache/set", params, service2, isDebugMode)];
                  case 1:
                    return [2, _a.sent()];
                }
              });
            });
          };
        }
      };
    }
    exports.Common = Common;
  }
});

// ../../../../../../Users/liqian/Desktop/demo2/uni-app-vue3.0/node_modules/@mew/request/dist/ms/dashboard.js
var require_dashboard = __commonJS({
  "../../../../../../Users/liqian/Desktop/demo2/uni-app-vue3.0/node_modules/@mew/request/dist/ms/dashboard.js"(exports) {
    "use strict";
    init_define_process_env_UNI_STAT_TITLE_JSON();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Dashboard = void 0;
    var tslib_1 = require_tslib();
    var request_1 = require_request();
    function Dashboard(service, isDebugMode) {
      var _this = this;
      if (isDebugMode === void 0) {
        isDebugMode = false;
      }
      return {
        cacheGetData: function() {
          return tslib_1.__awaiter(_this, void 0, void 0, function() {
            return tslib_1.__generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  return [4, request_1.mewMsPost("/cache/get", { key: "localStatus", index: 0 }, service, isDebugMode)];
                case 1:
                  return [2, _a.sent()];
              }
            });
          });
        },
        toolSituation: function(json) {
          return tslib_1.__awaiter(this, void 0, void 0, function() {
            return tslib_1.__generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  return [4, request_1.mewMsPost("/statistics/logByDay", json, service, isDebugMode)];
                case 1:
                  return [2, _a.sent()];
              }
            });
          });
        },
        toolTopTen: function(json) {
          return tslib_1.__awaiter(this, void 0, void 0, function() {
            return tslib_1.__generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  return [4, request_1.mewMsPost("/statistics/topTenUsageTimes", json, service, isDebugMode)];
                case 1:
                  return [2, _a.sent()];
              }
            });
          });
        },
        toolBottomTen: function(json) {
          return tslib_1.__awaiter(this, void 0, void 0, function() {
            return tslib_1.__generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  return [4, request_1.mewMsPost("/statistics/bottomTenUsageTimes", json, service, isDebugMode)];
                case 1:
                  return [2, _a.sent()];
              }
            });
          });
        },
        departmentFrequency: function(json) {
          return tslib_1.__awaiter(this, void 0, void 0, function() {
            return tslib_1.__generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  return [4, request_1.mewMsPost("/statistics/departmentFrequency", json, service, isDebugMode)];
                case 1:
                  return [2, _a.sent()];
              }
            });
          });
        },
        teamFrequency: function(json) {
          return tslib_1.__awaiter(this, void 0, void 0, function() {
            return tslib_1.__generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  return [4, request_1.mewMsPost("/statistics/departmentFrequency", json, service, isDebugMode)];
                case 1:
                  return [2, _a.sent()];
              }
            });
          });
        },
        topTenUsers: function(json) {
          return tslib_1.__awaiter(this, void 0, void 0, function() {
            return tslib_1.__generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  return [4, request_1.mewMsPost("/statistics/topTenUsers", json, service, isDebugMode)];
                case 1:
                  return [2, _a.sent()];
              }
            });
          });
        },
        deviceStatus: function(json) {
          return tslib_1.__awaiter(this, void 0, void 0, function() {
            return tslib_1.__generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  return [4, request_1.mewRequest("/statistics/deviceStatus", json, "POST", service, isDebugMode)];
                case 1:
                  return [2, _a.sent()];
              }
            });
          });
        },
        bmData: function(json) {
          return tslib_1.__awaiter(this, void 0, void 0, function() {
            return tslib_1.__generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  return [4, request_1.mewRequest("/statistics/bmData", json, "POST", service, isDebugMode)];
                case 1:
                  return [2, _a.sent()];
              }
            });
          });
        },
        lackToolList: function(json) {
          return tslib_1.__awaiter(this, void 0, void 0, function() {
            return tslib_1.__generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  return [4, request_1.mewRequest("/statistics/lackToolList", json, "POST", service, isDebugMode)];
                case 1:
                  return [2, _a.sent()];
              }
            });
          });
        }
      };
    }
    exports.Dashboard = Dashboard;
  }
});

// ../../../../../../Users/liqian/Desktop/demo2/uni-app-vue3.0/node_modules/@mew/request/dist/rabbit.api.js
var require_rabbit_api = __commonJS({
  "../../../../../../Users/liqian/Desktop/demo2/uni-app-vue3.0/node_modules/@mew/request/dist/rabbit.api.js"(exports) {
    "use strict";
    init_define_process_env_UNI_STAT_TITLE_JSON();
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require_tslib();
    var RabbitApi = function() {
      function RabbitApi2(service) {
        this.exchangeName = "";
        this.queueName = "";
        this._service = service;
      }
      RabbitApi2.prototype.permissions = function() {
        return tslib_1.__awaiter(this, void 0, void 0, function() {
          return tslib_1.__generator(this, function(_a) {
            switch (_a.label) {
              case 0:
                return [4, this._get("/api/vhosts/%2f/permissions")];
              case 1:
                return [2, _a.sent()];
            }
          });
        });
      };
      RabbitApi2.prototype.bind = function(exchangeName, queueName, routingKey) {
        return tslib_1.__awaiter(this, void 0, void 0, function() {
          var data;
          return tslib_1.__generator(this, function(_a) {
            switch (_a.label) {
              case 0:
                this.exchangeName = exchangeName;
                this.queueName = queueName;
                data = { "routing_key": routingKey, "arguments": {} };
                return [4, this._post("/api/bindings/%2f/e/" + exchangeName + "/q/" + queueName, data)];
              case 1:
                return [2, _a.sent()];
            }
          });
        });
      };
      RabbitApi2.prototype.newQueue = function(queueName) {
        return tslib_1.__awaiter(this, void 0, void 0, function() {
          var data;
          return tslib_1.__generator(this, function(_a) {
            switch (_a.label) {
              case 0:
                this.queueName = queueName;
                data = { "auto_delete": false, "durable": true, "arguments": {}, "node": "rabbit@v5" };
                return [4, this._put("/api/queues/%2f/" + queueName, data)];
              case 1:
                return [2, _a.sent()];
            }
          });
        });
      };
      RabbitApi2.prototype.deleteQueue = function(queueName) {
        return tslib_1.__awaiter(this, void 0, void 0, function() {
          var data;
          return tslib_1.__generator(this, function(_a) {
            switch (_a.label) {
              case 0:
                data = { "type": "topic", "auto_delete": false, "durable": true, "internal": false, "arguments": {} };
                return [4, this._delete("/api/queues/%2f/" + queueName, data)];
              case 1:
                return [2, _a.sent()];
            }
          });
        });
      };
      RabbitApi2.prototype.newExchange = function(exchangeName) {
        return tslib_1.__awaiter(this, void 0, void 0, function() {
          var data;
          return tslib_1.__generator(this, function(_a) {
            switch (_a.label) {
              case 0:
                this.exchangeName = exchangeName;
                data = { "type": "topic", "auto_delete": false, "durable": true, "internal": false, "arguments": {} };
                return [4, this._put("/api/exchanges/%2f/" + exchangeName, data)];
              case 1:
                return [2, _a.sent()];
            }
          });
        });
      };
      RabbitApi2.prototype.deleteExchange = function(exchangeName) {
        return tslib_1.__awaiter(this, void 0, void 0, function() {
          var data;
          return tslib_1.__generator(this, function(_a) {
            switch (_a.label) {
              case 0:
                data = { "type": "topic", "auto_delete": false, "durable": true, "internal": false, "arguments": {} };
                return [4, this._delete("/api/exchanges/%2f/" + exchangeName, data)];
              case 1:
                return [2, _a.sent()];
            }
          });
        });
      };
      RabbitApi2.prototype.consumers = function() {
        return tslib_1.__awaiter(this, void 0, void 0, function() {
          var res, arr, _i, res_1, item;
          return tslib_1.__generator(this, function(_a) {
            switch (_a.label) {
              case 0:
                return [4, this._get("/api/consumers")];
              case 1:
                res = _a.sent();
                arr = [];
                for (_i = 0, res_1 = res; _i < res_1.length; _i++) {
                  item = res_1[_i];
                  arr.push(item.channel_details.user);
                }
                return [2, res];
            }
          });
        });
      };
      RabbitApi2.prototype.overview = function() {
        return tslib_1.__awaiter(this, void 0, void 0, function() {
          return tslib_1.__generator(this, function(_a) {
            switch (_a.label) {
              case 0:
                return [4, this._get("/api/overview")];
              case 1:
                return [2, _a.sent()];
            }
          });
        });
      };
      RabbitApi2.prototype.users = function() {
        return tslib_1.__awaiter(this, void 0, void 0, function() {
          return tslib_1.__generator(this, function(_a) {
            switch (_a.label) {
              case 0:
                return [4, this._get("/api/users")];
              case 1:
                return [2, _a.sent()];
            }
          });
        });
      };
      RabbitApi2.prototype.openDoor = function(payload) {
        return tslib_1.__awaiter(this, void 0, void 0, function() {
          var data;
          return tslib_1.__generator(this, function(_a) {
            switch (_a.label) {
              case 0:
                data = {
                  properties: {},
                  routing_key: "web.device.openDoor",
                  payload: JSON.stringify(payload),
                  payload_encoding: "string"
                };
                return [4, this.pubToExchanges(data)];
              case 1:
                return [2, _a.sent()];
            }
          });
        });
      };
      RabbitApi2.prototype.fakeDoorStatusChange = function() {
        return tslib_1.__awaiter(this, void 0, void 0, function() {
          var payload, data;
          return tslib_1.__generator(this, function(_a) {
            switch (_a.label) {
              case 0:
                payload = {
                  location: "A01-01",
                  lockStatus: true
                };
                data = {
                  properties: {},
                  routing_key: "device.web.doorStatus",
                  payload: JSON.stringify(payload),
                  payload_encoding: "string"
                };
                return [4, this.pubToExchanges(data)];
              case 1:
                _a.sent();
                return [2];
            }
          });
        });
      };
      RabbitApi2.prototype.pubToExchanges = function(data) {
        return tslib_1.__awaiter(this, void 0, void 0, function() {
          var url, res;
          return tslib_1.__generator(this, function(_a) {
            switch (_a.label) {
              case 0:
                url = "/api/exchanges/%2f//publish";
                return [4, this._post(url, data)];
              case 1:
                res = _a.sent();
                console.log(100, res);
                return [2, res];
            }
          });
        });
      };
      RabbitApi2.prototype.pubToQueue = function(data) {
        return tslib_1.__awaiter(this, void 0, void 0, function() {
          var url, res;
          return tslib_1.__generator(this, function(_a) {
            switch (_a.label) {
              case 0:
                url = "/api/queues/%2f/" + this.exchangeName + "/publish";
                return [4, this._post(url, data)];
              case 1:
                res = _a.sent();
                console.log(104, res);
                return [2, res];
            }
          });
        });
      };
      RabbitApi2.prototype.getLockStatus = function(location) {
        return tslib_1.__awaiter(this, void 0, void 0, function() {
          var res, acceptArr, rejectArr, _i, rejectArr_1, element, json, last, json;
          return tslib_1.__generator(this, function(_a) {
            switch (_a.label) {
              case 0:
                console.log("getLockStatus");
                return [4, this._getMessage()];
              case 1:
                res = _a.sent();
                console.log(102, res);
                acceptArr = [];
                rejectArr = [];
                res.forEach(function(element2) {
                  try {
                    var json2 = JSON.parse(element2.payload);
                    if (json2.location === location) {
                      acceptArr.push(element2);
                    } else {
                      rejectArr.push(element2);
                    }
                  } catch (e) {
                    console.log(e);
                  }
                });
                console.log({ acceptArr, rejectArr });
                _i = 0, rejectArr_1 = rejectArr;
                _a.label = 2;
              case 2:
                if (!(_i < rejectArr_1.length))
                  return [3, 5];
                element = rejectArr_1[_i];
                json = { properties: {}, routing_key: element.routing_key, payload: element.payload, payload_encoding: "string" };
                return [4, this.pubToExchanges(json)];
              case 3:
                _a.sent();
                _a.label = 4;
              case 4:
                _i++;
                return [3, 2];
              case 5:
                last = acceptArr.pop();
                if (last) {
                  try {
                    json = JSON.parse(last.payload);
                    return [2, json.status];
                  } catch (e) {
                    console.log(140, e);
                  }
                }
                return [2];
            }
          });
        });
      };
      RabbitApi2.prototype._getMessage = function() {
        return tslib_1.__awaiter(this, void 0, void 0, function() {
          var data;
          return tslib_1.__generator(this, function(_a) {
            switch (_a.label) {
              case 0:
                data = {
                  "count": 100,
                  "ackmode": "ack_requeue_false",
                  "encoding": "auto",
                  "truncate": 5e4
                };
                return [4, this._post("/api/queues/%2f/" + this.exchangeName + ".*.web/get", data)];
              case 1:
                return [2, _a.sent()];
            }
          });
        });
      };
      RabbitApi2.prototype._post = function(uri, params, msg) {
        if (params === void 0) {
          params = {};
        }
        if (msg === void 0) {
          msg = "";
        }
        return tslib_1.__awaiter(this, void 0, void 0, function() {
          var res, error_1;
          return tslib_1.__generator(this, function(_a) {
            switch (_a.label) {
              case 0:
                _a.trys.push([0, 2, , 3]);
                return [
                  4,
                  this._service.post(uri, params)
                ];
              case 1:
                res = _a.sent();
                return [2, res.data];
              case 2:
                error_1 = _a.sent();
                console.log(error_1);
                console.log("POST", this._service.defaults.baseURL, uri, params, msg, error_1);
                throw error_1;
              case 3:
                return [2];
            }
          });
        });
      };
      RabbitApi2.prototype._put = function(uri, params, msg) {
        if (params === void 0) {
          params = {};
        }
        if (msg === void 0) {
          msg = "";
        }
        return tslib_1.__awaiter(this, void 0, void 0, function() {
          var res, error_2;
          return tslib_1.__generator(this, function(_a) {
            switch (_a.label) {
              case 0:
                _a.trys.push([0, 2, , 3]);
                return [
                  4,
                  this._service.put(uri, params)
                ];
              case 1:
                res = _a.sent();
                return [2, res.data];
              case 2:
                error_2 = _a.sent();
                console.log(error_2);
                console.log("PUT", this._service.defaults.baseURL, uri, params, msg, error_2);
                throw error_2;
              case 3:
                return [2];
            }
          });
        });
      };
      RabbitApi2.prototype._delete = function(uri, params, msg) {
        if (params === void 0) {
          params = {};
        }
        if (msg === void 0) {
          msg = "";
        }
        return tslib_1.__awaiter(this, void 0, void 0, function() {
          var res, error_3;
          return tslib_1.__generator(this, function(_a) {
            switch (_a.label) {
              case 0:
                _a.trys.push([0, 2, , 3]);
                return [
                  4,
                  this._service.delete(uri, params)
                ];
              case 1:
                res = _a.sent();
                return [2, res.data];
              case 2:
                error_3 = _a.sent();
                console.log(error_3);
                console.log("DELETE", this._service.defaults.baseURL, uri, params, msg, error_3);
                throw error_3;
              case 3:
                return [2];
            }
          });
        });
      };
      RabbitApi2.prototype._get = function(uri, params, msg) {
        if (params === void 0) {
          params = {};
        }
        if (msg === void 0) {
          msg = "";
        }
        return tslib_1.__awaiter(this, void 0, void 0, function() {
          var res, error_4;
          return tslib_1.__generator(this, function(_a) {
            switch (_a.label) {
              case 0:
                _a.trys.push([0, 2, , 3]);
                return [
                  4,
                  this._service.get(uri, params)
                ];
              case 1:
                res = _a.sent();
                return [2, res.data];
              case 2:
                error_4 = _a.sent();
                console.log(error_4);
                console.log("GET", this._service.defaults.baseURL, uri, params, msg, error_4);
                throw error_4;
              case 3:
                return [2];
            }
          });
        });
      };
      return RabbitApi2;
    }();
    exports.default = RabbitApi;
  }
});

// ../../../../../../Users/liqian/Desktop/demo2/uni-app-vue3.0/node_modules/@mew/request/dist/dingtalk/dingtalk.js
var require_dingtalk = __commonJS({
  "../../../../../../Users/liqian/Desktop/demo2/uni-app-vue3.0/node_modules/@mew/request/dist/dingtalk/dingtalk.js"(exports) {
    "use strict";
    init_define_process_env_UNI_STAT_TITLE_JSON();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DingTalk = void 0;
    var tslib_1 = require_tslib();
    var request_1 = require_request();
    var main_1 = require_main();
    var DingTalk = function() {
      function DingTalk2(appId, service, isDebugMode) {
        if (isDebugMode === void 0) {
          isDebugMode = false;
        }
        this._access_token = "";
        this._appId = appId;
        this._service = service;
        this._isDebugMode = isDebugMode;
        this.init();
      }
      DingTalk2.prototype.init = function() {
        return tslib_1.__awaiter(this, void 0, void 0, function() {
          var mc, res;
          return tslib_1.__generator(this, function(_a) {
            switch (_a.label) {
              case 0:
                mc = main_1.Mc(this._service, this._isDebugMode);
                return [
                  4,
                  mc.getAccessToken(this._appId)
                ];
              case 1:
                res = _a.sent();
                this._access_token = res.data.accessToken;
                return [2];
            }
          });
        });
      };
      DingTalk2.prototype.getMsAccessToken = function() {
        return tslib_1.__awaiter(this, void 0, void 0, function() {
          var json, res;
          return tslib_1.__generator(this, function(_a) {
            switch (_a.label) {
              case 0:
                json = { username: "admin", password: "111111" };
                return [4, request_1.mewRequest("/auth", json, "POST", this._service, this._isDebugMode)];
              case 1:
                res = _a.sent();
                return [2, res.access_token];
            }
          });
        });
      };
      DingTalk2.prototype.getDingTalkUserinfo = function(code) {
        return tslib_1.__awaiter(this, void 0, void 0, function() {
          var mc;
          return tslib_1.__generator(this, function(_a) {
            switch (_a.label) {
              case 0:
                mc = main_1.Mc(this._service, this._isDebugMode);
                return [4, mc.getDingTalkUserInfo({ appId: this._appId, code })];
              case 1:
                return [2, _a.sent()];
            }
          });
        });
      };
      DingTalk2.prototype.sendTemplateMsgOnShelf = function(userid_list, data) {
        return tslib_1.__awaiter(this, void 0, void 0, function() {
          var mc, json;
          return tslib_1.__generator(this, function(_a) {
            switch (_a.label) {
              case 0:
                mc = main_1.Mc(this._service, this._isDebugMode);
                json = {
                  appId: this._appId,
                  template_id: "f63544a6c20c4069b6833cd9be3fd108",
                  data: JSON.stringify(data),
                  userid_list
                };
                return [4, mc.sendDingTalkMessage(json)];
              case 1:
                return [2, _a.sent()];
            }
          });
        });
      };
      DingTalk2.prototype.sendTemplateMsgPreInspection = function(userid_list, data) {
        return tslib_1.__awaiter(this, void 0, void 0, function() {
          var mc, json;
          return tslib_1.__generator(this, function(_a) {
            switch (_a.label) {
              case 0:
                mc = main_1.Mc(this._service, this._isDebugMode);
                json = {
                  appId: this._appId,
                  template_id: "559d93d3f455459895a7b81eda600792",
                  data: JSON.stringify(data),
                  userid_list
                };
                return [4, mc.sendDingTalkMessage(json)];
              case 1:
                return [2, _a.sent()];
            }
          });
        });
      };
      DingTalk2.prototype.sendTemplateMsgChange = function(userid_list, data) {
        return tslib_1.__awaiter(this, void 0, void 0, function() {
          var mc, json;
          return tslib_1.__generator(this, function(_a) {
            switch (_a.label) {
              case 0:
                mc = main_1.Mc(this._service);
                json = {
                  appId: this._appId,
                  template_id: "29e7205d2c284c1cb4e72fa45e1af77d",
                  data: JSON.stringify(data),
                  userid_list
                };
                return [4, mc.sendDingTalkMessage(json)];
              case 1:
                return [2, _a.sent()];
            }
          });
        });
      };
      DingTalk2.prototype.sendTemplateMsgPickUp = function(userid_list, data) {
        return tslib_1.__awaiter(this, void 0, void 0, function() {
          var mc, json;
          return tslib_1.__generator(this, function(_a) {
            switch (_a.label) {
              case 0:
                mc = main_1.Mc(this._service, this._isDebugMode);
                json = {
                  appId: this._appId,
                  template_id: "257a3f214b244e91a4656700eb356fa2",
                  data: JSON.stringify(data),
                  userid_list
                };
                return [4, mc.sendDingTalkMessage(json)];
              case 1:
                return [2, _a.sent()];
            }
          });
        });
      };
      DingTalk2.prototype.sendTemplateMsgReturn = function(userid_list, data) {
        return tslib_1.__awaiter(this, void 0, void 0, function() {
          var mc, json;
          return tslib_1.__generator(this, function(_a) {
            switch (_a.label) {
              case 0:
                mc = main_1.Mc(this._service, this._isDebugMode);
                json = {
                  appId: this._appId,
                  template_id: "6e7d45c4c1974053a7c1ae23df013277",
                  data: JSON.stringify(data),
                  userid_list
                };
                return [4, mc.sendDingTalkMessage(json)];
              case 1:
                return [2, _a.sent()];
            }
          });
        });
      };
      DingTalk2.prototype.sendTemplateMsgPickUpEntrust = function() {
        return tslib_1.__awaiter(this, void 0, void 0, function() {
          return tslib_1.__generator(this, function(_a) {
            return [2];
          });
        });
      };
      return DingTalk2;
    }();
    exports.DingTalk = DingTalk;
  }
});

// ../../../../../../Users/liqian/Desktop/demo2/uni-app-vue3.0/node_modules/@mew/request/dist/main.js
var require_main = __commonJS({
  "../../../../../../Users/liqian/Desktop/demo2/uni-app-vue3.0/node_modules/@mew/request/dist/main.js"(exports) {
    "use strict";
    init_define_process_env_UNI_STAT_TITLE_JSON();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.mewRequest = exports.mewMsPost = exports.DingTalk = exports.RabbitApi = exports.Rabbit = exports.Dashboard = exports.Common = exports.Uc = exports.Tc = exports.Mc = exports.Lc = exports.Gc = exports.Dc = exports.Ac = exports.getAuth = exports.AxiosEnv = void 0;
    var tslib_1 = require_tslib();
    var ac_1 = require_ac();
    Object.defineProperty(exports, "Ac", { enumerable: true, get: function() {
      return ac_1.Ac;
    } });
    var dc_1 = require_dc();
    Object.defineProperty(exports, "Dc", { enumerable: true, get: function() {
      return dc_1.Dc;
    } });
    var gc_1 = require_gc();
    Object.defineProperty(exports, "Gc", { enumerable: true, get: function() {
      return gc_1.Gc;
    } });
    var lc_1 = require_lc();
    Object.defineProperty(exports, "Lc", { enumerable: true, get: function() {
      return lc_1.Lc;
    } });
    var mc_1 = require_mc();
    Object.defineProperty(exports, "getAuth", { enumerable: true, get: function() {
      return mc_1.getAuth;
    } });
    Object.defineProperty(exports, "Mc", { enumerable: true, get: function() {
      return mc_1.Mc;
    } });
    var tc_1 = require_tc();
    Object.defineProperty(exports, "Tc", { enumerable: true, get: function() {
      return tc_1.Tc;
    } });
    var uc_1 = require_uc();
    Object.defineProperty(exports, "Uc", { enumerable: true, get: function() {
      return uc_1.Uc;
    } });
    var rabbit_1 = require_rabbit();
    Object.defineProperty(exports, "Rabbit", { enumerable: true, get: function() {
      return rabbit_1.Rabbit;
    } });
    var common_1 = require_common();
    Object.defineProperty(exports, "Common", { enumerable: true, get: function() {
      return common_1.Common;
    } });
    var dashboard_1 = require_dashboard();
    Object.defineProperty(exports, "Dashboard", { enumerable: true, get: function() {
      return dashboard_1.Dashboard;
    } });
    var rabbit_api_1 = tslib_1.__importDefault(require_rabbit_api());
    exports.RabbitApi = rabbit_api_1.default;
    var dingtalk_1 = require_dingtalk();
    Object.defineProperty(exports, "DingTalk", { enumerable: true, get: function() {
      return dingtalk_1.DingTalk;
    } });
    var request_1 = require_request();
    Object.defineProperty(exports, "mewMsPost", { enumerable: true, get: function() {
      return request_1.mewMsPost;
    } });
    Object.defineProperty(exports, "mewRequest", { enumerable: true, get: function() {
      return request_1.mewRequest;
    } });
    var AxiosEnv;
    (function(AxiosEnv2) {
      AxiosEnv2[AxiosEnv2["default"] = 0] = "default";
      AxiosEnv2[AxiosEnv2["uniapp"] = 1] = "uniapp";
    })(AxiosEnv = exports.AxiosEnv || (exports.AxiosEnv = {}));
  }
});

// dep:@mew_request
init_define_process_env_UNI_STAT_TITLE_JSON();
var mew_request_default = require_main();
export {
  mew_request_default as default
};
//# sourceMappingURL=@mew_request.js.map
