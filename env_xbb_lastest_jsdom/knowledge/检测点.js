//html 放入框架的解析器中
html = `
<!doctype html>
<html>
<body>
    <head>
        <div style="">
            <meta content="">
            <meta>
        </div>
        <div>
        bobo1
        </div>
        <div>
        bobo2
        </div>
    </head>
</body>
</html>
`



var endsign = ''

function test_documentElement() {
    if (document.documentElement !== document.documentElement) {
        console.log('document.documentElement 可以被检测')
        endsign += 1
    }
}
test_documentElement()

function test_window() {
    if (self.window.top.self.top == top.window.self.window || self.window.top.self.top == top.window.self || self.window.top.self.top.parent == top.window.self) {
        endsign += 1

    } else {
        console.log('self window  top parent 可以被检测 ')
    }

}
test_window()

function test_console() {
    if (JSON.stringify(console) == '{"memory":{}}') {
        if (
            JSON.stringify([console, 1, 2, 3]) == '[{"memory":{}},1,2,3]') {
            endsign += 1

        } else {
            console.log('JSON.stringify([console, 1, 2, 3]) 可以被检测 ')
        }
    } else {
        console.log('JSON.stringify(console) 可以被检测 ')
    }
}

test_console()

function test_document_activeElement() {
    try {
        Document.prototype.activeElement
        console.log('Document.prototype.activeElement  可以被检测');
    } catch (e) {
        endsign += 1
        try {
            Window.prototype.PERSISTENT
            endsign += 1
        } catch {
            console.log('Window.prototype.PERSISTENT  可以被检测');

        }
    }
}
test_document_activeElement()

function test_settime() {
    //setimetime检测
    var testTimeList = []
    var testTimeList2 = []
    var testTimeList3 = []
    setTimeout(function () {
        testTimeList.push(1)
    }, 100)

    //电池检测
    try {
        if (navigator.getBattery().__proto__ + '' == '[object Promise]') {
            if (navigator.getBattery().then().__proto__ + '' == '[object Promise]') {
                navigator.getBattery()
                    .then(function (res) {
                        endsign += 0
                        if (testTimeList.length > 0) {
                            endsign += 0
                            console.log(`setTimeout 可以被检测`);
                        }
                        if (res.level) {
                        }
                        else {
                            console.log(`navigator.getBattery() level可以被检测`);
                        }
                    })
            } else {
                console.log('navigator.getBattery() then可以被检测');

            }

        } else {
            console.log('navigator.getBattery() 可以被检测');
        }
    } catch {
        log(`navigator.getBattery 未实现`,)
    }


    setTimeout(function () {
        if (testTimeList.length) {
            endsign += '5_'

            if (testTimeList2.length) {
                console.log(`setTimeout0 可以被检测`);

            }
        } else {
            console.log(`setTimeout1 可以被检测`);

        }
    }, 100)

    setTimeout(function () {
        testTimeList2.push(1)
        if (testTimeList.length) {
            endsign += '6_'

            testTimeList2.push(1)
        } else {
            console.log(`setTimeout2 可以被检测`);

        }
    }, 200)

    setTimeout(function () {
        if (testTimeList2.length) {
            endsign += '7_'

        } else {
            console.log(`setTimeout3 可以被检测`);

        }
    }, 200)


    setTimeout(function () {
        endsign += '9_'
        testTimeList3.push(1)
    }, 200)
    setInterval(function () {
        endsign += '9__'
        testTimeList3.push(1)
    }, 700)
    clearTimeout(5)
    clearTimeout(6)
    setTimeout(function () {
        endsign += 'A'
        if (testTimeList3.length > 0) {
            console.log(`clearTimeout 可以被检测`);
        }
        console.log(btoa(endsign))
    }, 200)



}
test_settime()

function test_window_location() {
    if (Object.getOwnPropertyDescriptor(window, 'location').configurable) {
        console.log(`window location 被检测`);
    } else {
        endsign += 'location'
    }
}
test_window_location()




