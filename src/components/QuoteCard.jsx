function QuoteCard() {
    const quote = {
      text: "The only limit to our realization of tomorrow is our doubts of today.",
      author: "Franklin D. Roosevelt"
    };
  
    return (
      <div style={{ border: '1px solid #ccc', padding: '10px', marginTop: '10px' }}>
        <p>"{quote.text}"</p>
        <p>- {quote.author}</p>
      </div>
    );
  }
  
  export default QuoteCard;
  