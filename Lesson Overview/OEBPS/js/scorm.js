var componentId, existingData, pageId;

function saveAction(event, scoObj) {
    var Templates = $('.customClass').length;
    var packageType = "SCORM 1.2";
    var componentData = '';
    let mcqCount = $('.customClass[data-type="multiple-choice-template"]').length;
    let fibCount = $('.customClass[data-type="fill-in-the-blank"] .fib-questions .form-row').length;
    let mtpCount = $('.customClass[data-type="match-the-pairs"]').length;
    let mtpMultipleCount = $('.customClass[data-type="mtp-multiple"]').length;
    let tableGOcount = $('.customClass[data-type="tableGO"]').length;
    let ILCount = $('.customClass[data-type="imagelabelling"]').length;
    let ShortLongCount = $('.customClass[data-type="shortLongAns"]').length;
    let highlightCount = $('.customClass[data-type="highlight"] .highLight-questions .form-row').length;
    let correctionCount = $('.customClass[data-type="correction"] .correction-questions .form-row').length;
    let categorizeCount = $('.customClass[data-type="Categorize"]').length;
    let questionCount = mcqCount + fibCount + mtpCount + mtpMultipleCount + tableGOcount + ILCount + ShortLongCount + highlightCount + correctionCount + categorizeCount;
    let maxScore = questionCount * window.gradableActivitySettingsJSON.points;
    var isLMSInitialized = LMSCommunicator.initializeLMS(packageType, Templates, maxScore);
    componentId = null;
    if(scoObj.remainingTime){
        let previousData = '';
        if(LMSCommunicator.getSuspendData()){
            previousData = JSON.parse(LMSCommunicator.getSuspendData());
        } 
        if(previousData && previousData != ""){
            if(!savesuspendData || savesuspendData == "" || JSON.stringify(savesuspendData) == '{}'){
                savesuspendData = previousData;
            }
        }
        else{
            savesuspendData={};
        }
        typeof(savesuspendData[pageId]) === "undefined" ? componentData = {}: componentData = savesuspendData[pageId];
        componentData[scoObj.componentkey] = {
            ...componentData[scoObj.componentkey],
            'remainingTime': scoObj.remainingTime
        }
        if(isLMSInitialized){
            LMSCommunicator.setScore(0);
            LMSCommunicator.setMaximumScore(maxScore);
            LMSCommunicator.setMinimumScore(0);
            LMSCommunicator.setLessonStatus('not attempted');
            let session_time = window.timeDiff(window.gradableActivitySettingsJSON.ogTime, scoObj.remainingTime);
            apiHandle.LMSSetValue("cmi.core.session_time", session_time);
            apiHandle.LMSSetValue("cmi.core.lesson_mode", "normal");
        }
    }
    else if (typeof(LMSCommunicator) != 'undefined') {
        pageId = parseInt($(event.target).parents('.customClass').eq(0).attr('data-page-no'));
        if(isNaN(pageId)){
            pageId = parseInt($('.customClass').eq(0).attr('data-page-no'));
        }
        if (scoObj.componentId) {
            componentId = scoObj.componentId;
        } else {
            $('.customClass').filter(elem => {
                if ($('.customClass').eq(elem).attr('data-saved-index') == $(event.target).parents('.customClass').eq(0).attr('data-saved-index')) {
                    console.log(elem);
                    componentId = $('.customClass').eq(elem).attr('data-saved-index');
                }
            })
        }
        // $('.customClass').filter(elem => { 
        //     if($('.customClass').eq(elem).attr('data-saved-index') == $(event.target).parents('.customClass').eq(0).attr('data-saved-index')){
        //         console.log(elem);
        //         componentId = $('.customClass').eq(elem).attr('data-saved-index');
        //     }
        // })
        if(!componentId || !pageId){
			if(!$(event.target).parents('.customClass').length && ($(event.target).hasClass('draggable-div') || $(event.target).parents('.draggable-div').hasClass('draggable-div'))){
				let dataId = $(event.target).attr('data-id');
                componentId = $(event.target).attr('data-saved-index');
                if(!dataId){
                    dataId = $(event.target).parents('.draggable-div').attr('data-id');
                    componentId = $(event.target).parents('.draggable-div').attr('data-saved-index');
                }
				pageId = parseInt($('[data-id='+dataId+'].preview-drop').eq(0).parents('.customClass').attr('data-page-no'));
			}
		}
        if (event.target && event.target.hasAttribute('data-my-ans')) {
            let dataId = $(event.target).attr('data-my-ans');
            
            if (scoObj.componentId) {
                componentId = scoObj.componentId;
            } else {
                componentId = $(event.target).attr('data-saved-index');
            }
            
            // Assuming you want to ensure that pageId is defined correctly.
            pageId = parseInt($('[data-my-ans=' + dataId + '].previewText').eq(0).parents('.customClass').attr('data-page-no'));
        }
        // componentId = $(event.target).parents('.customClass').index();
        var componentData = '';
        //added by ravikiran
        if(savesuspendData==undefined || typeof savesuspendData != 'object'){
            savesuspendData={} 
        }
        typeof(savesuspendData[pageId]) === "undefined" ? componentData = {}: componentData = savesuspendData[pageId];
        componentData[componentId] = {
            ...componentData[componentId],
            'input': {
                "inputSeleced": scoObj.inputSeleced,
                "inputCorrect": scoObj.inputCorrect,
                "inputIncorrect": scoObj.inputIncorrect
            },
            'attempts': {
                "totalNoOfAttempt": scoObj.totalNoOfAttempt,
                "attemptsDone": scoObj.attemptsDone
            },
            'btnState': {
                "isSubmitEnable": scoObj.isSubmitEnable,
                "isShowMeEnable": scoObj.isShowMeEnable,
                "isTryAgainEnable": scoObj.isTryAgainEnable,
                "isResetEnable": scoObj.isResetEnable
            },
            "feedbackMessage": scoObj.feedbackMessage,
            "isIndFeedbackEnable": scoObj.isIndFeedbackEnable,
            "dataType":scoObj.dataType,
            'scoObj': scoObj
        }
        if(window.isGradableActivity){
            // save latency time
            componentData[componentId].latencyTime = $('.customClass[data-saved-index="'+componentId+'"]').attr('latencyTime');
            componentData[componentId].activityStartTime = $('.customClass[data-saved-index="'+componentId+'"]').attr('activityStartTime');
        }
        // this is purely for Group Activity btn state storing in scorm
        $('.customClass[data-type="group-interactivity-template"]').each(function(index, item){
            let dataPageNo = parseInt($(item).attr('data-page-no'));
            let pageId = $(item).attr('data-saved-index');
            var $container = $(item).find('.group-interactivity-container');
            var isSubmitEnable = $container.hasClass("enableSubmit");
            var isShowMeEnable = true;
            var isTryAgainEnable = $container.hasClass("enableTryAgain");;
            var isResetEnable = $container.hasClass("enableReset");
            var totalNoOfAttempt = Number($container.attr("data-maxtries"));
            var attemptsDone = 0;
            if($(item).find(".group-interactivity-btn .submit-btn").attr('data-attempts')){
                attemptsDone = Number($(item).find(".group-interactivity-btn .submit-btn").attr('data-attempts'));
            }

            if(scoObj.marks && scoObj.gradableActivitySettingsJSON){
                // let score = scoObj.marks.correct * scoObj.gradableActivitySettingsJSON.points;
                let totalPoints = (+(scoObj.gradableActivitySettingsJSON.points * scoObj.marks.marks).toFixed(2));
                let maxScore = scoObj.marks.total * scoObj.gradableActivitySettingsJSON.points;
                let passingPercentage = window.gradableActivitySettingsJSON.passingPercentage;
                if(isLMSInitialized){
                    LMSCommunicator.setScore(totalPoints.toString());
                    LMSCommunicator.setMaximumScore(maxScore);
                    LMSCommunicator.setMinimumScore(0);
                    let percent = +((scoObj.gradableActivitySettingsJSON.points * scoObj.marks.marks)/maxScore) * 100;
                    if(percent >= passingPercentage){
                        LMSCommunicator.setLessonStatus('passed');
                        scoObj.passingStatus = 'passed';
                    }else{
                        LMSCommunicator.setLessonStatus('failed');
                        scoObj.passingStatus = 'failed';
                    }
                    if(scoObj.gradableActivitySettingsJSON.points == 0){
                        LMSCommunicator.setLessonStatus('completed');
                        scoObj.passingStatus = 'completed';
                    }
                }
                // let startTime = window.gradableActivitySettingsJSON.durationMin +":"+ window.gradableActivitySettingsJSON.durationSec;
                let endTime = window.gradableActivitySettingsJSON.ogTime
                if(window.gradableActivitySettingsJSON.durationEnable){
                    endTime = window.gradableMins+":"+ window.gradableSec;
                }
                // let endTime = window.gradableMins+":"+ window.gradableSec;
                let finalTime = window.timeDiff(window.gradableActivitySettingsJSON.ogTime, endTime);

                scoObj.time = finalTime;
                if(isLMSInitialized){
                    apiHandle.LMSSetValue("cmi.core.session_time", scoObj.time.toString());
                }
                if(window.gradableAssessmentComplete){
                    window.gradableAssessmentComplete(scoObj);
                }
                if(isLMSInitialized){
                    if(window.gradableActivitySettingsJSON.showAnswer == 'manual'){
                        apiHandle.LMSSetValue("cmi.core.lesson_mode", "review");
                    }else{
                        apiHandle.LMSSetValue("cmi.core.lesson_mode", "normal");
                    }
                }
                scoObj.gradableActivitySettingsJSON = window.gradableActivitySettingsJSON;
                window.interactionCounter = null;
                
                savesuspendData[dataPageNo] = componentData;
                if (document.referrer) {
                    const parentOrigin = new URL(document.referrer).origin;
                    window.parent.postMessage({
                        scormdata: 'ready',
                        scormJsonData: savesuspendData
                    }, parentOrigin);
                }
                // window.parent.postMessage({ 'scormdata': 'ready', 'scormJsonData': savesuspendData }, '*');
                // localStorage.setItem('savesuspendData', JSON.stringify(savesuspendData));
                var data = JSON.stringify(savesuspendData);
                if(isLMSInitialized){
                    LMSCommunicator.setCurrentTemplateSuspendData(dataPageNo, data, componentId);
                    LMSCommunicator.setSuspendData(data);
                }
                sendInteractionData(item);
            }

            if(!componentData[pageId]){
                componentData[pageId] = {
                    'attempts': {
                        "totalNoOfAttempt": totalNoOfAttempt,
                        "attemptsDone": attemptsDone
                    },
                    'btnState': {
                        "isSubmitEnable": isSubmitEnable,
                        "isShowMeEnable": isShowMeEnable,
                        "isTryAgainEnable": isTryAgainEnable,
                        "isResetEnable": isResetEnable
                    },
                    'scoObj': scoObj
                }
            }else{
                componentData[pageId].attempts = {
                    "totalNoOfAttempt": totalNoOfAttempt,
                    "attemptsDone": attemptsDone
                };
                componentData[pageId].btnState = {
                    "isSubmitEnable": isSubmitEnable,
                    "isShowMeEnable": isShowMeEnable,
                    "isTryAgainEnable": isTryAgainEnable,
                    "isResetEnable": isResetEnable
                };
                componentData[pageId].scoObj = scoObj;
            }
            if(window.isGradableActivity){
                // save latency time
                componentData[pageId].latencyTime = $('.customClass[data-saved-index="'+pageId+'"]').attr('latencyTime');
                componentData[pageId].activityStartTime = $('.customClass[data-saved-index="'+pageId+'"]').attr('activityStartTime');
            }
        });
    }
        let previousData = '';
        if(LMSCommunicator.getSuspendData()){
            previousData = JSON.parse(LMSCommunicator.getSuspendData());
        } 
        if(previousData && previousData != ""){
            if(!savesuspendData || savesuspendData == "" || JSON.stringify(savesuspendData) == '{}'){
                savesuspendData = previousData;
            }
        }
        if(!savesuspendData){
            savesuspendData={};
        }
        let componentDataKeys = Object.keys(componentData);
        if(componentDataKeys.length){
            componentDataKeys.forEach((key) => {
                if(!savesuspendData || savesuspendData == "" || JSON.stringify(savesuspendData) == '{}'){
                    savesuspendData[pageId] = componentData;
                }else{
                    if(!savesuspendData[pageId]){
                        savesuspendData[pageId] = {};
                    }
                    savesuspendData[pageId][key] = componentData[key];
                }
            });
        }
        if (document.referrer) {
            const parentOrigin = new URL(document.referrer).origin;
            window.parent.postMessage({
                scormdata: 'ready',
                scormJsonData: savesuspendData
            }, parentOrigin);
        }
        // savesuspendData[pageId] = componentData;
       // window.parent.postMessage({ 'scormdata': 'ready', 'scormJsonData': savesuspendData }, '*');
        // localStorage.setItem('savesuspendData', JSON.stringify(savesuspendData));
        var data = JSON.stringify(savesuspendData);
        if(isLMSInitialized){
            LMSCommunicator.setCurrentTemplateSuspendData(pageId, data, componentId);
            let newData = { 
                [pageId] : JSON.parse(data)[pageId]
            }
            if (window.client == 'CL' || window.parent.client == 'CL') {
                LMSCommunicator.setSuspendData(JSON.stringify(newData));
            }else{
                LMSCommunicator.setSuspendData(data);
            }
        }
}   