function test_font_fp() {
    let fonts = [];
    let testFont = "DFPhelvetica;Tibetan Machine Uni;Cooljazz;Verdana;Helvetica Neue LT Pro 35 Thin;tahoma;LG Smart_H test Regular;DINPro-light;Helvetica LT 43 Light Extended;HelveM_India;SECRobotoLight Bold;OR Mohanty Unicode Regular;Droid Sans Thai;Kannada Sangam MN;DDC Uchen;clock2016_v1.1;SamsungKannadaRegular;MI LANTING Bold;SamsungSansNum3L Light;verdana;HelveticaNeueThin;SECFallback;SamsungEmoji;Telugu Sangam MN;Carrois Gothic SC;Flyme Light Roboto Light;SoMA-Digit Light;SoMC Sans Regular;HYXiYuanJ;sst;samsung-sans-num4T;gm_mengmeng;Lohit Kannada;times new roman;samsung-sans-num4L;serif-monospace;SamsungSansNum-3T Thin;ColorOSUI-XThin;Droid Naskh Shift Alt;SamsungTeluguRegular;Bengali OTS;MI LanTing_GB Outside YS;FZMiaoWu_GB18030;helve-neue-regular;SST Medium;Courier New;Khmer Mondulkiri Bold;Helvetica LT 23 Ultra Light Extended;Helvetica LT 25 Ultra Light;Roboto Medium;Droid Sans Bold;goudy;sans-serif-condensed-light;SFinder;noto-sans-cjk-medium;miui;MRocky PRC Bold;AndroidClock Regular;SamsungSansNum-4L Light;sans-serif-thin;AaPangYaer;casual;BN MohantyOT Bold;x-sst;NotoSansMyanmarZawgyi;Helvetica LT 33 Thin Extended;AshleyScriptMT Alt;Noto Sans Devanagari UI;Roboto Condensed Bold;Roboto Medium Italic;miuiex;Noto Sans Gurmukhi UI;SST Vietnamese Light;LG_Oriya;hycoffee;x-sst-ultralight;DFHeiAW7-A;FZZWXBTOT_Unicode;Devanagari Sangam MN Bold;sans-serif-monospace;Padauk Book Bold;LG-FZYingBiKaiShu-S15-V2.2;LG-FZYingBiKaiShu-S15-V2.3;HelveticaNeueLT Pro 35 Th;Microsoft Himalaya;SamsungSansFallback;SST Medium Italic;AndroidEmoji;SamsungSansNum-3R;ITC Stone Serif;sans-serif-smallcaps;x-sst-medium;LG_Sinhalese;Roboto Thin Italic;century-gothic;Clockopia;Luminous_Sans;Floridian Script Alt;Noto Sans Gurmukhi Bold;LTHYSZK Bold;GS_Thai;SamsungNeoNum_3T_2;Arabic;hans-sans-normal;Lohit Telugu;HYQiHei-50S Light;Lindsey for Samsung;AR Crystalhei DB;Samsung Sans Medium;samsung-sans-num45;hans-sans-bold;Luminous_Script;SST Condensed;SamsungDevanagariRegular;Anjal Malayalam MN;SamsungThai(test);FZLanTingHei-M-GB18030;Hebrew OTS;GS45_Arab(AndroidOS);Samsung Sans Light;Choco cooky;helve-neue-thin;PN MohantyOT Medium;LG-FZKaTong-M19-V2.4;Droid Serif;SamsungSinhalaRegular;helvetica;LG-FZKaTong-M19-V2.2;Noto Sans Devanagari UI Bold;SST Light;DFPEmoji;weatherfontnew Regular;RobotoNum3R;DINPro-medium;Samsung Sans Num55;SST Heavy Italic;LGlock4 Regular_0805;Georgia;noto-sans-cjk;Telugu Sangam MN Bold;MIUI EX Normal;HYQiHei-75S Bold;NotoSansMyanmarZawgyi Bold;yunospro-black;helve-neue-normal;Luminous_Serif;TM MohantyOT Normal;SamsungSansNum-3Lv Light;Samsung Sans Num45;SmartGothic Medium;georgia;casual-font-type;Samsung Sans Bold;small-capitals;MFinance PRC Bold;FZLanTingHei_GB18030;SamsungArmenian;Roboto Bold;century-gothic-bold;x-sst-heavy;SST Light Italic;TharLon;x-sst-light;Dinbol Regular;SamsungBengaliRegular;KN MohantyOTSmall Medium;hypure;SamsungTamilRegular;Malayalam Sangam MN;Noto Sans Kannada UI;helve-neue;Helvetica LT 55 Roman;Noto Sans Kannada Bold;Sanpya;SamsungPunjabiRegular;samsung-sans-num4Lv;LG_Kannada;Samsung Sans Regular;Zawgyi-One;Droid Serif Bold Italic;FZKATJW;courier new;SamsungEmojiRegular;MIUI EX Bold;Android Emoji;Noto Naskh Arabic UI;LCD Com;Futura Medium BT;Vivo-extract;Bangla Sangam MN Bold;hans-sans-regular;SNum-3R;SNum-3T;hans-sans;SST Ultra Light;Roboto Regular;Roboto Light;Hanuman;newlggothic;DFHeiAW5-A;hans-sans-light;Plate Gothic;SNum-3L;Helvetica LT 45 Light;Myanmar Sangam Zawgyi Bold;lg-sans-serif-light;MIUI EX Light;Roboto Thin;SoMA Bold;Padauk;Samsung Sans;Spacious_SmallCap;sans-serif;DV MohantyOT Medium;Stable_Slap;monaco;Flyme-Light;fzzys-dospy;ScreenSans;clock2016;Roboto Condensed Bold Italic;Arial;KN Mohanty Medium;MotoyaLMaru W3 mono;Handset Condensed;Roboto Italic;HTC Hand;SST Ultra Light Italic;SST Vietnamese Roman;Noto Naskh Arabic UI Bold;chnfzxh-medium;SNumCond-3T;century-gothic-regular;default_roboto-light;Noto Sans Myanmar;Myanmar Sangam MN;Apple Color Emoji;weatherfontReg;SamsungMalayalamRegular;arial;Droid Serif Bold;CPo3 PRC Bold;MI LANTING;SamsungKorean-Regular;test45 Regular;spirit_time;Devanagari Sangam MN;ScreenSerif;Roboto;cursive-font-type;STHeiti_vivo;chnfzxh;Samsung ClockFont 3A;Roboto Condensed Regular;samsung-neo-num3R;GJ MohantyOT Medium;Chulho Neue Lock;roboto-num3L;helve-neue-ultraLightextended;SamsungOriyaRegular;SamsungSansNum-4Lv Light;MYingHei_18030_C2-Bold;DFPShaoNvW5-GB;Roboto Black;helve-neue-ultralight;gm_xihei;LGlock4 Light_0805;Gujarati Sangam MN;Malayalam Sangam MN Bold;roboto-num3R;STXihei_vivo;FZZhunYuan_GB18030;noto-sans-cjk-light;coloros;Noto Sans Gurmukhi;Noto Sans Symbols;Roboto Light Italic;Lohit Tamil;cursive;default_roboto;BhashitaComplexSans Bold;LG_Number_Roboto Thin;monospaced-without-serifs;Helvetica LT 35 Thin;samsung-sans-num3LV;DINPro;Jomolhari;sans-serif-light;helve-neue-black;Lohit Bengali;Myanmar Sangam Zawgyi;Droid Serif Italic;Roboto Bold Italic;NanumGothic;Sony Mobile UD Gothic Regular;Georgia Bold Italic;samsung-sans-num3Lv;yunos-thin;samsung-neo-num3T-cond;Noto Sans Myanmar UI Bold;lgserif;FZYouHei-R-GB18030;Lohit Punjabi;baskerville;samsung-sans-num4Tv;samsung-sans-thin;LG Emoji;AnjaliNewLipi;SamsungSansNum-4T Thin;SamsungKorean-Bold;miuiex-light;Noto Sans Kannada;Roboto Normal Italic;Georgia Italic;sans-serif-medium;Smart Zawgyi;Roboto Condensed Italic;Noto Sans Kannada UI Bold;DFP Sc Sans Heue30_103;LG_Number_Roboto Bold;Padauk Book;x-sst-condensed;Sunshine-Uchen;Roboto Black Italic;Ringo Color Emoji;Devanagari OTS;Smart Zawgyi Pro;FZLanTingHei-M-GBK;AndroidClock-Large Regular;proportionally-spaced-without-serifs;Cutive Mono;times;LG Smart_H test Bold;DINPro-Light;sans-serif-black;Lohit Devanagari;proportionally-spaced-with-serifs;samsung-sans-num3L;MYoung PRC Medium;DFGothicPW5-BIG5HK-SONY;hans-sans-medium;SST Heavy;LG-FZZhunYuan-M02-V2.2;MyanmarUNew Regular;Noto Naskh Arabic Bold;SamsungGujarathiRegular;fantasy;helve-neue-light;Helvetica Neue OTS Bold;noto-sans-cjk-bold;samsung-sans-num3R;Lindsey Samsung;samsung-sans-num3T;ScreenSerifMono;ETrump Myanmar_ZW;helve-neue-thinextended;Noto Naskh Arabic;LG_Gujarati;Smart_Monospaced;Tamil Sangam MN;LG Emoji NonAME;Roboto Condensed Light Italic;gm_jingkai;FZLanTingKanHei_GB18030;lgtravel;palatino;Georgia Bold;Droid Sans;LG_Punjabi;SmartGothic Bold;Samsung Sans Thin;SST Condensed Bold;Comics_Narrow;courier;Oriya Sangam MN;helve-neue-lightextended;FZLanTingHei-R-GB18030;AR CrystalheiHKSCS DB;serif;RTWSYueRoudGoG0v1-Regular;MiaoWu_prev;FZY1K;LG_Number_Roboto Regular;AndroidClock;SoMA Regular;HYQiHei-40S Lightx;lg-sans-serif;Dancing Script Bold;default;sec-roboto-light;ColorOSUI-Regular;test Regular;Tamil Sangam MN Bold;FZYingBiXingShu-S16;RobotoNum3L Light;monospaced-with-serifs;samsung-sans-num35;Cool jazz;SamsungNeoNum-3L;STXingkai;ScreenSansMono;DFPWaWaW5-GB;SamsungSansNum-3L Light;Bangla Sangam MN;Gurmukhi Sangam MN;SECRobotoLight;hyfonxrain;MYingHeiGB18030C-Bold;samsung-sans-light;Helvetica LT 65 Medium;Droid Sans Fallback;Roboto Test1 Bold;Noto Sans Myanmar Bold;sans-serif-condensed-custom;SamsungNeoNum-3T;Samsung Sans Num35;monospace;TL Mohanty Medium;helve-neue-medium;LTHYSZK;Roboto Condensed custome Bold;Myanmar3;Droid Sans Devanagari;ShaoNv_prev;samsung-neo-num3L;FZLanTingHei-EL-GBK;yunos;samsung-neo-num3T;Times New Roman;helve-neue-bold;noto-sans-cjk-regular;Noto Sans Gurmukhi UI Bold;DINPro-black;FZLanTingHei-EL-GB18030;SST Vietnamese Medium;Roboto Condensed Light;SST Vietnamese Bold;AR DJ-KK;Droid Sans SEMC;Noto Sans Myanmar UI;Coming Soon;MYuppy PRC Medium;Rosemary;Lohit Gujarati;Roboto Condensed custom Bold;FZLanTingHeiS-R-GB;Helvetica Neue OTS;Kaiti_prev;Roboto-BigClock;FZYBKSJW;Handset Condensed Bold;SamsungGeorgian;Dancing Script;sans-serif-condensed;hans-sans-thin;SamsungSansNum-4Tv Thin;Lohit Odia;BhashitaComplexSans".split(';')
    let divTag = document.createElement("div");
    divTag.innerHTML = '<span lang="zh" style="font-family:mmll;font-size:160px">fontTest</span>';
    document.body.appendChild(divTag);
    let span = divTag.children[0];
    let w = span.offsetWidth;
    let h = span.offsetHeight;
    for (let i = 0; i < testFont.length; i++) {
        span.style.fontFamily = testFont[i];
        if (w !== span.offsetWidth || h !== span.offsetHeight) {
            fonts.push(testFont[i]);

        }
    }
    let result = btoa(fonts.toString());
    // console.log(result);

    if (result == 'VmVyZGFuYSxIZWx2ZXRpY2EgTmV1ZSBMVCBQcm8gMzUgVGhpbix0YWhvbWEsdmVyZGFuYSx0aW1lcyBuZXcgcm9tYW4sQ291cmllciBOZXcsTWljcm9zb2Z0IEhpbWFsYXlhLGhlbHZldGljYSxMRy1GWkthVG9uZy1NMTktVjIuMixHZW9yZ2lhLGdlb3JnaWEsY291cmllciBuZXcsQXJpYWwsYXJpYWwsY3Vyc2l2ZSx0aW1lcyxmYW50YXN5LGNvdXJpZXIsc2VyaWYsbW9ub3NwYWNlLFRpbWVzIE5ldyBSb21hbg==') {
        endsign = endsign + result
    } else {
        console.log(`字体指纹被检测`);
    }

}
test_font_fp()



