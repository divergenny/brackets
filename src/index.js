module.exports = function check(str, bracketsConfig) {
    let array = [];
	let cacheOfArray = str;
	for(let subarray = 0; subarray < bracketsConfig.length; subarray++){
		array[subarray] = bracketsConfig[subarray][0] + bracketsConfig[subarray][1];
	}
	for (;;) {
		let compare = cacheOfArray;
		for ( let i = 0; i < bracketsConfig.length; i++ ) {
			for (;;) {
				let search = cacheOfArray.indexOf(array[i]);
				if ( search >= 0 ) {
					cacheOfArray = cacheOfArray.replace( array[i], "" );
				}
				else if ( search < 0) {
					break;
				}
			}
		}
		if ( compare === cacheOfArray){
			if(cacheOfArray == ""){
				return true;
			}
			else{
				return false;
			}
		}
	}
}
