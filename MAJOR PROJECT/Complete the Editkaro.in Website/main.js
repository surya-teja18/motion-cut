// Handle form submission for Email Subscription
document.getElementById('emailForm').addEventListener('submit', function(event) {
  event.preventDefault();
  let formResponse = document.getElementById('formResponse');
  formResponse.textContent = "Submitting...";
  
  fetch(this.action, {
    method: 'POST',
    body: new FormData(this),
  }).then(response => {
    if (response.ok) {
      formResponse.textContent = "Subscription successful!";
    } else {
      formResponse.textContent = "Error occurred. Please try again.";
    }
  }).catch(() => formResponse.textContent = "Network error.");
});

// Portfolio filtering logic
document.querySelectorAll('#portfolioCategories li').forEach(function (categoryItem) {
  categoryItem.addEventListener('click', function () {
    let category = this.dataset.category;
    document.querySelectorAll('.video-item').forEach(function (video) {
      video.style.display = video.dataset.category === category ? 'block' : 'none';
    });
  });
});
function doPost(e) {
    const sheet = SpreadsheetApp.openById('YOUR_SPREADSHEET_ID').getSheetByName('Form Responses');
    sheet.appendRow([new Date(), e.parameter.name, e.parameter.email, e.parameter.message || '']);
    return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
  }
  