function test_getElementsByTagName() {
    let divHTMLCollection = document.getElementsByTagName('div')
    let bobocollect = divHTMLCollection.length
    if (divHTMLCollection.__proto__ + '') {
        if (divHTMLCollection[0].parentNode.parentNode.parentNode.nodeName == '#document') {
            if (
                divHTMLCollection[0].parentNode.parentNode.parentNode.parentNode == null
            ) {
                endsign += 'B'
            } else {
                console.log(`divHTMLCollection[0].parentNode.parentNode.parentNode.parentNode  可以被检测`);

            }
        } else {
            console.log(`divHTMLCollection[0].parentNode.parentNode.parentNode.nodeName=='#document'  可以被检测`);
        }
        if (
            divHTMLCollection[0].parentElement.parentElement.parentElement == null

        ) {
            endsign += 'C'
        } else {
            console.log(`divHTMLCollection[0].parentElement.parentElement.parentElement  可以被检测`);

        }

        divHTMLCollection[0].parentNode.removeChild(divHTMLCollection[0])
        divHTMLCollection[0].parentNode.removeChild(divHTMLCollection[0])
        if (bobocollect > divHTMLCollection.length) {
            endsign += 'D'
        } else {
            console.log(`divHTMLCollection[0].parentNode.removeChild 可以被检测`);

        }
        if (divHTMLCollection[0].innerHTML.indexOf('bobo2') > 0) {
            endsign += 'D'
        } else {
            console.log(`divHTMLCollection[0].innerHTML 可以被检测`);
        }
    } else {
        console.log(`document.getElementsByTagName 原型可以被检测`);
    }
}

