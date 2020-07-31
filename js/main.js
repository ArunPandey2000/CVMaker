document.querySelector('#page').contentEditable = true;
var images=['https://images.static-collegedunia.com/public/college_data/images/appImage/14252_m1.jpg','https://getmyuni.azureedge.net/college-image/big/manav-rachna-international-university-mriu-faridabad.jpg',
'https://www.mbarendezvous.com/images/top-stories-img/bannerimage_1519455735.jpg','https://storage.googleapis.com/ezap-prod/colleges/176/manav-rachna-international-institute-of-research-and-studies-faridabad-campus-photo.jpg']
var c=0;
var careerObjective=["To make use of my interpersonal skills to achieve goals of a company that focuses on customer satisfaction and customer experience.",
"To obtain employment with a company that offers a positive atmosphere to learn and implement new skills and technologies for the betterment of the organization.",
"Obtain a challenging leadership position applying creative problem solving and lean management skills with a growing company to achieve optimum utilization of its resources and maximum profits",
" To further my professional career with an executive level management position in a world class company. Seek to diversify my skills in another industry and as part of a larger organization. Relocation desirable.",
"Seeking a position as an engineering VP/director/manager in initiatives that utilize state-of-the-art, software and/or hardware components with a creative, technology-driven organization in an environment that encourages innovative thinking, recognition, and career development. Customer interaction is a plus.",
"Seek to work in an environment that will challenge me further; while allowing me to contribute to the continued growth and success of the organization. Obtain a position that will provide me the ability to apply my sales and work experience to a growing industry. Look forward to working with a company that promotes quality products and services; and provides me with the opportunity to meet and exceed assigned sales goals. Consultative selling approach coupled with the energy and drive as an individual contributor with minimal supervision or team selling environment. Experience with quotas ranging from 15k per month to 800k per year with excellent attainment.",
"To secure a position as a public relations / marketing professional in order to utilize my administrative, marketing, and interpersonal skills with accuracy and efficiency while maintaining a motivated, productive, and goal oriented environment for the entire professional team on board while maintaining extensive customer loyalty.",
"My objective is to leverage my experience while continuing to be challenged. I have 20 years of experience working for service providers delivering marketing intelligence products and services. My background in Management, Account Management, Project Management and Technical Process Management represent a unique combination of disciplines. Personally, I have the drive and determination to consistently achieve success as a leader in all of the organizations that I have worked with in the past."];
$(document).ready(function()
{
	var name=sessionStorage.getItem("name");
	var address=sessionStorage.getItem('address');
	var email=sessionStorage.getItem('email');
	var roll=sessionStorage.getItem('roll');
	var contact=sessionStorage.getItem('contact');
	var github=sessionStorage.getItem('github');
	var LinkedIn=sessionStorage.getItem('LinkedIn');
	var MRID=sessionStorage.getItem('MRID');
	
	
    var q11= sessionStorage.getItem('q11');
	var q12=sessionStorage.getItem('q12');
	var q13=sessionStorage.getItem('q13');
	var q14=sessionStorage.getItem('q14');
	var q21= sessionStorage.getItem('q21');
	var q22=sessionStorage.getItem('q22');
	var q23=sessionStorage.getItem('q23');
	var q24=sessionStorage.getItem('q24');
	var q31= sessionStorage.getItem('q31');
	var q32=sessionStorage.getItem('q32');
	var q33=sessionStorage.getItem('q33');
	var q34=sessionStorage.getItem('q34');

  
	$('#contactLink1').text(github);
	$('#contactLink2').text(LinkedIn);



	$('#contentName').text(name);
	$('#contentRoll').text(roll);
	$('#Number').text(contact);
	$('#Email').text(email);
	$('#MRID').text(MRID);
	$('#q11').text(q13);
	$('#q12').text(q11);
	$('#q13').text(q12);
	$('#q14').text(q14);
	$('#q21').text(q23);
	$('#q22').text(q21);
	$('#q23').text(q22);
	$('#q24').text(q24);
	$('#q31').text(q33);
	$('#q32').text(q31);
	$('#q33').text(q32);
	$('#q34').text(q34);

	var experiencecount=sessionStorage.getItem("ExperienceCount");
	var e=parseInt(experiencecount, 10);
	
	for(var i=1;i<=e;i++){
		console.log("Inside loop");
		var company= sessionStorage.getItem("company"+i);
		var job=sessionStorage.getItem("job"+i);
		var location=sessionStorage.getItem("location"+i);
		var start=sessionStorage.getItem("start"+i);
		var end=sessionStorage.getItem("end"+i);

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
		$('#sectionExperience #exp').append(temp);

	}

		//project
		var projectcount=sessionStorage.getItem("projectCount");
	var f=parseInt(projectcount, 10);
	
	for(var i=1;i<=f;i++){
		console.log("Inside loop");
		var projectName= sessionStorage.getItem("projectName"+i);
		var projectDescription=sessionStorage.getItem("projectDescription"+i);
		var completion=sessionStorage.getItem("completion"+i);
		var projectLink=sessionStorage.getItem("projectLink"+i);
		

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
		$('#sectionProjects #projects').append(temp);
        
	//	$('.headerfi').css('backgroundImage', 'url(https://lh3.googleusercontent.com/proxy/AaHtptePUWjl8SFnf-uhLmUkThXm1OY-NcCUdAOVbXg0dMxV2XuuG6OJc3xM6jZXLoUKkaJg-OU7DONcBFR89mwIMKErYSKfHowCRLnMVj39QGvlz_0bwVE_oY_vucso46tEs5Ge3xpSqOpvRA)');

	}

	//Skill

	var skillcount=sessionStorage.getItem("skillCount");
	var g=parseInt(skillcount, 10);
	
	for(var i=1;i<=g;i++){
		console.log("Inside loop");
		var skillName= sessionStorage.getItem("skillName"+skillcount);
	var skillDetail=sessionStorage.getItem("skillDetail"+skillcount);
	
	
	var temp=	['<li >',
	'<strong>','<span class="skillCategory">',skillName,'</span>:</strong>',

	skillDetail,
		'</li>'].join('\n');

	
    
		$('#sectionSkills #skills').append(temp);
		
		
	
        
		 

	}

	//Achievements


	var Achievementcount=sessionStorage.getItem("AchievementCount");
	var h=parseInt(Achievementcount, 10);
	
	for(var i=1;i<=h;i++){
		console.log("Inside loop");
		var skillName= sessionStorage.getItem("AwardName"+i);
	var skillDetail=sessionStorage.getItem("AwardDetail"+i);
	
	
	var temp=	['<li >',
	'<strong>','<span class="skillCategory">'+skillName+'</span>:</strong>'+

	skillDetail+
		'</li>'].join('\n');

	
    
		$('#sectionAchievements #AchievementsId').append(temp);
        
		 

	}
	


	


	
});

