// Location对象
bodavm.memory.globalobj['Location'] = function Location(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['Location'], "Location");

// debugger
// location对象
// location对象
bodavm.memory.globalobj['location'] = {}
bodavm.memory.globalobj['location'].__proto__=bodavm.memory.globalobj['Location'].prototype;
bodavm.toolsFunc.defineProperty('location', "valueOf", {configurable:false, enumerable:false, writable:false, value:function valueOf (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['location'], "location", "valueOf", arguments)}});
bodavm.toolsFunc.defineProperty('location', "ancestorOrigins", {configurable:false, enumerable:true, get:function ancestorOrigins (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['location'], "location", "ancestorOrigins_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty('location', "href", {configurable:false, enumerable:true, get:function href (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['location'], "location", "href_get", arguments)}, set:function href (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['location'], "location", "href_set", arguments)}});
bodavm.toolsFunc.defineProperty('location', "origin", {configurable:false, enumerable:true, get:function origin (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['location'], "location", "origin_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty('location', "protocol", {configurable:false, enumerable:true, get:function protocol (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['location'], "location", "protocol_get", arguments)}, set:function protocol (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['location'], "location", "protocol_set", arguments)}});
bodavm.toolsFunc.defineProperty('location', "host", {configurable:false, enumerable:true, get:function host (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['location'], "location", "host_get", arguments)}, set:function host (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['location'], "location", "host_set", arguments)}});
bodavm.toolsFunc.defineProperty('location', "hostname", {configurable:false, enumerable:true, get:function hostname (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['location'], "location", "hostname_get", arguments)}, set:function hostname (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['location'], "location", "hostname_set", arguments)}});
bodavm.toolsFunc.defineProperty('location', "port", {configurable:false, enumerable:true, get:function port (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['location'], "location", "port_get", arguments)}, set:function port (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['location'], "location", "port_set", arguments)}});
bodavm.toolsFunc.defineProperty('location', "pathname", {configurable:false, enumerable:true, get:function pathname (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['location'], "location", "pathname_get", arguments)}, set:function pathname (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['location'], "location", "pathname_set", arguments)}});
bodavm.toolsFunc.defineProperty('location', "search", {configurable:false, enumerable:true, get:function search (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['location'], "location", "search_get", arguments)}, set:function search (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['location'], "location", "search_set", arguments)}});
bodavm.toolsFunc.defineProperty('location', "hash", {configurable:false, enumerable:true, get:function hash (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['location'], "location", "hash_get", arguments)}, set:function hash (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['location'], "location", "hash_set", arguments)}});
bodavm.toolsFunc.defineProperty('location', "assign", {configurable:false, enumerable:true, writable:false, value:function assign (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['location'], "location", "assign", arguments)}});
bodavm.toolsFunc.defineProperty('location', "reload", {configurable:false, enumerable:true, writable:false, value:function reload (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['location'], "location", "reload", arguments)}});
bodavm.toolsFunc.defineProperty('location', "replace", {configurable:false, enumerable:true, writable:false, value:function replace (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['location'], "location", "replace", arguments)}});
bodavm.toolsFunc.defineProperty('location', "toString", {configurable:false, enumerable:true, writable:false, value:function toString (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['location'], "location", "toString", arguments)}});


