$(document).ready(function()
{
	console.log("Ready");
	$("#Experience").hide();
});
var experiencecount=1;
var projectcount=1;
var skillCount=1;
var AchievementCount=1;

$(document).on("click",".exp",function()
{
	var company= $('#company').val();
	var job=$('#job').val();
	var location=$('#location').val();
	var start=$('#start').val();
	var end=$('#end').val();
    sessionStorage.setItem("company"+experiencecount,company);
	sessionStorage.setItem("job"+experiencecount,job);
	sessionStorage.setItem("location"+experiencecount,location);
	sessionStorage.setItem("start"+experiencecount,start);
	sessionStorage.setItem("end"+experiencecount,end);
	var temp=	['<li >',
		'<div>',		
		'<div class="title">'+job+' at '+company+'</div>',
		'<div class="time right">'+start+'</div>',
		'</div>',
		'<div>',
		'<div class="mentor tab">'+location+'</div>',
		'</div>',
		'<div>',
		'<div class="text">'+end+'</div>',
		'</div>',
		'</li>'].join('\n');

	$('.ExperienceSection').append(temp);
    $("#company").load(location.href + " #company");
	
	experiencecount++;

});
$(document).on("click",".addProject",function()
{
	var projectName= $('#projectName').val();
	var projectDescription=$('#projectDesription').val();
	var projectLink=$('#projectLink').val();
	var completion=$('#completion').val();
	
    sessionStorage.setItem("projectName"+projectcount,projectName);
	sessionStorage.setItem("projectDescription"+projectcount,projectDescription);
	sessionStorage.setItem("projectLink"+projectcount,projectLink);
	sessionStorage.setItem("completion"+projectcount,completion);
	var temp=	['<li >',
		'<div>',		
		'<div class="title">'+projectName+'</div>',
		'<div class="time right">'+completion+'</div>',
		'</div>',
		'<div>',
		'<div class="mentor tab">'+projectLink+'</div>',
		'</div>',
		'<div>',
		'<div class="text">'+projectDescription+'</div>',
		'</div>',
		'</li>'].join('\n');

	$('.ProjectSection').append(temp);
    
	
	projectcount++;

});
$(document).on("click",".addSkill",function()
{
	var skillName= $('#skillName').val();
	var skillDetail=$('#skillDetail').val();
	sessionStorage.setItem("skillName"+skillCount,skillName);
	sessionStorage.setItem("skillDetail"+skillCount,skillDetail);
	var temp=	['<li >',
	'<strong>','<span class="skillCategory">',skillName,'</span>:</strong>',

	skillDetail,
		'</li>'].join('\n');

	$('.SkillSection').append(temp);
    
	
	skillCount++;

});
$(document).on("click",".addAchievement",function()
{
	var skillName= $('#AwardName').val();
	var skillDetail=$('#AwardDetail').val();
	sessionStorage.setItem("AwardName"+AchievementCount,skillName);
	sessionStorage.setItem("AwardDetail"+AchievementCount,skillDetail);
	var temp=	['<li >',
	'<strong>','<span class="skillCategory">',skillName,'</span>:</strong>',

	skillDetail,
		'</li>'].join('\n');

	$('.AchievementSection').append(temp);
    
	
	AchievementCount++;

});


$(document).on("click", ".next1", function(){
	console.log("Enter");
    var f_name= $('#f_name').val();
	var l_name=$('#l_name').val();
	var address=$('#address').val();
	var email=$('#Email').val();
	var roll=$('#Roll').val();
	var contact=$('#contact').val();
	var github=$('#github').val();
	var LinkedIn=$('#LinkedIn').val();
	var MRID=$('#MRID').val();
	var name=f_name+ " "+ l_name;
	/*var pd= [
		{
			"name":name,
			"address",address,
			"email",email,





		}
	];*/
	console.log(name);
	
	sessionStorage.setItem("name",name);
	sessionStorage.setItem("address",address);
	sessionStorage.setItem("email",email);
	sessionStorage.setItem("roll",roll);
	sessionStorage.setItem("contact",contact);
	sessionStorage.setItem("github",github);
	sessionStorage.setItem("LinkedIn",LinkedIn);
	sessionStorage.setItem("MRID",MRID);
    



	if (validate1() ) {
		$('.active').next().addClass('active');
		$('.f1').hide();
		$('.f2').show();
	} else {
		$('#notify1').html('Fill up the entry first!!');
	}
});

$(document).on("click", ".next2", function(){
	var company= $('#company').val();
	var job=$('#job').val();
	var location=$('#location').val();
	var start=$('#start').val();
	var end=$('#end').val();
    sessionStorage.setItem("company"+experiencecount,company);
	sessionStorage.setItem("job"+experiencecount,job);
	sessionStorage.setItem("location"+experiencecount,location);
	sessionStorage.setItem("start"+experiencecount,start);
	sessionStorage.setItem("end"+experiencecount,end);
	
		$('.active').next().addClass('active');
		$('.f1').hide();
		$('.f2').hide();
		$('.f3').show();

	

});
$(document).on("click", ".next3", function(){
	var skillName= $('#skillName').val();
	var skillDetail=$('#skillDetail').val();
	sessionStorage.setItem("skillName"+skillCount,skillName);
	sessionStorage.setItem("skillDetail"+skillCount,skillDetail);
	var temp=	['<li >',
	'<strong>','<span class="skillCategory">',skillName,'</span>:</strong>',

	skillDetail,
		'</li>'].join('\n');

	$('.SkillSection').append(temp);
    
	
	
		$('.active').next().addClass('active');
		$('.f2').hide();
		$('.f3').hide();
		$('.f4').show();
	

});

