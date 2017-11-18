webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-chat-window></app-chat-window>\n<h3>Chats:</h3>\n<app-chat-list></app-chat-list>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chat_service__ = __webpack_require__("../../../../../src/app/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__communication_service__ = __webpack_require__("../../../../../src/app/communication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__windowref__ = __webpack_require__("../../../../../src/app/windowref.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(com, chat) {
        this.com = com;
        this.chat = chat;
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__chat_service__["a" /* ChatService */], __WEBPACK_IMPORTED_MODULE_3__windowref__["a" /* WindowRef */], __WEBPACK_IMPORTED_MODULE_2__communication_service__["a" /* CommunicationService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__communication_service__["a" /* CommunicationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__communication_service__["a" /* CommunicationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__chat_service__["a" /* ChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__chat_service__["a" /* ChatService */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chat_list_chat_list_component__ = __webpack_require__("../../../../../src/app/chat-list/chat-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chat_item_chat_item_component__ = __webpack_require__("../../../../../src/app/chat-item/chat-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__chat_window_chat_window_component__ = __webpack_require__("../../../../../src/app/chat-window/chat-window.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__chat_window_chat_message_chat_message_component__ = __webpack_require__("../../../../../src/app/chat-window/chat-message/chat-message.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__chat_list_chat_list_component__["a" /* ChatListComponent */],
            __WEBPACK_IMPORTED_MODULE_4__chat_item_chat_item_component__["a" /* ChatItemComponent */],
            __WEBPACK_IMPORTED_MODULE_5__chat_window_chat_window_component__["a" /* ChatWindowComponent */],
            __WEBPACK_IMPORTED_MODULE_6__chat_window_chat_message_chat_message_component__["a" /* ChatMessageComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/chat-item/chat-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a{\r\n  cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chat-item/chat-item.component.html":
/***/ (function(module, exports) {

module.exports = "<a class=\"list-group-item\" (click)=\"showMessages()\">\r\n  <span>{{ chat.name }}</span>\r\n  <span *ngIf=\"chat.unreadCount > 0\" class=\"badge\">{{ chat.unreadCount }}</span>\r\n</a>"

/***/ }),

/***/ "../../../../../src/app/chat-item/chat-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chat_model__ = __webpack_require__("../../../../../src/app/chat.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_service__ = __webpack_require__("../../../../../src/app/chat.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatItemComponent = (function () {
    function ChatItemComponent(chatService) {
        this.chatService = chatService;
    }
    ChatItemComponent.prototype.ngOnInit = function () {
    };
    ChatItemComponent.prototype.showMessages = function () {
        this.chatService.setSelectedChat(this.chat);
    };
    return ChatItemComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__chat_model__["a" /* Chat */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__chat_model__["a" /* Chat */]) === "function" && _a || Object)
], ChatItemComponent.prototype, "chat", void 0);
ChatItemComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-chat-item',
        template: __webpack_require__("../../../../../src/app/chat-item/chat-item.component.html"),
        styles: [__webpack_require__("../../../../../src/app/chat-item/chat-item.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__chat_service__["a" /* ChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__chat_service__["a" /* ChatService */]) === "function" && _b || Object])
], ChatItemComponent);

var _a, _b;
//# sourceMappingURL=chat-item.component.js.map

/***/ }),

/***/ "../../../../../src/app/chat-list/chat-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chat-list/chat-list.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"list-group\">\r\n  <li class=\"list-group-item\" *ngFor=\"let chatItem of chats\">\r\n    <app-chat-item [chat]=\"chatItem\"></app-chat-item>\r\n  </li>\r\n</ul>\r\n\r\n<button (click)=\"clearChats()\">Clear</button>"

/***/ }),

