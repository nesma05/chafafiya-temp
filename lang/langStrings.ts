export const LangStrings = {
  fr: {
    homeTitle: "Bienvenue sur le portail national d'acces à d'information",
    homeText:
      "Ce portail permet aux citoyens et citoyennes, ainsi qu'aux personnes étrangères résidant légalement au Maroc, d'introduire et de suivre les demandes d'accès à l'information conformément à la loi 13-31 relative au droit d'accès à l'information.",
    administration: "L'institution ou l'organisme concerné",
    type: 'Type de demande',
    infoPerso: 'Information Personnelles',
    typeAdmin: "Type d'administaration",
    anexes: 'Anexes',
    infoTotal: 'Informations totales :',
    responsable: 'responsable',
    quiz: 'quiz',
    table: 'table',
    request: 'request',
    home: 'accueil',
    documents: 'documents',
    searchengine: 'recherche',
    law: 'loi',
    portal: 'portail',
    howReq: 'mannier demande',
    login: 'connecter',
    adminLoginButton: 'خاص بالإدارة',
    userLoginButton: 'تسجيل الدخول',
    menuSearchInput: 'البحث في الموقع',
    heroBoxLink: 'اطلع على المزيد',
    heroAccorTitle: 'قم بالبحث وحدد ما إذا كنت بحاجة إلى تقديم طلب',
    searchInputText: 'أدخل عناصر البحث عن المعلومات التي ترغب في الحصول عليها',
    searchInputButton: 'البحث',
    homeAccorSearchText:'ابحث هنا',
    accordionContent: [
      {
        title: 'ابحث عن المعلومة قبل تقديم الطلب',
        link: '/',
        text: [
          'قبل إيداع طلبك للحصول على المعلومات يرجى الإطلاع على المعلومات المرغوب فيها إما:',
          '• عبر بوابة النشر الإستباقي للمعلومات',
          '• أو عبر المواقع الخدماتية التي توفر هذه المعلومات',
          '• أو عبر مواقع المؤسسات والهيئات',
        ],

        inputText: 'تقديم الطلب',
        inputType: 'search',
      },
      {
        title: 'تقديم الطلب',
        link: '/',
        text: [
          'قبل إيداع طلبك للحصول على المعلومات يرجى الإطلاع على المعلومات المرغوب فيها إما:',
          '• عبر بوابة النشر الإستباقي للمعلومات',
          '• أو عبر المواقع الخدماتية التي توفر هذه المعلومات',
          '• أو عبر مواقع المؤسسات والهيئات',
        ],

        inputText: 'تقديم الطلب',
        inputType: 'button',
      },
      {
        title: 'تتبع وضعية طلبك أو قدم شكاية حول طلبك',
        link: '/',
        text: [
          'ستقوم المؤسسة أو الهيئة المعنية بدراسة طلبك والرد عليه داخل الآجال المحددة قانونيا،',
          'تمكنك البوابة من تتبع طلبك،',
          'وفي حالة عدم الرضى عن الإجابة أو عدم الرد داخل الآجال يمكنك تقديم شكاية',
        ],

        inputText: 'تتبع وضعية الطلب',
        inputType: 'button',
      },
    ],
    iconBoxContent: [
      {
        text: 'عدد المؤسسات أو الهيئات المعنية',
        count: '1698',
      },
      {
        text: 'عدد الطلبات المقدمة',
        count: '4698',
      },
      {
        text: 'عدد الطلبات المعالجة',
        count: '3546',
      },
      {
        text: 'عدد الطلبات في طور المعالجة',
        count: '2685',
      },
      {
        text: 'متوسط مدة الإجابة',
        count: '71',
      },
    ],
    menuList: [
      {
        title: 'الحق في الحصول على المعلومات',
        menuHeight: '240px',
        subMenu: [
          {
            text: 'بوابة الحصول على المعلومات',
            link: '/portal',
            icon:'yes'
          },
          {
            text: 'تعرف  على القانون 31.13',
            link: '/law',
            icon:'yes'
          },
          {
            text: 'قاموس/ مصطلحات',
            link: '/termsDictionary',
          },
          {
            text: 'مراجع',
            link: '/documents',
          },
          {
            text: 'اختبر معلوماتك',
            link: '/quiz',
          },
        ],
      },
      {
        title: 'قبل تقديم الطلب',
        menuHeight: '190px',
        subMenu: [  
          {
            text: 'كيف يمكنك البحث عن المعلومات',
            link: '/howToInfo',
          },  
          {
            text: 'المعلومات المنشورة حسب المجالات',
            link: '/searchengine?proactivPublish',
          },
          {
            text: 'المعلومات  بمواقع المؤسسات والهيئات',
            link: '/searchengine?institWebsites',
          },
          {
            text: 'المعلومات الاكثر طلبا',
            link: '/searchengine?mostFaReq',
          },
          {
            text: 'المعلومات حول المؤسسات والهيئات',
            link: '/institAgencies',
          },                
          {
            text: 'مواقع حكومية اخرى',
            link: '/gouvernSites',
          },
        ],
      },
      {
        title: 'تقديم الطلب',
        menuHeight: '190px',
        subMenu: [
          {
            text: 'كيف يمكنك تقديم الطلب؟',
            link: '/howReq',
            icon:'yes'
          },
          {
            text: 'إيداع الطلب',
            link: '/request',
          },
          {
            text: 'تتبع الطلب',
            link: '/checkRequest',
          },
        ],
      },
      {
        title: 'تقديم شكاية',
        menuHeight: '190px',
        subMenu: [
          {
            text: 'كيف يمكنك تقديم الشكاية',
            link: '/howCompl',
          },
          {
            text: 'تقديم شكاية للمؤسسة المعنية',
            link: '/checkComplaintInstit', 
          },
          {
            text: 'تقديم شكاية للجنة الحق في الحصول على المعلومات',
            link: '/checkComplaintComity',
          },
          {
            text: 'الطعن لدى المحكمة الإدارية المختصة',
            link: '/checkComplaintCort',
          },
        ],
      },
      {
        title: 'إحصائيات',
        link:'/statistics'
      },
    ],
    boxContent: [
      {
        title: 'ما هو القانون رقم 13-31 المتعلق بالحق في الحصول على المعلومات؟',
        text: 'لمغلوطة حول استنكار النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل',
        link: '/law',
      },
      {
        title: 'ما هي بوابة الحصول على المعلومات؟',
        text: 'لمغلوطة حول استنكار النشوة وتمجيدل، وسأعرض لك التفاصيل',
        link: '/portal',
      },
      {
        title: 'كيف يمكنك تقديم طلب الحصول على المعلومات؟',
        text: 'لمغلوطة حول استنكار النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل',
        link: '/howReq',
      },
      {
        title: 'اختبار المعلومات Quiz',
        text: 'لمغلوطة حول استنكار النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل',
        link: '/quiz',
      },
    ],
  },
  ar: {
    homeTitle: 'مرحبا بكم في البوابة الوطنية للحصول على المعلومات',
    homeText:
      'تتيح هذه البوابة للمواطنات والمواطنين وكذا الأشخاص الأجانب المقيمين بالمغرب بصفة قانونية تقديم وتتبع طلبات الحصول على المعلومات وفقا للقانون 13-31 المتعلق بالحق في الحصول على المعلومات',
    administration: 'المؤسسة أو الهيئة المعنية',
    type: 'نوع الطلب',
    infoPerso: 'بيانات شخصية',
    typeAdmin: 'الصنف',
    anexes: 'المحاور',
    infoTotal: 'مجموع المعلومات:',
    responsable: 'المسؤول',
    quiz: 'الإختبار',
    table: 'الجدول',
    request: 'إيداع الطلب',
    home: 'الرئيسية',
    documents: 'وثائق',
    searchengine: 'البحث',
    law: 'القانون',
    portal: 'البوابة',
    howReq: 'كيفية الطلب',
    login: 'الدخول',
    adminLoginButton: 'خاص بالإدارة',
    userLoginButton: 'تسجيل الدخول',
    menuSearchInput: 'البحث في الموقع',
    heroBoxLink: 'اطلع على المزيد',
    heroAccorTitle: 'قم بالبحث وحدد ما إذا كنت بحاجة إلى تقديم طلب',
    searchInputText: 'أدخل عناصر البحث عن المعلومات التي ترغب في الحصول عليها',
    searchInputButton: 'البحث',
    homeAccorSearchText:'ابحث هنا',
    accordionContent: [
      {
        title: 'ابحث عن المعلومة قبل تقديم الطلب',
        link: '/',
        text: [
          'قبل إيداع طلبك للحصول على المعلومات يرجى الإطلاع على المعلومات المرغوب فيها إما:',
          '• عبر بوابة النشر الإستباقي للمعلومات',
          '• أو عبر المواقع الخدماتية التي توفر هذه المعلومات',
          '• أو عبر مواقع المؤسسات والهيئات',
        ],

        inputText: 'تقديم الطلب',
        inputType: 'search',
      },
      {
        title: 'تقديم الطلب',
        link: '/',
        text: [
          'قبل إيداع طلبك للحصول على المعلومات يرجى الإطلاع على المعلومات المرغوب فيها إما:',
          '• عبر بوابة النشر الإستباقي للمعلومات',
          '• أو عبر المواقع الخدماتية التي توفر هذه المعلومات',
          '• أو عبر مواقع المؤسسات والهيئات',
        ],

        inputText: 'تقديم الطلب',
        inputType: 'button',
      },
      {
        title: 'تتبع وضعية طلبك أو قدم شكاية حول طلبك',
        link: '/',
        text: [
          'ستقوم المؤسسة أو الهيئة المعنية بدراسة طلبك والرد عليه داخل الآجال المحددة قانونيا،',
          'تمكنك البوابة من تتبع طلبك،',
          'وفي حالة عدم الرضى عن الإجابة أو عدم الرد داخل الآجال يمكنك تقديم شكاية',
        ],

        inputText: 'تتبع وضعية الطلب',
        inputType: 'button',
      },
    ],
    iconBoxContent: [
      {
        text: 'عدد المؤسسات أو الهيئات المعنية',
        count: '1698',
      },
      {
        text: 'عدد الطلبات المقدمة',
        count: '4698',
      },
      {
        text: 'عدد الطلبات المعالجة',
        count: '3546',
      },
      {
        text: 'عدد الطلبات في طور المعالجة',
        count: '2685',
      },
      {
        text: 'متوسط مدة الإجابة',
        count: '71',
      },
    ],
    menuList: [
      {
        title: 'الحق في الحصول على المعلومات',
        menuHeight: '240px',
        subMenu: [
          {
            text: 'بوابة الحصول على المعلومات',
            link: '/portal',
            icon:'yes'
          },
          {
            text: 'تعرف  على القانون 31.13',
            link: '/law',
            icon:'yes'
          },
          {
            text: 'قاموس/ مصطلحات',
            link: '/termsDictionary',
          },
          {
            text: 'مراجع',
            link: '/documents',
          },
          {
            text: 'اختبر معلوماتك',
            link: '/quiz',
          },
        ],
      },
      {
        title: 'قبل تقديم الطلب',
        menuHeight: '190px',
        subMenu: [   
          {
            text: 'كيف يمكنك البحث عن المعلومات',
            link: '/howToInfo',
            icon:'yes'
          },   
          {
            text: 'المعلومات المنشورة حسب المجالات',
            link: '/searchengine?proactivPublish',
          },
          {
            text: 'المعلومات  بمواقع المؤسسات والهيئات',
            link: '/searchengine?institWebsites',
          },
          {
            text: 'المعلومات الاكثر طلبا',
            link: '/searchengine?mostFaReq',
          },
          {
            text: 'المعلومات حول المؤسسات والهيئات',
            link: '/institAgencies',
          },                
          {
            text: 'مواقع حكومية اخرى',
            link: '/gouvernSites',
          },
        ],
      },
      {
        title: 'تقديم الطلب',
        menuHeight: '190px',
        subMenu: [
          {
            text: 'كيف يمكنك تقديم الطلب؟',
            link: '/howReq',
            icon:'yes'
          },
          {
            text: 'إيداع الطلب',
            link: '/request',
          },
          {
            text: 'تتبع الطلب',
            link: '/checkRequest',
          },
        ],
      },
      {
        title: 'تقديم شكاية',
        menuHeight: '190px',
        subMenu: [
          {
            text: 'كيف يمكنك تقديم الشكاية',
            link: '/howCompl',
            icon:'yes'
          },
          {
            text: 'تقديم شكاية للمؤسسة المعنية',
            link: '/checkComplaintInstit',
          },
          {
            text: 'تقديم شكاية للجنة الحق في الحصول على المعلومات',
            link: '/checkComplaintComity',
          },
          {
            text: 'الطعن لدى المحكمة الإدارية المختصة',
            link: '/checkComplaintCort',
          },
        ],
      },
      {
        title: 'إحصائيات',
        link:'/statistics'
      },
    ],
    boxContent: [
      {
        title: 'ما هو القانون رقم 13-31 المتعلق بالحق في الحصول على المعلومات؟',
        text: 'لمغلوطة حول استنكار النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل',
        link: '/law',
      },
      {
        title: 'ما هي بوابة الحصول على المعلومات؟',
        text: 'لمغلوطة حول استنكار النشوة وتمجيدل، وسأعرض لك التفاصيل',
        link: '/portal',
      },
      {
        title: 'كيف يمكنك تقديم طلب الحصول على المعلومات؟',
        text: 'لمغلوطة حول استنكار النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل',
        link: '/howReq',
      },
      {
        title: 'اختبار المعلومات Quiz',
        text: 'لمغلوطة حول استنكار النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل',
        link: '/quiz',
      },
    ],
  },
  amz: {
    homeTitle: 'ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵏⵏⵖⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵏⵏⵖⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵏⵏⵖ ⵏⵏⵖⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵏⵏⵖ',
    homeText:
      'ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵏⵏⵖⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵏⵏⵖⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵏⵏⵖⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵏⵏⵖⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵏⵏⵖⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵏⵏⵖⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵏⵏⵖ ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵏⵏⵖⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵏⵏⵖⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵏⵏⵖⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵏⵏⵖⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵏⵏⵖⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵏⵏⵖⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵏⵏⵖ ⵏⵏⵖⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵏⵏⵖⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵏⵏⵖⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵏⵏⵖⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵏⵏⵖ',
    adminLoginButton: 'ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵜⵉⵏⴰⵏ',
    userLoginButton: 'ⵜⵉⵏⴰⴼⵓ ⵜⵉⵏⴰⵉⵏ',
    menuSearchInput: 'ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵜⵉⵏ ⵜⵉⵏⴰⴼⵓⵜⵉⵏ',
    heroBoxLink: 'ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵜⵉⵏ ⵜⵉⵏⴰⴼ',
    heroAccorTitle:
      'ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵏⵏⵖⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵏⵏⵖⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵏⵏⵖⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵏⵏⵖⵜⵉⵏⴰⴼⵓⵜⵉⵏ',
    searchInputText: 'ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵏⵏⵖⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵏⵏⵖⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵏⵏⵖⵜⵉⵏⴰⴼⵓⵜⵉⵏ',
    searchInputButton: 'ⴼⵓⵜⵏ',
    homeAccorSearchText:'ⴼⵓⵜⵏ ⴼⵓⵏ',
    accordionContent: [
      {
        title: 'ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵜⵉⵏⴰⴼⵓⵜⵉⵏ',
        link: '/',
        text: [
          'ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵏⵏⵖⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵏⵏⵖⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵏⵏⵖⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵏⵏⵖⵜⵉⵏⴰⴼⵓⵜⵉ :',
          '• ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵏⵏⵖⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵏⵏⵖⵜⵉⵏⴰⴼⵓⵜⵉ ',
          '• ⵏⵏⵖⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵏⵏⵖⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵏⵏⵖⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵏⵏⵖⵜⵉⵏⴰⴼⵓⵜⵉ ',
          '• ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵏⵏⵖⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵏⵏⵖⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵏⵏⵖⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵏⵏⵖⵜⵉⵏⴰⴼⵓⵜⵉ',
        ],

        inputText: 'ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵜⵉⵏⴰⴼⵓⵜⵉⵏ',
        inputType: 'search',
      },
      {
        title: 'ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵜⵉⵏⴰⴼⵓⵜⵉⵏ',
        link: '/',
        text: [
          'ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵏⵏⵖⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵏⵏⵖⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵏⵏⵖⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵏⵏⵖⵜⵉⵏⴰⴼⵓⵜⵉ :',
          '• ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵏⵏⵖⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵏⵏⵖⵜⵉⵏⴰⴼⵓⵜⵉ ',
          '• ⵏⵏⵖⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵏⵏⵖⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵏⵏⵖⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵏⵏⵖⵜⵉⵏⴰⴼⵓⵜⵉ ',
          '• ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵏⵏⵖⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵏⵏⵖⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵏⵏⵖⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵏⵏⵖⵜⵉⵏⴰⴼⵓⵜⵉ',
        ],

        inputText: 'ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵜⵉⵏⴰⴼⵓⵜⵉⵏ',
        inputType: 'button',
      },
      {
        title: 'ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵜⵉⵏⴰⴼⵓⵜⵉⵏ',
        link: '/',
        text: [
          'ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵏⵏⵖⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵏⵏⵖⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵏⵏⵖⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵏⵏⵖⵜⵉⵏⴰⴼⵓⵜⵉ :',
          '• ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵏⵏⵖⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵏⵏⵖⵜⵉⵏⴰⴼⵓⵜⵉ ',
          '• ⵏⵏⵖⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵏⵏⵖⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵏⵏⵖⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵏⵏⵖⵜⵉⵏⴰⴼⵓⵜⵉ ',
          '• ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵏⵏⵖⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵏⵏⵖⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵏⵏⵖⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵏⵏⵖⵜⵉⵏⴰⴼⵓⵜⵉ',
        ],

        inputText: 'ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵜⵉⵏⴰⴼⵓⵜⵉⵏ',
        inputType: 'button',
      },
    ],
    iconBoxContent: [
      {
        text: 'ⵏⵏⵖⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵏⵏⵖⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵏⵏⵖⵜⵉⵏⴰⴼⵓⵜⵉⵏ',
        count: '1698',
      },
      {
        text: 'ⵏⵏⵖⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵏⵏⵖⵜⵉⵏⴰⴼⵓⵜⵉⵏ',
        count: '4698',
      },
      {
        text: 'ⵏⵏⵖⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵏⵏⵖⵜⵉⵏⴰⴼⵓⵜⵉⵏ',
        count: '3546',
      },
      {
        text: 'ⵏⵏⵖⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵏⵏⵖⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵏⵏⵖⵜⵉⵏⴰⴼⵓⵜⵉⵏ',
        count: '2685',
      },
      {
        text: 'ⵏⵏⵖⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵏⵏⵖⵜⵉⵏⴰⴼⵓⵜⵉⵏ',
        count: '71',
      },
    ],
    menuList: [
      {
        title: 'ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵜⵉⵏⴰⴼⵓⵜⵉⵏ',
        menuHeight: '240px',
        subMenu: [
          {
            text: 'ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵜⵉⵏⴰⴼⵓⵜⵉⵏ',
            link: '/portal',
            icon:'yes'
          },
          {
            text: 'ⵜⵉⵏⴰⴼⵓⵜⵉⵏⵜ ⵉⵏⴰⴼⵓⵜⵉⵏ',
            link: '/law',
            icon:'yes'
          },
          {
            text: 'ⵜⵉⵏⴰⴼⵓⵜⵉⵏ/ ⵜⵉⵏⴰⴼⵓⵜⵉⵏ',
            link: '/termsDictionary',
          },
          {
            text: 'ⵜⵉⵏⴰⴼⵓⵜⵉⵏ',
            link: '/documents',
          },
          {
            text: 'ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵜⵉⵏⴰⴼⵓⵜⵉⵏ',
            link: '/quiz',
          },
        ],
      },
      {
        title: 'ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵜⵉⵏⴰⴼⵓⵜⵉⵏ',
        menuHeight: '190px',
        subMenu: [    
          {
            text: 'ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵜⵉⵏⴰⴼⵓⵜⵉⵏ',
            link: '/howToInfo',
            icon:'yes'
          },  
          {
            text: 'ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵜⵉⵏⴰⴼⵓⵜⵉⵏ',
            link: '/searchengine?proactivPublish',
          },
          {
            text: 'ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵜⵉⵏⴰⴼⵓⵜⵉⵏ',
            link: '/searchengine?institWebsites',
          },
          {
            text: 'ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵜⵉⵏⴰⴼⵓ',
            link: '/searchengine?mostFaReq',
          },
          {
            text: 'ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵜⵉⵏⴰⴼ',
            link: '/institAgencies',
          },                
          {
            text: 'ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵜⵉ',
            link: '/gouvernSites',
          },
        ],
      },
      {
        title: 'ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵜⵉⵏⴰⴼⵓⵜⵉⵏ',
        menuHeight: '190px',
        subMenu: [
          {
            text: 'ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵜⵉⵏⴰⴼⵓⵜⵉⵏ',
            link: '/howReq',
            icon:'yes'
          },
          {
            text: 'ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵜⵉⵏⴰⴼⵓⵜⵉⵏ',
            link: '/request',
          },
          {
            text: 'ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵜⵉⵏⴰⴼⵓⵜⵉⵏ',
            link: '/checkRequest',
          },
        ],
      },
      {
        title: 'ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵜⵉⵏⴰⴼⵓⵜⵉⵏ',
        menuHeight: '190px',
        subMenu: [
          {
            text: 'ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵜⵉⵏⴰⴼⵓⵜⵉⵏ',
            link: '/howCompl',
            icon:'yes'
          },
          {
            text: 'ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵜⵉⵏⴰⴼⵓⵜⵉⵏ',
            link: '/checkComplaintInstit',
          },
          {
            text: 'ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵜⵉⵏⴰⴼⵓⵜⵉⵏ',
            link: '/checkComplaintComity',
          },
          {
            text: 'ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵜⵉⵏⴰⴼⵓⵜⵉⵏ',
            link: '/checkComplaintCort',
          },
        ],
      },
      {
        title: 'ⵜⵉⵏⴰⴼⵓⵜⵉⵏ',
        link:'/statistics'
      },
    ],
    boxContent: [
      {
        title: '  ⵜⵉⵏⴰⴼⵓⵜⵉⵏ  13-31 ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵜⵉⵏⴰⴼⵓⵜⵉⵏ  ⵜⵉⵏⴰⴼⵓⵜⵉⵏ  ⵜⵉⵏⴰⴼⵓⵜⵉⵏ',
        text: 'ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵜⵉⵏⴰⴼⵓⵜⵉⵏ',
        link: '/law',
      },
      {
        title: 'ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵜⵉⵏⴰⴼⵓⵜⵉⵏ',
        text: 'ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵜⵉⵏⴰⴼⵓⵜⵉⵏ',
        link: '/portal',
      },
      {
        title: 'ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵜⵉⵏⴰⴼⵓⵜⵉⵏ',
        text: 'ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵜⵉⵏⴰⴼⵓⵜⵉⵏ',
        link: '/howReq',
      },
      {
        title: 'ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵜⵉⵏⴰⴼⵓⵜⵉⵏ Quiz',
        text: 'ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵜⵉⵏⴰⴼⵓⵜⵉⵏ ⵜⵉⵏⴰⴼⵓⵜⵉⵏ',
        link: '/quiz',
      },
    ],
  },
}
