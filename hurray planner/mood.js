// Mapping moods to encouraging messages
const moodMessages = {
    happy: "You're awesome! Keep smiling and spreading positivity! 🌞",
    sad: "It's okay to feel sad sometimes. You've got this, better days are ahead! 🌈",
    angry: "Take a deep breath, relax. You're stronger than you think! 💪",
    excited: "Your excitement is contagious! Keep that energy flowing! ⚡",
    surprised: "Wow, what a day! Embrace the surprises, you're doing great! 😲"
  };
  
  // Function to set mood and show encouraging message
  function setMood(mood) {
    const messageElement = document.getElementById("encouragement-message");
  
    // Show the corresponding message
    messageElement.textContent = moodMessages[mood];
  
    // Add show class to make the message appear
    messageElement.classList.add("show");
  
    // Reset message after a few seconds
    setTimeout(() => {
      messageElement.classList.remove("show");
    }, 5000);
  }
  