function sendInteractionData(groupContainer) {
    $(groupContainer).find('.customClass').each(function(idx, itm){
        if (!window.gradableActivitySettingsJSON.points) {
            window.gradableActivitySettingsJSON['points'] = 0;
        }
        if($(itm).attr('data-type') == "multiple-choice-template") {
            let interactionObj = {};
            let customClass = itm;
            let isSingleSelect = $(customClass).find('.question-select-wrap').hasClass('single-questions');
            if(isSingleSelect){
                if($(customClass).find('input:checked').attr('data-iscorrect') == "dHJ1ZQ=="){
                    interactionObj.result = 'correct';
                }else{
                    interactionObj.result = 'wrong';
                }
                interactionObj.student_response = $(customClass).find('input.icheck:checked').parents('.form-row').find('.radio-text').text();
                if(interactionObj.student_response == "" && $(customClass).find('input.icheck:checked').parents('.form-row').find('img.template-image').length){
                    let imageName = $(customClass).find('input.icheck:checked').parents('.form-row').find('img.template-image').attr('src').split('/');
                    interactionObj.student_response = imageName[imageName.length - 1];
                }
                interactionObj.correct_ans = $(customClass).find('input.icheck[data-iscorrect="dHJ1ZQ=="]').parents('.form-row').find('.radio-text').text();
                if(interactionObj.correct_ans == "" && $(customClass).find('input.icheck[data-iscorrect="dHJ1ZQ=="]').parents('.form-row').find('img.template-image').length){
                    let imageName = $(customClass).find('input.icheck[data-iscorrect="dHJ1ZQ=="]').parents('.form-row').find('img.template-image').attr('src').split('/');
                    interactionObj.correct_ans = imageName[imageName.length - 1];
                }
            }else{
                if($(customClass).find('input.icheck[data-iscorrect="dHJ1ZQ=="]').length == $(customClass).find('input.icheck[data-iscorrect="dHJ1ZQ=="]:checked').length){
                    interactionObj.result = 'correct';
                }else{
                    interactionObj.result = 'wrong';
                }
                let corrArr = $(customClass).find('input.icheck[data-iscorrect="dHJ1ZQ=="]').map(function () { 
                    let mcqCorr = $(this).parents('.form-row').find('.radio-text').text();
                    if(mcqCorr == "" && $(this).parents('.form-row').find('img.template-image').length){
                        let imageName = $(this).parents('.form-row').find('img.template-image').attr('src').split('/');
                        mcqCorr = imageName[imageName.length - 1];
                    }
                    return mcqCorr;
                }).get();
                let stuRespArr = $(customClass).find('input.icheck:checked').map(function () { 
                    let mcqResp = $(this).parents('.form-row').find('.radio-text').text();
                    if(mcqResp == "" && $(this).parents('.form-row').find('img.template-image').length){
                        let imageName = $(this).parents('.form-row').find('img.template-image').attr('src').split('/');
                        mcqResp = imageName[imageName.length - 1];
                    }
                    return mcqResp;
                }).get();
                interactionObj.student_response = stuRespArr.join(', ');
                interactionObj.correct_ans = corrArr.join(', ');
            }
            interactionObj.que_id = $(customClass).find('.question-text .sc-question').text().trim();
            if($(customClass).attr('activityStartTime') != undefined && $(customClass).attr('latencyTime') != undefined){
                interactionObj.latency = window.timeDiff($(customClass).attr('activityStartTime'), $(customClass).attr('latencyTime'));
            }else{
                interactionObj.latency = 0; 
            }
            interactionObj.objective_id = $(customClass).attr('data-saved-index');
            let d = new Date();
            interactionObj.time = d.getHours() +":"+ d.getMinutes() +":"+ d.getSeconds();
            interactionObj.type = "choice";
            interactionObj.weighting = 1;
            logSCOInteraction(interactionObj);
        } else if($(itm).attr('data-type') == "fill-in-the-blank") {
            $(itm).find('.form-row').each(function(index, item){
                let customClass = $(item).parents('.customClass')[0];
                if ($(item).parents('.drag-and-drop').length > 0) {
                    // FIB Drag Drop
                    if($(item).find('.sort-with-row').hasClass('dropped')){
                        let interactionObj = {};
                        let corrArr, stuRespArr;

                        if($(item).find('.inputbox-selected.draggable-div').length && $(item).find('.inputbox-selected.draggable-div').hasClass('sort-text-selected')){
                            corrArr = $(item).find('.preview-drop .inputbox-selected').map(function () {
                                let correctDragVal = '';
                                if ($(this).find('span').hasClass('auth-equation-holder')) {
                                    correctDragVal = $(this).find('span').attr('data-equation-latex');
                                }else{
                                    // correctDragVal = $(this).attr('data-correct-answer');
                                    // correctDragVal = $(this).text();
                                    if($(this).hasClass('sort-text-selected')){
                                        var parser = new DOMParser(); 
                                        var el = parser.parseFromString($(this).attr('data-correct-answer'), "text/html");
                                        var elem=$(el).contents()[0].childNodes[1].childNodes[0];
                                        return $(elem).text();
                                    }else{
                                        let imgJson = JSON.parse($(this).attr('data-correct-answer'));
                                        let fileName = imgJson.src.split('fileName=')[1]; 
                                        return fileName;
                                    }
                                }
                                return correctDragVal;
                            }).get();
                            stuRespArr = $(item).find('.draggable-div').map(function () {
                                let studentDragVal = '';
                                if ($(this).find('span').hasClass('auth-equation-holder')) {
                                    studentDragVal = $(this).find('span').attr('data-equation-latex');
                                }else{
                                    // studentDragVal = $(this).attr('data-correct-answer');
                                    studentDragVal = $(this).text();
                                }
                                return studentDragVal;
                            }).get();
                        }else{
                            corrArr = $(item).find('.preview-drop .inputbox-selected').map(function () { 
                                if($(this).hasClass('sort-text-selected')){
                                    var parser = new DOMParser(); 
                                    var el = parser.parseFromString($(this).attr('data-correct-answer'), "text/html");
                                    var elem=$(el).contents()[0].childNodes[1].childNodes[0];
                                    return $(elem).text();
                                }else{
                                    let imgJson = JSON.parse($(this).attr('data-correct-answer'));
                                    let fileName = imgJson.src.split('fileName=')[1]; 
                                    return fileName;
                                }
                            }).get();
                            stuRespArr = $(item).find('.draggable-div').map(function () { 
                                let imgJson1 = JSON.parse($(this).attr('data-correct-answer'));
                                let fileName1 = imgJson1.src.split('fileName=')[1];
                                return fileName1;
                            }).get();
                        }
                        interactionObj.student_response = stuRespArr.join(', ');
                        interactionObj.correct_ans = corrArr.join(', ');

                        if(interactionObj.student_response == interactionObj.correct_ans){
                            interactionObj.result = 'correct';
                        }else{
                            interactionObj.result = 'wrong';
                        }

                        let divTemp = document.createElement('div');
                        $(divTemp).html($(item).find('.template-instruction').html());
                        $(divTemp).find('.js-form-row').replaceWith('_____');
                        interactionObj.que_id = $(divTemp).text().trim();

                        if($(customClass).attr('activityStartTime') != undefined && $(customClass).attr('latencyTime') != undefined){
                            interactionObj.latency = window.timeDiff($(customClass).attr('activityStartTime'), $(customClass).attr('latencyTime'));
                        }else{
                            interactionObj.latency = 0; 
                        }
                        interactionObj.objective_id = $(customClass).attr('data-saved-index');
                        let d = new Date();
                        interactionObj.time = d.getHours() +":"+ d.getMinutes() +":"+ d.getSeconds();
                        interactionObj.type = "fill-in";
                        interactionObj.weighting = 1;
                        logSCOInteraction(interactionObj);
                    }
                }else{
                    if ($(item).parents('.fib-body').hasClass('with-option-body')) {
                        // FIB DropDown
                        let interactionObj = {};
                        let corrArr = $(item).find('.dropdown-menu.previewList').map(function () { 
                            let idx = $(this).attr('data-correctoption-index');
                            let correctDropDownVal = '';
                            if ($(this).find('li[data-id="'+idx+'"]').find('span').hasClass('auth-equation-holder')) {
                                correctDropDownVal = $(this).find('li[data-id="'+idx+'"]').find('span').attr('data-equation-latex');
                            }else{
                                correctDropDownVal =  $(this).find('li[data-id="'+idx+'"]').html();
                            }
                            return correctDropDownVal;
                        }).get();

                        let stuRespArr = $(item).find('.js-form-row').map(function () { 
                            let studentDropDownVal = '';
                            if ($(this).find('.chosenAns').find('span').hasClass('auth-equation-holder')) {
                                studentDropDownVal = $(this).find('.chosenAns').find('span').attr('data-equation-latex');
                            }else{
                                studentDropDownVal = $(this).find('.chosenAns').html();
                            }
                            return studentDropDownVal;
                        }).get();
                        
                        interactionObj.student_response = stuRespArr.join(', ');
                        interactionObj.correct_ans = corrArr.join(', ');

                        if(interactionObj.student_response == interactionObj.correct_ans){
                            interactionObj.result = 'correct';
                        }else{
                            interactionObj.result = 'wrong';
                        }

                        let divTemp = document.createElement('div');
                        $(divTemp).html($(item).find('.template-instruction').html());
                        $(divTemp).find('.js-form-row').replaceWith('_____');
                        interactionObj.que_id = $(divTemp).text().trim();

                        if($(customClass).attr('activityStartTime') != undefined && $(customClass).attr('latencyTime') != undefined){
                            interactionObj.latency = window.timeDiff($(customClass).attr('activityStartTime'), $(customClass).attr('latencyTime'));
                        }else{
                            interactionObj.latency = 0; 
                        }
                        interactionObj.objective_id = $(customClass).attr('data-saved-index');
                        let d = new Date();
                        interactionObj.time = d.getHours() +":"+ d.getMinutes() +":"+ d.getSeconds();
                        interactionObj.type = "fill-in";
                        interactionObj.weighting = 1;
                        logSCOInteraction(interactionObj);
                    }else{
                        // FIB Text
                        let interactionObj = {};
                        let corrArr = $(item).find('input').map(function () { 
                            return decodeURIComponent(escape(window.atob($(this).attr('data-correct-answer'))));
                        }).get();

                        let stuRespArr = $(item).find('input').map(function () { 
                            return $(this).val();
                        }).get();
                        
                        interactionObj.student_response = stuRespArr.join(', ');
                        interactionObj.correct_ans = corrArr.join(', ');

                        if(interactionObj.student_response == interactionObj.correct_ans){
                            interactionObj.result = 'correct';
                        }else{
                            interactionObj.result = 'wrong';
                        }

                        let divTemp = document.createElement('div');
                        $(divTemp).html($(item).find('.template-instruction').html());
                        $(divTemp).find('.js-form-row').replaceWith('_____');
                        interactionObj.que_id = $(divTemp).text().trim();
                        
                        if($(customClass).attr('activityStartTime') != undefined && $(customClass).attr('latencyTime') != undefined){
                            interactionObj.latency = window.timeDiff($(customClass).attr('activityStartTime'), $(customClass).attr('latencyTime'));
                        }else{
                            interactionObj.latency = 0; 
                        }
                        interactionObj.objective_id = $(customClass).attr('data-saved-index');
                        let d = new Date();
                        interactionObj.time = d.getHours() +":"+ d.getMinutes() +":"+ d.getSeconds();
                        interactionObj.type = "fill-in";
                        interactionObj.weighting = 1;
                        logSCOInteraction(interactionObj);
                    }
                }
            });
        } else if($(itm).attr('data-type') == "match-the-pairs") {
            let interactionObj = {};
            let customClass = itm;
            if($(customClass).find('.component-holder').eq(0).hasClass('correct-question')){
                interactionObj.result = 'correct';
            }else{
                interactionObj.result = 'wrong';
            }
            interactionObj.student_response = "";
            $(customClass).find('.MTP_pair').each(function(ix, pair){
                let resp = "";
                let pair1Name, pair2Name;
                if($(pair).find('.mtp-pair1-block').find('img').length){
                    let srclen = $(pair).find('.mtp-pair1-block').find('img').attr('src').split('/');
                    pair1Name = srclen[srclen.length - 1];
                }else{
                    pair1Name = $(pair).find('.mtp-pair1-block').text().trim();
                }
                let jointPair = $(pair).find('.sort-drag input:hidden').val().split('_');
                let jointPiarElem = $(pair).parents('form').find('.mtp-pair2 [data-drag-identifier='+jointPair[1]+']').parents('.mtp-pair2').find('.mtp-pair2-block');
                if(jointPiarElem.find('img').length){
                    let srclen = jointPiarElem.find('img').attr('src').split('/');
                    pair2Name = srclen[srclen.length - 1];
                }else{
                    pair2Name = jointPiarElem.text().trim();
                }
                interactionObj.student_response = interactionObj.student_response + "("+pair1Name+") = ("+pair2Name+"), ";
            });
            interactionObj.correct_ans = "";
            $(customClass).find('.MTP_pair').each(function(ix, pair){
                let pairSet = $(pair).find('.sort-drag input:hidden').val().split('_');
                let resp = "";
                let pair1Name, pair2Name;
                if($(pair).find('.mtp-pair1-block').find('img').length){
                    let srclen = $(pair).find('.mtp-pair1-block').find('img').attr('src').split('/');
                    pair1Name = srclen[srclen.length - 1];
                }else{
                    pair1Name = $(pair).find('.mtp-pair1-block').text().trim();
                }

                let correcrPair = $(pair).parents('form').find('.mtp-pair2 [data-drag-identifier='+pairSet[0]+']').parents('.mtp-pair2').find('.mtp-pair2-block');
                if(correcrPair.find('img').length){
                    let srclen = correcrPair.find('img').attr('src').split('/');
                    pair2Name = srclen[srclen.length - 1];
                }else{
                    pair2Name = correcrPair.text().trim();
                }

                interactionObj.correct_ans = interactionObj.correct_ans + "("+pair1Name+") = ("+pair2Name+"), "
            });

            interactionObj.que_id = $(customClass).find('.instruction-text').text().trim();
            if($(customClass).attr('activityStartTime') != undefined && $(customClass).attr('latencyTime') != undefined){
                interactionObj.latency = window.timeDiff($(customClass).attr('activityStartTime'), $(customClass).attr('latencyTime'));
            }else{
                interactionObj.latency = 0; 
            }
            interactionObj.objective_id = $(customClass).attr('data-saved-index');
            let d = new Date();
            interactionObj.time = d.getHours() +":"+ d.getMinutes() +":"+ d.getSeconds();
            interactionObj.type = "matching";
            interactionObj.weighting = 1;
            logSCOInteraction(interactionObj);
        } else if($(itm).attr('data-type') == "imagelabelling") {
            let interactionObj = {};
            let customClass = itm;

            if($(customClass).find('.component-holder').eq(0).hasClass('correct-question')){
                interactionObj.result = 'correct';
            }else{
                interactionObj.result = 'wrong';
            }
            interactionObj.student_response = "";
            interactionObj.correct_ans = "";
            $(customClass).find('.imageLabellingContainer .mainLabelDiv .labelPreview').each(function(ix, label){
                let studentResp = $(label).find('.previewText').text().trim();

                let tempDiv = document.createElement("div");
                $(tempDiv).html($(label).html());
                $(tempDiv).find('.previewText').remove();
                let correctAns = $(tempDiv).text().trim();
                
                interactionObj.student_response = interactionObj.student_response + studentResp + ", ";
                interactionObj.correct_ans = interactionObj.correct_ans + correctAns + ", ";
            });

            interactionObj.que_id = $(customClass).find('.sc-question').text().trim();
            if($(customClass).attr('activityStartTime') != undefined && $(customClass).attr('latencyTime') != undefined){
                interactionObj.latency = window.timeDiff($(customClass).attr('activityStartTime'), $(customClass).attr('latencyTime'));
            }else{
                interactionObj.latency = 0; 
            }
            interactionObj.objective_id = $(customClass).attr('data-saved-index');
            let d = new Date();
            interactionObj.time = d.getHours() +":"+ d.getMinutes() +":"+ d.getSeconds();
            interactionObj.type = "other";
            interactionObj.weighting = 1;
            logSCOInteraction(interactionObj);
        } else if($(itm).attr('data-type') == "shortLongAns") {
            let interactionObj = {};
            let customClass = itm;
            interactionObj.result = 'unanticipated';
            // interactionObj.student_response = $(customClass).find('input, textarea').val(); let ansType = $(customClass).find('.shortLongAnsType').attr('answer-type');
            if(ansType == 'shortAns'){
                interactionObj.student_response = $(customClass).find('div.shortAnsText').html().trim();
            }else{
               interactionObj.student_response = $(customClass).find('input, textarea').val().trim();
            }
            interactionObj.correct_ans = "NA";
            interactionObj.que_id = $(customClass).find('.questionText').text().trim();
            if($(customClass).attr('activityStartTime') != undefined && $(customClass).attr('latencyTime') != undefined){
                interactionObj.latency = window.timeDiff($(customClass).attr('activityStartTime'), $(customClass).attr('latencyTime'));
            }else{
                interactionObj.latency = 0; 
            }
            interactionObj.objective_id = $(customClass).attr('data-saved-index');
            let d = new Date();
            interactionObj.time = d.getHours() +":"+ d.getMinutes() +":"+ d.getSeconds();
            interactionObj.type = "long-fill-in";
            interactionObj.weighting = 1;
            logSCOInteraction(interactionObj);
        } else if($(itm).attr('data-type') == "identify-the-clip") {
            let interactionObj = {};
            let customClass = itm;
            interactionObj.result = 'unanticipated';
            let ansType = $(customClass).find('.identifyTheClipComponent').attr('answer-type');
            if(ansType == 'shortAns'){
                interactionObj.student_response = $(customClass).find('div.shortAnsText').html().trim();
            }else{
                interactionObj.student_response = $(customClass).find('input, textarea').val().trim();
            }
            interactionObj.correct_ans = "NA";
            interactionObj.que_id = $(customClass).find('.questionText').text().trim();
            if($(customClass).attr('activityStartTime') != undefined && $(customClass).attr('latencyTime') != undefined){
                interactionObj.latency = window.timeDiff($(customClass).attr('activityStartTime'), $(customClass).attr('latencyTime'));
            }else{
                interactionObj.latency = 0; 
            }
            interactionObj.objective_id = $(customClass).attr('data-saved-index');
            let d = new Date();
            interactionObj.time = d.getHours() +":"+ d.getMinutes() +":"+ d.getSeconds();
            interactionObj.type = "long-fill-in";
            interactionObj.weighting = 1;
            logSCOInteraction(interactionObj);
        } else if($(itm).attr('data-type') == "highlight") {
            let interactionObj = {};
            $(itm).find('.form-row').each(function(index, item){
                let customClass = $(item).parents('.customClass').eq(0);
                interactionObj.student_response = "";
                interactionObj.correct_ans = "";
                $(item).find('.wrongWords, .myWords').each(function(inx, itm){
                    if(interactionObj.student_response == ""){
                        interactionObj.student_response = $(itm).text().trim();
                    }else{
                        interactionObj.student_response = interactionObj.student_response + ", " + $(itm).text().trim();
                    }
                });
                $(item).find('.selectedHighlightWord[myAns]').each(function(inx, itm){
                    if(interactionObj.correct_ans == ""){
                        interactionObj.correct_ans = $(itm).attr('myAns').trim();
                    }else{
                        interactionObj.correct_ans = interactionObj.correct_ans + ", " + $(itm).attr('myAns').trim();
                    }
                });
                interactionObj.que_id = $(customClass).find('.instruction-text').text().trim();
                if($(customClass).attr('activityStartTime') != undefined && $(customClass).attr('latencyTime') != undefined){
                    interactionObj.latency = window.timeDiff($(customClass).attr('activityStartTime'), $(customClass).attr('latencyTime'));
                }else{
                    interactionObj.latency = 0; 
                }

                if(interactionObj.student_response.toLowerCase() == interactionObj.correct_ans.toLowerCase()){
                    interactionObj.result = 'correct';
                }else{
                    interactionObj.result = 'wrong';
                }
                interactionObj.objective_id = $(customClass).attr('data-saved-index');
                let d = new Date();
                interactionObj.time = d.getHours() +":"+ d.getMinutes() +":"+ d.getSeconds();
                interactionObj.type = "other";
                interactionObj.weighting = 1;
                logSCOInteraction(interactionObj);
            })
          
          
        } else if($(itm).attr('data-type') == "correction") {
            let interactionObj = {};
            $(itm).find('.form-row').each(function(index, item){
                console.log(item);
                let customClass = $(item).parents('.customClass')[0];
                if ($(item).parents('.correction').length > 0) {
                  
                    interactionObj.student_response = "";
                    interactionObj.correct_ans = "";
                    $(item).find('.wrongWords, .myWords').each(function(inx, itm){
                        if(interactionObj.student_response == ""){
                            interactionObj.student_response = $(itm).text().trim();
                        }else{
                            interactionObj.student_response = interactionObj.student_response + ", " + $(itm).text().trim();
                        }
                    });
                    $(item).find('.selectedStrikeWord[my-attr-ans]').each(function(inx, itm){
                        if(interactionObj.correct_ans == ""){
                            interactionObj.correct_ans = $(itm).attr('my-attr-ans').trim();
                        }else{
                            interactionObj.correct_ans = interactionObj.correct_ans + ", " + $(itm).attr('my-attr-ans').trim();
                        }
                    });
                    interactionObj.que_id = $(customClass).find('.instruction-text').text().trim();
                    if($(customClass).attr('activityStartTime') != undefined && $(customClass).attr('latencyTime') != undefined){
                        interactionObj.latency = window.timeDiff($(customClass).attr('activityStartTime'), $(customClass).attr('latencyTime'));
                    }else{
                        interactionObj.latency = 0;
                    }
                    if(interactionObj.student_response.toLowerCase() == interactionObj.correct_ans.toLowerCase()){
                        interactionObj.result = 'correct';
                    }else{
                        interactionObj.result = 'wrong';
                    }
                    interactionObj.objective_id = $(customClass).attr('data-saved-index');
                    let d = new Date();
                    interactionObj.time = d.getHours() +":"+ d.getMinutes() +":"+ d.getSeconds();
                    interactionObj.type = "other";
                    interactionObj.weighting = 1;
                    logSCOInteraction(interactionObj);
                }
            })
        } else if ($(itm).attr('data-type') == "Categorize") {
            let interactionObj = {};
            let customClass = itm;
            if ($(customClass).find('.previewBodyBox .categorize-body .categories-container').eq(0).hasClass('isCorrect')) {
                interactionObj.result = 'correct';
            } else {
                interactionObj.result = 'wrong';
            }
            interactionObj.student_response = "";
            interactionObj.correct_ans = "";
            let stuResp = [];
            let corrResp = [];
            $(customClass).find('.previewBodyBox .categorize-body .categories').each(function(index, item){
                let categoryName = $(item).find('.categoryName').text();
                let studOptionResp = [];
                $(item).find('.cat_Options').each(function(inx, optitem){
                    var ansTxt = '';
                    if ($(optitem).find('.cat_single_option').eq(0).hasClass('option_text')) {
                        ansTxt = $(optitem).find('.cat_single_option').text();
                    } else {
                        let imgNameArr = $(optitem).find('.cat_single_option img').attr('data-imgsrc').split("/");
                        ansTxt = imgNameArr[imgNameArr.length-1];
                    }
                    studOptionResp.push(ansTxt);
                });
                stuResp.push("(" + categoryName + ")=(" + studOptionResp.toString() + ")");
            });
            interactionObj.student_response = stuResp.toString();
            let catName = '';
            let catIndex = '';
            $(customClass).find('.previewBodyBox .categorize-body .categories').each(function(index, item){
                catName = $(item).find('.categoryName').text();
                catIndex = $(item).attr('data-cat-index');
                let correctOptionResp = [];
                $(customClass).find(".previewBodyBox .categorize-drag-drop-container .cat_Options .cat_single_option[data-ans-index='" + catIndex + "']").each(function(inx, optitem){
                    var ansTxt = '';
                    if ($(optitem).hasClass('option_text')) {
                        ansTxt = $(optitem).text();
                    } else {
                        let imgNameArr = $(optitem).find('img').attr('data-imgsrc').split("/");
                        ansTxt = imgNameArr[imgNameArr.length-1];
                    }
                    correctOptionResp.push(ansTxt);
                });
                corrResp.push("(" + catName + ")=(" + correctOptionResp.toString() + ")");
            });
            interactionObj.correct_ans = corrResp.toString();
            interactionObj.objective_id = $(customClass).attr('data-saved-index');
            interactionObj.que_id = $(customClass).find('.question-text').text().trim();
            let d = new Date();
            interactionObj.time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
            interactionObj.type = "matching";
            interactionObj.weighting = 1;
            if ($(customClass).attr('activityStartTime') != undefined && $(customClass).attr('latencyTime') != undefined) {
                interactionObj.latency = window.timeDiff($(customClass).attr('activityStartTime'), $(customClass).attr('latencyTime'));
            } else {
                interactionObj.latency = 0;
            }
            logSCOInteraction(interactionObj);
        }
    });
}

