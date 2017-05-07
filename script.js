angular.module('myApp', []).
// controller('myCtrl', function($scope) {
// 	let femaleName = '';
// 	let jobTitle = '';
// 	let tediousTask = '';
// 	let dirtyTask = '';
// 	let celebrity = '';
// 	let uselessSkill = '';
// 	let adjective = '';
// 	let obnoxiousCelebrity = '';
// 	let hugeNumber = '';

// 	$scope.femaleName = femaleName;
// 	$scope.jobTitle = jobTitle;
// 	$scope.tediousTask = tediousTask;
// 	$scope.dirtyTask = dirtyTask;
// 	$scope.celebrity = celebrity;
// 	$scope.uselessSkill = uselessSkill;
// 	$scope.adjective = adjective;
// 	$scope.obnoxiousCelebrity = obnoxiousCelebrity;
// 	$scope.hugeNumber = hugeNumber;
// });

controller('myCtrl', function($) {
	let vm = this;
	vm.femaleName = '';
	vm.jobTitle = '';
	vm.tediousTask = '';
	vm.dirtyTask = '';
	vm.celebrity = '';
	vm.uselessSkill = '';
	vm.adjective = '';
	vm.obnoxiousCelebrity = '';
	vm.hugeNumber = '';
});