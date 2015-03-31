angular.module('MyApp')
  .controller('MainCtrl', function($scope, Show) {
    $scope.alphabet = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
      'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
      'Y', 'Z'];
    $scope.genres = ['In-Progress', 'Returned', 'Processed', 'Delivered'];
    $scope.headingTitle = 'Top 12 Shows';
    $scope.shows = Show.query();
    $scope.filterByGenre = function(genre) {
      $scope.shows = Show.query({ genre: genre });
      $scope.headingTitle = genre;
    };
    $scope.filterByAlphabet = function(char) {
      $scope.shows = Show.query({ alphabet: char });
      $scope.headingTitle = char;
    };
  });