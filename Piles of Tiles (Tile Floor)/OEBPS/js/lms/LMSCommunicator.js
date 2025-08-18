/** *************************** **/
/** LMS Communication constants **/
/** *************************** **/

function LMSLessonStatus()
{
}

LMSLessonStatus.PASSED = "passed";
LMSLessonStatus.COMPLETE = "completed";
LMSLessonStatus.FAILED = "failed";
LMSLessonStatus.INCOMPLETE = "incomplete";
LMSLessonStatus.BROWSED = "browsed";
LMSLessonStatus.NOT_ATTEMPTED = "not attempted";
LMSLessonStatus.UNKNOWN = "unknown";


/** ********************************** **/
/** Marsupial Service Communication  **/
/** ********************************** **/
    function ActivityAssesmentInfo(){}

    ActivityAssesmentInfo.score = 0;
    ActivityAssesmentInfo.totalNumberOfAssessmentQuestion = 0; /* total number of Assesment pages in the package */
    ActivityAssesmentInfo.correctAnswersCount = 0; /* correctAnswerCount in the package */
    ActivityAssesmentInfo.maxScore = 100; /* correctAnswerCount in the package */
    ActivityAssesmentInfo.startTime = 0;
    ActivityAssesmentInfo.endTime = 0;
    ActivityAssesmentInfo.startTimeDate = 0;
    ActivityAssesmentInfo.endTimeDate = 0;
    ActivityAssesmentInfo.timeSpend = 0;
    ActivityAssesmentInfo.numOfQues=0;
    ActivityAssesmentInfo.marsupialData = {}; /* marsupial data object*/


        /** ********************************** **/
        /** KitabooCommunication  **/
        /** ********************************** **/
        function KitabooCommunication(){}
        KitabooCommunication.availeble; /* true or false */
        KitabooCommunication.result = 0; /* (correctAnswerCount * 100/totalNumberOfQuestion) */
        //KitabooCommunication.user_responce = ""; /* "page1%page2" user visited pages befour close */
        KitabooCommunication.totalNumberOfQuestion = 0; /* total number of pages in the package */
        KitabooCommunication.sendDataToKitaboo = function()
        {
            /*If needed, the student's response can be saved in student_response property.
             * If more than one response then it should be separated by '%' character 
             * E.g. If user has solved 2 questions then student_response can be - 'chk1_cb%chk3_cb', where chk1_cb & chk1_cb can be instance name of the checkboxes 
             */
            if(window.console)console.log(" Dictera Activity is sending score to kitaboo as correctQuestionCount : "+ActivityAssesmentInfo.correctAnswersCount);
            if(window.console)console.log(" TotalNumberOfAssessmentQuestion : "+ActivityAssesmentInfo.totalNumberOfAssessmentQuestion);
            KitabooCommunicationManager.sendActivityData(ActivityAssesmentInfo.correctAnswersCount, "", ActivityAssesmentInfo.totalNumberOfAssessmentQuestion);
            KitabooCommunicationManager.closeActivityJSCallBack(); 
        }
        KitabooCommunication.checkIsKitabooCommunicationAvailable = function() /*Boolean*/
        {
            /*try{*/
                /*  HERE WE ARE CHECKING FOR HTML kitaoo Player AVILEBLITY BY CHECKING VALUE OF <isHurix> VARIBALE */   
                // var _isHTMLKitabooPlayer = KitabooCommunicationManager.getFlexApp().isHurix;
                var _isHTMLKitabooPlayer = undefined;
                if(String(_isHTMLKitabooPlayer).toUpperCase() == "TRUE" || _isHTMLKitabooPlayer == true)
                {
                    return true;
                }
                else
                {
                    /* this condition will check 
                        flash version of Kitaboo player is currentally availeble or not
                        and send true or false 
                        BY CHECKING closeActivityJSCallBack FUNCTION INSIDE KITABOO FLASH PALYER 
                    */
                    // var _isFlashKitabooPlayer = KitabooCommunicationManager.getFlexApp().closeActivityJSCallBack;
                    var _isFlashKitabooPlayer = undefined;
                    if(_isFlashKitabooPlayer != null &&  _isFlashKitabooPlayer != undefined){   
                        return true;
                    }
                    else{ 
                        return false;
                    }
                }
            /*}
            catch(err)
            {
                return false;
            }*/ 
            
        }       
        
        LMSCommunicator.loadMarsupialXML = function(){
            $.ajax({
                type : "GET",
                url : "marsupial.xml",
                dataType : "xml",
                success : function(data){                       
                            ActivityAssesmentInfo.marsupialData = MarsupialManifestAdapter.parseXML(data);
                        },
                error : function(data){
                    if(window.console)console.log(data);
                }
            });
        }
        
        //function called on close of the activity
        //At the event the activity details e.g. score is sent to marsupial by the eBook viewer
        function confirmClose()
        {
             KitabooCommunicationManager.closeActivityJSCallBack(); 
        }
        /** ********************************** **/
        /** End of ---KitabooCommunication  **/
        /** ********************************** **/

/** ********************************** **/
/** -----Enf of Marsupial Service Communication  **/
/** ***********
*********************** **/




/** ********************************** **/
/** Supported SCORM Versions constants **/
/** ********************************** **/
function PackageType()
{
}

PackageType.SCORM_1_2 = "SCORM 1.2";
PackageType.SCORM_2004 = "SCORM 2004";
PackageType.SCORM_2004_SUMMARY="SCORM 2004 with summary";
PackageType.SCORM_1_2_SUMMARY = "SCORM 1.2 With Summary";
PackageType.CommonCartridge_1_1 = "Common Cartridge 1.1";
PackageType.CommonCartridge_1_2 = "Common Cartridge 1.2";
PackageType.EPUB = "EPUB";
PackageType.HTML = "HTML";
PackageType.MARSUPIAL_LMS = "MARSUPIAL";
PackageType.GODIVA_CMS = "GODIVA CMS";

function LMSCommunicator()
{   
}

/** Default SCORM Version Supported **/
//LMSCommunicator._PackageCommunicationVersion = PackageType.SCORM_1_2;
//LMSCommunicator._PackageCommunicationVersion = PackageType.MARSUPIAL_LMS;


/** Store LMS initialization status.
 *  This flag will get updated when we call initialize LMS API Wrapper.
 *  There is also a read-only getter for the flag.
 *  This flag is not supposed to be accessed directly. **/
LMSCommunicator._isLMSInitialized = false;

LMSCommunicator.isLMSInitialized = function() /*: Boolean */
{
    return LMSCommunicator._isLMSInitialized;
}



/** Initialize LMS API Wrapper based on the SCORM Complience Version passed.
 *  and update the _isLMSInitialized flag based on the result. **/