test_getElementsByTagName()

function test_obj_proto() {
    try {
        var bobo__ = {}
        bobo__.__proto__ = location
        bobo__.href
        console.log(`bobo__={};bobo__.__proto__=location 可以被检测`);

    } catch {
        endsign += 'E'
    }

    try {
        var bobo__2 = {}
        bobo__2.__proto__ = Document.prototype
        bobo__2.activeElement
        console.log(`bobo__2={};bobo__2.__proto__=Document.prototype 可以被检测`);

    } catch {
        endsign += 'F'
    }

}

function test_tostring() {
    //tostring检测
    if (console.log + '' == 'function log() { [native code] }' || console.log.toString().toString() == 'function log() { [native code] }') {
        endsign += 'G'
    } else {
        console.log(`console.log tostring 可以被检测  `)
    }
}
test_tostring()

function test_getOwnPropertyDescriptor() {
    if (Object.getOwnPropertyDescriptor(window, 'document').set) {
        console.log(`Object.getOwnPropertyDescriptor(window,'document') 可以被检测`);
    } else {
        endsign += 'h'
        let get_name = Object.getOwnPropertyDescriptor(window, 'document').get + ''
        if (get_name == 'function get document() { [native code] }') {
            endsign += 'I'
        } else {
            console.log(`Object.getOwnPropertyDescriptor(window,'document').get 可以被检测`);

        }
    }
    try {
        Object.getOwnPropertyDescriptor(window, 'document').get()
        console.log(`Object.getOwnPropertyDescriptor(window,'document').get() 可以被检测`);

    } catch {
        endsign += 'J'

    }
}
test_getOwnPropertyDescriptor()

