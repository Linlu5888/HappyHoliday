// 获取当前日期
var currentDate = new Date();
var currentDateString = formatDate(currentDate);

// 将日期格式化为"YYYY-MM-DD"
function formatDate(date) {
    var year = date.getFullYear();
    var month = (date.getMonth() + 1).toString().padStart(2, '0');
    var day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// 根据日期获取对应的HTML页面
function getPageForDate(dateString) {
    switch (dateString) {
      case "2023-12-25":
        return "pages/Christmas.html";
      case "2024-01-01":
        return "pages/New-Year-s-Day.html";
      default:
        return "pages/defaultPage.html";
    }
}

// 根据当前日期加载对应的HTML页面
loadHTMLPage(getPageForDate(currentDateString));

function loadHTMLPage(pageUrl) {
  // 发送请求到服务器上的页面
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      document.getElementById("pageContainer").innerHTML = xhr.responseText;
    }
  };
  xhr.open("GET", pageUrl, true);
  xhr.send();
}

// 页面标题转换
var originalTitle = "(*｀▽´*)";

window.addEventListener('blur', function() {
    document.title = "你要离开了嘛૮₍ ˊOˋ₎ა";
});

window.addEventListener('focus', function() {
    document.title = "欢迎回来吖〃• ֊ •〃";
    // 设置5秒延迟
    setTimeout(function() {
        document.title = originalTitle;
    }, 5000);
});