LMSCommunicator.initializeLMS = function(packageType /*: String */, totalTemplates /*: Number */,noOfQuestion )/*: Boolean */
{
    ;
    if(packageType)
    {
        LMSCommunicator._PackageCommunicationVersion = packageType;
    }
    
    if(!LMSCommunicator.isLMSInitialized())
    {
        var initializationStatus = false;
        
        LMSCommunicator._totalAssessmentTemplates = noOfQuestion;
        LMSCommunicator._totalTemplates = totalTemplates;
        
        if(LMSCommunicator._PackageCommunicationVersion == PackageType.SCORM_1_2 || LMSCommunicator._PackageCommunicationVersion==PackageType.SCORM_1_2_SUMMARY)
        {
                KitabooCommunication.availeble = KitabooCommunication.checkIsKitabooCommunicationAvailable();
                if(!KitabooCommunication.availeble){
                    initializationStatus = LMSInitialize();
                    if(initializationStatus=="true" || initializationStatus==true){
                        initializationStatus=true;
                    }
                }
                else{
                    initializationStatus = true;
                    ActivityAssesmentInfo.totalNumberOfAssessmentQuestion = noOfQuestion;
                }
        }
        else if(LMSCommunicator._PackageCommunicationVersion == PackageType.SCORM_2004 || LMSCommunicator._PackageCommunicationVersion == PackageType.SCORM_2004_SUMMARY)
        {
                KitabooCommunication.availeble = KitabooCommunication.checkIsKitabooCommunicationAvailable();
                if(!KitabooCommunication.availeble){
                    initializationStatus = doInitialize();
                    if(initializationStatus=="true" || initializationStatus==true){
                        initializationStatus=true;
                    }
                }
                else{
                    initializationStatus = true;
                    ActivityAssesmentInfo.totalNumberOfAssessmentQuestion = noOfQuestion;
                }
        }
        else if(LMSCommunicator._PackageCommunicationVersion == PackageType.MARSUPIAL_LMS)
        {
            /* @TODO: checkAndSet KitabooCommunication.availeble = true|false for HTML Kitaboo player is pending */
            
            KitabooCommunication.availeble = KitabooCommunication.checkIsKitabooCommunicationAvailable();
             /* total number of Assesment pages in the package */
            initializationStatus = true;
            ActivityAssesmentInfo.totalNumberOfAssessmentQuestion = noOfQuestion;
            if(window.console)console.log("_____is kitaboo_Availible_______________" + KitabooCommunication.availeble);
            if(window.console)console.log("initializeLMS called for PackageType.MARSUPIAL_LMS");
            
            if(!KitabooCommunication.availeble) /* Kitaboo Player not availeble */
            {
                //load marsupial xml
                LMSCommunicator.loadMarsupialXML();
                ActivityAssesmentInfo.startTimeDate = new Date();
                ActivityAssesmentInfo.startTime = ActivityAssesmentInfo.startTimeDate.getTime();
            }
            /*if(window.console)console.log("__________________startTime___________" + ActivityAssesmentInfo.startTime);
            if(window.console)console.log("________________startTimeDate___________" + ActivityAssesmentInfo.startTimeDate);
            if(window.console)console.log("__________________ActivityAssesmentInfo.marsupialData___________" + ActivityAssesmentInfo.marsupialData);
            if(window.console)console.log("_____________________________");*/
        }
    
        if(initializationStatus)
        {
            LMSCommunicator._isLMSInitialized = true;
        }
        else
        {
            LMSCommunicator._isLMSInitialized = false;
        }
    }
    /** Set Max score of lesson. Dont change the order of this function **/
    LMSCommunicator.setMaximumScore(noOfQuestion);
    LMSCommunicator._populatePrevSavedObjData();
    return LMSCommunicator.isLMSInitialized();
}

LMSCommunicator.getUser = function()
{
    if(LMSCommunicator.isLMSInitialized)
    {
        if(!KitabooCommunication.availeble){
            if(LMSCommunicator._PackageCommunicationVersion == PackageType.SCORM_1_2 || LMSCommunicator._PackageCommunicationVersion==PackageType.SCORM_1_2_SUMMARY)
            {
                return LMSGetValue('cmi.core.student_id');
            }
            else if(LMSCommunicator._PackageCommunicationVersion == PackageType.SCORM_2004 || LMSCommunicator._PackageCommunicationVersion == PackageType.SCORM_2004_SUMMARY)
            {
                return LMSGetValue('cmi.learner_id')
            }
        }
    }
}

/** Getter/Setter for lesson complition status on LMS.
 *  Possible values for the argument passed can be a single value from LMSLessonStatus "enum" */
  
LMSCommunicator.getLessonStatus = function()/*: LMSLessonStatus Enum Value */
{
    if(LMSCommunicator.isLMSInitialized) 
    {
        if(!KitabooCommunication.availeble){
            var lessonStatusOnLMS = ""; 
        
            if(LMSCommunicator._PackageCommunicationVersion == PackageType.SCORM_1_2 || LMSCommunicator._PackageCommunicationVersion==PackageType.SCORM_1_2_SUMMARY)
            {
                lessonStatusOnLMS = LMSGetValue("cmi.core.lesson_status");
            }
            else if(LMSCommunicator._PackageCommunicationVersion == PackageType.SCORM_2004 || LMSCommunicator._PackageCommunicationVersion == PackageType.SCORM_2004_SUMMARY)
            {
                lessonStatusOnLMS = doGetValue("cmi.completion_status");
            }
            else if(LMSCommunicator._PackageCommunicationVersion == PackageType.MARSUPIAL_LMS)
            {
                //initializationStatus = true;
                lessonStatusOnLMS = "lessonStatusOnMARSUPIAL_LMS"
                //if(window.console)console.log("getLessonStatus called for PackageType.MARSUPIAL_LMS : " + lessonStatusOnLMS);
                
            }
            if(lessonStatusOnLMS)
            {
                return lessonStatusOnLMS;
            }
            else
            {
                return LMSLessonStatus.NOT_ATTEMPTED;
            }
        }
    }
    else
    {
        throw new Error("LMS not yet initialized. You must initialize LMS communication befor calling this function. Call LMSCommunicator.initializeLMS() to initialize LMS Communication.");
    }
}

