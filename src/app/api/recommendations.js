const recommendations = {
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
    
}
export default recommendations;