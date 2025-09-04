document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const quoteDisplay = document.getElementById('quote');
    const authorDisplay = document.getElementById('author');
    const newQuoteBtn = document.getElementById('new-quote-btn');
    const categoryFiltersContainer = document.getElementById('category-filters');
    const shareBtn = document.getElementById('share-btn');
    const quoteContent = document.querySelector('.quote-content');

    // ======================================================
    // ===== מאגר הציטוטים המורחב (השינוי העיקרי כאן) =====
    // ======================================================
    const quotes = [
        // השראה
        { text: "הדרך היחידה לעשות עבודה נהדרת היא לאהוב את מה שאתה עושה.", author: "סטיב ג'ובס", category: "השראה" },
        { text: "הצלחה היא היכולת לעבור מכישלון לכישלון מבלי לאבד את ההתלהבות.", author: "ווינסטון צ'רצ'יל", category: "השראה" },
        { text: "העתיד שייך לאלה המאמינים ביופיים של חלומותיהם.", author: "אלינור רוזוולט", category: "השראה" },
        { text: "אל תחכה. הזמן לעולם לא יהיה בדיוק מתאים.", author: "נפוליאון היל", category: "השראה" },
        { text: "האמן בעצמך, ותגיע למקומות שלא חלמת עליהם.", author: "לס בראון", category: "השראה" },

        // פילוסופיה
        { text: "החיים הם מה שקורה לך בזמן שאתה עסוק בלתכנן תוכניות אחרות.", author: "ג'ון לנון", category: "פילוסופיה" },
        { text: "חיים שלא נבחנו, אינם ראויים לחיותם.", author: "סוקרטס", category: "פילוסופיה" },
        { text: "אני חושב, משמע אני קיים.", author: "רנה דקארט", category: "פילוסופיה" },
        { text: "האושר הוא משמעות החיים ומטרתם, התכלית והסוף של הקיום האנושי.", author: "אריסטו", category: "פילוסופיה" },
        { text: "מסע של אלף קילומטרים מתחיל בצעד אחד.", author: "לאו דזה", category: "פילוסופיה" },

        // הומור
        { text: "ההבדל בין טיפשות לגאונות הוא שלגאונות יש גבולות.", author: "אלברט איינשטיין", category: "הומור" },
        { text: "ישנם שני דברים אינסופיים: היקום והטיפשות האנושית, ואני לא בטוח לגבי היקום.", author: "אלברט איינשטיין", category: "הומור" },
        { text: "יין הוא הוכחה מתמדת שאלוהים אוהב אותנו ורוצה שנשמח.", author: "בנג'מין פרנקלין", category: "הומור" },
        { text: "אני לא מפחד למות, אני פשוט לא רוצה להיות שם כשזה יקרה.", author: "וודי אלן", category: "הומור" },
        { text: "תמיד תסלח לאויביך, שום דבר לא מעצבן אותם יותר.", author: "אוסקר ויילד", category: "הומור" },

        // טכנולוגיה
        { text: "טכנולוגיה היא כל דבר שלא היה קיים כשהיינו ילדים.", author: "אלן קיי", category: "טכנולוגיה" },
        { text: "העתיד כבר כאן - הוא פשוט לא מופץ באופן שווה.", author: "ויליאם גיבסון", category: "טכנולוגיה" },
        { text: "הטכנולוגיה הטובה ביותר היא זו שנעלמת ברקע.", author: "ביל גייטס", category: "טכנולוגיה" },
        { text: "חדשנות היא מה שמבדיל בין מנהיג למונהג.", author: "סטיב ג'ובס", category: "טכנולוגיה" },
        { text: "כל טכנולוגיה מתקדמת מספיק אינה ניתנת להבחנה מקסם.", author: "ארתור סי. קלארק", category: "טכנולוגיה" },

        // מדע
        { text: "דבר חשוב הוא לא להפסיק לשאול. לסקרנות יש סיבת קיום משלה.", author: "אלברט איינשטיין", category: "מדע" },
        { text: "המדע אינו אלא חשיבה מזוקקת.", author: "קרל סייגן", category: "מדע" },
        { text: "שום דבר בחיים אינו מפחיד, יש רק להבין אותו. עכשיו הזמן להבין יותר, כדי שנפחד פחות.", author: "מארי קירי", category: "מדע" },
        { text: "היקום אינו מחויב להיות הגיוני בעיניך.", author: "ניל דה-גראס טייסון", category: "מדע" },
        { text: "התקדמות המדע מבוססת על ניסויים, על הנכונות לקבל ממצאים גם אם אינם תואמים תפיסות קודמות.", author: "רוזלינד פרנקלין", category: "מדע" },

        // ספרות
        { text: "להיות או לא להיות, זאת השאלה.", author: "ויליאם שייקספיר", category: "ספרות" },
        { text: "כל החיות שוות, אך ישנן חיות ששוות יותר.", author: "ג'ורג' אורוול", category: "ספרות" },
        { text: "אין ייסורים גדולים יותר מאשר לשאת סיפור שלא סופר בתוכך.", author: "מאיה אנג'לו", category: "ספרות" },
        { text: "אם יש ספר שאתה רוצה לקרוא, אבל הוא עוד לא נכתב, אז אתה חייב לכתוב אותו.", author: "טוני מוריסון", category: "ספרות" },
        { text: "קורא חווה אלף חיים לפני שהוא מת. האיש שאינו קורא חי רק פעם אחת.", author: "ג'ורג' ר.ר. מרטין", category: "ספרות" },

        // חוכמה
        { text: "אתמול הוא היסטוריה, מחר הוא תעלומה, היום הוא מתנה.", author: "אלינור רוזוולט", category: "חוכמה" },
        { text: "הדרך היחידה לדעת את גבולות האפשרי היא ללכת מעבר להם אל הבלתי אפשרי.", author: "ארתור סי. קלארק", category: "חוכמה" },
        { text: "כאשר דלת אחת של אושר נסגרת, אחרת נפתחת, אך לעתים קרובות אנו מביטים כל כך הרבה זמן בדלת הסגורה עד שאיננו רואים את זו שנפתחה עבורנו.", author: "הלן קלר", category: "חוכמה" },
        { text: "לא איכפת לי שגנבו לי את הרעיון... איכפת לי שאין להם רעיונות משלהם.", author: "ניקולה טסלה", category: "חוכמה" },
        { text: "הזמן שלך מוגבל, אל תבזבז אותו בלחיות חיים של מישהו אחר.", author: "סטיב ג'ובס", category: "חוכמה" }
    ];

    let currentCategory = 'הכל';

    // --- Functions ---

    function createCategoryFilters() {
        const categories = ['הכל', ...new Set(quotes.map(q => q.category))];
        
        categories.forEach(category => {
            const button = document.createElement('button');
            button.className = 'filter-btn';
            button.textContent = category;
            if (category === currentCategory) {
                button.classList.add('active');
            }
            button.addEventListener('click', () => {
                currentCategory = category;
                document.querySelector('.filter-btn.active').classList.remove('active');
                button.classList.add('active');
                displayNewQuote();
            });
            categoryFiltersContainer.appendChild(button);
        });
    }

    function displayNewQuote() {
        // Filter quotes based on the current category
        const filteredQuotes = currentCategory === 'הכל' 
            ? quotes 
            : quotes.filter(q => q.category === currentCategory);

        // Get a random quote from the filtered list
        const randomQuote = filteredQuotes[Math.floor(Math.random() * filteredQuotes.length)];

        // Update quote and author text
        quoteDisplay.textContent = `"${randomQuote.text}"`;
        authorDisplay.textContent = `— ${randomQuote.author}`;

        // Update share button link
        updateShareLink(randomQuote.text, randomQuote.author);

        // Trigger animation
        quoteContent.classList.remove('animate-fade');
        void quoteContent.offsetWidth; // Force reflow
        quoteContent.classList.add('animate-fade');
    }

    function updateShareLink(text, author) {
        const tweetText = encodeURIComponent(`"${text}" — ${author}`);
        shareBtn.href = `https://twitter.com/intent/tweet?text=${tweetText}`;
    }

    // --- Initial Setup ---

    createCategoryFilters();
    displayNewQuote();

    // Event Listeners
    newQuoteBtn.addEventListener('click', displayNewQuote);
});