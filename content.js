function summarizeText(text) {
    // Basic summarization: split text into sentences and return the first 5
    let sentences = text.match(/[^\.!\?]+[\.!\?]+/g) || [];
    let summary = sentences.slice(0, 5).join(' ');
    return summary;
  }
  
  function extractTextFromPage() {
    // Extract text from the entire body of the page
    let text = document.body.innerText;
    return text;
  }
  
  let pageText = extractTextFromPage();
  let summary = summarizeText(pageText);
  
  chrome.runtime.sendMessage({action: 'displaySummary', summary: summary});
  