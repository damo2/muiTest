/** {"code":1001,"msg":"OK","cookie":"c9f1170b-59a4-475a-96cd-c92b915c6979",
 *  "admin":{"id":57,"userName":"admin1","adminType":1,"adminRole":"邀约客服","level":1,"role":"分店管理员",
 *  "business":{"id":22,"addr":"产后王璐","name":"北京大学","tel":"18062048550"},"name":"小可爱"}}
 */

function setAdmin(adminObj) {
	adminObj = adminObj || {};
	var adminStr = JSON.stringify(adminObj); //对象转json
	localStorage.setItem('admin', adminStr);
}

function setCookie(cookie) {
	cookie = cookie || {};
	localStorage.setItem('cookie', cookie);
}

function getCookie(cookie) {
	var cookieStr = localStorage.getItem('cookie') || "{}";
	return cookieStr;
}

function getAdminObj() {
	var adminStr = localStorage.getItem('admin') || "{}";
	var adminObj = eval('(' + adminStr + ')');
	return adminObj;
}

function getBusinessObj() {
	var adminObj = getAdminObj();
	return adminObj.business;
}

function getAdminId() {
	var adminObj = getAdminObj();
	console.log('adminId=' + adminObj.id);
	return adminObj.id;
}

function getAdminName() {
	var adminObj = getAdminObj();
	console.log('adminName=' + adminObj.userName);
	return adminObj.userName;
}

function getBusinessId() {
	var businessObj = getBusinessObj();
	console.log('businessId=' + businessObj.id);
	return businessObj.id;
}

function getBusinessName() {
	var businessObj = getBusinessObj();
	console.log('businessName=' + businessObj.name);
	return businessObj.name;
}

function getBusinessAddr() {
	var businessObj = getBusinessObj();
	console.log('businessAddr=' + businessObj.addr);
	return businessObj.addr;
}

function getBusinessTel() {
	var businessObj = getBusinessObj();
	console.log('businessTel=' + businessObj.tel);
	return businessObj.tel;
}