/***/ "../../../../../src/app/chat-list/chat-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chat_service__ = __webpack_require__("../../../../../src/app/chat.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatListComponent = (function () {
    function ChatListComponent(chatService) {
        this.chatService = chatService;
    }
    ChatListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.chats = this.chatService.getChats();
        this.chatService.chatsChanged.subscribe(function (e) {
            _this.chats = e;
        });
    };
    ChatListComponent.prototype.clearChats = function () {
        this.chatService.setChats([]);
    };
    return ChatListComponent;
}());
ChatListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-chat-list',
        template: __webpack_require__("../../../../../src/app/chat-list/chat-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/chat-list/chat-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__chat_service__["a" /* ChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__chat_service__["a" /* ChatService */]) === "function" && _a || Object])
], ChatListComponent);

var _a;
//# sourceMappingURL=chat-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/chat-window/chat-message/chat-message.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chat-window/chat-message/chat-message.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  {{ message.isSentByMe ? 'eu:' : 'ela:' }} {{ message.message }}\n</p>"

/***/ }),

/***/ "../../../../../src/app/chat-window/chat-message/chat-message.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatMessageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chat_model__ = __webpack_require__("../../../../../src/app/chat.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatMessageComponent = (function () {
    function ChatMessageComponent() {
    }
    ChatMessageComponent.prototype.ngOnInit = function () {
    };
    return ChatMessageComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__chat_model__["b" /* ChatMessage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__chat_model__["b" /* ChatMessage */]) === "function" && _a || Object)
], ChatMessageComponent.prototype, "message", void 0);
ChatMessageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-chat-message',
        template: __webpack_require__("../../../../../src/app/chat-window/chat-message/chat-message.component.html"),
        styles: [__webpack_require__("../../../../../src/app/chat-window/chat-message/chat-message.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ChatMessageComponent);

var _a;
//# sourceMappingURL=chat-message.component.js.map

/***/ }),

/***/ "../../../../../src/app/chat-window/chat-window.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chat-window/chat-window.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"chat != undefined\">\n  <p>{{chat.name}}</p>\n  <div class=\"container\">\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\" *ngFor=\"let itemmessage of chat.messages\">\n        <app-chat-message [message]=\"itemmessage\"></app-chat-message>\n      </li>\n    </ul>\n    <form>\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" name=\"message\" #msg>\n            <button type=\"button\" (click)=\"sendMessage(msg)\">send</button>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/chat-window/chat-window.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatWindowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chat_service__ = __webpack_require__("../../../../../src/app/chat.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatWindowComponent = (function () {
    function ChatWindowComponent(chatService) {
        var _this = this;
        this.chatService = chatService;
        this.chatService.selectedChatChanged.subscribe(function (chat) {
            _this.chat = chat;
        });
    }
    ChatWindowComponent.prototype.ngOnInit = function () {
    };
    ChatWindowComponent.prototype.sendMessage = function (asd) {
        this.chatService.sendMessage(this.chat.id, asd.value);
    };
    return ChatWindowComponent;
}());
ChatWindowComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-chat-window',
        template: __webpack_require__("../../../../../src/app/chat-window/chat-window.component.html"),
        styles: [__webpack_require__("../../../../../src/app/chat-window/chat-window.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__chat_service__["a" /* ChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__chat_service__["a" /* ChatService */]) === "function" && _a || Object])
], ChatWindowComponent);

var _a;
//# sourceMappingURL=chat-window.component.js.map

/***/ }),

/***/ "../../../../../src/app/chat.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Chat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ChatMessage; });
var Chat = (function () {
    function Chat(id, name, unreadCount, messages) {
        this.id = id;
        this.name = name;
        this.unreadCount = unreadCount;
        this.messages = messages;
    }
    return Chat;
}());

var ChatMessage = (function () {
    function ChatMessage(message, isSentByMe) {
        this.message = message;
        this.isSentByMe = isSentByMe;
    }
    return ChatMessage;
}());

//# sourceMappingURL=chat.model.js.map

/***/ }),