function test_node() {
    // delete globalThis[Symbol.toStringTag];
    try { if (global) { console.log(`global 被检测`); } } catch { try { if (GLOBAL) { console.log(`GLOBAL 被检测`); } } catch { try { if (Buffer) { console.log(`Buffer 被检测`); } } catch { try { if (process) { console.log(`process 被检测`); } } catch { try { if (root) { console.log(`root 被检测`); } } catch { try { if (WindowProperties) { console.log(`WindowProperties 被检测`); } } catch { try { if (global) { console.log(`global 被检测`); } } catch { try { if (global) { console.log(`global 被检测`); } } catch { try { if (global) { console.log(`global 被检测`); } } catch { try { if (VMError) { console.log(`VMError 被检测`); } } catch { try { } catch { try { } catch { } } } } } } } } } } } }

    if (Object.getOwnPropertyDescriptor(window, 'Function').value + '' == 'function Function() { [native code] }') {

    } else {
        console.log(`Object.getOwnPropertyDescriptor(window,'Function').value +''  可以被检测`);
    }
}
test_node()

function test_createEvent() {
    var MouseEvent__ = document.createEvent("MouseEvent");

    if (MouseEvent__ && MouseEvent__.__proto__ + '' == '[object MouseEvent]') {

    } else {
        console.log(`document.createEvent("MouseEvent");  可以被检测`);
    }


    if (Object.getOwnPropertySymbols(navigator.getBattery()).length > 0) {
        console.log(`Object.getOwnPropertySymbols(navigator.getBattery())  可以被检测`);
    }
}

