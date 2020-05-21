"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var redux_saga_1 = __importDefault(require("redux-saga"));
var redux_1 = require("redux");
var redux_logger_1 = require("redux-logger");
var index_1 = __importDefault(require("../Sagas/index"));
var index_2 = __importDefault(require("../Redux/index"));
var redux_persist_1 = require("redux-persist");
var async_storage_1 = __importDefault(require("@react-native-community/async-storage"));
var sagaMiddleware = redux_saga_1.default();
var persistConfig = {
    key: 'root',
    timeout: 20000,
    storage: async_storage_1.default,
    whitelist: ["user"]
};
var persistedReducer = redux_persist_1.persistReducer(persistConfig, index_2.default);
var middleware = redux_1.applyMiddleware(sagaMiddleware, redux_logger_1.logger);
var store = redux_1.createStore(persistedReducer, middleware);
var configureStore = function () {
    var persistor = redux_persist_1.persistStore(store);
    return {
        store: store,
        persistor: persistor
    };
};
sagaMiddleware.run(index_1.default);
exports.default = configureStore;
