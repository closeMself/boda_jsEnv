// PresentationConnectionCloseEvent对象
PresentationConnectionCloseEvent = function PresentationConnectionCloseEvent(){return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'PresentationConnectionCloseEvent': 2 arguments required, but only 0 present.")}
bodavm.toolsFunc.safeProto(PresentationConnectionCloseEvent, "PresentationConnectionCloseEvent");
PresentationConnectionCloseEvent.prototype.__proto__=Event.prototype;
PresentationConnectionCloseEvent.__proto__=Event;
bodavm.toolsFunc.defineProperty(PresentationConnectionCloseEvent.prototype, "reason", {configurable:true, enumerable:true, get:function reason (){return bodavm.toolsFunc.dispatch(this, PresentationConnectionCloseEvent.prototype, "PresentationConnectionCloseEvent", "reason_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(PresentationConnectionCloseEvent.prototype, "message", {configurable:true, enumerable:true, get:function message (){return bodavm.toolsFunc.dispatch(this, PresentationConnectionCloseEvent.prototype, "PresentationConnectionCloseEvent", "message_get", arguments)}, set:undefined});
