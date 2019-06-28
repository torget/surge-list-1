/*
世界时间
 
作者:聪聪
聪聪 https://t.me/congcong
群组 https://t.me/YinxiangBiji
频道 https://t.me/YinxiangBiji_News
*/
launch();

async function time() {
	Date now = new Date(); 
	var msg = now.toLocaleString();
    $notification.post('世界时间', "", msg);
    $done();
}