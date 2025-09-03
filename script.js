// בחירת האלמנטים מה-HTML ושמירתם במשתנים
const quoteDisplay = document.getElementById('quote');
const authorDisplay = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote-btn');

// מאגר הציטוטים שלנו - מערך של אובייקטים
const quotes = [
    {
        text: "הדרך היחידה לעשות עבודה נהדרת היא לאהוב את מה שאתה עושה.",
        author: "סטיב ג'ובס"
    },
    {
        text: "החיים הם מה שקורה לך בזמן שאתה עסוק בלתכנן תוכניות אחרות.",
        author: "ג'ון לנון"
    },
    {
        text: "הצלחה היא היכולת לעבור מכישלון לכישלון מבלי לאבד את ההתלהבות.",
        author: "ווינסטון צ'רצ'יל"
    },
    {
        text: "אל תשפוט כל יום לפי הקציר שקצרת, אלא לפי הזרעים שזרעת.",
        author: "רוברט לואיס סטיבנסון"
    },
    {
        text: "העתיד שייך לאלה המאמינים ביופיים של חלומותיהם.",
        author: "אלינור רוזוולט"
    }
];

// פונקציה לבחירת והצגת ציטוט חדש
function displayNewQuote() {
    // 1. קבלת אינדקס אקראי מתוך מערך הציטוטים
    const randomIndex = Math.floor(Math.random() * quotes.length);
    
    // 2. קבלת הציטוט והמחבר מהמערך באמצעות האינדקס האקראי
    const randomQuote = quotes[randomIndex];
    
    // 3. הצגת הציטוט והמחבר באלמנטים המתאימים ב-HTML
    quoteDisplay.textContent = `"${randomQuote.text}"`;
    authorDisplay.textContent = `— ${randomQuote.author}`;
}

// הוספת "מאזין אירוע" לכפתור. הוא מפעיל את הפונקציה בכל לחיצה.
newQuoteBtn.addEventListener('click', displayNewQuote);

// הצגת ציטוט ראשוני בעת טעינת הדף כדי שהמשתמש לא יראה דף ריק
displayNewQuote();