function changeObjective()
{
	if(c<8)
	{
		$('#CO').text(careerObjective[c] );
		c++;
	}
	else{
		c=0;
	}
	
}

defaultTemplateVars = [ "fontDroid" , "caseNormal" , "titleRuled" , "ruleAbove" , "imageShow" , "rollShow" , "course1" , "tableShow" , "edyearFirst" , "experience1" , "projects1" ]

$('.toggle-option').click(function(){
	toggleType = $(this).attr('data-toggle');
	toggleValue = $(this).attr('id');
	if(!$(this).hasClass('multi-select'))
	{
		if(!$(this).hasClass('selected'))
		{
			$('.toggle-option',$(this).parent()).removeClass('selected');
			$(this).addClass('selected');
			changeTemplate(toggleType,toggleValue);
		}
	}
	else
	{
		if($(this).hasClass('selected'))
			$(this).removeClass('selected');
		else
			$(this).addClass('selected');
		changeTemplate(toggleType,toggleValue);
	}
});

$('input[name="sectionToggle"]').change(function(){
	toggleSection($(this).val(),$(this).is(':checked'));
});


function template(value)
{
	if(value=='default')
	{
		$('#defaultTemplateBtn').removeClass('btn-default').addClass('btn-danger');
		$('#customTemplateBtn').removeClass('btn-danger').addClass('btn-default');
		$('#customTemplateOptions').hide();
		for(i=0;i<defaultTemplateVars.length;i++)
			$('#'+defaultTemplateVars[i]).click();
	}
	else
	{
		$('#customTemplateBtn').removeClass('btn-default').addClass('btn-danger');
		$('#defaultTemplateBtn').removeClass('btn-danger').addClass('btn-default');
		$('#customTemplateOptions').show();
	}
}

function toggleSection(sectionName,toggleState)
{
	if(toggleState==true)
		$('input[value="'+sectionName+'"]').attr('checked','true');
	else
		$('input[value="'+sectionName+'"]').removeAttr('checked');
	$('#'+sectionName).toggle();
}

