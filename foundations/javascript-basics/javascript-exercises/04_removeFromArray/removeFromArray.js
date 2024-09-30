const removeFromArray = function(arrayThings, ...opts) {
	let newArray = [];
	for(const obj of arrayThings){
		if (opts.includes(obj)){
			continue;
		}else{
			newArray.push(obj);
		}
	}
	return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