/***/ "../../../../../src/app/chat.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chat_model__ = __webpack_require__("../../../../../src/app/chat.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__communication_service__ = __webpack_require__("../../../../../src/app/communication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChatService = (function () {
    function ChatService(commService) {
        var _this = this;
        this.commService = commService;
        this.chats = [
            new __WEBPACK_IMPORTED_MODULE_0__chat_model__["a" /* Chat */]('123', 'Fernando', 5, [
                new __WEBPACK_IMPORTED_MODULE_0__chat_model__["b" /* ChatMessage */]('hello', true),
                new __WEBPACK_IMPORTED_MODULE_0__chat_model__["b" /* ChatMessage */]('its me', true),
                new __WEBPACK_IMPORTED_MODULE_0__chat_model__["b" /* ChatMessage */]('hahaha', false)
            ]),
            new __WEBPACK_IMPORTED_MODULE_0__chat_model__["a" /* Chat */]('457', 'Stefani W', 0, [])
        ];
        this.chatsChanged = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.selectedChatChanged = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        commService.chatsChanged.subscribe(function (chats) {
            _this.chatsChanged.next(chats);
        });
    }
    ChatService.prototype.setChats = function (chats) {
        this.chats = [];
        for (var _i = 0, chats_1 = chats; _i < chats_1.length; _i++) {
            var chat = chats_1[_i];
            this.chats.push(chat);
        }
        this.chatsChanged.next(this.getChats());
        this.updateSelectedChat();
    };
    ChatService.prototype.updateSelectedChat = function () {
        var _this = this;
        if (this.selectedChat === undefined)
            return;
        this.chats.forEach(function (value) {
            if (value.id === _this.selectedChat.id) {
                _this.selectedChatChanged.next(value);
            }
        });
    };
    ChatService.prototype.getChats = function () {
        return this.chats.slice();
    };
    ChatService.prototype.setSelectedChat = function (chat) {
        this.selectedChat = chat;
        this.selectedChatChanged.next(chat);
    };
    ChatService.prototype.sendMessage = function (chatId, msg) {
        this.commService.sendMessage({
            type: 'sendMessage',
            value: {
                chatId: '554991620309@c.us',
                message: msg
            }
        });
    };
    return ChatService;
}());
ChatService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__communication_service__["a" /* CommunicationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__communication_service__["a" /* CommunicationService */]) === "function" && _a || Object])
], ChatService);

var _a;
//# sourceMappingURL=chat.service.js.map

/***/ }),

/***/ "../../../../../src/app/communication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommunicationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__windowref__ = __webpack_require__("../../../../../src/app/windowref.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MessageObject = (function () {
    function MessageObject() {
    }
    return MessageObject;
}());
var CommunicationService = (function () {
    function CommunicationService(winref) {
        var _this = this;
        this.winref = winref;
        this.chatsChanged = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.receiveMessage = function (e) {
            console.log(e.data);
            if (e.data.type === 'chats') {
                _this.chatsChanged.next(e.data.value);
            }
        };
        this.winref.nativeWindow.addEventListener('message', this.receiveMessage, false);
    }
    CommunicationService.prototype.sendMessage = function (e) {
        this.winref.nativeWindow.parent.postMessage(e, '*');
    };
    return CommunicationService;
}());
CommunicationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__windowref__["a" /* WindowRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__windowref__["a" /* WindowRef */]) === "function" && _a || Object])
], CommunicationService);

var _a;
//# sourceMappingURL=communication.service.js.map

/***/ }),

/***/ "../../../../../src/app/windowref.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WindowRef; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

function _window() {
    // return the native window obj
    return window;
}
var WindowRef = (function () {
    function WindowRef() {
    }
    Object.defineProperty(WindowRef.prototype, "nativeWindow", {
        get: function () {
            return _window();
        },
        enumerable: true,
        configurable: true
    });
    return WindowRef;
}());
WindowRef = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], WindowRef);

//# sourceMappingURL=windowref.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map