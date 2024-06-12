export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'lt',
    messages: {
        en: {
            hello: 'Hello',
            editProfile: 'Edit Profile',
            welcomeText: 'Welcome to',
            homeName: 'Home',
            functions: {
                taxDeclarationHeadline: "Create Tax Declaration",
                taxRegistrationHeadline: "Questionnaire for tax collection"
            },
            startText: "Start now",
            logOut: "Log Out",
            language: "Language",
            languages: {
                german: "German",
                english: "English",
                lithuanian: "Lithuanian"
            }
        },
        de: {
            hello: 'Hallo',
            editProfile: 'Profil bearbeiten',
            welcomeText: "Willkommen bei",
            homeName: 'Home',
            functions: {
                taxDeclarationHeadline: "Steuererklärung erstellen",
                taxRegistrationHeadline: "Fragebogen zur steuerlichen Erfassung"
            },
            startText: "Jetzt Starten",
            logOut: "Ausloggen",
            language: "Sprache",
            languages: {
                german: "Deutsch",
                english: "Englisch",
                lithuanian: "Litauisch"
            }
        },
        lt: {
            hello: "Sveiki",
            editProfile: 'Redaguoti profilį',
            welcomeText: 'Sveiki atvykę į',
            homeName: 'Home',
            functions: {
                taxDeclarationHeadline: "Parengti mokesčių deklaraciją",
                taxRegistrationHeadline: "Klausimynas mokesčių surinkimui"
            },
            startText: "Pradėk dabar",
            logOut: "Atsijungti",
            language: "Kalba",
            languages: {
                german: "Vokiečių kalba",
                english: "Anglų",
                lithuanian: "Lietuvių"
            }
        }
    }
}))