LMSCommunicator.setLessonStatus = function(lessonStatus /*: LMSLessonStatus Enum Value */ )/*: void */
{
    if(LMSCommunicator.isLMSInitialized)
    {
        switch(lessonStatus)
        {
            case LMSLessonStatus.PASSED:
            case LMSLessonStatus.COMPLETE:
            case LMSLessonStatus.FAILED:
            case LMSLessonStatus.INCOMPLETE:
            case LMSLessonStatus.BROWSED:
            case LMSLessonStatus.NOT_ATTEMPTED:
            case LMSLessonStatus.UNKNOWN:
                if(!KitabooCommunication.availeble){
                    if(LMSCommunicator._PackageCommunicationVersion == PackageType.SCORM_1_2 || LMSCommunicator._PackageCommunicationVersion==PackageType.SCORM_1_2_SUMMARY)
                    {
                        LMSSetValue("cmi.core.lesson_status", lessonStatus);
                    }
                    else if(LMSCommunicator._PackageCommunicationVersion == PackageType.SCORM_2004 || LMSCommunicator._PackageCommunicationVersion == PackageType.SCORM_2004_SUMMARY)
                    {
                        doSetValue("cmi.completion_status", lessonStatus);
                    }
                    else if(LMSCommunicator._PackageCommunicationVersion == PackageType.MARSUPIAL_LMS)
                    {
                        //if(window.console)console.log("setLessonStatus called for PackageType.MARSUPIAL_LMS " + lessonStatus);
                    }
                    break;
                }   
                
                default:
                    if(!KitabooCommunication.availeble){
                        if(LMSCommunicator._PackageCommunicationVersion == PackageType.SCORM_1_2 || LMSCommunicator._PackageCommunicationVersion==PackageType.SCORM_1_2_SUMMARY)
                        {
                            LMSSetValue("cmi.core.lesson_status", LMSLessonStatus.NOT_ATTEMPTED);
                        }
                        else if(LMSCommunicator._PackageCommunicationVersion == PackageType.SCORM_2004 || LMSCommunicator._PackageCommunicationVersion == PackageType.SCORM_2004_SUMMARY)
                        {
                            doSetValue("cmi.completion_status", LMSLessonStatus.UNKNOWN);
                        }
                        else if(LMSCommunicator._PackageCommunicationVersion == PackageType.MARSUPIAL_LMS)
                        {
                            //initializationStatus = true;
                            //if(window.console)console.log("setLessonStatus default case called for PackageType.MARSUPIAL_LMS : " + LMSLessonStatus.NOT_ATTEMPTED);
                            
                        }
                        break;
                }           
        }
    }
    else
    {
        throw new Error("LMS not yet initialized. You must initialize LMS communication befor calling this function. Call LMSCommunicator.initializeLMS() to initialize LMS Communication.");
    }
}


/** Getter/Setter for lesson location on LMS.
 *  This returns an integer representing the last visited page on LMS.
 *  This will return -1 if no pages were visited */
LMSCommunicator.getLessonLocation = function()/*: int */
{
    if(LMSCommunicator.isLMSInitialized) 
    {
        if(!KitabooCommunication.availeble){
            var lessonLocationOnLMS = "";
        
            if(LMSCommunicator._PackageCommunicationVersion == PackageType.SCORM_1_2 || LMSCommunicator._PackageCommunicationVersion==PackageType.SCORM_1_2_SUMMARY)
            {
                lessonLocationOnLMS = LMSGetValue("cmi.core.lesson_location");
            }
            else if(LMSCommunicator._PackageCommunicationVersion == PackageType.SCORM_2004 || LMSCommunicator._PackageCommunicationVersion == PackageType.SCORM_2004_SUMMARY)
            {
                lessonLocationOnLMS = doGetValue("cmi.location");
            }
            else if(LMSCommunicator._PackageCommunicationVersion == PackageType.MARSUPIAL_LMS){
                
                lessonLocationOnLMS = "0"; /*after this player start with first template*/
                //if(window.console)console.log("getLessonLocation called for PackageType.MARSUPIAL_LMS "+ lessonLocationOnLMS);
            }
            if(lessonLocationOnLMS)
            {
                return parseInt(lessonLocationOnLMS);
            }
            else
            {
                return -1;
            }
        }
    }
    else
    {
        throw new Error("LMS not yet initialized. You must initialize LMS communication befor calling this function. Call LMSCommunicator.initializeLMS() to initialize LMS Communication.");
    }
}

LMSCommunicator.setLessonLocation = function(lessonLocation/*: int */)
{
    if(LMSCommunicator.isLMSInitialized)
    {
        if(!KitabooCommunication.availeble){
            if(LMSCommunicator._PackageCommunicationVersion == PackageType.SCORM_1_2 || LMSCommunicator._PackageCommunicationVersion==PackageType.SCORM_1_2_SUMMARY)
            {
                LMSSetValue("cmi.core.lesson_location", lessonLocation.toString());
            }
            else if(LMSCommunicator._PackageCommunicationVersion == PackageType.SCORM_2004 || LMSCommunicator._PackageCommunicationVersion == PackageType.SCORM_2004_SUMMARY)
            {
                doSetValue("cmi.location", lessonLocation.toString());
            }
            else if(LMSCommunicator._PackageCommunicationVersion == PackageType.MARSUPIAL_LMS){
                
                //if(window.console)console.log("setLessonLocation called for PackageType.MARSUPIAL_LMS :" + lessonLocation);
                
            }
        }
    }
    else
    {
        throw new Error("LMS not yet initialized. You must initialize LMS communication befor calling this function. Call LMSCommunicator.initializeLMS() to initialize LMS Communication.");
    }
}


/** Getter/Setter for user stored data on LMS.
 *  This returns an string of the data stored for the user for the lesson on LMS.
 *  This will return empty string if no pages were visited */
LMSCommunicator.getSuspendData = function()/*: String */
{
    //;
    if(LMSCommunicator.isLMSInitialized) 
    {
        if(!KitabooCommunication.availeble){
            var suspendDataOnLMS = "";
        
            if(LMSCommunicator._PackageCommunicationVersion == PackageType.SCORM_1_2 || LMSCommunicator._PackageCommunicationVersion==PackageType.SCORM_1_2_SUMMARY)
            {
                suspendDataOnLMS = LMSGetValue("cmi.suspend_data");
            }
            else if(LMSCommunicator._PackageCommunicationVersion == PackageType.SCORM_2004 || LMSCommunicator._PackageCommunicationVersion == PackageType.SCORM_2004_SUMMARY)
            {
                suspendDataOnLMS = doGetValue("cmi.suspend_data");
            }
            else if(LMSCommunicator._PackageCommunicationVersion == PackageType.MARSUPIAL_LMS)
            {
                
                //if(window.console)console.log("getSuspendData called for PackageType.MARSUPIAL_LMS");
                suspendDataOnLMS = "MARSUPIAL_LMS:suspendData";
            }
            if(suspendDataOnLMS)
            {
                return suspendDataOnLMS;
            }
            else
            {
                return "";
            }
        }
    }
    else
    {
        throw new Error("LMS not yet initialized. You must initialize LMS communication befor calling this function. Call LMSCommunicator.initializeLMS() to initialize LMS Communication.");
    }
}

LMSCommunicator.setSuspendData = function(suspendData/*: String */)
{
    //;
    if(!KitabooCommunication.availeble){
        if(LMSCommunicator.isLMSInitialized)
        {
            if(LMSCommunicator._PackageCommunicationVersion == PackageType.SCORM_1_2 || LMSCommunicator._PackageCommunicationVersion==PackageType.SCORM_1_2_SUMMARY)
            {
                LMSSetValue("cmi.suspend_data", suspendData);
            }
            else if(LMSCommunicator._PackageCommunicationVersion == PackageType.SCORM_2004 || LMSCommunicator._PackageCommunicationVersion == PackageType.SCORM_2004_SUMMARY)
            {
                doSetValue("cmi.suspend_data", suspendData);
            }
            else if(LMSCommunicator._PackageCommunicationVersion == PackageType.MARSUPIAL_LMS)
            {
                
                //if(window.console)console.log("setSuspendData called for PackageType.MARSUPIAL_LMS");
                
            }
        }
    }
    else
    {
        throw new Error("LMS not yet initialized. You must initialize LMS communication befor calling this function. Call LMSCommunicator.initializeLMS() to initialize LMS Communication.");
    }
}



 
/** Getter/Setter for minimum score on LMS.
 *  This will return -1 if no value is available */