$(document).on("click", ".next4", function(){
	var q11= $('#q11').val();
	var q12=$('#q12').val();
	var q13=$('#q13').val();
	var q14=$('#q14').val();
	var q21= $('#q21').val();
	var q22=$('#q22').val();
	var q23=$('#q23').val();
	var q24=$('#q24').val();
	var q31= $('#q31').val();
	var q32=$('#q32').val();
	var q33=$('#q33').val();
	var q34=$('#q34').val();

	sessionStorage.setItem("q11",q11);
	sessionStorage.setItem("q12",q12);
	sessionStorage.setItem("q13",q13);
	sessionStorage.setItem("q14",q14);
	sessionStorage.setItem("q21",q21);
	sessionStorage.setItem("q22",q22);
	sessionStorage.setItem("q23",q23);
	sessionStorage.setItem("q24",q24);
	sessionStorage.setItem("q31",q31);
	sessionStorage.setItem("q32",q32);
	sessionStorage.setItem("q33",q33);
	sessionStorage.setItem("q34",q34);

		$('.active').next().addClass('active');
		$('.f3').hide();
		$('.f4').hide();
		$('.f5').show();
	

});
$(document).on("click", ".next5", function(){
	var projectName= $('#projectName').val();
	var projectDescription=$('#projectDesription').val();
	var projectLink=$('#projectLink').val();
	var completion=$('#completion').val();
	
    sessionStorage.setItem("projectName"+projectcount,projectName);
	sessionStorage.setItem("projectdescription"+projectcount,projectDescription);
	sessionStorage.setItem("projectLink"+projectcount,projectLink);
	sessionStorage.setItem("completion"+projectcount,completion);
	
		$('.active').next().addClass('active');
		$('.f4').hide();
		$('.f5').hide();
		$('.f6').show();
		
	

});
$(document).on("click", ".next6", function(){
	var skillName= $('#AwardName').val();
	var skillDetail=$('#AwardDetail').val();
	sessionStorage.setItem("AwardName"+AchievementCount,skillName);
	sessionStorage.setItem("AwardDetail"+AchievementCount,skillDetail);
	var temp=	['<li >',
	'<strong>','<span class="skillCategory">',skillName,'</span>:</strong>',

	skillDetail,
		'</li>'].join('\n');

	$('.AchievementSection').append(temp);
    
	

	
	sessionStorage.setItem("ExperienceCount",experiencecount);
	sessionStorage.setItem("projectCount",projectcount);
	sessionStorage.setItem("skillCount",projectcount);
	sessionStorage.setItem("AchievementCount",AchievementCount);
	window.location="resume.html";
	

});

$(".previous1").on("click", function () {
	$('.active').next().removeClass('active');
	$('.f1').show();
	$('.f2').hide();
});

$(".previous2").on("click", function () {
	$('.active').next().next().removeClass('active');
	$('.f3').hide();
	$('.f2').show();
});
$(".previous3").on("click", function () {
	$('.active').next().next().removeClass('active');
	$('.f4').hide();
	$('.f3').show();
});
$(".previous4").on("click", function () {
	$('.active').next().next().removeClass('active');
	$('.f5').hide();
	$('.f4').show();
});
$(".previous5").on("click", function () {
	$('.active').next().next().removeClass('active');
	$('.f6').hide();
	$('.f5').show();
});




function validate1() {
	var fname, lname, contact;
	fname = $(".fname").val();
	lname = $(".lname").val();
	contact = $(".contact").val();
	if (fname === '' || lname === '' || contact === '') {
		return false;
	}
	return true;
}

function validate2() {
	var fname, lname, contact;
	twitter = $("#twitter").val();
	fb = $("#fb").val();
	insta = $("#insta").val();
	var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
	if (twitter === '' && fb === '' && insta === '') {
		$('#notify2').html('You must enter atleast one social profile email!!');
		return false;
	}
	if ((!filter.test(twitter)) && (!filter.test(fb)) && (!filter.test(fb))) {
		$('#notify2').html('Enter valid email');
		return false;
	}

	return true;
}

function validate3() {
	var email, pswd, cpswd;
	email = $('.email').val();
	pswd = $('.pswd').val();
	cpswd = $('.cpswd').val();
	var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
	if (!filter.test(email)) {
		$('#notify3').html('Enter valid email');
		return false;
	}
	if (pswd !== cpswd) {
		$('#notify3').html('Not confirm yet!');
		return false;
	}
	if (pswd === '' || cpswd === '') {
		$('#notify3').html('Enter the password');
		return false;
	}
	return true;
}
