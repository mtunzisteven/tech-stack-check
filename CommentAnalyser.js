"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.CommentAnalyser = void 0;
var fs = require("fs");
// import path from 'path';
var CommentAnalyser = /** @class */ (function () {
    function CommentAnalyser(directory) {
        this.folder = directory;
    }
    // fetch each comment and return it in lowercase
    CommentAnalyser.prototype.loadFile = function (fileName) {
        return __awaiter(this, void 0, void 0, function () {
            var fileContent;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fs.promises.readFile(fileName, { encoding: "utf-8" })];
                    case 1:
                        fileContent = _a.sent();
                        return [4 /*yield*/, fileContent];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    // read all comments in the files withing the directory and set the value to callback function
    CommentAnalyser.prototype.accessComments = function (cb) {
        return __awaiter(this, void 0, void 0, function () {
            var comments, fileNames, NumberOfFiles, i, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        comments = [];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 7, , 8]);
                        return [4 /*yield*/, fs.promises.readdir(this.folder)];
                    case 2:
                        fileNames = _a.sent();
                        // use only text files( extension .txt)
                        fileNames = fileNames.filter(function (fileName) { return fileName.indexOf('.txt') != -1; });
                        NumberOfFiles = fileNames.length;
                        i = 0;
                        _a.label = 3;
                    case 3:
                        if (!(i < NumberOfFiles)) return [3 /*break*/, 6];
                        // commentsArray received array from cb in CommentAnalysis
                        return [4 /*yield*/, this.loadFile(this.folder + '\\' + fileNames[i])
                                .then(function (arr) {
                                // combine all comments into one array
                                comments = __spreadArray(__spreadArray([], comments, true), arr.split('\n'), true);
                                // return the comments array when done loading all comments
                                if (i == (NumberOfFiles - 1)) {
                                    cb(comments);
                                }
                            })["catch"](function (err) {
                                return err;
                            })];
                    case 4:
                        // commentsArray received array from cb in CommentAnalysis
                        _a.sent(); //  return err in catch block
                        _a.label = 5;
                    case 5:
                        i++;
                        return [3 /*break*/, 3];
                    case 6: return [3 /*break*/, 8];
                    case 7:
                        err_1 = _a.sent();
                        console.error('Error occured while retrieving files from directory', err_1);
                        return [3 /*break*/, 8];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    return CommentAnalyser;
}());
exports.CommentAnalyser = CommentAnalyser;