LMSCommunicator.getMinimumScore = function()/*: Number */
{
    if(LMSCommunicator.isLMSInitialized) 
    {
        if(!KitabooCommunication.availeble){
            var minScoreOnLMS = "";
        
            if(LMSCommunicator._PackageCommunicationVersion == PackageType.SCORM_1_2 || LMSCommunicator._PackageCommunicationVersion==PackageType.SCORM_1_2_SUMMARY)
            {
                minScoreOnLMS = LMSGetValue("cmi.core.score.min");
            }
            else if(LMSCommunicator._PackageCommunicationVersion == PackageType.SCORM_2004 || LMSCommunicator._PackageCommunicationVersion == PackageType.SCORM_2004_SUMMARY)
            {
                minScoreOnLMS = doGetValue("cmi.score.min");
            }
            else if(LMSCommunicator._PackageCommunicationVersion == PackageType.MARSUPIAL_LMS)
            {
                minScoreOnLMS = 0;
                //if(window.console)console.log("getMinimumScore called for PackageType.MARSUPIAL_LMS " + minScoreOnLMS);
                
            }
            if(minScoreOnLMS)
            {
                return parseFloat(minScoreOnLMS);
            }
            else
            {
                return -1.0;
            }
        }
    }
    else
    {
        throw new Error("LMS not yet initialized. You must initialize LMS communication befor calling this function. Call LMSCommunicator.initializeLMS() to initialize LMS Communication.");
    }   
}

LMSCommunicator.setMinimumScore = function(minimumScore/*: Number */)
{
    if(LMSCommunicator.isLMSInitialized)
    {
        if(!KitabooCommunication.availeble){
            if(minimumScore < 0)
            {
                if(LMSCommunicator._PackageCommunicationVersion == PackageType.SCORM_1_2 || LMSCommunicator._PackageCommunicationVersion==PackageType.SCORM_1_2_SUMMARY)
                {
                    LMSSetValue("cmi.core.score.min", "");
                }
                else if(LMSCommunicator._PackageCommunicationVersion == PackageType.SCORM_2004 || LMSCommunicator._PackageCommunicationVersion == PackageType.SCORM_2004_SUMMARY)
                {
                    doSetValue("cmi.score.min", "");
                }
                else if(LMSCommunicator._PackageCommunicationVersion == PackageType.MARSUPIAL_LMS)
                {
                    //if(window.console)console.log("setMinimumScore called for < 0 PackageType.MARSUPIAL_LMS : " +minimumScore);
                }
            }
            else
            {
                if(LMSCommunicator._PackageCommunicationVersion == PackageType.SCORM_1_2 || LMSCommunicator._PackageCommunicationVersion==PackageType.SCORM_1_2_SUMMARY)
                {
                    
                    LMSSetValue("cmi.core.score.min", LMSCommunicator.roundScore(minimumScore, 2).toFixed(2));
                }
                else if(LMSCommunicator._PackageCommunicationVersion == PackageType.SCORM_2004 || LMSCommunicator._PackageCommunicationVersion == PackageType.SCORM_2004_SUMMARY)
                {
                    doSetValue("cmi.score.min", LMSCommunicator.roundScore(minimumScore, 2).toFixed(2));
                }
                else if(LMSCommunicator._PackageCommunicationVersion == PackageType.MARSUPIAL_LMS){
                    //if(window.console)console.log("setMinimumScore called for > 0  PackageType.MARSUPIAL_LMS : "+minimumScore);
                }
            }
        }
    }
    else
    {
        throw new Error("LMS not yet initialized. You must initialize LMS communication befor calling this function. Call LMSCommunicator.initializeLMS() to initialize LMS Communication.");
    }
}



/** Getter/Setter for maximum score on LMS.
 *  This will return -1 if no value is available */
LMSCommunicator.getMaximumScore = function()/*: Number */
{
    if(LMSCommunicator.isLMSInitialized) 
    {
        var maxScoreOnLMS = "";
        
        if(!KitabooCommunication.availeble){
            if(LMSCommunicator._PackageCommunicationVersion == PackageType.SCORM_1_2 || LMSCommunicator._PackageCommunicationVersion==PackageType.SCORM_1_2_SUMMARY)
            {
                maxScoreOnLMS = LMSGetValue("cmi.core.score.max");
            }
            else if(LMSCommunicator._PackageCommunicationVersion == PackageType.SCORM_2004 || LMSCommunicator._PackageCommunicationVersion == PackageType.SCORM_2004_SUMMARY)
            {
                maxScoreOnLMS = doGetValue("cmi.score.max");
            }
            else if(LMSCommunicator._PackageCommunicationVersion == PackageType.MARSUPIAL_LMS){
                    maxScoreOnLMS = 100;
                    //if(window.console)console.log("getMaximumScore called for PackageType.MARSUPIAL_LMS " + maxScoreOnLMS);
            }
            
            if(maxScoreOnLMS)
            {
                return parseFloat(maxScoreOnLMS);
            }
            else
            {
                return -1.0;
            }
        }
    }
    else
    {
        throw new Error("LMS not yet initialized. You must initialize LMS communication befor calling this function. Call LMSCommunicator.initializeLMS() to initialize LMS Communication.");
    }
}

LMSCommunicator.setMaximumScore = function(maximumScore/*: Number */)
{
    if(LMSCommunicator.isLMSInitialized)
    {
        if(!KitabooCommunication.availeble){
            if(typeof maximumScore!== "undefined" || maximumScore < 0)
            {
                maximumScore = (isNaN(maximumScore) == true) ? "" : (parseFloat(maximumScore,10)).toFixed(2);
                if(LMSCommunicator._PackageCommunicationVersion == PackageType.SCORM_1_2 || LMSCommunicator._PackageCommunicationVersion==PackageType.SCORM_1_2_SUMMARY)
                {
                    LMSSetValue("cmi.core.score.max", maximumScore);
                }
                else if(LMSCommunicator._PackageCommunicationVersion == PackageType.SCORM_2004 ||LMSCommunicator._PackageCommunicationVersion == PackageType.SCORM_2004_SUMMARY)
                {
                    doSetValue("cmi.score.max", maximumScore);
                }
                else if(LMSCommunicator._PackageCommunicationVersion == PackageType.MARSUPIAL_LMS){
                    
                    //if(window.console)console.log("setMaximumScore setMaximumScore < 0 called for PackageType.MARSUPIAL_LMS" + maximumScore);
                }
            }
            else
            {
                if(LMSCommunicator._PackageCommunicationVersion == PackageType.SCORM_1_2 || LMSCommunicator._PackageCommunicationVersion==PackageType.SCORM_1_2_SUMMARY)
                {
                    ActivityAssesmentInfo.numOfQues=LMSCommunicator.roundScore(maximumScore, 2).toFixed(2);
                    LMSSetValue("cmi.core.score.max",100);
                }
                else if(LMSCommunicator._PackageCommunicationVersion == PackageType.SCORM_2004 || LMSCommunicator._PackageCommunicationVersion == PackageType.SCORM_2004_SUMMARY)
                {
                    ActivityAssesmentInfo.numOfQues=LMSCommunicator.roundScore(maximumScore, 2).toFixed(2);
                    doSetValue("cmi.score.max",100);
                }
                else if(LMSCommunicator._PackageCommunicationVersion == PackageType.MARSUPIAL_LMS){
                    
                    //if(window.console)console.log("setMaximumScore maxscore > 0 called for PackageType.MARSUPIAL_LMS : " +maximumScore);
                }
            }
        }
    }
    else
    {
        throw new Error("LMS not yet initialized. You must initialize LMS communication befor calling this function. Call LMSCommunicator.initializeLMS() to initialize LMS Communication.");
    }
}



