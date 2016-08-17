questApp.controller('QuestionController',
    function QuestionController($scope, $http) {

        $scope.loaded = false;

        $scope.load = function () {
            $http.get('question.json').
             success(function (data, status, headers, config) {
                 $scope.question = data.question;
                 $scope.loaded = true;
                 console.log("код ответа: " + status);
                 console.log("объем данных: " + headers("content-length"));
             }).error(function (data, status, headers, config) {
                 console.log("код ответа: " + status);
             })
        };
        $scope.voteUp = function (answer) {
            answer.rate++;
        };
        $scope.voteDown = function (answer) {
            answer.rate--;
        };
    }
)