<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
<title>myEdOnline - Code Challenge</title>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
<link rel="stylesheet" href="style.css">
</head>
<body  data-ng-app="app">
<div data-ng-controller="thectrl" id="div_id">
<div ng-show="users">
<div class="col-lg-3 col-md-4 col-sm-6 co-xs-12" ng-repeat="user in users | orderBy:'fullname'">
<div class="user">
	<div class="username">{{user.fullname}}</div>
	<div ng-repeat="qp in quest_pathways | filter:{user_id: user.id}">
		<span ng-repeat="q in qp.quest_paths">
			<div class="questname">{{q.quest.name}}
				<span ng-show="q.quest.is_active === false">- inactive</span>
			</div>
			<ul>
			<li ng-show="q.mark.submitted !== null">Submitted:
				<span class="questmark">{{q.mark.submitted ? 'Yes' : 'No'}}</span></li>
			<li ng-show="q.mark.completion !== null">Completion:
				<span class="questmark">{{q.mark.completion }}&percnt;</span></li>
			<li ng-show="q.mark.mark !== null">Mark:
				<span class="questmark">{{q.mark.mark }}&percnt;</span></li>
			</ul>
		</span>
	</div>
</div>
</div>
</div>
</div>
</body>
<script
  src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
  integrity="sha256-3edrmyuQ0w65f8gfBsqowzjJe2iM6n0nKciPUp8y+7E="
  crossorigin="anonymous"></script>
<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
<script src="thejs.js"></script>
</html>
