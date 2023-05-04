
function getNow() {
	var search = location.search.replace(/^\?/, '');
	var datetime;

	if (search) {
		search.split('&').forEach(function (str) {
			var keyValue = str.split('=');
			var key = keyValue[0];

			if (key !== 'ndt') {
				return;
			}

			var value = keyValue[1];
			var result = /(\d{4})-(\d{2})-(\d{2})-(\d{2}):(\d{2})/.exec(value);

			if (result) {
				var YYYY = result[1];
				var MM = result[2];
				var DD = result[3];
				var hh = result[4];
				var mm = result[5];
				datetime = new Date([YYYY, MM, DD].join('-') + ' ' + [hh, mm].join(':'));

				//console.log(datetime);
			}
		});
	}
	return datetime || new Date();
}

//banner data
function bannerInsert() {
	var srcUrl = '//eventimg.auction.co.kr/md/auction/01982C89B6/';
	var	targetSpecial =  $('.area-slot-banner--special .area-slot__fence');
	var targetOrdinary = $('.area-slot-banner--ordinary .area-slot__fence');

	var slots = [
		{
			startTime: new Date('05/08/2023 09:00:00'),
			endTime: new Date('05/19/2023 23:59:59'),
			target: targetSpecial,
			html: '\
				<div class="division-slot">\
					<div class="box-banner" style="height:620px;background-image:url('+ srcUrl +'230508.banner__bigSmileDay.png)">\
					</div>\
				</div>\
			'
		},
	];

	function check() {
		var nowTime = getNow();
		//console.log('check', nowTime);

		slots.forEach(function (slot, index) {
			var id = 'slot-' + index;

			// console.log({
			// 	nowTime,
			// 	startTime: slot.startTime,
			// 	endTime: slot.endTime,
			// 	show: nowTime > slot.startTime && slot.endTime > nowTime
			// });

			if (nowTime >= slot.startTime && slot.endTime > nowTime) { //현재기간이 시작기간보다 지나거나 종료기간이 안될때 
				if (!$('#' + id).length) {
					var inserted = $(slot.html).prependTo(slot.target);
					inserted.attr('id', id);
					//console.log(inserted);
					console.log('지금 이벤트 진행중!');
				}
			} else {
				$('#' + id).remove();
				console.log('이벤트 마감!');
			}
		})
	}

	check();

	setInterval(check, 1000 * 60);
}


$(document).ready(function(){
	bannerInsert()
})
