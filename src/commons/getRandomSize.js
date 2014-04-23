define('commons/getRandomSize',function(require,exports,module){
	module.exports = function(){
		var max = 40,min = 20;
		return Math.floor(Math.random() * (max - min + 1) + min);
	};
});
