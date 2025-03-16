document.getElementById('rating-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const userName = document.getElementById('user-name').value.trim();
    const restaurantName = document.getElementById('restaurant-name').value.trim();
    const ramenName = document.getElementById('ramen-name').value.trim();
    const ramenRating = document.getElementById('ramen-rating').value.trim();
    const comments = document.getElementById('comments').value.trim();

    if (userName && restaurantName && ramenName && ramenRating) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <strong>${userName}</strong> rated <strong>${ramenName}</strong> at <strong>${restaurantName}</strong> with ${ramenRating} stars.<br>
            Comments: ${comments ? comments : 'None'}
        `;
        document.getElementById('ratings-list').appendChild(listItem);

        // Clear input fields
        document.getElementById('user-name').value = '';
        document.getElementById('restaurant-name').value = '';
        document.getElementById('ramen-name').value = '';
        document.getElementById('ramen-rating').value = '';
        document.getElementById('comments').value = '';
    } else {
        alert('Please fill in all required fields.');
    }
});