function changeTemplate(toggleType,toggleValue)
{
	switch(toggleType)
	{
		case 'minor':
			if(toggleValue=='minorShow')
			{
				$('#contentMinor').show();
				$('#image_box').css('margin-top','35px');
			}
			else
			{
				$('#contentMinor').hide();
				$('#image_box').css('margin-top','25px');
			}
			break;
		case 'contact':
			if(toggleValue=='contact3')
			{
				$('#contactLink1').hide();
				$('#contactLink2').hide();
			}
			else if(toggleValue=='contact4')
			{
				$('#contactLink1').show();
				$('#contactLink2').hide();
			}
			else
			{
				$('#contactLink1').show();
				$('#contactLink2').show();
			}
			break;
		case 'margin':
			if(toggleValue=='margin1')
				$('#page').css('padding','0.2cm 1cm 1cm 1cm');
			else if(toggleValue=='margin2')
				$('#page').css('padding','0.2cm 1.1cm 1cm 1.1cm');
			else if(toggleValue=='margin3')
				$('#page').css('padding','0.2cm 1.2cm 1cm 1.2cm');
			else if(toggleValue=='margin4')
				$('#page').css('padding','0.2cm 1.3cm 1cm 1.3cm');
			else if(toggleValue=='margin5')
				$('#page').css('padding','0.2cm 1.4cm 1cm 1.4cm');
			else if(toggleValue=='margin6')
				$('#page').css('padding','0.2cm 1.5cm 1cm 1.5cm');
			break;
		case 'line':
			if(toggleValue=='line1')
				$('#page').css('line-height','1.1em');
			else if(toggleValue=='line2')
				$('#page').css('line-height','1.2em');
			else if(toggleValue=='line3')
				$('#page').css('line-height','1.3em');
			else if(toggleValue=='line4')
				$('#page').css('line-height','1.4em');
			else if(toggleValue=='line5')
				$('#page').css('line-height','1.5em');
			else if(toggleValue=='line6')
				$('#page').css('line-height','1.6em');
			break;
		case 'column':
			if(toggleValue=='column1')
				$('.table tbody tr td:nth-child(1)').toggleClass('text-center');
			else if(toggleValue=='column2')
				$('.table tbody tr td:nth-child(2)').toggleClass('text-center');
			else if(toggleValue=='column3')
				$('.table tbody tr td:nth-child(3)').toggleClass('text-center');
			else if(toggleValue=='column4')
				$('.table tbody tr td:nth-child(4)').toggleClass('text-center');
			break;

		case 'font':
			if(toggleValue=='fontVerdanaSans')
				$('#page').removeClass('droid').removeClass('roboto').removeClass('verdana-serif').addClass('verdana-sans');
			else if(toggleValue=='fontVerdanaSerif')
				$('#page').removeClass('verdana-sans').removeClass('droid').removeClass('roboto').addClass('verdana-serif');
			else if(toggleValue=='fontRoboto')
				$('#page').removeClass('verdana-serif').removeClass('verdana-sans').removeClass('droid').addClass('roboto');
			else if(toggleValue=='fontDroid')
				$('#page').removeClass('roboto').removeClass('verdana-serif').removeClass('verdana-sans').addClass('droid');
			break;
		case 'case':
			if(toggleValue=='caseNormal')
				$('.section-title').removeClass('uppercase');
			else
				$('.section-title').addClass('uppercase');
			break;
		case 'title':
			if(toggleValue=='titleRuled')
			{
				$('.section-title').removeClass('shaded');
				$('.section-title').addClass('ruled');
			}
			else
			{
				$('.section-title').removeClass('ruled');
				$('.section-title').addClass('shaded');
			}
			break;
		case 'rule':
			if(toggleValue=='ruleAbove')
			{
				$('.section-title').removeClass('rule-below');
				$('.section-title').addClass('rule-above');
			}
			else
			{
				$('.section-title').removeClass('rule-above');
				$('.section-title').addClass('rule-below');
			}
			break;

		case 'image':
			if(toggleValue=='imageShow')
			{
				$('#image_box').show();
				$('#info').css('margin-left','0px');
			}
			else
			{
				$('#image_box').hide();
				$('#info').css('margin-left','20px');
			}
			break;
		case 'roll':
			if(toggleValue=='rollShow')
			{
				$('#contentRoll').show();
				$('#info').css('margin-top','0px');
			}
			else
			{
				$('#contentRoll').hide();
				$('#info').css('margin-top','10px');
			}
			break;
		case 'course':
			if(toggleValue=='course1')
			{
				$('#contentBranch').hide();
				$('#contentCourse').text('B.Tech - '+$('#contentBranch').text());
			}
			else
			{
				$('#contentBranch').show();
				$('#contentCourse').text('B.Tech undergraduate');
			}
			break;
		case 'table':
			if(toggleValue=='tableShow')
			{
				$('#educationTable').removeClass('borderless');
				$('#educationTable').addClass('customBordered');
			}
			else
			{
				$('#educationTable').removeClass('customBordered');
				$('#educationTable').addClass('borderless');
			}
			break;
		case 'edyear':
			if(toggleValue=='edyearFirst')
			{
				$("#educationTable tr").each(function () {
					$(this).find("td").eq(0).before($(this).find("td").eq(3));
				});
				var temp = document.getElementById('column4').className;
				document.getElementById('column4').className = document.getElementById('column3').className;
				document.getElementById('column3').className = document.getElementById('column2').className;
				document.getElementById('column2').className = document.getElementById('column1').className;
				document.getElementById('column1').className = temp;
			}
			else
			{
				$("#educationTable tr").each(function () {
					$(this).find("td").eq(3).after($(this).find("td").eq(0));
				});
				var temp = document.getElementById('column1').className;
				document.getElementById('column1').className = document.getElementById('column2').className;
				document.getElementById('column2').className = document.getElementById('column3').className;
				document.getElementById('column3').className = document.getElementById('column4').className;
				document.getElementById('column4').className = temp;
			}
			break;
		case 'experience':
			if(toggleValue=='experience1')
			{
				$("#sectionExperience .title , #sectionExperience .time").css('display','inline-block');
				$("#sectionExperience .time").addClass('right').removeClass('tab');
				$("#sectionExperience .link").show();
			}
			else
			{
				$("#sectionExperience .title , #sectionExperience .time").css('display','block');
				$("#sectionExperience .time").removeClass('right').addClass('tab');
				$("#sectionExperience .link").hide();
			}
			break;
		case 'projects':
			if(toggleValue=='projects1')
			{
				$("#sectionProjects .title , #sectionProjects .time").css('display','inline-block');
				$("#sectionProjects .time").addClass('right').removeClass('tab');
				$("#sectionProjects .mentor , #sectionProjects .link").show();
			}
			else
			{
				$("#sectionProjects .title , #sectionProjects .time").css('display','block');
				$("#sectionProjects .time").removeClass('right').addClass('tab');
				$("#sectionProjects .mentor , #sectionProjects .link").hide();
			}
			break;
	}
}

