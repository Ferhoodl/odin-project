const sumAll = function(start, finish) {
	let sum = 0;
	if (start > finish){
		let temp = start;
		start = finish;
		finish = temp;
	}
	if (!(start >= 0) || !(finish >= 0)){
		return "ERROR";
	}else if (!(typeof start == "number") || !(typeof finish == "number")){
		return "ERROR";
	}else if((start % 1 != 0) || (finish % 1 != 0)){
		return "ERROR";
	}
	else{
		for (let i = start; i <= finish; i++){
			sum += i;
		}
		return sum;
	}
};

// Do not edit below this line
module.exports = sumAll;
