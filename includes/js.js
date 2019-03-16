


	$(document).ready(function(){

        $.get("allstudents.php", function(data){
            students = $.parseJSON(data);

            list = "";

            list += '<ul class="students">';

            $.each(students, function(i, student) {

            	//url = encodeURI('/students?id= '+ student.id );<a href=" '+url+' "> 
            	list += '<li id="' + student.id + ' ">' + student.fullname + '</li>'
			});

            list += '</ul>';

            $('#list').html(list);

        });

		$('body').on('click', '.students li', function(){
			$('.students li').css({'color': '#000','background': '#ccc'});
			$(this).css({ 'color': '#fff','background': '#000'});
	    	$id = $(this).attr('id');
			$.ajax({
			    type: 'POST',
			    url: 'st_quests.php',
			    data: { 
			        'id': $id
			    },
			    success: function(data){
			    	dataArr = $.parseJSON(data);
			    	st_details = '<h2>Quest Paths: </h2>'; //JSON.stringify(dataArr['quest_paths']);
			    	$.each( dataArr['quest_paths'], function( i, val ) {

			    		st_details +='<div class="quest" id="'+val['quest']['id']+'">' + val['quest']['name'] + '</div>'; 

			    		st_details +='<div class="mark"><ul class="mark_sec"><li>Submitted: '
			    		 + val['mark']['submitted'] + '</li> <li> completion: '+ val['mark']['completion']+' %</li>'
			    		 + '<li> Mark: ' + val['mark']['mark'] + '</li></div>'; 

			    	});
			    	



			        $( "#st_details" ).html( st_details );
			        console.log(st_details);
			    },
			    error: function(err){
			    	console.log(err);
			    }
			});		    	
		});


	});
