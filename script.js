document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const quoteDisplay = document.getElementById('quote');
    const authorDisplay = document.getElementById('author');
    const newQuoteBtn = document.getElementById('new-quote-btn');
    const categoryFiltersContainer = document.getElementById('category-filters');
    const shareBtn = document.getElementById('share-btn');
    const quoteContent = document.querySelector('.quote-content');

    // Quotes data with categories
    const quotes = [
        { text: "הדרך היחידה לעשות עבודה נהדרת היא לאהוב את מה שאתה עושה.", author: "סטיב ג'ובס", category: "השראה" },
        { text: "החיים הם מה שקורה לך בזמן שאתה עסוק בלתכנן תוכניות אחרות.", author: "ג'ון לנון", category: "פילוסופיה" },
        { text: "ההבדל בין טיפשות לגאונות הוא שלגאונות יש גבולות.", author: "אלברט איינשטיין", category: "הומור" },
        { text: "טכנולוגיה היא כל דבר שלא היה קיים כשהיינו ילדים.", author: "אלן קיי", category: "טכנולוגיה" },
        { text: "הצלחה היא היכולת לעבור מכישלון לכישלון מבלי לאבד את ההתלהבות.", author: "ווינסטון צ'רצ'יל", category: "השראה" },
        { text: "ישנם שני דברים אינסופיים: היקום והטיפשות האנושית, ואני לא בטוח לגבי היקום.", author: "אלברט איינשטיין", category: "הומור" },
        { text: "העתיד כבר כאן - הוא פשוט לא מופץ באופן שווה.", author: "ויליאם גיבסון", category: "טכנולוגיה" }
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