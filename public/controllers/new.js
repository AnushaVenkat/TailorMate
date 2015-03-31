/**
 * Created by madsubramani on 3/30/15.
 */

angular.module('MyApp')
    .controller('NewCtrl', function($scope, $alert, Show) {
        $scope.addShow = function() {
            var pattern;
            switch ($scope.selected) {
                case 1:
                    pattern = "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTQcGR5VukddBc8dFPfpcHliNc58tTKMOEXX1MeeILGhfpJJN6O";
                    break;
                case 2:
                    pattern = "http://boutiquesareeblouse.com/wp-content/uploads/2013/10/bridal-blouse.jpg";
                    break;
                case 3:
                    pattern = "http://www.forangelsonly.org/wp-content/uploads/2013/10/Latest-trendy-designer-blouse-012.jpg?817de1";
                    break;
                case 4:
                    pattern = "http://www.lakmitailors.com/Materials/LT%20W8.jpg";
                    break;

            }


            var show = new Show({
                name: $scope.name,
                phone: $scope.phone,
                address: $scope.address,
                delivery_date: $scope.delivery_date,
                delivery_time: $scope.delivery_time,
                poster: pattern,
                measurements: 'Chect: ' + $scope.chest + ', full-Length: ' + $scope.length + ', Across-Back: ' + $scope.across_back + ', Sleeve-Length: ' + $scope.sleeve_length
//                    chest: $scope.chest,
//                    length: $scope.length,
//                    sleeve_length: ''$scope.sleeve_length

            });
            Show.save(show).$promise
                .then(function() {
                    $scope.showName = '';
                    $scope.addForm.$setPristine();
                    $alert({
                        content: 'Order has been added.',
                        animation: 'fadeZoomFadeDown',
                        type: 'material',
                        duration: 3
                    });
                })
                .catch(function(response) {
                    $scope.showName = '';
                    $scope.addForm.$setPristine();
                    $alert({
                        content: response.data.message,
                        animation: 'fadeZoomFadeDown',
                        type: 'material',
                        duration: 3
                    });
                });
        };
    });
