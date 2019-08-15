"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core = __importStar(require("@actions/core"));
const github = __importStar(require("@actions/github"));
const webhook_1 = require("@slack/webhook");
const util_1 = require("util");
if (core.getInput('debug') === 'true')
    core.debug(util_1.inspect(github.context, { showHidden: false, depth: null }));
exports.handler = (url, message) => __awaiter(this, void 0, void 0, function* () {
    try {
        console.log(`url ${url}`);
        const webhook = new webhook_1.IncomingWebhook(url, {
            icon_emoji: ':bowtie:',
        });
        const response = yield webhook.send({
            text: message,
        });
        if (response.text == '1' || response.text === 'ok')
            return true;
        return false;
    }
    catch (error) {
        core.error(error);
        core.setFailed(error.message);
        return false;
    }
});
(() => __awaiter(this, void 0, void 0, function* () {
    const response = yield exports.handler(core.getInput('webhook'), core.getInput('message'));
    console.log('res', response);
    return response;
}))();
