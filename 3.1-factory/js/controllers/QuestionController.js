questApp.controller('QuestionController',
    //function QuestionController($scope, dataService){
      //  $scope.question=dataService.question;
    function QuestionController($scope, questionService) {
        $scope.question = questionService.question;

        $scope.voteUp = function (answer) {
            answer.rate++;
        };
        $scope.voteDown = function (answer) {
            answer.rate--;
        };
    }
)