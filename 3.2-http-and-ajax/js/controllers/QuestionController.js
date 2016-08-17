questApp.controller('QuestionController',
    function QuestionController($scope, $http) {

        $scope.loaded = false;

        $scope.load = function () {
            
            $http.get('question.json')
                .then(function (response) {
                    $scope.question = response.data.question;
                    $scope.loaded = true;
                });
        };

        /*$scope.load = function () {
            $http.get('question.json').
             success(function (data) {
                 $scope.question = data.question;
                 $scope.loaded = true;
             })
        };*/
        $scope.voteUp = function (answer) {
            answer.rate++;
        };
        $scope.voteDown = function (answer) {
            answer.rate--;
        };
    }
)