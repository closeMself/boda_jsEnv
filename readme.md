0218:

1.重构了整个架构,现在除window外所有原型和实例都已经存在了globalobj中,

- 可以让所有方法,都经过dispatch分发器转发
- 可以在检测代理的情况下,知道目标代码调用了window下哪些方法

2.由于刚修改完,很多方法还未进行同步

0216: 

1.补了下document.all 

2.补了下form表单操作

请使用我提供的node,不然doument.all会报错,然后由于精力有限,暂时主要补全jsdom版本的,因为补起来比较方便

Q:826814133

V:bo_yuuki

