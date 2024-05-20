// Initial page number
var PageNum = 1;

// Function to update the image source and scroll to the top
function updatePage() {
    var img = document.getElementById('mangaPage');
    img.src = PageNum + '.jpg';
    window.scrollTo(0, 0); // Scrolls to the top of the page
}

// Update the image initially
updatePage();

// Event listeners for navigation buttons
document.getElementById('prevPage').addEventListener('click', function() {
    if (PageNum > 1) {
        PageNum--;
        updatePage();
    }
});

document.getElementById('nextPage').addEventListener('click', function() {
    if (PageNum < 5) {
        PageNum++;
        updatePage();
    }
});

// Event listener for Go to Page button
document.getElementById('goToPage').addEventListener('click', function() {
    var pageNumInput = document.getElementById('pageNumInput').value;
    if (pageNumInput >= 1 && pageNumInput <= 5) {
        PageNum = parseInt(pageNumInput);
        updatePage();
    } else {
        alert('Please enter a valid page number between 1 and 5.');
    }
});

// Event listener for Back to Main Page link
document.getElementById('backToMain').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'MangaShelf/index.html'; // Replace with your main page URL
});
