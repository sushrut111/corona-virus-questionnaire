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
                options: ["Under 40","41-50", "51-60", "61-70", "Over 70" ]
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
                q: "Are you currently taking steroids (any other medicines on a regular basis)?",
                objective: true,
                options: ["yes","no","I don't know"]
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
                options: ["होय", "नाही","मला माहित नाही"]
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
    }
    
}

export default questions;