/** Getter/Setter for current score for the lession on LMS.
 *  This will return -1 if no value is available */
LMSCommunicator.getScore = function()/*: Number */
{
    if(LMSCommunicator._isLMSInitialized) 
    {
        var scoreOnLMS = "";
        
        if(LMSCommunicator._PackageCommunicationVersion == PackageType.SCORM_1_2 || LMSCommunicator._PackageCommunicationVersion==PackageType.SCORM_1_2_SUMMARY)
        {
            if(!KitabooCommunication.availeble){
                scoreOnLMS = LMSGetValue("cmi.core.score.raw");
                //scoreOnLMS=(ActivityAssesmentInfo.numOfQues *scoreOnLMS)/100;
            }
        }
        else if(LMSCommunicator._PackageCommunicationVersion == PackageType.SCORM_2004 || LMSCommunicator._PackageCommunicationVersion == PackageType.SCORM_2004_SUMMARY)
        {
            if(!KitabooCommunication.availeble){
                scoreOnLMS = doGetValue("cmi.score.raw");
                //scoreOnLMS=(ActivityAssesmentInfo.numOfQues *scoreOnLMS)/100; 
            }
        }
        else if(LMSCommunicator._PackageCommunicationVersion == PackageType.MARSUPIAL_LMS){
                //scoreOnLMS = "50";
                //if(window.console)console.log("getScore called for PackageType.MARSUPIAL_LMS " + scoreOnLMS);
        }
        if(scoreOnLMS !== "")
        {
            return parseFloat(scoreOnLMS);
        }
        else
        {
            return -1.0;
        }
    }
    else
    {
        throw new Error("LMS not yet initialized. You must initialize LMS communication befor calling this function. Call LMSCommunicator.initializeLMS() to initialize LMS Communication.");
    }
}

LMSCommunicator.setScore = function(score/*: Number */)
{
    if(LMSCommunicator._isLMSInitialized)
    {
        
        if(LMSCommunicator._PackageCommunicationVersion == PackageType.MARSUPIAL_LMS)
        {
                //if(window.console)console.log("setScore called for PackageType.MARSUPIAL_LMS : "+score);

                /* @TODO : need to change for post message in offline package */ 
                var currentPageWrapper =  $("#pageLoader").get(0);
                var currentPageScore = currentPageWrapper.contentWindow.getAssessmentScore();
                
                /**
                 * if the current page score is -1 then we are ignoring the score,
                 * since it means that the user has not attempted the page.
                 */
                if(currentPageScore > 0)
                {
                    
                    ActivityAssesmentInfo.correctAnswersCount = ActivityAssesmentInfo.correctAnswersCount+1;
                }
                //if(window.console)console.log("setScore called for PackageType.MARSUPIAL_LMS ActivityAssesmentInfo.correctAnswersCount: "+ActivityAssesmentInfo.correctAnswersCount);
        }
        else
        {   
                if(score < 0)
                {
                    if(LMSCommunicator._PackageCommunicationVersion == PackageType.SCORM_1_2 || LMSCommunicator._PackageCommunicationVersion==PackageType.SCORM_1_2_SUMMARY)
                    {
                        if(!KitabooCommunication.availeble){
                            LMSSetValue("cmi.core.score.raw", 0);
                        }
                        
                    }
                    else if(LMSCommunicator._PackageCommunicationVersion == PackageType.SCORM_2004 || LMSCommunicator._PackageCommunicationVersion == PackageType.SCORM_2004_SUMMARY)
                    {
                        if(!KitabooCommunication.availeble){
                            doSetValue("cmi.score.raw", 0);
                        }
                    }
                    
                }
                else 
                {
                    if(LMSCommunicator._PackageCommunicationVersion == PackageType.SCORM_1_2 || LMSCommunicator._PackageCommunicationVersion==PackageType.SCORM_1_2_SUMMARY)
                    {
                        if(!KitabooCommunication.availeble){
                            // var x= Math.round(100 *(score/ActivityAssesmentInfo.numOfQues));
                            // if((x>=99) && (100%ActivityAssesmentInfo.numOfQues)!=0)x=100;
                            //LMSSetValue("cmi.core.score.raw", x);
                            LMSSetValue("cmi.core.score.raw", score);
                        }
                        else{
                                var currentPageWrapper =  $("#pageLoader").get(0);
                                var currentPageScore = currentPageWrapper.contentWindow.getAssessmentScore();
                                
                                /**
                                 * if the current page score is -1 then we are ignoring the score,
                                 * since it means that the user has not attempted the page.
                                 */
                                if(currentPageScore > 0)
                                {
                                    
                                    ActivityAssesmentInfo.correctAnswersCount = ActivityAssesmentInfo.correctAnswersCount+1;
                                }
                        }
                    }
                    else if(LMSCommunicator._PackageCommunicationVersion == PackageType.SCORM_2004 || LMSCommunicator._PackageCommunicationVersion == PackageType.SCORM_2004_SUMMARY)
                    {
                        if(!KitabooCommunication.availeble){
                            // var x= Math.round(100 *(score/ActivityAssesmentInfo.numOfQues));
                            // if((x>=99) && (100%ActivityAssesmentInfo.numOfQues)!=0)x=100;
                            // doSetValue("cmi.score.raw",x);
                            doSetValue("cmi.score.raw",score);
                        }
                        else{
                                var currentPageWrapper =  $("#pageLoader").get(0);
                                var currentPageScore = currentPageWrapper.contentWindow.getAssessmentScore();
                                
                                /**
                                 * if the current page score is -1 then we are ignoring the score,
                                 * since it means that the user has not attempted the page.
                                 */
                                if(currentPageScore > 0)
                                {
                                    
                                    ActivityAssesmentInfo.correctAnswersCount = ActivityAssesmentInfo.correctAnswersCount+1;
                                }
                        }
                    }
                    
                }
        }
        
      if(!KitabooCommunication.availeble)
      {
            ActivityAssesmentInfo.score = (ActivityAssesmentInfo.correctAnswersCount * (ActivityAssesmentInfo.maxScore/ActivityAssesmentInfo.totalNumberOfAssessmentQuestion));
            ActivityAssesmentInfo.endTimeDate = new Date();
            ActivityAssesmentInfo.endTime = ActivityAssesmentInfo.endTimeDate.getTime();
            ActivityAssesmentInfo.timeSpend = ActivityAssesmentInfo.endTime - ActivityAssesmentInfo.startTime;
            
            if(LMSCommunicator._PackageCommunicationVersion == PackageType.MARSUPIAL_LMS)
            LMSCommunicator.sendToMarsupial(ActivityAssesmentInfo.score,ActivityAssesmentInfo.endTimeDate,ActivityAssesmentInfo.endTime,ActivityAssesmentInfo.timeSpend);
      }
    }
    else
    {
        throw new Error("LMS not yet initialized. You must initialize LMS communication befor calling this function. Call LMSCommunicator.initializeLMS() to initialize LMS Communication.");
    }
}

