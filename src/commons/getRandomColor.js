define('commons/getRandomColor',function(require,exports,module){
	module.exports = function(){
		return '#' + Math.floor(Math.random() * 16777215).toString(16);
	};
});