function logSCOInteraction(interactionObj) {
    var Templates = $('.customClass').length;
    var packageType = "SCORM 1.2";
    let mcqCount = $('.customClass[data-type="multiple-choice-template"]').length;
    let fibCount = $('.customClass[data-type="fill-in-the-blank"] .fib-questions .form-row').length;
    let mtpCount = $('.customClass[data-type="match-the-pairs"]').length;
    let mtpMultipleCount = $('.customClass[data-type="mtp-multiple"]').length;
    let tableGOcount = $('.customClass[data-type="tableGO"]').length;
    let ILCount = $('.customClass[data-type="imagelabelling"]').length;
    let ShortLongCount = $('.customClass[data-type="shortLongAns"]').length;
    let highlightCount = $('.customClass[data-type="highlight"] .highLight-questions .form-row').length;
    let correctionCount = $('.customClass[data-type="correction"] .correction-questions .form-row').length;
    let categorizeCount = $('.customClass[data-type="Categorize"]').length;
    let questionCount = mcqCount + fibCount + mtpCount + mtpMultipleCount + tableGOcount + ILCount + ShortLongCount + highlightCount + correctionCount + categorizeCount;
    let maxScore = questionCount * window.gradableActivitySettingsJSON.points;
    var isLMSInitialized = LMSCommunicator.initializeLMS(packageType, Templates, maxScore);
    if(window.interactionCounter == null){
        window.interactionCounter = 0
    }else{
        window.interactionCounter++;
    }
    let n = window.interactionCounter;
    if(window.gradableActivitySettingsJSON){
        interactionObj.weighting = interactionObj.weighting * window.gradableActivitySettingsJSON.points;
    }
    if(isLMSInitialized){
        apiHandle.LMSSetValue('cmi.interactions_'+n+'.correct_responses_0.pattern', interactionObj.correct_ans); // Correct Answer
        apiHandle.LMSSetValue('cmi.interactions_'+n+'.id', interactionObj.que_id); // Unique label
        apiHandle.LMSSetValue('cmi.interactions_'+n+'.latency', interactionObj.latency); // Time of the first response
        apiHandle.LMSSetValue('cmi.interactions_'+n+'.objectives_0.id', interactionObj.objective_id); // 
        apiHandle.LMSSetValue('cmi.interactions_'+n+'.result', interactionObj.result); // Label for objectives associated with the interaction
        apiHandle.LMSSetValue('cmi.interactions_'+n+'.student_response', interactionObj.student_response); // Student response for interaction
        apiHandle.LMSSetValue('cmi.interactions_'+n+'.time', interactionObj.time); // Activity Start Time - activityStartTime
        apiHandle.LMSSetValue('cmi.interactions_'+n+'.type', interactionObj.type); // (“true-false”, “choice”, “fill-in”, “long-fill-in”, “matching”, “performance”, “sequencing”, “likert”, “numeric” or “other”)
        apiHandle.LMSSetValue('cmi.interactions_'+n+'.weighting', interactionObj.weighting); // Weight given to the interaction
    }
}

