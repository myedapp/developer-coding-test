<div class="content-container" ng-app="myApp" ng-controller="questCtrl">
    
    <h3 class="title">Student</h3>
    
    <div class="container" ng-repeat="user in questData"> 
    
        <div class="row"> 
            <div class="col-sm-12">
                <button class="btn-info" data-toggle="collapse" data-target="#demo{{ user.user_id }}"><studentname userid="{{ user.user_id }}"></studentname></button>
            </div> 
        </div>        
        <div id="demo{{ user.user_id }}" class="collapse">
            <div class="row">
                <div class="col-sm-10">
                    
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                 <th>Order</th>
                                 <th>Quest</th>
                                 <th>Submitted</th>
                                 <th>Completion</th>
                                 <th>Mark</hd>
                            </tr>                            
                        </thead>
                        <tbody>
                            <tr ng-repeat="path in user.quest_paths">
                                 <td>{{ path.order }}</td>
                                 <td>{{ path.quest.name }}</td>
                                 <td>{{ path.mark.submitted }}</td>
                                 <td>{{ path.mark.completion }}</td>
                                 <td>{{ path.mark.mark }}</td>
                            </tr>  
                        </tbody>
                    </table>                    
                    
                    
                </div>
                <div class="col-sm-2"></div>
            </div>
        </div>                
        
    </div>    
    
    
</div>