LMSCommunicator.setInteractionData = function(variable,value){
    if(LMSCommunicator._PackageCommunicationVersion == PackageType.SCORM_1_2 || LMSCommunicator._PackageCommunicationVersion==PackageType.SCORM_1_2_SUMMARY){
        LMSSetValue(variable,value);
    }else if(LMSCommunicator._PackageCommunicationVersion == PackageType.SCORM_2004 || LMSCommunicator._PackageCommunicationVersion == PackageType.SCORM_2004_SUMMARY){
        doSetValue(variable,value);
    }
}


/** Finish the communication with LMS.
 *  This method needs to be called after we are done with LMS to clean up the things properly! */
LMSCommunicator.finish = function()
{
    if(LMSCommunicator.isLMSInitialized)
    {
        if(LMSCommunicator._PackageCommunicationVersion == PackageType.SCORM_1_2 || LMSCommunicator._PackageCommunicationVersion==PackageType.SCORM_1_2_SUMMARY)
        {
            
            if(!KitabooCommunication.availeble){
                LMSFinish();    
            }
            else{
                KitabooCommunication.sendDataToKitaboo(); /*send time to KitabooCommunication*/
            }
        }
        else if(LMSCommunicator._PackageCommunicationVersion == PackageType.SCORM_2004 || LMSCommunicator._PackageCommunicationVersion == PackageType.SCORM_2004_SUMMARY)
        {
            if(!KitabooCommunication.availeble){
                doTerminate();
            }
            else{
                KitabooCommunication.sendDataToKitaboo(); /*send time to KitabooCommunication*/
            }
            
        }
        else if(LMSCommunicator._PackageCommunicationVersion == PackageType.MARSUPIAL_LMS){
                
                if(window.console)console.log("__________________________________________________________");
                if(window.console)console.log("finish function called for PackageType.MARSUPIAL_LMS");
                
                if(KitabooCommunication.availeble){
                    KitabooCommunication.sendDataToKitaboo(); /*send time to KitabooCommunication*/
                }
                else{
                        ActivityAssesmentInfo.score = (ActivityAssesmentInfo.correctAnswersCount * (ActivityAssesmentInfo.maxScore/ActivityAssesmentInfo.totalNumberOfAssessmentQuestion));
                        ActivityAssesmentInfo.endTimeDate = new Date();
                        ActivityAssesmentInfo.endTime = ActivityAssesmentInfo.endTimeDate.getTime();
                        ActivityAssesmentInfo.timeSpend = ActivityAssesmentInfo.endTime - ActivityAssesmentInfo.startTime;

                        //$.getJSON('http://marsupial-anaya13.edistribucion.es/marsupialws/xerais/seguimiento/guardar?usuario=&'+infoData.usuario+'=&'+infoData+'=&callback=localJsonpCallback');
                        
                        LMSCommunicator.sendToMarsupial(ActivityAssesmentInfo.score,ActivityAssesmentInfo.endTimeDate,ActivityAssesmentInfo.endTime,ActivityAssesmentInfo.timeSpend);

                }
                if(window.console)console.log("__________________________________________________________");
        }
    }
    else
    {
        throw new Error("LMS not yet initialized. You must initialize LMS communication befor calling this function. Call LMSCommunicator.initializeLMS() to initialize LMS Communication.");
    }
}

LMSCommunicator.sendToMarsupial = function(score,endTimeDate,endTime,timeSpend){
                        var usuario_sessionId = $.query.get('sessionId');
                        if(window.console)console.log(" usuario_sessionId  : " + usuario_sessionId);
                        var password_password = LMSCommunicator.encryptData(usuario_sessionId);// – this value will generate by doing SHA1 encryption of sessionId (received in step #1) using MARSUPIAL_COMMON_KEY (we need to do this encryption in JavaScript)
                        var intentos_attempts =  1;// – for this value will always pass 1
                        var duracion_TotalTimeSpend = timeSpend;//– this value is calculated by using start time (activity lunched) and end time(activity closed)
                        var idActividad_ActivityId = ActivityAssesmentInfo.marsupialData.unidad.activity.id;//– this value will get from marsupial.xml
                        var idUnidad_tocID = ActivityAssesmentInfo.marsupialData.unidad.id; //– this value will get from marsupial.xml
                        var calificacion_rate = score;//– for this vale will pass user’s calculated score for the activity.
                        var fechaHoraInicio_dateStartTime = ActivityAssesmentInfo.startTimeDate;//- Activity start Date and Time.
                        //if(window.console)console.log(idActividad_ActivityId);
                    
                        
                        var sendMarsupialData = {};
                              sendMarsupialData.idUnidad = idUnidad_tocID; // TOC id
                              sendMarsupialData.idActividad = idActividad_ActivityId; // Activity id
                              sendMarsupialData.fechaHoraInicio = fechaHoraInicio_dateStartTime;// activity start date & time
                              sendMarsupialData.duracion = duracion_TotalTimeSpend; // difference start time & end time
                              sendMarsupialData.calificacion = calificacion_rate; // student result
                              sendMarsupialData.intentos = intentos_attempts; // no of attempts@ default 1
                              
                        $.ajax({
                                  type: "POST",
                                  dataType: 'jsonp',  //use jsonp data type in order to perform cross domain ajax
                                  crossDomain: true,
                                  url: 'http://marsupial-anaya13.edistribucion.es/marsupialws/xerais/seguimiento/guardar' ,
                                  data : {usuario: usuario_sessionId, password: password_password, data : JSON.stringify(sendMarsupialData)},
                                  cache : false,
                                  jsonpCallback: "localJsonpCallback",
                                  statusCode: {
                                    404: function() {
                                    console.log("page not found");
                                    }
                                  },
                                  success: function(data) {
                                     console.log('success', data)
                                  }
                                }).done(function (msg) {
                                  console.log( "Data Saved: " + msg );
                                }).error(function(errormessage){
                                  console.log(errormessage.statusText );
                              }).fail(function() {});
                        
                        function localJsonpCallback(data){
                        
                        }
}

/**
 * Round the score up to the required number fractional digits. 
 * Currently it is implemented like the ceiling to the fractional digit count will be calculated and will get returned.
 * So, basically the number will be rounded to the nearest larger number with the fractional digits included.
 */

