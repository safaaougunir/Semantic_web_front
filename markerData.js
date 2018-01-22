//initialize markerdata
var markerData = [];
markerData.push({id:1,name:"Truck 1", position:{"lat":30.218135,"long":-92.031441}});
markerData.push({id:2,name:"Truck 2", position:{"lat":30.216652,"long":-92.009468}});
markerData.push({id:3,name:"Truck 3", position:{"lat":30.227925,"long":-91.996078}});
markerData.push({id:4,name:"Truck 4", position:{"lat":30.248391,"long":-91.999168}});
markerData.push({id:5,name:"Truck 5", position:{"lat":30.245425,"long":-92.020111}});

function moveMarkers() {
	for(var i=0, len=markerData.length; i<len; i++) {
		var thisMarker = markerData[i];
		//adjust both lat and long a bit, unless we don't move
		if(shouldMove()) {
			//0.002 seems like a nice amount
			thisMarker.position.lat += randRange(-0.002,0.002);
			thisMarker.position.long += randRange(-0.002,0.002);
		}
	}
	
}

function shouldMove() {
	return Math.random() > 0.2;	
}

//credit: http://stackoverflow.com/a/1527820/52160
function randRange(min, max) {
    return Math.random() * (max - min) + min;
}

exports.getMarkers = function() {
	moveMarkers();
	
	//return
	return markerData;
}