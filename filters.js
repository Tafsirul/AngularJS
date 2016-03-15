angular.module('myFilters',[])
 					 // =====the stiring will be in camelCase=====
 .filter("camelcase", [ function(){
 	return function(str){	//automatically get data
    	return (str || '').toLowerCase().replace(/(\s.|^.)/g, function(match, group) {
        	return group ? group.toUpperCase() : '';
    	});
  	} 
 }                
])

 				 // =====reverse the string=====
 .filter('reverse', function () {
    return function (string) {	//automatically get data
      //step 2 funciton changes data and return the data
      return string.split('').reverse().join('');
    };
  });


 				// =====the first letter of the srting will be capitalize=====
 .filter('capitalize',function(){
	return function(input) { //automatically get data
		//step 2 funciton changes data
		var result = input.charAt(0).toUpperCase() + input.substr(1);
		//step 3 is return the changed data
		return result;
	};


				// =====filtered minimum price and maximum price===== 
 .filter('cribsFilter',function(){
 	return function(listings, priceInfo){
 		var filtered =[];

 		var min = priceInfo.min;
 		var max = priceInfo.max;

 		angular.forEach(listings, function(listing){
 			if(listing.price >=min && listing.price <= max){
 				filtered.push(listing);
 			}
 		});
 		return filtered;
 	}
 });