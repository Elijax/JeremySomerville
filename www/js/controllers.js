angular.module('starter.controllers', [])

.controller('MainCtrl', function($scope, $ionicScrollDelegate, $state, $timeout) {
	$scope.rgba = {
		value:0
	};

	$scope.animate_element = {
		goTop:false
	};

	$scope.checkScroll = function () { 
        var currentTop = $ionicScrollDelegate.$getByHandle('scroller').getScrollPosition().top;
        var maxScrollableDistanceFromTop = $ionicScrollDelegate.$getByHandle('scroller').getScrollView().__maxScrollTop; 				

        if (Math.floor(currentTop*0.05) < 10) {
			$scope.$apply(function () {
	 			$scope.rgba.value = currentTop*0.05;
			});
        }

        if (Math.floor(currentTop*0.05) == 7){
        	$scope.animate_element.goTop = true;
        	$timeout(function () {
	    		$state.go('home');
        	},500)
        }
	};

	$scope.getColor = function (color_value) {
		return "rgba(0,0,0,0."+Math.floor(color_value)+")"; 
	};
})
.controller('HomeCtrl', function($scope, $ionicModal, $timeout, $state) {
	$scope.goToSection = function (section) {
		$state.go(section);
	};
})
.controller('LatestCtrl',function ($scope, DatabaseService, Alerter, $ionicHistory, $state) {
	$scope.goBack = function () {
		var backView = $ionicHistory.backView();
	    backView.go();
	};

	$scope.openImage = function (image_path) {
		$state.go('picture',{id:image_path});
	}

	$scope.pictures = [
		{img:"http://static.vix.com/es/sites/default/files/styles/large/public/imj/nuestrorumbo/L/Los-5-mejores-paisajes-del-mundo-3.jpg?itok=NbbkmSen"},
		{img:"http://imagenpng.com/wp-content/uploads/2017/01/Tipos-de-paisajes.jpg"},
		{img:"http://www.paisajesbonitos.org/wp-content/uploads/2016/04/Paisajes-de-chile-lago-Chungara-2.jpg"},
		{img:"https://previews.123rf.com/images/kamchatka/kamchatka1506/kamchatka150600041/40583353-Paisajes-de-mar-hermosas-en-la-isla-de-Zakynthos-en-Grecia-Foto-de-archivo.jpg"},
		{img:"http://www.paisajesbonitos.org/wp-content/uploads/2016/01/paisajes-bonitos-de-verano-playa-paradisiaca-exotica-imagen-foto-wallpaper-7.jpg"},
		{img:"http://tipsparatuviaje.com/wp-content/uploads/2016/07/Paisajes-de-fantasia.jpg"},	
		{img:"http://static.vix.com/es/sites/default/files/styles/large/public/imj/nuestrorumbo/L/Los-5-mejores-paisajes-del-mundo-3.jpg?itok=NbbkmSen"},
		{img:"http://imagenpng.com/wp-content/uploads/2017/01/Tipos-de-paisajes.jpg"},
		{img:"http://www.paisajesbonitos.org/wp-content/uploads/2016/04/Paisajes-de-chile-lago-Chungara-2.jpg"},
		{img:"https://previews.123rf.com/images/kamchatka/kamchatka1506/kamchatka150600041/40583353-Paisajes-de-mar-hermosas-en-la-isla-de-Zakynthos-en-Grecia-Foto-de-archivo.jpg"},
		{img:"http://www.paisajesbonitos.org/wp-content/uploads/2016/01/paisajes-bonitos-de-verano-playa-paradisiaca-exotica-imagen-foto-wallpaper-7.jpg"},
		{img:"http://tipsparatuviaje.com/wp-content/uploads/2016/07/Paisajes-de-fantasia.jpg"},	
		{img:"http://static.vix.com/es/sites/default/files/styles/large/public/imj/nuestrorumbo/L/Los-5-mejores-paisajes-del-mundo-3.jpg?itok=NbbkmSen"},
		{img:"http://imagenpng.com/wp-content/uploads/2017/01/Tipos-de-paisajes.jpg"},
		{img:"http://www.paisajesbonitos.org/wp-content/uploads/2016/04/Paisajes-de-chile-lago-Chungara-2.jpg"},
		{img:"https://previews.123rf.com/images/kamchatka/kamchatka1506/kamchatka150600041/40583353-Paisajes-de-mar-hermosas-en-la-isla-de-Zakynthos-en-Grecia-Foto-de-archivo.jpg"},
		{img:"http://www.paisajesbonitos.org/wp-content/uploads/2016/01/paisajes-bonitos-de-verano-playa-paradisiaca-exotica-imagen-foto-wallpaper-7.jpg"},
		{img:"http://tipsparatuviaje.com/wp-content/uploads/2016/07/Paisajes-de-fantasia.jpg"},	
		{img:"http://www.paisajesbonitos.org/wp-content/uploads/2016/04/Paisajes-de-chile-lago-Chungara-2.jpg"},
		{img:"https://previews.123rf.com/images/kamchatka/kamchatka1506/kamchatka150600041/40583353-Paisajes-de-mar-hermosas-en-la-isla-de-Zakynthos-en-Grecia-Foto-de-archivo.jpg"},
		{img:"http://www.paisajesbonitos.org/wp-content/uploads/2016/01/paisajes-bonitos-de-verano-playa-paradisiaca-exotica-imagen-foto-wallpaper-7.jpg"},
		{img:"http://tipsparatuviaje.com/wp-content/uploads/2016/07/Paisajes-de-fantasia.jpg"}			
	];
})
.controller('GalleryCtrl',function ($scope, DatabaseService, Alerter, $ionicHistory, $state) {
	
	$scope.goBack = function () {
		var backView = $ionicHistory.backView();
	    backView.go();
	};

	$scope.pictures = [
		{img:"http://static.vix.com/es/sites/default/files/styles/large/public/imj/nuestrorumbo/L/Los-5-mejores-paisajes-del-mundo-3.jpg?itok=NbbkmSen"},
		{img:"http://imagenpng.com/wp-content/uploads/2017/01/Tipos-de-paisajes.jpg"},
		{img:"http://www.paisajesbonitos.org/wp-content/uploads/2016/04/Paisajes-de-chile-lago-Chungara-2.jpg"},
		{img:"https://previews.123rf.com/images/kamchatka/kamchatka1506/kamchatka150600041/40583353-Paisajes-de-mar-hermosas-en-la-isla-de-Zakynthos-en-Grecia-Foto-de-archivo.jpg"},
		{img:"http://www.paisajesbonitos.org/wp-content/uploads/2016/01/paisajes-bonitos-de-verano-playa-paradisiaca-exotica-imagen-foto-wallpaper-7.jpg"},
		{img:"http://tipsparatuviaje.com/wp-content/uploads/2016/07/Paisajes-de-fantasia.jpg"},	
		{img:"http://static.vix.com/es/sites/default/files/styles/large/public/imj/nuestrorumbo/L/Los-5-mejores-paisajes-del-mundo-3.jpg?itok=NbbkmSen"},
		{img:"http://imagenpng.com/wp-content/uploads/2017/01/Tipos-de-paisajes.jpg"},
		{img:"http://www.paisajesbonitos.org/wp-content/uploads/2016/04/Paisajes-de-chile-lago-Chungara-2.jpg"},
		{img:"https://previews.123rf.com/images/kamchatka/kamchatka1506/kamchatka150600041/40583353-Paisajes-de-mar-hermosas-en-la-isla-de-Zakynthos-en-Grecia-Foto-de-archivo.jpg"},
		{img:"http://www.paisajesbonitos.org/wp-content/uploads/2016/01/paisajes-bonitos-de-verano-playa-paradisiaca-exotica-imagen-foto-wallpaper-7.jpg"},
		{img:"http://tipsparatuviaje.com/wp-content/uploads/2016/07/Paisajes-de-fantasia.jpg"},	
		{img:"http://static.vix.com/es/sites/default/files/styles/large/public/imj/nuestrorumbo/L/Los-5-mejores-paisajes-del-mundo-3.jpg?itok=NbbkmSen"},
		{img:"http://imagenpng.com/wp-content/uploads/2017/01/Tipos-de-paisajes.jpg"},
		{img:"http://www.paisajesbonitos.org/wp-content/uploads/2016/04/Paisajes-de-chile-lago-Chungara-2.jpg"},
		{img:"https://previews.123rf.com/images/kamchatka/kamchatka1506/kamchatka150600041/40583353-Paisajes-de-mar-hermosas-en-la-isla-de-Zakynthos-en-Grecia-Foto-de-archivo.jpg"},
		{img:"http://www.paisajesbonitos.org/wp-content/uploads/2016/01/paisajes-bonitos-de-verano-playa-paradisiaca-exotica-imagen-foto-wallpaper-7.jpg"},
		{img:"http://tipsparatuviaje.com/wp-content/uploads/2016/07/Paisajes-de-fantasia.jpg"},	
		{img:"http://www.paisajesbonitos.org/wp-content/uploads/2016/04/Paisajes-de-chile-lago-Chungara-2.jpg"},
		{img:"https://previews.123rf.com/images/kamchatka/kamchatka1506/kamchatka150600041/40583353-Paisajes-de-mar-hermosas-en-la-isla-de-Zakynthos-en-Grecia-Foto-de-archivo.jpg"},
		{img:"http://www.paisajesbonitos.org/wp-content/uploads/2016/01/paisajes-bonitos-de-verano-playa-paradisiaca-exotica-imagen-foto-wallpaper-7.jpg"},
		{img:"http://tipsparatuviaje.com/wp-content/uploads/2016/07/Paisajes-de-fantasia.jpg"}				
	];

	$scope.openImage = function (image_path) {
		$state.go('picture',{id:image_path});
	}	
})
.controller('PictureCtrl',function ($scope, DatabaseService, Alerter, $ionicHistory, $stateParams, $state) {
	$scope.goBack = function () {
		var backView = $ionicHistory.backView();
	    backView.go();
	};

	$scope.setWallpaper = function () {
		$state.go('wallpaper',{id:$stateParams.id});
	}

	$scope.buyPrints = function () {
		$state.go('order',{id:$stateParams.id});
	}	
})
.controller('WallpaperCtrl',function ($scope, DatabaseService, $ionicHistory) {
	$scope.goBack = function () {
		var backView = $ionicHistory.backView();
	    backView.go();
	};
})
.controller('OrderCtrl',function ($scope, DatabaseService, Alerter, $ionicHistory, $stateParams) {
	$scope.goBack = function () {
		var backView = $ionicHistory.backView();
	    backView.go();
	};

	$scope.order = [];
	$scope.order.type = 'Metallic Print';
	$scope.order.shipping_type = 'Australia';
	$scope.order.dimensions_original = 1;
	$scope.order.img = $stateParams.id;
	$scope.order.type_price = 1;

	$scope.environmentPictures = [
		{img:"http://www3.pictures.lonny.com/lv/X8YmDDba8_wl.jpg"},
		{img:"https://i.pinimg.com/originals/09/c5/2c/09c52cae363da9101a139c4300c51ec0.jpg"},
		{img:"http://www3.pictures.lonny.com/lv/X8YmDDba8_wl.jpg"},
		{img:"https://i.pinimg.com/originals/09/c5/2c/09c52cae363da9101a139c4300c51ec0.jpg"},
		{img:"http://www3.pictures.lonny.com/lv/X8YmDDba8_wl.jpg"}
	];

	$scope.env_picture = {
		img:$scope.environmentPictures[0].img
	};

	$scope.setEnvPicture  = function (id) {
		$scope.env_picture.img = id;	 	
	}

	$scope.order.dimensions_fit = 5;

	var dynamic_values = [
		{
			dimensions:"18x12",
			dimensions_fit:5,
			price_1:60,
			price_2:140,
			price_3:100
		},{
			dimensions:"24x16",
			dimensions_fit:7,
			price_1:80,
			price_2:200,
			price_3:140
		},{
			dimensions:"30x20",
			dimensions_fit:9,
			price_1:100,
			price_2:270,
			price_3:170
		},{
			dimensions:"36x24",
			dimensions_fit:11,
			price_1:150,
			price_2:320,
			price_3:200
		},{
			dimensions:"40x27",
			dimensions_fit:13,
			price_1:180,
			price_2:370,
			price_3:240
		},{
			dimensions:"45x30",
			dimensions_fit:15,			
			price_1:200,
			price_2:420,
			price_3:270
		},{
			dimensions:"60x40",
			dimensions_fit:17,
			price_1:400,
			price_2:560,
			price_3:360
		}
	];

	$scope.$watch('order.dimensions_original', function(newVal, oldVal) {	
		$scope.order.dimensions_fit = dynamic_values[newVal-1].dimensions_fit;
		$scope.order.dimensions = dynamic_values[newVal-1].dimensions;
		$scope.order.price = dynamic_values[newVal-1]["price_"+$scope.order.type_price];		
	});

	$scope.setOrderType = function (value_index) {
		$scope.order.price = dynamic_values[$scope.order.dimensions_original-1]["price_"+value_index];
	}
})
.controller('StoriesCtrl',function ($scope, DatabaseService, $state, Alerter, $ionicHistory) {
	$scope.goBack = function () {
		var backView = $ionicHistory.backView();
	    backView.go();
	};

	$scope.goToStory = function (story) {
		$state.go('story',{id:'1'});
	};
})
.controller('StoryCtrl',function ($scope, DatabaseService, Alerter, $ionicHistory) {
	$scope.goBack = function () {
		var backView = $ionicHistory.backView();
	    backView.go();
	};

	$scope.bool_value = false;

	$scope.showHeader = function (bool_value) {
		$scope.bool_value = !bool_value;
	}; 		
})
.controller('AboutCtrl',function ($scope, DatabaseService, Alerter, $ionicHistory) {
	$scope.goBack = function () {
		var backView = $ionicHistory.backView();
	    backView.go();
	};
})
.controller('SettingsCtrl',function ($scope, DatabaseService, Alerter, $ionicHistory) {
	$scope.goBack = function () {
		var backView = $ionicHistory.backView();
	    backView.go();
	};
});