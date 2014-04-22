define('conf/app', function(require, exports, module) {
	var $ = require('$');
	var text = require('commons/text');
	var getRandomColor = require('commons/getRandomColor');
	var getRandomSize = require('commons/getRandomSize');
	var html = text.split('').map(function(t) {
		return '<strong style="font-size:'+getRandomSize()+'px;color:'+getRandomColor()+';">' + t + '</strong>';
	}).join('');

	$('#demo').html(html);
});

