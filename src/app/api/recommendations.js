const recommendations = {
    English: {
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
                    "Get in touch with a physician and monitor your symptoms closely.",
                    "You might have been exposed so you might be at risk and contagious to others.","Quarantine yourself and avoid contact with other people.",
                    "The pdf version of the questionnaire can be forwarded to the doctor to provide detailed information regarding your symptoms, exposure and medical history.", "Please follow their recommendation"
                ],
                stayhome: [
                    "is-warning",
                    "Please stay at home and monitor yourself.",
                    "You might have been exposed so you might be at risk and contagious to others.","Currently, you don’t have any symptoms but if you develop any, please get in touch with a doctor.",
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
                    "एखाद्या डॉक्टरशी संपर्क साधा आणि आपल्या लक्षणांवर बारकाईने निरीक्षण करा",
                    "आपला संक्रमित संपर्क आला असू शकतो म्हणून आपणास धोका असू शकतो आणि आपल्यामुळे संक्रमणाचा धोका आहे.",
                    "स्वत: ला अलग ठेवा आणि इतर लोकांशी संपर्क टाळा.",
                    "प्रश्नावलीची पीडीएफ आवृत्ती आपल्या लक्षणे, संपर्क आणि वैद्यकीय इतिहासाशी संबंधित तपशीलवार माहिती देण्यासाठी डॉक्टरकडे पाठविली जाऊ शकते.",
                    "कृपया त्यांच्या शिफारसीचे अनुसरण करा"                ],
                stayhome: [
                    "is-warning",
                    "कृपया घरीच रहा आणि स्वतःचे परीक्षण करा.",
                    "आपला संक्रमित संपर्क आला असू शकतो म्हणून आपणास धोका असू शकतो आणि आपल्यामुळे संक्रमणाचा धोका आहे.",
                    "सध्या आपल्याकडे कोणतीही लक्षणे नाहीत परंतु जर आपल्याला काही विकसित झाले तर कृपया डॉक्टरांच्या संपर्कात रहा.",
                    "स्वत: ला अलग ठेवा आणि इतर लोकांशी संपर्क टाळा"                ]
            }
    
        } 

        
    },
    हिंदी: {
        exposed: {
            no: {
                attention: [
                    "is-danger",
                    "तत्काल ध्यान देना।",
                    "हेल्पलाइन नंबर + 91-11-23978046 पर कॉल करें, टोल फ्री नंबर: 1075 या किसी सत्यापित कोविद -19 परीक्षण केंद्र से संपर्क करें।",
                    "आप पास के सत्यापित परीक्षा केंद्रों की सूची पा सकते हैं।",
                    "href:https://icmr.nic.in/node/39071"
                ],
                getintouch: [
                    "is-warning",
                    "चिकित्सक से संपर्क करे।",
                    "प्रश्नावली का पीडीएफ संस्करण आपके लक्षणों, स्वास्थ्य और यात्रा के इतिहास के बारे में विस्तृत जानकारी प्रदान करने के लिए डॉक्टर को भेजा जा सकता है।",
                    "कृपया उनकी सिफारिश का पालन करें।",
                ],
                stayhome: [
                    "is-success",
                    "कृपया घर पर रहें।",
                    "वर्तमान में, आपको कुछ भी करने की आवश्यकता नहीं है क्योंकि आपने किसी सत्यापित मरीज़ से संपर्क नहीं किया है, आपने पिछले 14 दिनों में यात्रा नहीं की है और आपके पास कोई लक्षण नहीं हैं। ",
                    "कृपया सामान्य सिफारिशों का पालन करें।"
                    
                ],
                monitor: [
                    "is-warning",
                    "अपने लक्षणों की बारीकी से निगरानी करें।",
                    "यदि लक्षण बिगड़ते हैं, तो कृपया डॉक्टर से संपर्क करें।",
                    "खुद को कोरांटीन करें और अन्य लोगों के साथ संपर्क से बचें।"                    
                ]
            },
            yes: {
                attention: [
                    "is-danger",
                    "तत्काल चिकित्सा की तलाश करें।",
                    "हेल्पलाइन नंबर + 91-11-23978046 पर कॉल करें, टोल फ्री नंबर: 1075 या पास के सत्यापित कोविद -19 परीक्षण केंद्र से संपर्क करें",
                    "href:https://icmr.nic.in/node/39071"
                                                        ],
                getintouch:  [
                    "is-warning",
                    "चिकित्सक से संपर्क करे और अपने लक्षणों की बारीकी से निगरानी करें।",
                    "आप संक्रमित मरीज के संपर्क में रह चुके हो सकते हैं इसलिए आप दूसरों के लिए जोखिम और संक्रामक हो सकते हैं।","खुद को कोरांटीन करें और अन्य लोगों के साथ संपर्क से बचें।",
                    "प्रश्नावली का पीडीएफ संस्करण आपके लक्षणों, जोखिम और चिकित्सा इतिहास के बारे में विस्तृत जानकारी प्रदान करने के लिए डॉक्टर को भेजा जा सकता है।",
                    "कृपया उनकी सिफारिश का पालन करें।"],

                stayhome: [
                    "is-warning",
                    "कृपया घर पर रहें और खुद की निगरानी करें।",
                    "आप संक्रमित मरीज के संपर्क में रह चुके हो सकते हैं इसलिए आप दूसरों के लिए जोखिम और संक्रामक हो सकते हैं।",
                    "वर्तमान में, आपके पास कोई लक्षण नहीं हैं, लेकिन यदि आप कोई भी विकसित करते हैं, तो कृपया डॉक्टर से संपर्क करें।",
                    "खुद को कोरांटीन करें और अन्य लोगों के साथ संपर्क से बचें।"
                ]
            }
    
        } 

        
    }

}
export default recommendations;