LMSCommunicator.encryptData = function(data){
    var encryptedData;
    encryptedData = $().crypt( {
                         method: 'sha1',
                         source: data+"23kihEm7uJHgijeldoe(7jshd7"
                    }); 
    
    return encryptedData;
}
LMSCommunicator.roundScore = function(score/*: Number */, fractionalDigits/*: int */) /*: Number */
{
    var scoreWithFractionalDigitsAsDecimals = score * Math.pow(10, fractionalDigits);
    scoreWithFractionalDigitsAsDecimals = Math.ceil(scoreWithFractionalDigitsAsDecimals);
    
    return (scoreWithFractionalDigitsAsDecimals / Math.pow(10, fractionalDigits));
}

/*
* Sets current Template's score in cmi.objective // cmi.objective acts like array
* Score is Sequentially Stored irrespective of page to avoid 
*/
LMSCommunicator.setCurrentTemplateScore = function(pageId,templateId,achievedScore,maxScore,suspendData){
    if(LMSCommunicator._isLMSInitialized){
        var currentScore = achievedScore/maxScore,packageScore = LMSCommunicator.getScore();
        if(LMSCommunicator._PackageCommunicationVersion == PackageType.SCORM_1_2 || LMSCommunicator._PackageCommunicationVersion==PackageType.SCORM_1_2_SUMMARY){
        /* Save current Template score */
            var objIndex = LMSCommunicator._getSavedObjIndex(pageId);
            //LMSSetValue("cmi.objectives." + objIndex + ".id",pageId);
            LMSSetValue("cmi.objectives." + objIndex + ".score.raw",achievedScore.toString());
            LMSSetValue("cmi.objectives." + objIndex + ".score.max",maxScore.toString());
            LMSCommunicator.setCurrentTemplateSuspendData(pageId,suspendData);
            /* SCORM 1.2 ONLY saves RAW score  */
            //LMSSetValue("cmi.objectives." + templateId + ".score",(achievedScore/maxScore).toFixed(2));

            /* Save Total score  */
            //if(currentScore > 0 ){
                if(packageScore <= 0) { 
                    packageScore = (currentScore / LMSCommunicator._totalAssessmentTemplates).toFixed(2);
                } else if(packageScore > 0){
                    /* calcuated Total package score again to avoid javascript decimal value and rounding error */
                    var avgScore = 0, counter = 0,savedObjCount = parseInt(LMSGetValue("cmi.objectives._count"),10);
                    for(;counter<savedObjCount;counter++){
                        var rawScore = LMSGetValue("cmi.objectives." + counter + ".score.raw");
                        if(rawScore !== ""){
                            avgScore = avgScore + (parseFloat(rawScore,10));
                        }
                            // maxScore = LMSGetValue("cmi.objectives." + counter + ".score.max");
                            // // if(rawScore !== "" && maxScore !== ""){
                            //   avgScore = avgScore + (parseFloat(rawScore,10) / parseFloat(maxScore,10));
                            // }
                    }
                    //packageScore  = (avgScore / LMSCommunicator._totalAssessmentTemplates).toFixed(2);
                    packageScore = avgScore.toFixed(2);
                }
                LMSCommunicator.setScore(packageScore); 
            //}
        }else if(LMSCommunicator._PackageCommunicationVersion == PackageType.SCORM_2004 || LMSCommunicator._PackageCommunicationVersion == PackageType.SCORM_2004_SUMMARY){
        //doSetValue(variable,value);
        }
    }
}

/* Objective info is saved Sequentially in SCORM 1.2. 
*  Need mapping on which index is previously visited page is saved.
*/
LMSCommunicator._prevSavedObjId = [];

/* Objective info is saved Sequentially in SCORM 1.2. 
*  Need mapping for Objective status to set lessson status.
*/
LMSCommunicator._prevSavedObjStatus = [];

/* Keep count of total templates */
LMSCommunicator._totalTemplates = 0;

/* Keep count of Assessment templates */
LMSCommunicator._totalAssessmentTemplates = 0;

/*
* Single function call from template to Update current Template Score and status.
*/
LMSCommunicator.updateCurrentTemplateInfo = function(pageId,templateId,achievedScore,maxScore,suspendData,lessonStatus){
        LMSCommunicator.setCurrentTemplateScore(pageId,templateId,achievedScore,maxScore,suspendData);
        LMSCommunicator.updateCurrentTemplateStatus(lessonStatus,pageId);
}

/*
* Updates current Template Score and status.
*/
LMSCommunicator.updateCurrentTemplateStatus = function(status,pageId){
    if(LMSCommunicator._isLMSInitialized){
        var pageId = pageId,
            // isAssessmentPage = jsonData.TemplateData.isAssessmentPage,
            isAssessmentPage = false,
            objIndex = LMSCommunicator._getSavedObjIndex(pageId),
            statusOnLMS;
        if(LMSCommunicator._PackageCommunicationVersion == PackageType.SCORM_1_2 || LMSCommunicator._PackageCommunicationVersion==PackageType.SCORM_1_2_SUMMARY){
            statusOnLMS = LMSGetValue("cmi.objectives." + objIndex + ".status");
        }
        else if(LMSCommunicator._PackageCommunicationVersion == PackageType.SCORM_2004 || LMSCommunicator._PackageCommunicationVersion == PackageType.SCORM_2004_SUMMARY){
            /* Add code for SCORM 2004 */           
        }
        if(isAssessmentPage == false || isAssessmentPage == "false"){
            if(statusOnLMS !== LMSLessonStatus.BROWSED){
                LMSCommunicator.setCurrentTemplateStatus(objIndex,pageId, status);  
            }
        }else{
            switch(status){
                case LMSLessonStatus.COMPLETE: {
                    LMSCommunicator.setCurrentTemplateStatus(objIndex,pageId, status);
                    break;
                }
                case LMSLessonStatus.INCOMPLETE:{
                    if(statusOnLMS !== LMSLessonStatus.COMPLETE){
                        LMSCommunicator.setCurrentTemplateStatus(objIndex,pageId, status);      
                    }
                    break;
                }
                case LMSLessonStatus.NOT_ATTEMPTED: {
                    if(statusOnLMS !== LMSLessonStatus.COMPLETE && statusOnLMS !== LMSLessonStatus.INCOMPLETE){
                        LMSCommunicator.setCurrentTemplateStatus(objIndex,pageId, status);      
                    }
                }
            }
        }
    }
}
LMSCommunicator.setCurrentTemplateStatus = function(objIndex,pageId,status){
    if(LMSCommunicator._PackageCommunicationVersion == PackageType.SCORM_1_2 || LMSCommunicator._PackageCommunicationVersion==PackageType.SCORM_1_2_SUMMARY){
        if($.inArray(pageId,LMSCommunicator._prevSavedObjId)== -1){
            LMSSetValue("cmi.objectives." + objIndex + ".id",pageId);   
        }
        LMSSetValue("cmi.objectives." + objIndex + ".status",status);
        // if(pageId.indexOf("-")!== -1){
        //     pageId = pageId.split('-')[0];
        // }
        LMSCommunicator._prevSavedObjId[objIndex] = pageId;
        LMSCommunicator._prevSavedObjStatus[objIndex] = status;
        /* Entire lesson status updated on load and unload */
    }else if(LMSCommunicator._PackageCommunicationVersion == PackageType.SCORM_2004 || LMSCommunicator._PackageCommunicationVersion == PackageType.SCORM_2004_SUMMARY){
        /* Add code for SCORM 2004 */
    }
}

