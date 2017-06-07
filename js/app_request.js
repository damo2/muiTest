/**获取今日、重要、紧急、未完成、已完成任务*/
var taskRequest = {
	getTaskList: function(iBusinessId, iAdminId, iStatus, iPage, callbackSuc, callbackError) {
		var sUrl = "";
		if(iStatus == iTaskTypeToday) {
			sUrl = serverIP + '/myTask' + '?businessId=' + iBusinessId + '&adminId=' + iAdminId + '&isToday=' + iStatus + '&page=' + iPage;
		} else if(iStatus == iTaskLevelUrgent || iStatus == iTaskLevelImportant) {
			sUrl = serverIP + '/myTask' + '?businessId=' + iBusinessId + '&adminId=' + iAdminId + '&level=' + iStatus + '&page=' + iPage;
		} else if(iStatus == iTaskStatuUndone || iStatus == iTaskStatuDone) {
			sUrl = serverIP + '/myTask' + '?businessId=' + iBusinessId + '&adminId=' + iAdminId + '&status=' + iStatus + '&page=' + iPage;
		}

		console.log(sUrl);
		$.ajax({
			url: sUrl,
			headers:{'Cookie' : getCookie()},
			type: 'get',
			data:{},
			timeout: requestOutTime, //超时时间设置，单位毫秒
			success: function(data, status) {
				console.log(data);
				var dataJson = eval("(" + data + ")");
				if(dataJson.code == 1001) {
					callbackSuc(dataJson);
				} else {
					callbackError('失败');
				}
			},
			error: function() {
				callbackError('异常');
			}
		});
	}
}


var projectRequest={
	getProjectList:function(iPage,callbackSuc,callbackError){
		var sUrl = serverIP + '/getMyProject' + '?page='+ iPage;
		console.log(sUrl);
		$.ajax({
			url: sUrl,
			type: 'get',
			data:{},
			timeout: requestOutTime, //超时时间设置，单位毫秒
			success: function(data, textStatus) {
				console.log("data = "+data);
				var dataJson = eval("(" + data + ")");
				if(dataJson.code == 1001) {
					callbackSuc(dataJson);
				} else {
					callbackError(dataJson.msg);
				}
			},
			error: function(XMLHttpRequest, textStatus, errorThrown) {
				console.log("textStatus = " + textStatus + ", XMLHttpRequest = " + JSON.stringify(XMLHttpRequest)+ ", errorThrown = " + errorThrown);
				callbackError(XMLHttpRequest.status);
			}
		});
	}
}
var styleRequest={
	getstyleList:function(iPage,callbackSuc,callbackError){
		var sUrl = serverIP + '/getStyle' + '?page='+ iPage;
		console.log(sUrl);
		$.ajax({
			url: sUrl,
			type: 'get',
			data:{},
			timeout: requestOutTime, //超时时间设置，单位毫秒
			success: function(data, textStatus) {
				console.log("data = "+data);
				var dataJson = eval("(" + data + ")");
				if(dataJson.code == 1001) {
					callbackSuc(dataJson);
				} else {
					callbackError(dataJson.msg);
				}
			},
			error: function(XMLHttpRequest, textStatus, errorThrown) {
				console.log("textStatus = " + textStatus + ", XMLHttpRequest = " + JSON.stringify(XMLHttpRequest)+ ", errorThrown = " + errorThrown);
				callbackError(XMLHttpRequest.status);
			}
		});
	}
	
}