function initializelmsonLoad() {
    var element, tempaleName;
    // let lessonLocation = parseInt(apiHandle.LMSGetValue("cmi.core.lesson_location"));
    // let firstTimeLoad = localStorage.getItem('playerLoadFirstTime');
    // if(firstTimeLoad == 'true' && !isNaN(lessonLocation)){
    //     window.parent.postMessage({ 'playerNavigation': true, 'action': 'fetch'}, '*');
    // }else{
    //     window.parent.postMessage({ 'playerNavigation': true, 'action': 'save'}, '*');
    // }
    if (typeof savesuspendData =="undefined" || Object.keys(savesuspendData).length === 0) {
        existingData = LMSCommunicator.getSuspendData();
        // var localScormData = localStorage.getItem('savesuspendData');
        if(existingData != "" && existingData != '{}'){
            savesuspendData = JSON.parse(existingData);
            $('body article').removeClass('hide');
            $('body .authoringLoader').addClass('hide');
        }
        // else if(localScormData){
        //     savesuspendData = JSON.parse(localScormData);
        // }
        else{
            window.initGradableScreen();
            // $('body .authoringLoader').addClass('hide');
        }
        if (document.referrer) {
            const parentOrigin = new URL(document.referrer).origin;
            window.parent.postMessage({
                scormdata: 'ready',
                scormJsonData: savesuspendData
            }, parentOrigin);
        }
        // window.parent.postMessage({ 'scormdata': 'ready', 'scormJsonData': savesuspendData }, '*');
        if(typeof savesuspendData != "object"){
            savesuspendData = {};
        }
    } else {
        $('body article').removeClass('hide');
        $('body .authoringLoader').addClass('hide');
    }
    
    $.each(savesuspendData, function(pagekey, pageVal) {
        $.each(pageVal, function(componentkey, val) {
            element = $('.customClass[data-saved-index=' + componentkey + ']');
            tempaleName = $(element).attr('data-type');
            if(val.latencyTime && val.activityStartTime){
                element.attr('latencyTime', val.latencyTime);
                element.attr('activityStartTime', val.activityStartTime);
            }
            switch (tempaleName) {
                case 'group-interactivity-template':
                    
                    let resumeTime = val?.remainingTime;
                    
                    if (val?.attempts) {
                        element.find(".group-interactivity-btn .submit-btn").attr('data-no-of-attempts', val.attempts.totalNoOfAttempt);
                        element.find(".group-interactivity-btn .submit-btn").attr('data-attempts', val.attempts.attemptsDone);
                    }
                    if (val?.attempts?.attemptsDone >= 1 && !val?.btnState?.isSubmitEnable) {
                        element.find('.group-interactivity-container').addClass('submitted');
                    }
                    if(!val?.scoObj?.marks && resumeTime && resumeTime != '' && resumeTime != "0:0"){
                        window.gradableActivitySettingsJSON.durationMin = parseInt(resumeTime.split(':')[0]);
                        window.gradableActivitySettingsJSON.durationSec = parseInt(resumeTime.split(':')[1]);
                    }
                    if (window.isGradableActivity) {
                        window.initGradableScreen();
                    }
                    if(window.isGradableActivity && resumeTime == "0:0"){
                        window.clearGradableInterval('timeout');
                    }
                    // let lessonStatus = val.lessonStatus;
                    
                    if (val?.btnState) {
                        val?.btnState?.isResetEnable ? element.find(".reset-btn").removeClass("disabled") : element.find(".reset-btn").addClass("disabled");
                        val?.btnState?.isSubmitEnable ? element.find(".submit-btn").removeClass("disabled") : element.find(".submit-btn").addClass("disabled");
                        val?.btnState?.isShowMeEnable ? element.find(".showme-btn").removeClass("disabled") : element.find(".showme-btn").addClass("disabled");
                        val?.btnState?.isTryAgainEnable ? element.find(".tryagn-btn").removeClass("disabled") : element.find(".tryagn-btn").addClass("disabled");
                    }
                    if (!val?.btnState?.isResetEnable) {
                        if (element.find('.group-interactivity-container').hasClass('enableReset')) {
                            element.find('.group-interactivity-container').removeClass('enableReset');
                        }
                    }
                    if (val?.btnState?.isTryAgainEnable) {
                        element.find('.group-interactivity-container').addClass('enableTryAgain');
                        element.find(".submit-btn").css("display", "none");
                    }
                    if(val.scoObj && val?.scoObj?.gradableActivitySettingsJSON){
                        let gradableJSON = val?.scoObj?.gradableActivitySettingsJSON;
                        let finalTime = val?.scoObj?.time;
                        let subTitle = "You have attempted the asessment in "+ finalTime +" minutes.";
                        let marksObtained = Math.round(+(gradableJSON.points * val?.scoObj?.marks.marks));
                        let totalMarks = Number(val?.scoObj?.marks?.correct + val?.scoObj?.marks?.incorrect + val?.scoObj?.marks?.partialCorrect + val?.scoObj?.marks?.unanticipated) * gradableJSON.points;
                        let totalPoints = marksObtained +`/`+totalMarks;
                        // let score = val.scoObj.marks.correct * gradableJSON.points;
                        let maxScore = val?.scoObj?.marks.total * gradableJSON.points;
                        let passingPercentage = gradableJSON.passingPercentage;
                        let percent = +((gradableJSON.points * val?.scoObj?.marks?.marks)/maxScore) * 100;
                        let passingStatus = "failed";
                        if(percent >= passingPercentage){
                            passingStatus = 'passed';
                        }
                        if(val?.scoObj?.gradableActivitySettingsJSON?.points == 0){
                            LMSCommunicator.setLessonStatus('completed');
                            val.scoObj.passingStatus = 'completed';
                        }else{
                            LMSCommunicator.setLessonStatus(passingStatus);
                        }
                        LMSCommunicator.setScore(marksObtained.toString());
                        LMSCommunicator.setMaximumScore(maxScore);
                        LMSCommunicator.setMinimumScore(0);
                        apiHandle.LMSSetValue("cmi.core.session_time", val.scoObj.time.toString());
                        let lessonMode = apiHandle.LMSGetValue("cmi.core.lesson_mode");
                        if(lessonMode && lessonMode == "review"){
                            gradableJSON.showAnswer = "manual";
                        }else{
                            gradableJSON.showAnswer = "auto";
                        }
                        let resultObj = {};
                        resultObj.courseName = gradableJSON.courseName;
                        resultObj.subTitle = subTitle;
                        resultObj.correct = val?.scoObj?.marks?.correct;
                        resultObj.incorrect = val?.scoObj?.marks?.incorrect;
                        resultObj.partialCorrect = val?.scoObj?.marks?.partialCorrect;
                        resultObj.unanticipated = val?.scoObj?.marks?.unanticipated;
                        resultObj.finalTime = finalTime;
                        resultObj.totalPoints = totalPoints;
                        resultObj.showAnswer = gradableJSON.showAnswer;
                        resultObj.passingStatus = passingStatus;
                        resultObj.correctFeedback = gradableJSON.correctFeedback;
                        resultObj.incorrectFeedback = gradableJSON.incorrectFeedback;
                        resultObj.manualFeedback = gradableJSON.manualFeedback;

                        resultObj.showViewAssessmentBtn = true;
                        resultObj.source = 'scorm';
                        if(val.remainingTime){
                            resultObj.remainingTime = val?.remainingTime;
                        }
                        window.showGradableResult(resultObj);
                        if (window.isCertificateEnableForCourse) {
                            window.getCertificateData(resultObj);
                        }
                    }
                    break;
                case 'multiple-choice-template':
                    element.find(".submit-btn").data('no-of-attempts', val.attempts.totalNoOfAttempt);
                    element.find(".submit-btn").data('attempts', val.attempts.attemptsDone);
                    val.btnState.isResetEnable ? element.find(".reset-btn").removeClass("disabled") : element.find(".reset-btn").addClass("disabled");
                    val.btnState.isSubmitEnable ? element.find(".submit-btn").removeClass("disabled") : element.find(".submit-btn").addClass("disabled");
                    val.btnState.isShowMeEnable ? element.find(".showme-btn").removeClass("disabled") : element.find(".showme-btn").addClass("disabled");
                    val.btnState.isTryAgainEnable ? element.find(".tryagn-btn").removeClass("disabled") : element.find(".tryagn-btn").addClass("disabled");
                    if (val.btnState.isTryAgainEnable) {
                        element.find(".submit-btn").css("display", "none");
                    }
                    $.each(val.input.inputSeleced, function() {
                        element.find("input.icheck#" + this).addClass('user-selected');
                        element.find("#" + this).prop("checked", true).iCheck('check');
                        MCQCustomStyling(element.find("#" + this));
                        element.find('.template-editor').addClass('attempted-question');
                    });
                    $.each(val.input.inputCorrect, function() {
                        element.find("#" + this).prop("checked", true).iCheck('check');
                        element.find("#" + this).parents(".form-row").addClass('green-border').removeAttr('style');
                        element.find('input').prop('disabled', true);
                    });
                    $.each(val.input.inputIncorrect, function() {
                        element.find("#" + this).parents(".form-row").addClass('red-border').removeAttr('style');
                        element.find('input').prop('disabled', true);
                    });
                    element.find('input').iCheck('update');
                    if (val.feedbackMessage.enable) {
                        MCQShowFeedback(val.feedbackMessage.symbol, '', element, null, val.feedbackMessage.message);
                    }
                    if(val.input.inputCorrect.length || val.input.inputIncorrect.length){
                        decryptIndividualFeedbackMCQScorm(element);
                    }
                    
                    if (val.isIndFeedbackEnable) {
                        element.find('.form-row .individual-feedback').attr('style', 'display: block !important');
                    }
                    break;
                case 'true-false-template':
                    element.find(".submit-btn").data('no-of-attempts', val.attempts.totalNoOfAttempt);
                    element.find(".submit-btn").data('attempts', val.attempts.attemptsDone);
                    val.btnState.isResetEnable ? element.find(".reset-btn").removeClass("disabled") : element.find(".reset-btn").addClass("disabled");
                    val.btnState.isSubmitEnable ? element.find(".submit-btn").removeClass("disabled") : element.find(".submit-btn").addClass("disabled");
                    val.btnState.isShowMeEnable ? element.find(".showme-btn").removeClass("disabled") : element.find(".showme-btn").addClass("disabled");
                    val.btnState.isTryAgainEnable ? element.find(".tryagn-btn").removeClass("disabled") : element.find(".tryagn-btn").addClass("disabled");
                    if (val.btnState.isTryAgainEnable) {
                        element.find(".submit-btn").css("display", "none");
                    }
                    $.each(val.input.inputSeleced, function() {                        
                        element.find("input.tf_radio#" + this).addClass('user-selected');
                        element.find("#" + this).prop("checked", true).iCheck('check');
                        let parentDiv = $("#" + this).parent().parent();
                        $(parentDiv).addClass('selected-tfoption');
                        // MCQCustomStyling(element.find("#" + this));
                        element.find('.template-editor').addClass('attempted-question');
                    });
                    $.each(val.input.inputCorrect, function() {
                        element.find("#" + this).parents(".form-row").addClass('green-border').removeAttr('style');
                        element.find('input').prop('disabled', true);
                    });
                    $.each(val.input.inputIncorrect, function() {
                        element.find("#" + this).parents(".form-row").addClass('red-border').removeAttr('style');
                        element.find('input').prop('disabled', true);
                    });
                    element.find('input').iCheck('update');
                    if (val.feedbackMessage.enable) {
                        MCQShowFeedback(val.feedbackMessage.symbol, '', element, null, val.feedbackMessage.message);
                    }
                   if (val.isIndFeedbackEnable) {
                        element.find('.form-row .individual-feedback').attr('style', 'display: block !important');
                    }
                    break;
                case 'fill-in-the-blank':
                    element.find(".submit-btn").attr('data-no-of-attempts', val.attempts.totalNoOfAttempt);
                    element.find(".submit-btn").attr('data-attempts', val.attempts.attemptsDone);
                    val.btnState.isResetEnable ? element.find(".reset-btn").removeClass("disabled") : element.find(".reset-btn").addClass("disabled");
                    val.btnState.isSubmitEnable ? element.find(".submit-btn").removeClass("disabled") : element.find(".submit-btn").addClass("disabled");
                    val.btnState.isSubmitEnable ? element.find('.preview-sort .inputbox-selected').css('pointerEvents', 'auto') : element.find('.preview-sort .inputbox-selected').css('pointerEvents', 'none'); 
                    val.btnState.isShowMeEnable ? element.find(".showme-btn").removeClass("disabled") : element.find(".showme-btn").addClass("disabled");
                    val.btnState.isTryAgainEnable ? element.find(".tryagn-btn").removeClass("disabled") : element.find(".tryagn-btn").addClass("disabled");

                    if (val.btnState.isTryAgainEnable) {
                        element.find(".submit-btn").css("display", "none");
                    }
                    if (element.find(".component-holder").hasClass("drag-and-drop")) {
                        if ($(element).find('.form-control-wrap').attr('datadragwidth') !== undefined) {
                            $(element).find('.form-control-wrap').css('width', $(element).find('.form-control-wrap').attr('datadragwidth'))
                        } else {
                            $(element).find('.form-control-wrap').css('width', 'auto')
                        }
                        if (val.isIndFeedbackEnable) {
                            element.find(".showme-btn").trigger("click");
                        } else {
                            $.each(val.input.inputSeleced, function(optionkey, optionval) {
                                if (optionval) {
                                    dragAndDropFIB(element.find(".preview-sort .inputbox-selected.draggable-div[data-id='" + optionval + "']"), element.find(".form-control-wrap.ui-droppable").eq(optionkey), element);
                                    element.find('.template-editor').addClass('attempted-question');
                                }  
                            });
                            $.each(val.input.inputCorrect, function() {
                                element.find('.form-control-wrap').eq(this).append('<span class="correct-tick icon-Check" style="position:absolute;"></span>').find(".inputbox-selected.draggable-div").addClass("sort-correct");
                            });
                            $.each(val.input.inputIncorrect, function() {
                                element.find('.form-control-wrap').eq(this).append('<span class="incorrect-tick icon-Close" style="position:absolute;"></span>').find(".inputbox-selected.draggable-div").addClass("sort-incorrect");
                            });
                        }
                    } else {
                        $.each(val.input.inputSeleced, function(optionkey, optionval) {
                            if (element.find('.with-option-body').length > 0) {
                                let html = element.find(".js-form-row.fib-with-option").eq(optionkey).find('.dropdown-menu.previewList li[data-id="'+optionval+'"]').html();
                                element.find(".js-form-row.fib-with-option").eq(optionkey).find("span.chosenAns").eq(0).html(html);
                                element.find(".js-form-row.fib-with-option").eq(optionkey).find(".dropdown-menu.previewList").attr('data-selected-index', optionval);
                            } else {
                                // element.find(".js-form-row.fib-without-option").eq(optionkey).find("div.FIB_style_inputbox").eq(0).html(optionval);
                                element.find(".js-form-row.fib-without-option").eq(optionkey).find("div.FIB_style_inputbox")[0].innerHTML = optionval;
                            }
                            if (optionval == "Select Answer" || optionval == "") {
                                element.find('.template-editor').removeClass('attempted-question');
                            } else {
                                element.find('.template-editor').addClass('attempted-question');
                            }
                        });
                        if (element.find('.with-option-body').length > 0) {
                            element.find('.auth-equation-holder').each(function(i) {
                                $(this).empty();
                                setLatexData(this, $(this).attr('data-equation-latex'));
                                if($(this).parents(".component-holder") && $(this).parents(".component-holder").hasClass("drag-and-drop")){
                                    setTimeout(() => {
                                      let hgt = $(this).height() + 20;
                                      let wdt = $(this).width() + 20;
                                      $(this).parents('.form-control-wrap').height(hgt).css('min-width',wdt);
                                        if ($(this).parents('.form-control-wrap').attr('datadragwidth') !== undefined) {
                                            $(this).parents('.form-control-wrap').css('width', $(this).parents('.form-control-wrap').attr('datadragwidth'))
                                        } else {
                                            $(this).parents('.form-control-wrap').css('width', 'auto')
                                        }
                                   }, 1000);
                                }
                            });
                        }
                        // $.each(val.input.selectedIdx, function(optionkey, optionval) {
                        //     if (optionval != undefined) {
                        //         if (element.find('.with-option-body').length > 0) {
                        //             element.find(".js-form-row.fib-with-option").eq(optionkey).find(".dropdown-menu.previewList").attr('data-selected-index', optionval);
                        //         }
                        //     }
                        // });
                        $.each(val.input.inputCorrect, function() {
                            if (element.find('.with-option-body').length > 0) {
                                element.find(".js-form-row.fib-with-option").eq(this).addClass('correct-attempt').addClass('disabled');
                                element.find(".js-form-row.fib-with-option").eq(this).append('<span class="correct-tick icon-Check" style="position:absolute;"></span>');
                                element.find(".js-form-row.fib-with-option").eq(this).find('.dropdownbtn').addClass('correct');
                                element.find(".js-form-row.fib-with-option").eq(this).find('.dropdownbtn .dropdown-arrow').css('display','none');
                            } else {
                                element.find('.form-control-wrap').eq(this).append('<span class="correct-tick icon-Check icon-close-filled" style="position:absolute;"></span>').addClass('correct-attempt').find('.carat').addClass('hide-carat');
                                // element.find(".js-form-row.fib-without-option").eq(this).find("div.FIB_style_inputbox").eq(0).attr('contenteditable',false);
                                element.find(".js-form-row.fib-without-option").eq(this).find("div.FIB_style_inputbox").eq(0).addClass('correct');
                            }
                        });
                        $.each(val.input.inputIncorrect, function() {
                            if (element.find('.with-option-body').length > 0) {
                                element.find(".js-form-row.fib-with-option").eq(this).addClass('incorrect-attempt').addClass('disabled');
                                element.find(".js-form-row.fib-with-option").eq(this).append('<span class="incorrect-tick icon-Close" style="position:absolute;"></span>');
                                element.find(".js-form-row.fib-with-option").eq(this).find('.dropdownbtn').addClass('incorrect');
                                element.find(".js-form-row.fib-with-option").eq(this).find('.dropdownbtn .dropdown-arrow').css('display','none');
                            } else {
                                element.find('.form-control-wrap').eq(this).append('<span class="incorrect-tick icon-Close icon-close-filled" style="position:absolute;"></span>').addClass('incorrect-attempt').find('.carat').addClass('hide-carat');
                                // element.find(".js-form-row.fib-without-option").eq(this).find("div.FIB_style_inputbox").eq(0).attr('contenteditable',false);
                                element.find(".js-form-row.fib-without-option").eq(this).find("div.FIB_style_inputbox").eq(0).addClass('incorrect');
                            }
                        });
                    }
                    if (val.feedbackMessage.enable) {
                        FIBShowFeedback(val.feedbackMessage.symbol, '', element, null, val.feedbackMessage.message);
                    }
                    val.btnState.isSubmitEnable ? element.find('.deleteBlankDragAndDropIcon').css('display', 'inline') : element.find('.deleteBlankDragAndDropIcon').css('display', 'none'); 
                    break;
                case 'match-the-pairs':
                    scormRender = true;
                    element.find(".submit-btn").attr('data-no-of-attempts', val.attempts.totalNoOfAttempt);
                    element.find(".submit-btn").attr('data-attempts', val.attempts.attemptsDone);
                    val.btnState.isResetEnable ? element.find(".reset-btn").removeClass("disabled") : element.find(".reset-btn").addClass("disabled");
                    val.btnState.isSubmitEnable ? element.find(".submit-btn").removeClass("disabled") : element.find(".submit-btn").addClass("disabled");
                    val.btnState.isShowMeEnable ? element.find(".showme-btn").removeClass("disabled") : element.find(".showme-btn").addClass("disabled");
                    val.btnState.isTryAgainEnable ? element.find(".tryagn-btn").removeClass("disabled") : element.find(".tryagn-btn").addClass("disabled");
                    if (val.btnState.isTryAgainEnable) {
                        element.find(".submit-btn").css("display", "none");
                    }
                    $.each(val.input.inputSeleced.pair1, function(key, value) {
                        mtpJoinThePair(element.find(".mtp-pair2 [data-drag-identifier="+val.input.inputSeleced.pair2[key]+"]"), element.find(".mtp-pair1 [data-drag-identifier="+val.input.inputSeleced.pair1[key]+"]"), element, key);
                    });
                    $.each(val.input.inputCorrect, function() {
                        element.find(".mtp-pair2 [data-drag-identifier="+this+"]").parents(".mtp-pair2").find(".mtp-pair2-block").addClass("mtp-correct-pair");
                        element.find(".mtp-pair2 [data-drag-identifier="+this+"]").parents(".mtp-pair2").append("<span class='feedbackIcon icon-Check'></span>");
                    });
                    $.each(val.input.inputIncorrect, function() {
                        element.find(".mtp-pair2 [data-drag-identifier="+this+"]").parents(".mtp-pair2").find(".mtp-pair2-block").addClass("mtp-incorrect-pair");
                        element.find(".mtp-pair2 [data-drag-identifier="+this+"]").parents(".mtp-pair2").append("<span class='feedbackIcon icon-Close'></span>");
                    });
                    if (val.feedbackMessage.enable) {
                        element.find(".submit-btn").addClass('disabled');
                        element.find(".mtp-alert").css("display","block");
                        element.find(".mtp-alert-message").text(val.feedbackMessage.message);
                        if(val.feedbackMessage.symbol){
                             element.find(".mtp-alert-icon").addClass("icon-correct").removeClass("icon-close-filled")   
                        }
                        
                    }
                    if(val.isIndFeedbackEnable ){
                        element.find(".individualFeedbackEnable").addClass("showindividualFeedback")
                    }
                    
                    break;
                case 'mtp-multiple':
                    scormRender = true;
                    element.find(".submit-btn").attr('data-no-of-attempts', val.attempts.totalNoOfAttempt);
                    element.find(".submit-btn").attr('data-attempts', val.attempts.attemptsDone);
                    val.btnState.isResetEnable ? element.find(".reset-btn").removeClass("disabled") : element.find(".reset-btn").addClass("disabled");
                    val.btnState.isSubmitEnable ? element.find(".submit-btn").removeClass("disabled") : element.find(".submit-btn").addClass("disabled");
                    val.btnState.isShowMeEnable ? element.find(".showme-btn").removeClass("disabled") : element.find(".showme-btn").addClass("disabled");
                    val.btnState.isTryAgainEnable ? element.find(".tryagn-btn").removeClass("disabled") : element.find(".tryagn-btn").addClass("disabled");
                    if (val.btnState.isTryAgainEnable) {
                        element.find(".submit-btn").css("display", "none");
                    }
                    $.each(val.input.inputSeleced.pair1, function(key, value) {
                        mtpJoinThePairMultiple(element.find(`.mtp-pair2 [data-drag-identifier=${val.input.inputSeleced.pair2[key].split('_')[0]}][drag-sub-identifier=${val.input.inputSeleced.pair2[key].split('_')[1]}]`), element.find(".mtp-pair1 [data-drag-identifier="+val.input.inputSeleced.pair1[key]+"]"), element, key);
                        if(!val.btnState.isSubmitEnable && val.input.inputSeleced.pair1.length==element.find(".drop-wrap2").length) {
                            if(val.input.inputSeleced.pair2[key].split('_')[0] == val.input.inputSeleced.pair1[key]) {
                                element.find(`.mtp-pair2 [data-drag-identifier=${val.input.inputSeleced.pair2[key].split('_')[0]}][drag-sub-identifier=${val.input.inputSeleced.pair2[key].split('_')[1]}]`).parents(".mtp-pair2").find(".mtp-pair2-block").addClass("mtp-correct-pair");
                                element.find(`.mtp-pair2 [data-drag-identifier=${val.input.inputSeleced.pair2[key].split('_')[0]}][drag-sub-identifier=${val.input.inputSeleced.pair2[key].split('_')[1]}]`).parents(".mtp-pair2").append("<span class='feedbackIcon icon-Check'></span>");
                            }
                            else {
                                element.find(`.mtp-pair2 [data-drag-identifier=${val.input.inputSeleced.pair2[key].split('_')[0]}][drag-sub-identifier=${val.input.inputSeleced.pair2[key].split('_')[1]}]`).parents(".mtp-pair2").find(".mtp-pair2-block").addClass("mtp-incorrect-pair");
                                element.find(`.mtp-pair2 [data-drag-identifier=${val.input.inputSeleced.pair2[key].split('_')[0]}][drag-sub-identifier=${val.input.inputSeleced.pair2[key].split('_')[1]}]`).parents(".mtp-pair2").append("<span class='feedbackIcon icon-Close'></span>");
                            }
                        }
                    });
                    // $.each(val.input.inputCorrect, function() {
                    //     element.find(".mtp-pair2 [data-drag-identifier="+this+"]").parents(".mtp-pair2").find(".mtp-pair2-block").addClass("mtp-correct-pair");
                    //     element.find(".mtp-pair2 [data-drag-identifier="+this+"]").parents(".mtp-pair2").append("<span class='feedbackIcon icon-Check'></span>");
                    // });
                    // $.each(val.input.inputIncorrect, function() {
                    //     element.find(".mtp-pair2 [data-drag-identifier="+this+"]").parents(".mtp-pair2").find(".mtp-pair2-block").addClass("mtp-incorrect-pair");
                    //     element.find(".mtp-pair2 [data-drag-identifier="+this+"]").parents(".mtp-pair2").append("<span class='feedbackIcon icon-Close'></span>");
                    // });
                    if (val.feedbackMessage.enable) {
                        element.find(".submit-btn").addClass('disabled');
                        element.find(".mtp-alert").css("display","block");
                        element.find(".mtp-alert-message").text(val.feedbackMessage.message);
                        if(val.feedbackMessage.symbol){
                            element.find(".mtp-alert-icon").addClass("icon-correct").removeClass("icon-close-filled")
                        }
                        
                    }
                    if(val.isIndFeedbackEnable) {
                        element.find(".individualFeedbackEnable").addClass("showindividualFeedback")    
                    }
                    
                    break;
                case 'tableGO':
                    element.find(".textNode").each(function(i) {
                        $(this).html(val.input.inputSeleced[i]);
                        if (val.input.inputSeleced[i] != '') {
                            $(this).parent('.studentEditingEnabled').addClass('submitted')
                        }
                    });
                    if(val.btnState.isSubmitEnable){
                        element.find(".submit-btn").removeClass('disabled')
                    }else{
                        element.find(".submit-btn").addClass('disabled')
                        if (val.attempts.attemptsDone >= 1) {
                            element.find(".submit-btn").attr("data-attempts",val.attempts.attemptsDone)
                            let textNode = element.find(".textNode").parents('td')
                            textNode.css('pointer-events','none');   
                        }
                    }
                    break;
                case 'imagelabelling':
                    element.find(".submit-btn").attr('data-no-of-attempts', val.attempts.totalNoOfAttempt);
                    element.find(".submit-btn").attr('data-attempts', val.attempts.attemptsDone);
                    val.btnState.isResetEnable ? element.find(".reset-btn").removeClass("disabled") : element.find(".reset-btn").addClass("disabled");
                    val.btnState.isSubmitEnable ? element.find(".submit-btn").removeClass("disabled") : element.find(".submit-btn").addClass("disabled");
                    val.btnState.isShowMeEnable ? element.find(".showme-btn").removeClass("disabled") : element.find(".showme-btn").addClass("disabled");
                    val.btnState.isTryAgainEnable ? element.find(".tryagn-btn").removeClass("disabled") : element.find(".tryagn-btn").addClass("disabled");
                    if (val.btnState.isTryAgainEnable) {
                        element.find(".submit-btn").css("display", "none");
                    }
                    if (val.isIndFeedbackEnable) {
                        element.find(".showme-btn").trigger("click");
                    } else{
                        $.each(val.input.inputSeleced, function(optionkey, optionval) {
                        if (optionval) {
                            let dragDropOut = {
                                drop: element.find(".labelPreview.ui-droppable").eq(optionkey),
                                drag: element.find(".previewText.draggable-div[data-my-ans='" + optionval + "']").eq(0),
                                form: element
                            }
                                dragAndDropImageLabelling(dragDropOut);
                                element.find('.image-labelling-form').addClass('attempted-question');
                           }
                        });

                    }
                    $.each(val.input.inputCorrect, function() {
                        element.find('.labelPreview ').eq(this).find(".previewText.draggable-div").addClass("labelCorrect");
                    });
                    $.each(val.input.inputIncorrect, function() {
                        element.find('.labelPreview ').eq(this).find(".previewText.draggable-div").addClass("labelInCorrect");
                    });
                    if (val.feedbackMessage.enable) {
                        element.find(".submit-btn").addClass('disabled');
                        element.find(".alert").css("display","block");
                        let icon = val.feedbackMessage.symbol === 'Correct!' ? 'icon-correct' : 'icon-close-filled';
                        element.find(".alert").html(`<span class="${icon}"></span> ${val.feedbackMessage.message.trim()}`)
                    }
                    if(val.isIndFeedbackEnable){
                        element.find(".individualFeedbackEnable").addClass("showindividualFeedback");
                    }
                    
                    break;
                case 'graphicOrganizerImageHotSpot':
                        val.btnState.isResetEnable ? element.find(".reset-btn").removeClass("disabled") : element.find(".reset-btn").addClass("disabled");
                        val.btnState.isSubmitEnable ? element.find(".submit-btn").removeClass("disabled") : element.find(".submit-btn").addClass("disabled");
                        val.btnState.isShowMeEnable ? element.find(".showme-btn").removeClass("disabled") : element.find(".showme-btn").addClass("disabled");
                        val.btnState.isTryAgainEnable ? element.find(".tryagn-btn").removeClass("disabled") : element.find(".tryagn-btn").addClass("disabled");
                        $.each(val.input.inputSeleced, function(optionkey, optionval) {
                            if (optionval) {
                                element.find('.hotspotTextarea').eq(optionkey).attr('data-submit-ans',optionval)
                                element.find('.hotspotTextarea').eq(optionkey).attr('placeholder',optionval)
                                element.find('.hotspotTextarea').eq(optionkey).html(optionval)
                                element.find('.hotspotTextarea').eq(optionkey).addClass('submitted')
                                let updatedoptionval = optionval.replace(/&nbsp;/g, ' '); // Replace all &nbsp; with spaces
                                element.find(`.hotspotAns${optionkey+1}`)[0].innerHTML = updatedoptionval
                               }
                               if(!val.btnState.isSubmitEnable){
                                element.find('form').addClass('submitted')
                               }else{                                
                                element.find('form').removeClass('submitted')
                               }
                        });
                    break;
                case 'tableGO-1':
                    val.btnState.isResetEnable ? element.find(".reset-btn").removeClass("disabled") : element.find(".reset-btn").addClass("disabled");
                    val.btnState.isSubmitEnable ? element.find(".submit-btn").removeClass("disabled") : element.find(".submit-btn").addClass("disabled");
                    val.btnState.isShowMeEnable ? element.find(".showme-btn").removeClass("disabled") : element.find(".showme-btn").addClass("disabled");
                    val.btnState.isTryAgainEnable ? element.find(".tryagn-btn").removeClass("disabled") : element.find(".tryagn-btn").addClass("disabled");
                    $.each(val.input.inputSeleced, function (optionkey, optionval) {
                        if (optionval) {
                            element.find('.hotspotTextarea').eq(optionkey).attr('data-submit-ans', optionval)
                            element.find('.hotspotTextarea').eq(optionkey).attr('placeholder', optionval)
                            element.find('.hotspotTextarea').eq(optionkey).addClass('submitted')
                            element.find(`.hotspotAns${optionkey + 1}`)[0].value = optionval
                            element.find('.label-text')[0].innerHTML = element.find('.studentEditingEnabled').attr('student-editable-labeltext')
                        }
                        if (!val.btnState.isSubmitEnable && element.find('.hotspotTextarea').eq(optionkey).hasClass('submitted')) {
                            element.find('.inputDiv').css('pointer-events', 'none')
                        } else {
                            element.find('.inputDiv').css('pointer-events', 'auto')
                        }
                    });
                    break;
                case 'shortLongAns':
                    scormRender = true;
                    val.btnState.isSubmitEnable ? element.find(".submit-btn").removeClass("disabled") : element.find(".submit-btn").addClass("disabled");
                    if(element.find(".shortLongAnsComponent").attr("scorm-saved-ans")==undefined && !val.scoObj.dirtyBit && element.find(".shortLongAnsComponent").attr("data-pretext")) {
                        val.input.inputSeleced = element.find(".shortLongAnsComponent").attr("data-pretext");
                    }
                    if($(element).find('.component-holder').attr('keyboard-type') == 'JODIT'){
                    
                        const $textarea = $(element).find('textarea.ansJODIT');
                        const answerMap = val.input.inputSeleced || {};

                        if ($textarea.length > 0) {
                            const textareaEl = $textarea[0];
                            let editor = textareaEl.__jodit;

                            if (!editor) {
                                editor = new Jodit(textareaEl, {
                                    showXPathInStatusbar: false,
                                    showCharsCounter: false,
                                    showWordsCounter: false,
                                    height: 200,
                                    toolbarAdaptive: false,
                                    toolbarSticky: false
                                });

                                $textarea.data('editorInstance', editor);
                            }
                            if(Object.keys(answerMap).length){
                                let ansData = sanitizeHtmlForJodit(answerMap);
                                editor.value = ansData;
                            }

                            if (val.btnState.isSubmitEnable != undefined && !val.btnState.isSubmitEnable) {
                                editor.setDisabled(true);
                            } else {
                                editor.setDisabled(false);
                            }
                           
                        }
                    }
                    else{
                        element.find(".shortLongAnsComponent").attr("scorm-saved-ans",val.input.inputSeleced);
                        element.find("div.cazary").find("iframe").contents().find("body").html(val.input.inputSeleced || "");
                        const iframe = element.find("div.cazary").find("iframe");
                        if (val.btnState.isSubmitEnable != undefined && !val.btnState.isSubmitEnable) {
                            iframe.addClass('disabled-rte');
                            iframe.parent().addClass('disabled-rte')
                        } else {
                            iframe.removeClass('disabled-rte');
                            iframe.parent().removeClass('disabled-rte')
                        }
                        element.find('input, textarea')[0].value = val.input.inputSeleced;
                        if(element.find('.shortAnsText').length){
                            element.find('.shortAnsText')[0].innerHTML = val.input.inputSeleced;
                        }
                        
                    }
                    
                    if (val.input.inputSeleced == '') {
                        // element.find('input, textarea').removeAttr("disabled");
                        element.find('.template-editor').removeClass('attempted-question');
                    }else{
                        if(window.isGradableActivity){
                            let groupIndex = element.parents('.customClass[data-type="group-interactivity-template"]').attr('data-saved-index');
                            let attemptsDone = savesuspendData[pageId][groupIndex]?.attempts?.attemptsDone;
                            let isSubmitEnable = savesuspendData[pageId][groupIndex]?.btnState?.isSubmitEnable;
                            if(attemptsDone >= 1 && !isSubmitEnable){
                                element.find('input, textarea').prop('disabled', true);
                                element.find('.shortAnsText')[0].setAttribute('contenteditable', false);
                            }
                        }
                        element.find('.template-editor').addClass('attempted-question');
                    }

                    setTimeout(function(){
                        const iframe = element.find("div.cazary").find("iframe");
                        if (val.btnState.isSubmitEnable != undefined  && !val.btnState.isSubmitEnable) {
                            // if ($(element.find('.cazary'))) {
                           let eleList = document.querySelectorAll('.shortLongAnsComponent');
                           for(let i=0; i < eleList.length; i++){
                            $(eleList[i]).find('.cazary').addClass('disabled-rte');
                           }
                            //     $('.cazary').addClass('disabled-rte');
                            // }
                        }
                    }, 1000); 
                    
                    break;
                case 'identify-the-clip':
                    val.scoObj.isSubmitted ? element.find(".ITCForm").addClass("submitted") : element.find(".ITCForm").removeClass("submitted");
                    val.btnState.isResetEnable ? element.find(".reset-btn").removeClass("disabled") : element.find(".reset-btn").addClass("disabled");
                    val.btnState.isSubmitEnable ? element.find(".submit-btn").removeClass("disabled") : element.find(".submit-btn").addClass("disabled");
                    val.btnState.isShowMeEnable ? element.find(".showme-btn").removeClass("disabled") : element.find(".showme-btn").addClass("disabled");
                    val.btnState.isTryAgainEnable ? element.find(".tryagn-btn").removeClass("disabled") : element.find(".tryagn-btn").addClass("disabled");
                    $.each(val.input.inputSeleced, function(optionkey, optionval) {
                        if (optionval) {
                             if (element.find('div.shortAnsText').length > 0) {
                                element.find('div.shortAnsText').eq(optionkey).html(optionval);
                            } else if(element.find('textarea.ansRTE').length > 0){ 
                                element.find('textarea.ansRTE')[optionkey].value = optionval;
                                element.find("div.cazary").find("iframe").contents().find("body").html(optionval || "");
                            }
                        }  
                        if (val.scoObj.isSubmitted || !val.btnState.isSubmitEnable) {
                             element.find('div.shortAnsText').prop('contenteditable', false);
                            // element.find('input.shortAnsText').prop('disabled', true);
                        } 
                    });

                    $.each(val.input.inputCorrect, function(optionkey, optionval) {
                      if (element.find('div.shortAnsText').length > 0) {
                            // element.find('div.shortAnsText').eq(optionkey).prop('disabled', true);
                             element.find('div.shortAnsText').eq(optionkey).prop('contenteditable', false);
                            element.find('div.shortAnsText').eq(optionkey).addClass('itcCorrect');
                        } else if(element.find('textarea.ansRTE').length > 0){ 
                            element.find('textarea.ansRTE').eq(optionkey).prop('disabled', true);
                            element.find('textarea.ansRTE').eq(optionkey).addClass('itcCorrect');
                        }     
                        element.find('.itc-alert').css('display', 'block');
                        element.find('.itc-alert-icon').removeClass('icon-close-filled')      
                        element.find('.itc-alert-icon').addClass('icon-correct')   
                        element.find('.itc-alert-message').text(element.find('.itc-alert').attr('data-generic-correct-feedback'));
                        if (val.scoObj.isSubmitted || !val.btnState.isSubmitEnable) {
                          // element.find('input.shortAnsText').prop('disabled', true);
                            element.find('div.shortAnsText').eq(optionkey).prop('contenteditable', false);
                        } 
                    });
                    $.each(val.input.inputIncorrect, function(optionkey, optionval) {
                         if (element.find('div.shortAnsText').length > 0) {
                            // element.find('input.shortAnsText').eq(optionkey).prop('disabled', true);
                            element.find('div.shortAnsText').eq(optionkey).prop('contenteditable', false);
                            element.find('div.shortAnsText').eq(optionkey).addClass('itcIncorrect');
                        } else if(element.find('textarea.ansRTE').length > 0){ 
                            element.find('textarea.ansRTE').eq(optionkey).prop('disabled', true);
                            element.find('textarea.ansRTE').eq(optionkey).addClass('itcIncorrect');                        }  
                        element.find('.itc-alert').css('display', 'block');
                        element.find('.itc-alert-icon').addClass('icon-close-filled')
                        element.find('.itc-alert-message').text(element.find('.itc-alert').attr('data-generic-incorrect-feedback'));
                        if (val.scoObj.isSubmitted || !val.btnState.isSubmitEnable) {
                            element.find('input.shortAnsText').prop('disabled', true);
                        }
                    });

                    // setTimeout(function(){
                    //     var iframe = $(element.find('textarea.ansRTE')).parents('.cazary')
                    //     if ($(element.find('textarea.ansRTE')).hasClass('itcCorrect')) {
                    //         iframe.addClass('itcCorrect disabled-rte');
                    //     }else if($(element.find('textarea.ansRTE')).hasClass('itcIncorrect')){
                    //         iframe.addClass('itcIncorrect disabled-rte');
                    //     }
                    // }, 1000);

                    if(val.input.inputSeleced.length){
                        element.find('form').addClass('attempted-question');
                    }else{
                        element.find('form').removeClass('attempted-question');
                    }   

                    $(document).ready(function () {
                        if (val.scoObj.isSubmitted || !val.btnState.isSubmitEnable) {
                            $('.cazary').addClass('disabled-rte');
                        }
                    });

                    if (val.scoObj.isSubmitted || !val.btnState.isSubmitEnable) {
                        $('.cazary').addClass('disabled-rte');
                        let tempeleList = document.body.querySelector('.cazary')
                        $(tempeleList).each(function(index,ele){
                            $(ele).find('.cazary').addClass('disabled-rte');
                        })
                    }
                    

                    setTimeout(function(){
                        const iframe = element.find("div.cazary").find("iframe");
                        if (val.scoObj.isSubmitted || !val.btnState.isSubmitEnable) {
                            if ($(element.find('.cazary'))) {
                                $('.cazary').addClass('disabled-rte');
                            }
                        }
                    }, 5000);    
                    break;
                case 'highlight':
                    val.btnState.isResetEnable ? element.find(".reset-btn").removeClass("disabled") : element.find(".reset-btn").addClass("disabled");
                    val.btnState.isSubmitEnable ? element.find(".submit-btn").removeClass("disabled") : element.find(".submit-btn").addClass("disabled");
                    val.btnState.isShowMeEnable ? element.find(".showme-btn").removeClass("disabled") : element.find(".showme-btn").addClass("disabled");
                    val.btnState.isTryAgainEnable ? element.find(".tryagn-btn").removeClass("disabled") : element.find(".tryagn-btn").addClass("disabled");
                    if (val.btnState.isTryAgainEnable) {
                        element.find(".submit-btn").css("display", "none");
                    }
                    element.find('.form-row').each(function(index, item){
                        $(item).html(val.input.inputSeleced[index]);
                    });
                    if(val.input.inputSeleced.length){
                        element.find('form').addClass('attempted-question');
                    }else{
                        element.find('form').removeClass('attempted-question');
                    }
                    if (element.find('form .highLight-questions .wrongWords').length) {
                        element.find('.highLight.component-holder').addClass('incorrect-question')
                    }
                    if (element.find('form .highLight-questions .myWords').length) {
                        if (element.find('form .highLight-questions .wrongWords').length) {
                            element.find('.highLight.component-holder').addClass('incorrect-question');
                        }else{
                            element.find('.highLight.component-holder').addClass('correct-question');
                        }
                    }
                    if(!val.btnState.isSubmitEnable && (val.attempts.totalNoOfAttempt == val.attempts.attemptsDone)){
                        element.find(".submit-btn").attr("attemptsOver", true);
                    }
                    if(val.btnState.isSubmitEnable && (val.attempts.totalNoOfAttempt > val.attempts.attemptsDone)){
                        element.find('.highLight.component-holder').addClass('rework-feedback')
                    }else{
                        element.find('.highLight.component-holder').removeClass('rework-feedback')
                    }
                    
                    break;
                case 'correction':
                    val.btnState.isResetEnable ? element.find(".reset-btn").removeClass("disabled") : element.find(".reset-btn").addClass("disabled");
                    val.btnState.isSubmitEnable ? element.find(".submit-btn").removeClass("disabled") : element.find(".submit-btn").addClass("disabled");
                    val.btnState.isShowMeEnable ? element.find(".showme-btn").removeClass("disabled") : element.find(".showme-btn").addClass("disabled");
                    val.btnState.isTryAgainEnable ? element.find(".tryagn-btn").removeClass("disabled") : element.find(".tryagn-btn").addClass("disabled");
                    if (val.btnState.isTryAgainEnable) {
                        element.find(".submit-btn").css("display", "none");
                    }
                    let elmId = element.attr('data-saved-index');
                    setTimeout(() => {
                        $('.customClass[data-saved-index='+elmId+']').find('.form-row').each(function(index, item){
                            $(item).html(val.input.inputSeleced[index]);
                        });
                        if ($('.customClass[data-saved-index='+elmId+']').find('form .correction-questions .wrongWords').length) {
                            $('.customClass[data-saved-index='+elmId+']').find('.correction.component-holder').addClass('incorrect-question')
                        }
                        if ($('.customClass[data-saved-index='+elmId+']').find('form .correction-questions .myWords').length) {
                            if ($('.customClass[data-saved-index='+elmId+']').find('form .correction-questions .wrongWords').length) {
                                $('.customClass[data-saved-index='+elmId+']').find('.correction.component-holder').addClass('incorrect-question');
                            }else{
                                $('.customClass[data-saved-index='+elmId+']').find('.correction.component-holder').addClass('correct-question');
                            }
                        }
                    }, 500);
                    if(val.input.inputSeleced.length){
                        element.find('form').addClass('attempted-question');
                    }else{
                        element.find('form').removeClass('attempted-question');
                    }

                    if(!val.btnState.isSubmitEnable && (val.attempts.totalNoOfAttempt == val.attempts.attemptsDone)){
                        element.find(".submit-btn").attr("attemptsOver", true);
                    }
                    if(val.btnState.isSubmitEnable && (val.attempts.totalNoOfAttempt > val.attempts.attemptsDone)){
                        $('.customClass[data-saved-index='+elmId+']').find('.correction.component-holder').addClass('rework-feedback')
                    }else{
                        $('.customClass[data-saved-index='+elmId+']').find('.correction.component-holder').removeClass('rework-feedback')
                    }
                    break;
                case 'Categorize':
                    element.find(".submit-btn").data('no-of-attempts', val.attempts.totalNoOfAttempt);
                    element.find(".submit-btn").data('attempts', val.attempts.attemptsDone);
                    val.btnState.isResetEnable ? element.find(".reset-btn").removeClass("disabled") : element.find(".reset-btn").addClass("disabled");
                    val.btnState.isSubmitEnable ? element.find(".submit-btn").removeClass("disabled") : element.find(".submit-btn").addClass("disabled");
                    val.btnState.isShowMeEnable ? element.find(".showme-btn").removeClass("disabled") : element.find(".showme-btn").addClass("disabled");
                    val.btnState.isTryAgainEnable ? element.find(".tryagn-btn").removeClass("disabled") : element.find(".tryagn-btn").addClass("disabled");
                    if (val.btnState.isTryAgainEnable) {
                        if (!element.find(".tryagn-btn").hasClass('nghidedata')) {
                            element.find(".submit-btn").css("display", "none");
                        }
                    }
                    $.each(val.input.inputSeleced, function() {
                        var selectedOptions = this.split("-");
                        var categoryIndex = selectedOptions[0];
                        var optionDataId = selectedOptions[1];
                        var droppable = element.find(".categories-container .categories[data-cat-index='" + categoryIndex + "']").find('.options_div')
                        element.find('.categorize-drag-drop-container .cat_Options').each(function () {
                            if ($(this).find('.cat_single_option').attr("data-id") == optionDataId) {
                                var draggable = $(this);
                                $(draggable).clone().appendTo(droppable);
                                $(draggable).draggable({ disabled: true });
                                $(draggable).addClass('added ui-draggable-disabled ui-state-disabled').removeClass("ui-draggable");
                            }
                        });
                    })
                    $.each(val.input.inputCorrect, function() {
                        var selectedOptions = this.split("-");
                        var optionDataId = selectedOptions[1];
                        element.find(".categories-container .cat_Options .cat_single_option[data-id='" + optionDataId + "']").addClass('ans_correct');
                        var parser = new DOMParser();
                        var el = parser.parseFromString('<i class="icon-correct"></i>', "text/html");
                        var elem = $(el).contents()[0].childNodes[1].childNodes[0];
                        // $form.find(this).append(elem);
                        element.find(".categories-container .cat_Options .cat_single_option[data-id='" + optionDataId + "']").append(elem);
                        element.find(".categories-container .cat_Options .cat_single_option[data-id='" + optionDataId + "']").parents('.cat_Options').find('.categoryFeedback .incorrect').css('display', 'none');
                        if (val.isIndFeedbackEnable) {
                            element.find(".categories-container .cat_Options .cat_single_option[data-id='" + optionDataId + "']").parents('.cat_Options').find('.categoryFeedback').css('display', 'block')
                        }
                    });
                    $.each(val.input.inputIncorrect, function() {
                        var selectedOptions = this.split("-");
                        var optionDataId = selectedOptions[1];
                        element.find(".categories-container .cat_Options .cat_single_option[data-id='" + optionDataId + "']").addClass('ans_incorrect');
                        var parser = new DOMParser();
                        var el = parser.parseFromString('<i class="icon-close-filled"></i>', "text/html");
                        var elem = $(el).contents()[0].childNodes[1].childNodes[0];
                        // $form.find(this).append(elem);
                        element.find(".categories-container .cat_Options .cat_single_option[data-id='" + optionDataId + "']").append(elem);
                        element.find(".categories-container .cat_Options .cat_single_option[data-id='" + optionDataId + "']").parents('.cat_Options').find('.categoryFeedback .correct').css('display', 'none');
                        if (val.isIndFeedbackEnable) {
                            element.find(".categories-container .cat_Options .cat_single_option[data-id='" + optionDataId + "']").parents('.cat_Options').find('.categoryFeedback').css('display', 'block')
                        }
                    });
                    if (val.feedbackMessage.enable) {
                        element.find(".submit-btn").addClass('disabled');
                        element.find(".categorize-alert").css("display", "block");
                        element.find(".categorize-alert-message").text(val.feedbackMessage.message);
                        if(val.feedbackMessage.symbol === 'Correct!'){
                            element.find(".categorize-alert-icon").addClass("icon-correct").removeClass("icon-close-filled")
                        }
                       
                    }
                    if (element.find('.categorize-drag-drop-container .ui-draggable').length == 0) {
                        element.find('form').addClass('attempted-question');
                    }else{
                        element.find('form').removeClass('attempted-question');
                    }
                    break;
                }
        });
        setTimeout(function() {
            $('body article').removeClass('hide');
            $('body .authoringLoader').addClass('hide');
        },1000)
        });
}

