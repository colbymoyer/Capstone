const apiUrl = 'http://localhost:3000/api';

async function fetchReviews(itemId) {
    const response = await fetch(`${apiUrl}/reviews/${itemId}`);
    const reviews = await response.json();

    let reviewsHtml = '<h2>Reviews</h2>';
    reviews.forEach(review => {
        reviewsHtml += `<p>${review.text} - Rating: ${review.rating}</p>`;
    });

    document.getElementById('content').innerHTML = reviewsHtml;
}

fetchReviews(1);