test_createEvent()

//plugin检测
function test_plugin() {
    if (navigator.plugins[0][0] == '[object MimeType]') {

    } else {
        console.log(`navigator.plugins[0][0]  可以被检测`);
    }
}


function test_this(){
    let test__=function (){}
    Object.defineProperty(this,test__,{
        configurable:true,
        enumerable:true,
        writable:true,
    })
    if(test__ +'' =='function (){}'){

    }else{
        console.log(`test_this  可以被检测`);
    }
}
test_this()


function test_append(){
    var bbb=document.createElement('div')
    let aaa=document.body.append(bbb)
    if (aaa){
        console.log(`document.body.append 可以被检测`);
    }
    let cccc=document.body.appendChild(bbb)
    if (cccc=undefined){
        console.log(`document.body.append 可以被检测`);

    }
}
test_append()

function test_unscopables(){
    if (window.Element.prototype[Symbol.unscopables].after){

    }else{
        console.log(`window.Element.prototype[Symbol.unscopables].after 可以被检测`);
    }
    
}




// r6检测
function _testform(){
    from = document.createElement("form")
    from.id = '__Zm9ybS5pZAo__'
    from.action = 'https://ucenter.miit.gov.cn/login.jsp'
    input1 = document.createElement("input")
    input1.id = 'username'
    input1.content = 'action'
    input1.name = 'action'
    from.appendChild(input1)
    var ccc=from.action
    console.log(ccc)

}

_testform()


function test_define(){
    var aaa=Object.defineProperty(document.documentElement.children, 0,{value:10})
    if (aaa[0] instanceof HTMLHeadElement){

    }else{
        console.log(`Object.defineProperty(document.documentElement.children, 0,{value:10}) 被检测`);
    }

}

function test_this(){
    function s(){}
    var aaaa=Object.getOwnPropertyDescriptors(this).s.configurable
    if (aaaa){
        console.log(`Object.getOwnPropertyDescriptors(this).s.configurable 可以被检测`)
    }else{

    }
}
test_this()

function test_entries(){
    let list_=Object.entries(Document)
    if (list_.length >0){
        console.log(`Object.entries(Document) 可以被检测`);
    }
}
test_entries()





















