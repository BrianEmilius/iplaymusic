export default function timeConvert(time) {
	if (Object.prototype.toString.call(time) !== "[object Number]") {
		throw new Error("TypeError: You must provide function with a number");
	}
	var minutes = Math.floor(time / 60000);
	var seconds = ((time % 60000) / 1000).toFixed(0);
	return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
}