function sanitizeHtmlForJodit(htmlString) {
        if (!htmlString) return '';
        let ansData = htmlString;
        ansData = ansData.replace(/<br\s*\/\s*\/\s*\/?>/gi, '<br />');

        // Step 2: Replace lone <br>
        ansData = ansData.replace(/<br(?![a-zA-Z])>/gi, '<br />');

        // Step 3: Remove stray double slashes
        ansData = ansData.replace(/\/\s*\/>/g, '/>');

        // Step 5: Remove Angular attributes
        ansData = ansData.replace(/ ng-[a-zA-Z-]+="[^"]*"/g, "");
        ansData = ansData.replace(/<br\s*\/?>\s*[\/\\]*\s*(&gt;)?/gi, '<br />');
        
        // ------------
            // Fix common invalid nesting or leftover tags
        ansData = ansData.replace(/<\/?(s|em|strong|sup|sub|span|u|b|i)(.*?)\/?>/gi, (match) => {
            // Keep only well-formed open/close tags
            return match.replace(/\s*\/?>$/, '>');
        });

        // Ensure tags are lowercase and self-closing where required
        ansData = ansData.replace(/<img([^>]*)>/gi, '<img$1 />');
        ansData = ansData.replace(/<hr([^>]*)>/gi, '<hr$1 />');

        // Remove unescaped ampersands
        ansData = ansData.replace(/&(?!amp;|lt;|gt;|quot;|apos;|#[0-9]+;)/g, '&amp;');

        // Remove stray angle brackets
        ansData = ansData.replace(/<(?=[^a-zA-Z!/])/g, '&lt;');

        // Remove empty span or font tags
        ansData = ansData.replace(/<span[^>]*>\s*<\/span>/gi, '');
        ansData = ansData.replace(/<font[^>]*>\s*<\/font>/gi, '');

        ansData = ansData.replace(/<br(?!\s*\/)>/gi, '<br />');
        ansData = ansData.replace(/<img([^>]*)>/gi, '<img$1 />');

        // 2. Remove invalid nesting (like <s><sup>...</s></sup>)
        ansData = ansData.replace(/<\/(s|sup|sub|strong|em|span)>[\s\n]*<\/(s|sup|sub|strong|em|span)>/gi, '</$1></$2>');
        
        // 3. Remove unescaped ampersands
        ansData = ansData.replace(/&(?!amp;|lt;|gt;|quot;|apos;|#\d+;)/g, '&amp;');

        // 4. Replace &nbsp; with &#160;
        ansData = ansData.replace(/&nbsp;/g, '&#160;');

        // 5. Remove empty spans or tags with only whitespace
        ansData = ansData.replace(/<span[^>]*>\s*<\/span>/gi, '');
        ansData = ansData.replace(/<div[^>]*>\s*<\/div>/gi, '');

        // 6. Remove any orphaned closing tags or malformed markup
        ansData = ansData.replace(/<\/?[^a-zA-Z0-9]+>/g, '');

        // 7. Fix angle brackets wrongly used
        ansData = ansData.replace(/<(?=[^\/a-zA-Z!])/g, '&lt;');

        return ansData;
    }

function setLatexData(mathHolder,encodedString) {
    decodedLatex = JSON.parse(decodeURIComponent(encodedString)).latex;
    $(mathHolder).text(decodedLatex);
    temml.render(decodedLatex, mathHolder);
}

function setDataOnload() {
    if (typeof LMSCommunicator == "undefined") { LMSCommunicator = {}; }
    pageId = parseInt($($('.customClass')[0]).attr('data-page-no'));
    var Templates = $('.customClass').length,
        packageType = "SCORM 1.2",
        noofquetion;
    noofquetion = JSON.stringify(Templates);
    var isLMSInitialized = LMSCommunicator.initializeLMS(packageType, Templates, null);
    let mcqCount = $('.customClass[data-type="multiple-choice-template"]').length;
    // let trueFalseCount = $('.customClass[data-type="true-false-template"]').length;
    let fibCount = $('.customClass[data-type="fill-in-the-blank"] .fib-questions .form-row').length;
    let mtpCount = $('.customClass[data-type="match-the-pairs"]').length;
    let ILCount = $('.customClass[data-type="imagelabelling"]').length;
    let highlightCount = $('.customClass[data-type="highlight"] .highLight-questions .form-row').length;
    let correctionCount = $('.customClass[data-type="correction"] .correction-questions .form-row').length;
    let categorizeCount = $('.customClass[data-type="Categorize"]').length;
    let ShortLongCount = $('.customClass[data-type="shortLongAns"]').length;
    let identifyTheClipCount = $('.customClass[data-type="identify-the-clip"]').length;
    let questionCount = mcqCount + fibCount + mtpCount + ILCount + highlightCount + ShortLongCount + correctionCount + categorizeCount + identifyTheClipCount;
    if (!window.gradableActivitySettingsJSON.points) {
        window.gradableActivitySettingsJSON['points'] = 0;
    }
    let maxScore = questionCount * window.gradableActivitySettingsJSON.points;
    if(isLMSInitialized){
        let score = LMSCommunicator.getScore();
        if(score){
            LMSCommunicator.setScore(score);
        }else{
            LMSCommunicator.setScore(0);
        }
        LMSCommunicator.setMaximumScore(maxScore);
        LMSCommunicator.setMinimumScore(0);
        let lessonStatus = LMSCommunicator.getLessonStatus();
        if(lessonStatus){
            LMSCommunicator.setLessonStatus(lessonStatus);
        }else{
            LMSCommunicator.setLessonStatus('not attempted');
        }
        apiHandle.LMSSetValue("cmi.core.session_time", 0);
        let lessonMode = apiHandle.LMSGetValue("cmi.core.lesson_mode");
        if(lessonMode){
            apiHandle.LMSSetValue("cmi.core.lesson_mode", lessonMode);
        }else{
            apiHandle.LMSSetValue("cmi.core.lesson_mode", "normal");
        }
        if (window.isCertificateEnableForCourse) {
            var userToken = decodeURIComponent(atob(apiHandle.LMSGetValue('cmi.core.student_id')));
            var name = decodeURIComponent(apiHandle.LMSGetValue('cmi.core.student_name'));
            certificateUserData.userToken = userToken;
            certificateUserData.userFirstName = name;
        }
    }
}
