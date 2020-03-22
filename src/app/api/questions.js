const questions = {
    English:{
        questions : [
            {
                q: "Write your name (optional)",
                private: true,
                objective: false
            },
            {
                q: "Which age group do you fall in? (years)",
                objective: true,
                options: ["Under 40","41-50", "51-60", "61-70", "71-80", "More than 80"]
            },
            {
                q: " What is your current living situation?",
                objective: true,
                options: ["Living alone","Living with family", "Living in a shared flat, or in a supervised community facility"]
            },
            {
                q: "Have you been traveling in the past 4 weeks? (within India or abroad)",
                objective: true,
                options: ["yes", "no"]
            },
            {
                q: "Have you had close contact with a confirmed case? Close contact with a confirmed case means:\n\
                -       Face-to-face contact for longer than 15 min\n\
                -       Direct, physical contact (touching, shaking hands, kissing)\n\
                -       Being within 2 meters of the person for more than 15 min.\n\
                -       Contact with or exchange of body fluids\n\
                -       Living in the same apartment",
                objective: true,
                options: ["yes", "no", "not sure"]
            },
            {
                q: "If you have had close contact with a confirmed case, date of contact:\
                Please enter the date: DD/MM/YYYY",
                objective: false,
                private: true
            },
            {
                q: "Describe your work area",
                objective: true,
                options: [
                    "Medical/Healthcare/Diagnostics",
                    "Involving international travel",
                    "Bus Driver/Cab Driver/Taxi Driver",
                    "General stores (including working in supermarkets and shop in-house)",
                    "In a community facility (school, day care center, university, home etc.)",
                    "Or others which need interacting with many people (like food delivery, postman, banks, hotel receptions etc.)",
                    "No, in none of the above",
                ]
            },
            {
                q: "The next few questions check if you are symptotic. Have you had a fever (over 100oF) in the past 24 hrs?",
                objective: true,
                options: ["yes", "no"]
            },
            {   q: "Have you had a fever (over 100oF) in the past 4 days?",
                objective: true,
                options: ["yes","no"]
            },
            {   
                q: "Do you have chills?",
                objective: true,
                options: ["yes","no"]
            },
            {   
                q: "Do you feel tired or weak?",
                objective: true,
                options: ["yes","no"]
            },
            {   
                q: "Do you have limb pain?",
                objective: true,
                options: ["yes","no"]
            },
            {   
                q: "Do you have a persistent cough?",
                objective: true,
                options: ["yes","no"]
            },
            {   
                q: "Are you sniffling?",
                objective: true,
                options: ["yes","no"]
            },
            {   
                q: "Do you have diarrhea?",
                objective: true,
                options: ["yes","no"]
            },
            {   
                q: "Do you have a sore throat?",
                objective: true,
                options: ["yes","no"]
            },
            {   
                q: "Do you have a headache?",
                objective: true,
                options: ["yes","no"]
            },
            {   
                q: "Are you breathing faster than usual?",
                objective: true,
                options: ["yes","no"]
            },
            {
                q:"Are you experiencing all of the below symptoms:\n\
                -       Fever (>100oF)\n\
                -       Fatigue\n\
                -       Sore throat\n\
                -       Dry cough",
                objective: true,
                options: ["yes","no"]
            },
            {   
                q:"Are you experiencing any of the following symptoms:\n\
                - Severe difficulty breathing (For example, struggling for each breathe, speaking in single words)\n\
                - Severe chest pain\n\
                - Feeling confused\n\
                - Lost consciousness",
                objective: true,
                options: ["yes","no"]
            },
            {
                q: "Do you have a chronic lung disease?",
                objective: true,
                options: ["yes","no","I don't know"]
            },
            {
                q: "Do you smoke?",
                objective: true,
                options: ["yes","no"]
            },
            {
                q: "Do you have diabetes?",
                objective: true,
                options: ["yes","no","I don't know"]
            },
            {
                q: "Do you have heart disease or hypertension(BP)?",
                objective: true,
                options: ["yes","no","I don't know"]
            },
            {
                q: "Do you have any renal/kidney disease?",
                objective: true,
                options: ["yes","no","I don't know"]
            },
            {
                q: "Do you have obesity?",
                objective: true,
                options: ["yes","no","I don't know"]
            },
            {
                q: "Are you pregnant?",
                objective: true,
                options: ["yes","no","I don't know"]
            },
            {
                q: "Are you currently taking steroids?",
                objective: true,
                options: ["yes","no"]
            },
            {
                q: "Are you currently taking immunosuppressants? You take or get immunosuppressive after an organ transplant, in the therapy of an autoimmune disease, or during chemotherapy",
                objective: true,
                options: ["yes","no","I don't know"]
            },
            {
                q: "Have you been vaccinated against flu between October 2019 and today?",
                objective: true,
                options: ["yes","no"]
            }

            ],
        instructions : [
            "There are few questions which you may not want to answer. Those questions are marked as optional, you may skip them",
            "Your responses will be consolidated into a report which will be shown at the end of questionnaire, which you can print/save.",
            "If this application suggests you to see a doctor, you could produce this report.",
            "To start the questionnaire, click the button below.",
            "We DO NOT save your responses."
        ],
        disclaimer : [
            "Usage of this application does not substitute medical diagnosis or treatment by a physician or a clinical diagnostic test.",
            "This is not a replacement for medical check up and we will not be held responsible.",
            "The GoCorona app aims to support the healthcare system and optimize patient flow in the context of novel coronavirus COVID-19.",
            "We are doing this to help society in this challenging situation and we do not have any monetary benefit out of this.",
            "If in doubt, please get in touch with a healthcare provider."
        ]
    } ,
    मराठी:{
        questions : [
            {
                q: "आपले नाव काय आहे? (पर्यायी)",
                private: true,
                objective: false
            },
            {
                q: "आपले वय किती आहे?",
                objective: true,
                options: ["४० वर्षांखालील","४०-५०", "५०-६०", "६०-७०", "७०-८०", "८० वर्षांपेक्षा जास्त" ]
            },
            {
                q: " आपली सध्याची राहण्याची परिस्थिती काय आहे?",
                objective: true,
                options: ["एकटे राहणे","कुटुंबासमवेत", "सामायिक फ्लॅटमध्ये किंवा पर्यवेक्षी सामुदायिक सुविधेत एकत्र राहणे"]
            },
            {
                q: "तुम्ही गेल्या 4 आठवड्यात प्रवास केला आहे? (भारतात किंवा परदेशात)",
                objective: true,
                options: ["होय", "नाही"]
            },
            {
                q: "एखाद्या संक्रमित रुग्णाशी आपला जवळचा संपर्क आला आहे का? संक्रमित रुग्णाशी जवळचा संपर्क साधण्याचा अर्थ:\n\
                • 15 मिनिटांपेक्षा जास्त काळ समोरासमोरचा संपर्क\n\
                • थेट, शारीरिक संपर्क (स्पर्श, हात थरथरणे, चुंबन)\n\
                • 15 मिनिटांपेक्षा पेक्षा अधिक व्यक्तीच्या 2 मीटरच्या आत असणे.\n\
                • शरीरातील द्रवांशी संपर्क साधणे किंवा देवाणघेवाण करणे\n\
                • एकाच अपार्टमेंटमध्ये राहणे",
                objective: true,
                options: ["होय", "नाही","मला माहित नाही"]
            },
            {
                q: "आपल्याकडे एखाद्या पुष्टी झालेल्या रुग्णाशी जवळचा संपर्क असल्यास, संपर्काची तारीखःकृपया तारीख प्रविष्ट करा: दिवस/ महिना / वर्ष",
                objective: false,
                private: true
            },
            {
                q: "आपण खालीलपैकी कोणत्या क्षेत्रात काम करता?",
                objective: true,
                options: [
                  "वैद्यकीय / आरोग्य सेवा / निदान",
                  "आंतरराष्ट्रीय प्रवासात समावेश आहे",
                  "बस ड्रायव्हर / कॅब ड्रायव्हर / टॅक्सी ड्रायव्हर",
                  "सर्वसाधारण स्टोअर्स (सुपरमार्केटमध्ये काम करणे आणि घरगुती खरेदीविक्री)",
                  "सामुदायिक सुविधेत (शाळा, पाळणाघर, विद्यापीठ, इ.)",
                  "किंवा इतर ज्यांना बर्‍याच लोकांशी संवाद साधण्याची आवश्यकता आहे (जसे की अन्न वितरण, पोस्टमन, बँक, हॉटेल रिसेप्शन इ.)",
                  "नाही, वरीलपैकी कोणत्याच बाबतीत नाही"
                ]
            },
            {
                q: "गेल्या 24 तासांत आपल्याला ताप (100oF पेक्षा जास्त) झाला आहे?",
                objective: true,
                options: ["होय", "नाही"]
            },
            {   q: "गेल्या 4 दिवसात आपल्याला ताप (100oF पेक्षा जास्त) झाला आहे?",
                objective: true,
                options: ["होय", "नाही"]
            },
            {   
                q: "आपल्याला थंडी वाजत आहे का?",
                objective: true,
                options: ["होय", "नाही"]
            },
            {   
                q: "आपल्याला थकवा किंवा अशक्तपणा जाणवत आहे?",
                objective: true,
                options: ["होय", "नाही"]
            },
            {   
                q: "आपले अंग दुखत आहे का?",
                objective: true,
                options: ["होय", "नाही"]
            },
            {   
                q: "आपल्याला सतत खोकला आहे का ?",
                objective: true,
                options: ["होय", "नाही"]
            },
            {   
                q: "आपल्याला सर्दी आहे का?",
                objective: true,
                options: ["होय", "नाही"]
            },
            {   
                q: "आपल्याला अतिसार आहे का ?",
                objective: true,
                options: ["होय", "नाही"]
            },
            {   
                q: "आपल्याला घसा खवखवला वाटतो का?",
                objective: true,
                options: ["होय", "नाही"]
            },
            {   
                q: "आपल्याला डोकेदुखी आहे का?",
                objective: true,
                options: ["होय", "नाही"]
            },
            {   
                q: "आपण नेहमीपेक्षा वेगवान श्वास घेत आहात?",
                objective: true,
                options: ["होय", "नाही"]
            },
            {
                q:"आपण खाली सर्व लक्षणे जाणवत आहात:\n\
                • ताप (> 100oF)\n\
                • थकवा\n\
                • घसा खवखवणे\n\
                • कोरडा खोकला",
                objective: true,
                options: ["होय", "नाही"]
            },
            {   
                q:"आपण खालीलपैकी कोणत्याही लक्षणांचा अनुभव घेत आहात:\n\
                • श्वास घेण्यास तीव्र अडचण (उदाहरणार्थ: प्रत्येक श्वासासाठी संघर्ष करणे, एकाच शब्दात बोलणे)\n\
                • छातीत तीव्र वेदना\n\
                • गोंधळलेले वाटणे\n\
                • गमावले चैतन्य",
                objective: true,
                options: ["होय", "नाही"]
            },
            {
                q: "आपल्याला फुफ्फुसांचा आजार आहे?",
                objective: true,
                options: ["होय", "नाही","मला माहित नाही"]
            },
            {
                q: "आपण सिगरेट पिता का?",
                objective: true,
                options: ["होय", "नाही"]
            },
            {
                q: "आपल्याला मधुमेह आहे का?",
                objective: true,
                options: ["होय", "नाही"]
            },
            {
                q: "आपणास हृदयरोग किंवा उच्च रक्तदाब (बीपी) आहे?",
                objective: true,
                options: ["होय", "नाही"]
            },
            {
                q: "तुम्हाला मूत्रपिंडाचा आजार आहे का?",
                objective: true,
                options: ["होय", "नाही"]
            },
            {
                q: "आपणाला लठ्ठपणा आहे का?",
                objective: true,
                options: ["होय", "नाही"]
            },
            {
                q: "आपण गर्भवती आहात का?",
                objective: true,
                options: ["होय", "नाही","मला माहित नाही"]
            },
            {
                q: "आपण सध्या स्टिरॉइड्स घेत आहात का?",
                objective: true,
                options: ["होय", "नाही"]
            },
            {
                q: "आपण सध्या इम्युनोसप्रेसन्ट्स घेत आहात का? (एखाद्या अवयव प्रत्यारोपणाच्या नंतर, ऑटोम्यून्यून रोगाच्या थेरपीमध्ये किंवा केमोथेरपी दरम्यान आपण इम्युनोसप्रेसिव्ह घेतात किंवा घेतात)",
                objective: true,
                options: ["होय", "नाही","मला माहित नाही"]
            },
            {
                q: "ऑक्टोबर 2019 ते आज दरम्यान तुम्हाला फ्लूची लस देण्यात आली आहे का?",
                objective: true,
                options: ["होय", "नाही"]
            }
      
            ],
        disclaimer : [
            "या अॅपचा वापर वैद्यकीय निदान चाचणी किंवा वैद्याच्या उपचाराचा पर्याय नाही.",
    "वैद्यकीय तपासणीसाठी ही जागा नाही आणि आम्हाला जबाबदार धरले जाणार नाही.",
    "गोकोरोना अॅपचे लक्ष्य आरोग्य सेवेला समर्थन देणे आणि नौवेल कोरोनाव्हायरस कोविड -१ च्या संदर्भात रूग्णाच्या प्रवाहाचे अनुकूलन करणे आहे.", 
    "या आव्हानात्मक परिस्थितीत समाजाला मदत करण्यासाठी आम्ही हे करत आहोत आणि याचा आम्हाला कोणताही आर्थिक फायदा होणार नाही.",
    "शंका असल्यास कृपया आरोग्यसेवा प्रदात्याशी संपर्क साधा."
        ],
        instructions: [
            "येथे असे काही प्रश्न असु शकतात जे आपण उत्तर देऊ इच्छित नाही.",
    "ते प्रश्न पर्यायी म्हणून चिन्हांकित केले आहेत, आपण त्यांना वगळू शकता.", 
    "आपले प्रतिसाद एका अहवालात एकत्रित केले जातील जे प्रश्नावलीच्या शेवटी दर्शविले जाईल, जे आपण जतन/प्रिंट करू शकता.",
    "जर आपल्याला डॉक्टरांना भेटण्यास सूचित केल्या गेले आहे तर आपण हा अहवाल तयार करु शकता","प्रश्नावली सुरू करण्यासाठी, खालील बटणावर क्लिक करा. आम्ही आपले प्रतिसाद जतन करीत नाही."
        ]
    },
    हिंदी: {
        questions : [
            {
                q: "अपना नाम लिखे (वैकल्पिक)",
                private: true,
                objective: false
            },
            {
                q: "आप कितने साल के हो?",
                objective: true,
                options: ["40 से कम","41-50", "51-60", "61-70", "80 से अधिक" ]
            },
            {
                q: " आपकी वर्तमान रहने की स्थिति क्या है?",
                objective: true,
                options: ["अकेले रहना","परिवार के साथ रहना", "एक साथ फ्लैट में, या एक पर्यवेक्षित सामुदायिक सुविधा में रहना"]
            },
            {
                q: "क्या आपने पिछले 4 हफ्तों में यात्रा की हैं? (भारत या विदेश में)",
                objective: true,
                options: ["हां", "नहीं"]
            },
            {
                q: "क्या आपका किसी पुष्ट मरीज़ से निकट संपर्क था? एक पुष्टि मरीज़ के साथ निकट संपर्क का मतलब है:\n\
                -       15 मिनट से अधिक समय तक आमने-सामने संपर्क\n\
                -       प्रत्यक्ष, शारीरिक संपर्क (छूना, हाथ मिलाने, चुंबन)\n\
                -       15 मिनट से अधिक के लिए व्यक्ति के 2 मीटर के भीतर होना\n\
                -       शरीर के तरल पदार्थ के साथ संपर्क या विनिमय\n\
                -      एक ही अपार्टमेंट में रहना",
                objective: true,
                options: ["हां", "नहीं", "मुझे नहीं पता है"]
            },
            {
                q: "यदि आपके पास किसी पुष्ट मरीज़ के साथ निकट संपर्क है, तो संपर्क की तारीख:\n\
                कृपया दिनांक दर्ज करें: DD / MM / YYYY",
                objective: false,
                private: true
            },
            {
                q: "क्या आप निम्नलिखित में से किसी एक क्षेत्र में काम करते हैं?",
                objective: true,
                options: [
                    "मेडिकल / आरोग्य सेवा / निदान ",
                    "अंतर्राष्ट्रीय यात्रा जिसमे शामिल है",
                    "बस ड्राइवर / टैक्सी ड्राइवर ",
                    "जनरल स्टोर (सुपरमार्केट और घर में दुकान में काम करना)",
                    "एक सामुदायिक सुविधा (स्कूल, डे केयर सेंटर, विश्वविद्यालय, आदि) में",
                    "या अन्य जिन्हें कई लोगों के साथ बातचीत करने की आवश्यकता होती है (जैसे भोजन वितरण, डाकिया, बैंक, होटल रिसेप्शन आदि)",
                    "नहीं, उपरोक्त में से कोई नहीं",
                ]
            },
            {
                q: "अगले कुछ प्रश्न जांचते हैं कि क्या आप क्रमबद्ध हैं। क्या आपको पिछले 24 घंटे में बुखार (100oF से अधिक) हुआ है?",
                objective: true,
                options: ["हां", "नहीं"]
            },
            {   q: "क्या आपको पिछले 4 दिनों में बुखार (100oF से अधिक) हुआ है?",
                objective: true,
                options: ["हां","नहीं"]
            },
            {  
                q: "क्या आपको ठंड लग रही है?",
                objective: true,
                options: ["हां","नहीं"]
            },
            {  
                q: "क्या आप थका हुआ या कमजोर महसूस करते हैं?",
                objective: true,
                options: ["हां","नहीं"]
            },
            {  
                q: "क्या आपको अंग में दर्द है?",
                objective: true,
                options: ["हां","नहीं"]
            },
            {  
                q: "क्या आपको लगातार खांसी रहती है?",
                objective: true,
                options: ["हां","नहीं"]
            },
            {  
                q: "क्या आपको जुखाम है?",
                objective: true,
                options: ["हां","नहीं"]
            },
            {  
                q: "क्या आपको दस्त है?",
                objective: true,
                options: ["हां","नहीं"]
            },
            {  
                q: "क्या आपके गले में खराश है?",
                objective: true,
                options: ["हां","नहीं"]
            },
            {  
                q: "क्या आपको सिरदर्द है?",
                objective: true,
                options: ["हां","नहीं"]
            },
            {  
                q: "क्या आप सामान्य से अधिक तेजी से सांस ले रहे हैं?",
                objective: true,
                options: ["हां","नहीं"]
            },
            {
                q:"क्या आप नीचे दिए गए सभी लक्षणों का अनुभव कर रहे हैं:\
                -       बुखार (> 100oF)\
                -       थकान\
                -       गले में खराश\
                -       सूखी खाँसी",
                objective: true,
                options: ["हां","नहीं"]
            },
            {  
                q:"क्या आप निम्नलिखित लक्षणों में से किसी का अनुभव कर रहे हैं:\
                - गंभीर साँस लेने में कठिनाई (उदाहरण के लिए, प्रत्येक साँस के लिए संघर्ष करना, एकल शब्दों में बोलना)\
                - सीने में तेज दर्द\
                - चक्कर आना\
                - अचेत होना",
                objective: true,
                options: ["हां","नहीं"]
            },
            {
                q: "क्या आपको फेफड़े की बीमारी है?",
                objective: true,
                options: ["हां","नहीं","मुझे नहीं पता है"]
            },
            {
                q: "क्या आप धूम्रपान करते हैं?",
                objective: true,
                options: ["हां","नहीं"]
            },
            {
                q: "Dक्या आपको मधुमेह है?",
                objective: true,
                options: ["हां","नहीं","मुझे नहीं पता है"]
            },
            {
                q: "क्या आपको हृदय रोग या उच्च रक्तचाप (बीपी) है?",
                objective: true,
                options: ["हां","नहीं","मुझे नहीं पता है"]
            },
            {
                q: "क्या आपको कोई गुर्दे की बीमारी है?",
                objective: true,
                options: ["हां","नहीं","मुझे नहीं पता है"]
            },
            {
                q: "क्या आपको मोटापा है?",
                objective: true,
                options: ["हां","नहीं","मुझे नहीं पता है"]
            },
            {
                q: "क्या आप गर्भवती हैं?",
                objective: true,
                options: ["हां","नहीं","मुझे नहीं पता है"]
            },
            {
                q: "क्या आप वर्तमान में स्टेरॉयड ले रहे हैं?",
                objective: true,
                options: ["हां","नहीं","मुझे नहीं पता है"]
            },
            {
                q: "क्या आप वर्तमान में इम्यूनोसप्रेसेन्ट ले रहे हैं? आप एक अंग ट्रान्सप्लान्टेशऩ के बाद, एक ऑटोइम्यून बीमारी की चिकित्सा में, या कीमोथेरेपी के दौरान इम्युनोसप्रेसिव लेते हैं या प्राप्त करते हैं।",
                objective: true,
                options: ["हां","नहीं","मुझे नहीं पता है"]
            },
            {
                q: "क्या आपको अक्टूबर 2019 और आज के बीच फ्लू के खिलाफ टीका लगाया गया है?",
                objective: true,
                options: ["हां","नहीं"]
            }
        
            ],
        instructions : [
            "ऐसे कुछ सवाल हैं जिनका जवाब शायद आप नहीं देना चाहेंगे। उन सवालों को वैकल्पिक के रूप में चिह्नित किया गया है, आप उन्हें छोड़ सकते हैं।",
            "आपकी प्रतिक्रियाओं को एक रिपोर्ट में समेकित किया जाएगा, जिसे प्रश्नावली के अंत में दिखाया जाएगा, जिसे आप प्रिंट / सहेज सकते हैं।",
            "यदि यह ऍप आपको डॉक्टर को देखने का सुझाव देता है, तो आप इस रिपोर्ट को पेश कर सकते हैं।",
            " प्रश्नावली शुरू करने के लिए, नीचे दिए गए बटन पर क्लिक करें।",
            "Wहम आपकी प्रतिक्रियाओं को सहेजते नहीं हैं।"
        ],
        disclaimer : [
            "इस ऍप का उपयोग चिकित्सक या नैदानिक ​​परीक्षण द्वारा चिकित्सा निदान या उपचार को प्रतिस्थापित नहीं करता है।",
            "यह मेडिकल चेकअप के लिए प्रतिस्थापन नहीं है और हमें जिम्मेदार नहीं ठहराया जाएगा।",
            "गोकोरोना ऍप का उद्देश्य हेल्थकेयर सिस्टम का समर्थन करना और उपन्यास कोरोनावायरस COVID-19 के संदर्भ में रोगी प्रवाह का अनुकूलन करना है।",
            "हम इस चुनौतीपूर्ण स्थिति में समाज की मदद करने के लिए ऐसा कर रहे हैं और हमें इससे कोई मौद्रिक लाभ नहीं है।",
            "यदि संदेह है, तो कृपया किसी स्वास्थ्य सेवा प्रदाता से संपर्क करें।"
        ]
       }
       
    
}

export default questions;