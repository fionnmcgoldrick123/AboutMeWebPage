document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.container');
  // Add the 'fade-in' class to trigger the animation
  setTimeout(() => {
      container.classList.add('fade-in');
  }, 500); // Delay before animation starts (optional)
});

/*
* Discord modal
*/

document.addEventListener('DOMContentLoaded', () => {
  // Function to show the modal
  function showModal() {
      const modal = document.getElementById('discordModal');
      modal.style.display = 'flex'; // Show the modal
  }

  // Function to close the modal
  function closeModal() {
      const modal = document.getElementById('discordModal');
      modal.style.display = 'none'; // Hide the modal
  }

  // Attach event listener to the Discord link
  document.querySelector('.discord-link').addEventListener('click', (e) => {
      e.preventDefault(); // Prevent link default behavior
      showModal();
  });

  // Attach close button functionality
  document.querySelector('.modal-close').addEventListener('click', closeModal);

  // Optional: Close modal on background click
  document.getElementById('discordModal').addEventListener('click', (e) => {
      if (e.target.id === 'discordModal') closeModal();
  });
});