/* Get index value at which current template info is saved on LMS.
*/
LMSCommunicator._getSavedObjIndex = function(pageId){
    var index = $.inArray(pageId,LMSCommunicator._prevSavedObjId);
    if(LMSCommunicator._PackageCommunicationVersion == PackageType.SCORM_1_2 || LMSCommunicator._PackageCommunicationVersion==PackageType.SCORM_1_2_SUMMARY){
        return (index !== -1) ? index.toString() : LMSGetValue("cmi.objectives._count");
    }else if(LMSCommunicator._PackageCommunicationVersion == PackageType.SCORM_2004 || LMSCommunicator._PackageCommunicationVersion == PackageType.SCORM_2004_SUMMARY){
        /* Add code for SCORM 2004 */

    }
}

LMSCommunicator._populatePrevSavedObjData = function(){
    if(LMSCommunicator._isLMSInitialized){
        if(LMSCommunicator._PackageCommunicationVersion == PackageType.SCORM_1_2 || LMSCommunicator._PackageCommunicationVersion==PackageType.SCORM_1_2_SUMMARY){
            var counter = 0,objCount = LMSGetValue("cmi.objectives._count");
            for(;counter<parseInt(objCount,10);counter++){
                var id = LMSGetValue("cmi.objectives." + counter + ".id");
                if(typeof id !== "undefined" && id.length>0){
                    LMSCommunicator._prevSavedObjId.push(id.split('-')[0]);
                    LMSCommunicator._prevSavedObjStatus.push(LMSGetValue("cmi.objectives." + counter + ".status")); 
                }
            }
        }else if(LMSCommunicator._PackageCommunicationVersion == PackageType.SCORM_2004 || LMSCommunicator._PackageCommunicationVersion == PackageType.SCORM_2004_SUMMARY){
            /* Add code for SCORM 2004 */
            }
        }
    }
LMSCommunicator.setEntireLessonStatusOnLMS = function(){
    if(LMSCommunicator._isLMSInitialized){
        var objCount = "0"; // counter starts from 0
        if(LMSCommunicator._PackageCommunicationVersion == PackageType.SCORM_1_2 || LMSCommunicator._PackageCommunicationVersion==PackageType.SCORM_1_2_SUMMARY){
            objCount = LMSGetValue("cmi.objectives._count"); // counter starts from 0
        }else if(LMSCommunicator._PackageCommunicationVersion == PackageType.SCORM_2004 || LMSCommunicator._PackageCommunicationVersion == PackageType.SCORM_2004_SUMMARY){
            /* Add code for SCORM 2004 */
           
        }
        if(objCount < LMSCommunicator._totalAssessmentTemplates - 1){
            LMSCommunicator.setLessonStatus(LMSLessonStatus.INCOMPLETE);
        }
        else{
            if($.inArray(LMSLessonStatus.NOT_ATTEMPTED,LMSCommunicator._prevSavedObjStatus) !== -1 || 
                $.inArray(LMSLessonStatus.INCOMPLETE,LMSCommunicator._prevSavedObjStatus) !== -1){
                LMSCommunicator.setLessonStatus(LMSLessonStatus.INCOMPLETE);        
            }else{
                LMSCommunicator.setLessonStatus(LMSLessonStatus.COMPLETE);      
            }
        }
    }
}

LMSCommunicator.suspendData = {};



LMSCommunicator.getCurrentTemplateSuspendData = function(pageId){
    return LMSCommunicator.suspendData[pageId];
}
LMSCommunicator.setCurrentTemplateSuspendData = function(pageId,suspendData,componentId){
    LMSCommunicator.suspendData[pageId] = suspendData;
}

LMSCommunicator.getPreviousScoreOfTemplate = function(){
    if(LMSCommunicator._isLMSInitialized){
        if(LMSCommunicator._PackageCommunicationVersion == PackageType.SCORM_1_2 || LMSCommunicator._PackageCommunicationVersion==PackageType.SCORM_1_2_SUMMARY){
            var templateIndex = LMSCommunicator._getSavedObjIndex(jsonData.TemplateData.pageId),
            templateScore = LMSGetValue('cmi.objectives.' + templateIndex + '.score.raw');
            return (typeof templateScore == 'undefined' || templateScore == "" ) ? 0 : templateScore;
        }
        else{
            /* For Scorm 2004 */
        }
    }
    return 0; // If No LMS then return 0 to avoid js error.
}
/*
Add pageId and Template Title to Objectives for SCORM 1.2 and to SCO for SCORM 2004.
*/
LMSCommunicator.addPageIdToLMS = function(arrTemplates){
    if(LMSCommunicator._isLMSInitialized){
        if(LMSCommunicator._PackageCommunicationVersion == PackageType.SCORM_1_2 || LMSCommunicator._PackageCommunicationVersion==PackageType.SCORM_1_2_SUMMARY){
            var curTemplate,pageId,counter = 0,templateCount = arrTemplates.length,
                objCount = parseInt(LMSGetValue("cmi.objectives._count"),10) || 0;
            if(objCount == 0){
                for(;counter<templateCount;counter++){
                    curTemplate = arrTemplates[counter];
                    // pageId = curTemplate.pageId + "-" + curTemplate.title.replace(/\s/g,"_").replace(/[^a-zA-Z0-9-_]/g,"");
                    if(pageId.length >255){
                        pageId = pageId.substring(0,255);
                    }
                    LMSCommunicator.setCurrentTemplateStatus(counter,pageId,LMSLessonStatus.NOT_ATTEMPTED);
                }
            }else{
                var _arrTemplates = _.map(LMSCommunicator._prevSavedObjId,function(curIndex){ return _.find(arrTemplates,function(page){return page.pageId == curIndex;}) })

                var curTemplate,pageId,counter = 0,templateCount = _arrTemplates.length,
                    objCount = LMSCommunicator._prevSavedObjId.length,
                    templateStatus = LMSCommunicator._prevSavedObjStatus;
                for(;counter<templateCount;counter++){
                    curTemplate = _arrTemplates[counter];
                    pageId = curTemplate.pageId + "-" + curTemplate.title.replace(/\s/g,"_").replace(/[^a-zA-Z0-9-_]/g,"");
                    if(pageId.length >255){
                        pageId = pageId.substring(0,255);
                    }
                    if(typeof templateStatus[counter] == 'undefined'){
                        LMSCommunicator.setCurrentTemplateStatus(counter,pageId,LMSLessonStatus.NOT_ATTEMPTED); 
                    }
                }
            }



        }else if(LMSCommunicator._PackageCommunicationVersion == PackageType.SCORM_2004 || LMSCommunicator._PackageCommunicationVersion == PackageType.SCORM_2004_SUMMARY){
            /* Add code for SCORM 2004 */
        }
    }
}