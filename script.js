document.getElementById('fetchButton').addEventListener('click', fetchAffirmation);

function fetchAffirmation() {
  // Simulate fetching affirmation from an API
  const affirmations = [
    "You radiate so much love and positivity, and it will come back to you tenfold.",
    "Peace I leave with you; my peace I give you. I do not give to you as the world gives. Do not let your hearts be troubled and do not be afraid. - John 14:27",
    "With each dawn, I embrace the promise of new beginnings and the possibility of better days.",
    "May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope by the power of the Holy Spirit. - Romans 15:13",
    "You bring joy to everyone around you.",
    "Every good and perfect gift is from above, coming down from the Father of the heavenly lights, who does not change like shifting shadows. - James 1:17",
    "I am resilient, and I know that every setback is a stepping stone toward the brighter future that awaits me.",
    "I am a crown of beauty and a royal diadem in the hand of the Lord. - Isaiah 62:3",
    "Times may be difficult, but it is a short phase of life. Things can get better. Things will get better.",
    " I am filled with joy because Christ is my strength. - Nehemiah 8:10",
    "When I come across scriptures referencing how humanity is made in the image of God, I can't help but think of you.",
    "I am not forsaken. I am accepted by Christ. - Psalm 94:14",
    "I am a magnet for positivity and opportunity, attracting the blessings of better days into my life.",
    "I am no longer a slave to fear. - Isaiah 41:10",
    "Any one who has had the privilege of knowing you, I count amongst the most blessed humans to cross this earth. You are amazing",
    "I am made in God’s image. - Genesis 1:27",
    "You possess a unique blend of wisdom and compassion that touches the souls of those around you.",
    "I am sealed with the Holy Spirit of promise. - Ephesians 1:13",
    "I envision a future filled with love, prosperity, and fulfillment, and I trust that better days are manifesting for me even now.",
    "I am seated in heavenly places with Christ. - Ephesians 2:6",
    "Your journey is a testament to your resilience and inner strength, and will guide others to find their own courage, so you can't give up now",
    "I am a branch of the one and only vine. - John 15:1",
    "In your presence, I feel the embrace of authenticity and vulnerability, reminding me of the beauty in imperfection.",
    "I am the salt and light of the world. I am a city on a hill and cannot be hidden. - Matthew 5:13",
    "Your empathy and understanding create a safe space for others to express their true selves without fear of judgment.",
    "The LORD who created you says, “Do not be afraid–I will save you. I have called you by name–you are mine",
    "You carry within you the seeds of transformation, nurturing growth and renewal in the lives you touch.",


  ];

  // Randomly select an affirmation
  const randomIndex = Math.floor(Math.random() * affirmations.length);
  const affirmation = affirmations[randomIndex];

  // Display the affirmation
  document.getElementById('affirmation').textContent = affirmation;
}
