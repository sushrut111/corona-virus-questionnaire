const recommendations = {
    english: {
        exposed: {
            yes: {
                attention: [
                    "is-danger",
                    "Seek immediate attention.",
                    "Call helpline number +91-11-23978046, Toll Free No: 1075 or contact a verified Covid-19 test center.",
                    "You can find a list of verified test centers nearby",
                    "href:https://icmr.nic.in/node/39071"
                ],
                getintouch: [
                    "is-warning",
                    "Get in touch with a physician.",
                    "You have been exposed so you might be at risk and contagious to others.","Quarantine yourself and avoid contact with other people.",
                    "The pdf version of the questionnaire can be forwarded to the doctor to provide detailed information regarding your symptoms, exposure and medical history.", "Please follow their recommendation"
                ],
                stayhome: [
                    "is-warning",
                    "Please stay at home and monitor yourself.",
                    "You have been exposed so you might be at risk and contagious to others.","Currently, you don’t have any symptoms but if you develop any, please get in touch with a doctor.",
                    "Quarantine yourself and avoid contact with other people."
                ]
    
            },
            no: {
                attention: [
                    "is-danger",
                    "Seek immediate attention.",
                    "Call helpline number +91-11-23978046, Toll Free No: 1075 or contact a verified Covid-19 test center.",
                    "You can find a list of verified test centers nearby",
                    "href:https://icmr.nic.in/node/39071"
                ],
                getintouch:  [
                    "is-warning",
                    "Get in touch with a physician.",
                    "The pdf version of the questionnaire can be forwarded to the doctor to provide detailed information regarding your symptoms, health and travel history.",
                    "Please follow their recommendation."
                ],
                monitor: [
                    "is-warning",
                    "Monitor your symptoms closely.",
                    "If the symptoms worsen, please get in touch with a doctor.",
                    "Quarantine yourself and avoid contact with other people."
                ],
                stayhome: [
                    "is-success",
                    "Please stay at home.",
                    "Currently, you don’t need to do anything as you haven’t contacted a verified case, you haven’t traveled in the last 14 days and you don’t have any symptoms.",
                    "Kindly follow the general recommendations."
                ]
            }
    
        } 
    },
    मराठी: {
        exposed: {
            no: {
                attention: [
                    "is-danger",
                    "त्वरित वैद्यकीय मदत घ्या",
                    "हेल्पलाइन क्रमांकावर + 91-11-23978046 वर कॉल करा, टोल फ्री क्रमांक: 1075 किंवा सत्यापित कोविड -19 चाचणी केंद्राशी संपर्क साधा.",
                    "आपल्याला जवळपास सत्यापित चाचणी केंद्रांची यादी सापडेल",
                    "href:https://icmr.nic.in/node/39071"
                                    ],
                getintouch: [
                    "is-warning",
                    "एखाद्या डॉक्टरशी संपर्क साधा",
                    "प्रश्नावलीची पीडीएफ आवृत्ती आपल्या लक्षणे, आरोग्य आणि प्रवासाच्या इतिहासासंबंधी तपशीलवार माहिती देण्यासाठी डॉक्टरकडे पाठविली जाऊ शकते.",
                    "कृपया त्यांच्या शिफारसीचे अनुसरण करा."
                                    ],
                stayhome: [
                    "is-success",
                    "कृपया घरीच रहा", 
                    "सध्या आपण सत्यापित रुग्णाशी संपर्क साधला नसल्यामुळे आपल्याला काही करण्याची आवश्यकता नाही कारण आपण गेल्या 14 दिवसांत प्रवास केलेला नाही आणि आपल्याकडे कोणतीही लक्षणे नाहीत.",
                    "कृपया सामान्य शिफारसींचे अनुसरण करा."
                ],
                monitor: [
                    "is-warning",
                    "आपल्या लक्षणांवर बारकाईने निरीक्षण करा",
                    "लक्षणे तीव्र झाल्यास, कृपया डॉक्टरांशी संपर्क साधा.",
                    "स्वत: ला अलग ठेवा आणि इतर लोकांशी संपर्क टाळा."

                ]
            },
            yes: {
                attention: [
                    "is-danger",
                    "त्वरित वैद्यकीय मदत घ्या",
                    "हेल्पलाइन क्रमांकावर + 91-11-23978046 वर कॉल करा, टोल फ्री क्रमांक: 1075 किंवा सत्यापित कोविड -19 चाचणी केंद्राशी संपर्क साधा.",
                    "आपल्याला जवळपास सत्यापित चाचणी केंद्रांची यादी सापडेल",
                    "href:https://icmr.nic.in/node/39071"
                                    ],
                getintouch:  [
                    "is-warning",
                    "एखाद्या डॉक्टरशी संपर्क साधा",
                    "आपला संक्रमित संपर्क आला आहे म्हणून आपणास धोका असू शकतो आणि आपल्यामुळे संक्रमणाचा धोका आहे.",
                    "स्वत: ला अलग ठेवा आणि इतर लोकांशी संपर्क टाळा.",
                    "प्रश्नावलीची पीडीएफ आवृत्ती आपल्या लक्षणे, संपर्क आणि वैद्यकीय इतिहासाशी संबंधित तपशीलवार माहिती देण्यासाठी डॉक्टरकडे पाठविली जाऊ शकते.",
                    "कृपया त्यांच्या शिफारसीचे अनुसरण करा"                ],
                stayhome: [
                    "is-warning",
                    "कृपया घरीच रहा आणि स्वतःचे परीक्षण करा.",
                    "आपला संक्रमित संपर्क आला आहे म्हणून आपणास धोका असू शकतो आणि आपल्यामुळे संक्रमणाचा धोका आहे.",
                    "सध्या आपल्याकडे कोणतीही लक्षणे नाहीत परंतु जर आपल्याला काही विकसित झाले तर कृपया डॉक्टरांच्या संपर्कात रहा.",
                    "स्वत: ला अलग ठेवा आणि इतर लोकांशी संपर्क टाळा"                ]
            }
    
        } 

        
    }
}
export default recommendations;