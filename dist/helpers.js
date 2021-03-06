"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assign = require('lodash.assign');
function addGraphQLSubscriptions(networkInterface, wsClient) {
    if (process && process.env && process.env.NODE_ENV !== 'production') {
        console.warn('Notice that addGraphQLSubscriptions method will become deprecated in the new package ' +
            'graphql-transport-ws that will be released soon. Keep track for the new hybrid network release here: ' +
            'https://github.com/apollographql/subscriptions-transport-ws/issues/169');
    }
    return assign(networkInterface, {
        subscribe: function (request, handler) {
            return wsClient.subscribe(request, handler);
        },
        unsubscribe: function (id) {
            wsClient.unsubscribe(id);
        },
    });
}
exports.addGraphQLSubscriptions = addGraphQLSubscriptions;
//# sourceMappingURL=helpers.js.map