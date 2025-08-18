'Version 1.0'

function KitabooCommunicationManager(){
}
	
//This is a simple function which sends activity data to the eBook
KitabooCommunicationManager.sendActivityData = function(result, student_response, totalNumberOfQuestion)
{

	//alert('came in' + (KitabooCommunicationManager.getFlexApp()).isHurix); check whether its running from kitaboo
	
	if(window.console)console.log("KitabooCommunicationManager---- data recived from dictera activity as correctQuestionCount : " + result +" :: " + "totalNumberOfQuestion : " + totalNumberOfQuestion);


	//variable holds the value of activity result and student response that will be sent to the book, which in turn will send it to the LMS
	//define an object with 2 properties - result and student_response
	var objSend = {result:'', student_response:''};
	//calculate score of the activity in percentage i.e. (score/no. of questions)*100
	objSend.result = (result/totalNumberOfQuestion)*100;
	//If needed, the student's response can be saved in student_response property. 
	//If more than one response then it should be separated by '%' character
	//E.g. If user has solved 2 questions then student_response can be - 'chk1_cb%chk3_cb', where chk1_cb & chk1_cb can be instance name of the checkboxes 
	objSend.student_response = student_response !== undefined && student_response !== '' ? student_response : '';
	KitabooCommunicationManager.getFlexApp().topWindow.activityJSCallBack(objSend);
	/*SCORM:END*/
}

// This function returns the appropriate reference,
// depending on the browser.
KitabooCommunicationManager.getFlexApp = function()
{
	//Get the reference so activeX or Plugin. flexApp is id/name of OBJECT/EMBED tags
	var appName  = 'HurixEbook';

	//alert(window.parent.window.opener.document);
	
	try{
			if($('body').hasClass('ie'))
			{
				if(window.top.window.document !== null && window.top.window.document[appName] != null)
				{
					return {isHurix: window.top.window.document[appName].isHurix, topWindow: window.top.window.document[appName]};
				}
				else if(window.parent.window.opener !== null && window.parent.window.document.getElementById(appName) != null)
					{
						return {isHurix: window.parent.window.document.getElementById(appName).isHurix, topWindow: window.parent.window.document.getElementById(appName)};
					}
					else if(window.top.window !== null)
						{
							if(window.top.window.isHurix == undefined){
								return window.parent.window.parent.window.document.getElementsByTagName('iframe')[0].contentWindow.window
							}else{
								return window.top.window; // Used when activity is interacting with HTML
							}
						}
				
			}
			else
				{
					if(window.top.window.document !== null && window.top.window.document[appName] != null){
						return {isHurix: window.top.window.document[appName].isHurix, topWindow: window.top.window.document[appName]};
					}else if(window.parent.window.opener !== null && window.parent.window.opener.document[appName] != null){
						return {isHurix: window.parent.window.document.getElementById(appName).isHurix, topWindow: window.parent.window.document.getElementById(appName)};
					}
					
					else if(window.top.window[0][2] && window.top.window[0][2].document[appName] != null){
						return {isHurix: window.top.window[0][2].document[appName].isHurix, topWindow: window.top.window[0][2].document[appName]}; // Used when activity is interacting with HTML
					}
					else if(window.top.window[2] && window.top.window[2].document[appName] != null){
						//console.log('window.top.window.opener.window');
						return {isHurix: window.top.window[2].isHurix, topWindow: window.top.window[2].document[appName]}; // Used when activity is interacting with HTML
					}
					
					else if(window.top.window.opener !== null){
						console.log('window.top.window.opener.window');
						return window.top.window.opener.window; // Used when activity is interacting with HTML
					}
					else{
						//console.log('window.top.window');
						if(window.top.window.isHurix == undefined){
							return window.parent.window.parent.window.document.getElementsByTagName('iframe')[0].contentWindow.window
						}else{
							return window.top.window; // Used when activity is interacting with HTML
						}		
						
					}
				}
	}
	catch(e){
		return {isHurix : null, topWindow : null};
	}
	
}

/** 
  * This is a simple function which sends final activity data to the server 
  * call this function before closing the browser (onbeforeunload)
 **/
KitabooCommunicationManager.closeActivityJSCallBack = function()
{
	if(window.console)console.log("KitabooCommunicationManager ---- closeActivityJSCallBack called from Dictera activity");
	//Get the reference so activeX or Plugin. flexApp is id/name of OBJECT/EMBED tags
  	KitabooCommunicationManager.getFlexApp().topWindow.closeActivityJSCallBack();
}