function insertList()
{
	node = getSelectionContainerElement();
	var ul = document.createElement("ul");
	ul.className = 'decimal';
	ul.style.marginLeft = '0px';
	ul.innerHTML = "<li>Sub-point 1 : Description</li><li>Sub-point 2 : Description</li>";
	insertAfter(node,ul);
}

function decreaseIndent()
{
	node = getSelectionContainerElement();
	while(node.tagName!='UL')
		node = node.parentNode;
	node.style.paddingLeft = parseInt(window.getComputedStyle(node).getPropertyValue("padding-left"))-5;
}

function increaseIndent()
{
	node = getSelectionContainerElement();
	while(node.tagName!='UL')
		node = node.parentNode;
	node.style.paddingLeft = parseInt(window.getComputedStyle(node).getPropertyValue("padding-left"))+5;
}

function changeListStyle(value)
{
	node = getSelectionContainerElement();
	while(node.tagName!='UL')
		node = node.parentNode;
	node.className = value;

}


function getSelectionContainerElement()
{
	var range, sel, container;
	if (document.selection && document.selection.createRange)
	{
		range = document.selection.createRange();
		return range.parentElement();
	}
	else if (window.getSelection)
	{
		sel = window.getSelection();
		if (sel.getRangeAt)
		{
			if (sel.rangeCount > 0)
				range = sel.getRangeAt(0);
		}
		else
		{
			// Old WebKit selection object has no getRangeAt, so
			// create a range from other selection properties
			range = document.createRange();
			range.setStart(sel.anchorNode, sel.anchorOffset);
			range.setEnd(sel.focusNode, sel.focusOffset);
			// Handle the case when the selection was selected backwards (from the end to the start in the document)
			if (range.collapsed !== sel.isCollapsed)
			{
				range.setStart(sel.focusNode, sel.focusOffset);
				range.setEnd(sel.anchorNode, sel.anchorOffset);
			}
		}
		if (range)
		{
			container = range.commonAncestorContainer;
			// Check if the container is a text node and return its parent if so
			return container.nodeType === 3 ? container.parentNode : container;
		}
	}
}

function insertAfter(referenceNode,newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
$(function () {
	var i = 0;
	$("#headerfi").css("background-image", "url( images[i] )");
	setInterval(function () {
		i++;
		if (i == images.length) {
			i = 0;
		}
		$("#headerfi").fadeOut("slow", function () {
			$(this).css("background-image", "url( images[i] )");
			$(this).fadeIn("slow");
		});
	}, 5000);
});
