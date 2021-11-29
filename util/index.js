/**
 * 人性化时间处理 传入时间 YY-MM-dd hh-mm-ss
 */
function getBeautifyTime(date) {
  var timestamp = new Date(date.replace(/-/g, "/")).getTime();
  var mistiming = Math.round(new Date() / 1000) - timestamp / 1000;
  var postfix = mistiming > 0 ? "前" : "后";
  if (mistiming <= 0) {
    return "刚刚";
  }
  mistiming = Math.abs(mistiming);
  var arrr = ["年", "个月", "星期", "天", "小时", "分钟", "秒"];
  var arrn = [31536000, 2592000, 604800, 86400, 3600, 60, 1];
  for (var i = 0; i < 7; i++) {
    var inm = Math.floor(mistiming / arrn[i]);

    if (inm != 0) {
      if (i == 6) {
        return "刚刚";
      }

      return inm + " " + arrr[i] + postfix;
    }
  }
}

/**
 * 暗黑模式
 */
function darkHandle(status) {
  if (process.browser) {
    if (status) {
      document.getElementsByTagName("html")[0].classList.add("geek-isDark");
    } else {
      document.getElementsByTagName("html")[0].classList.remove("geek-isDark");
    }
  }
}

/**
 * 锐利模式
 */
function sharpHandle(status) {
  if (process.browser) {
    if (status) {
      document.getElementsByTagName("html")[0].classList.add("geek-isSharp");
    } else {
      document.getElementsByTagName("html")[0].classList.remove("geek-isSharp");
    }
  }
}

function getByClass(clsName, parent) {
  //定义函数getByClass()实现获取document或指定父元素下所有class为on的元素
  var oParent = parent ? document.getElementById(parent) : document,
    arr = new Array(),
    cls = oParent.getElementsByTagName("*");
  for (var i = 0; i < cls.length; i++) {
    if (cls[i].className === clsName) {
      /*其实用这种写法更优,应为一个元素可能有多个className,采用===判断符号无法解决这种情况,采用indexOf()可以判断出stringObject是否存在以及索引位置,如果是返回-1表示不存在.//cls[i].className.indexOf(clsName)!=-1*/
      arr.push(cls[i]);
    }
  }
  return arr;
}

function checkHidContentFn(id, _this) {
  var hided = getByClass("hide-description text-center", "article-editor");
  var hidec = getByClass("hide-content", "article-editor");
  var hideContent = _this.$cookies.get("hideContent");

  if (hideContent && hideContent.indexOf(id) >= 0) {
    hided.forEach(dom => {
      dom.style.display = "none";
    });
    hidec.forEach(dom => {
      dom.style.display = "block";
    });
  } else {
    hided.forEach(dom => {
      dom.style.display = "block";
    });
    hidec.forEach(dom => {
      dom.style.display = "none";
    });
  }
}

function showContentFn(id, _this) {
  var hideContent = _this.$cookies.get("hideContent");
  if (hideContent && hideContent.indexOf(this.id) < 0) {
    hideContent.push(id);
    _this.$cookies.set("hideContent", hideContent);
  }
  if (!hideContent) {
    hideContent = [];
    hideContent.push(id);
    _this.$cookies.set("hideContent", hideContent);
  }
  console.log(hideContent);
  checkHidContentFn(id,_this);
}

export default {
  getBeautifyTime,
  darkHandle,
  sharpHandle,
  getByClass,
  checkHidContentFn,
  showContentFn
};
