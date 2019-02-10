"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var moment_1 = __importDefault(require("moment"));
function getTimeDate(ts) {
    var now = moment_1.default();
    var momentTs = moment_1.default(ts);
    if (moment_1.default.duration(now.diff(momentTs)) < moment_1.default.duration(60 * 60 * 24 * 1000)) {
        return momentTs.fromNow();
    }
    return momentTs.format('MMMM Do YYYY');
}
exports.getTimeDate = getTimeDate;
exports.contactPointsCollectionName = 'contactPoints';
exports.discussionsSubCollectionName = 'contactPointDiscussions';
exports.messagesSubCollectionName = 'contactPointDiscussionMessages';
