# 订阅地址
const url = "";

$httpClient.head(url, (err, response) => {
    let info = getDataInfo(response.headers["subscription-userinfo"] || response.headers["Subscription-userinfo"]);
    console.log('info:' + info)
    let used = bytesToSize(info.download + info.upload);
    let total = bytesToSize(info.total);
    let expire = info.expire == undefined ? '' : formatTimestamp(info.expire * 1000)
    $done({
      title: 'DlerCloud',
      content: used + '/' + total + '|' + expire,
      style: 'info'
  });
});

function getDataInfo(info) {
  return Object.fromEntries(
    info.split("; ").map(item => item.split("=")).map(([k, v]) => [k,parseInt(v)])
  );
}

function bytesToSize(bytes) {
    if (bytes === 0) return '0B';
    var k = 1024;
    sizes = ['B','KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    i = Math.floor(Math.log(bytes) / Math.log(k));
    return (bytes / Math.pow(k, i)).toFixed(2) + sizes[i];
}

function formatTimestamp( timestamp ) {
    var dateObj = new Date( timestamp );
    var year = dateObj.getYear() + 1900;
    var month = dateObj.getMonth() + 1;
  month = month < 10 ? '0' + month : month
    var day = dateObj.getDate();
    return year +"-"+ month +"-" + day;      
}