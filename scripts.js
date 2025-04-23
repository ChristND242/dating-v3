// Profiles data
const profiles = [
    {
      id: 1,
      name: "Sophie",
      age: 26,
      distance: "3 km",
      bio: "Artiste et aventurière. J'aime les voyages et les rencontres authentiques.",
      images: [
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
        "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=686&q=80",
      ],
      video:
        "https://assets.mixkit.co/videos/preview/mixkit-woman-dancing-under-neon-lights-1230-large.mp4",
    },
    {
      id: 2,
      name: "Emma",
      age: 24,
      distance: "5 km",
      bio: "Étudiante en médecine. Passionnée de cuisine et de randonnée en montagne.",
      images: [
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      ],
      video:
        "https://assets.mixkit.co/videos/preview/mixkit-woman-in-a-swimsuit-walking-on-the-beach-3343-large.mp4",
    },
    {
      id: 3,
      name: "Léa",
      age: 28,
      distance: "7 km",
      bio: "Graphiste freelance. Amoureuse des chats, du café et des séries Netflix.",
      images: [
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
      ],
      video:
        "https://assets.mixkit.co/videos/preview/mixkit-woman-relaxing-at-home-reading-a-book-3342-large.mp4",
    },
    {
      id: 4,
      name: "Camille",
      age: 25,
      distance: "2 km",
      bio: "Ingénieure en informatique. Fan de jeux vidéo et de cuisine asiatique.",
      images: [
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      ],
      video:
        "https://assets.mixkit.co/videos/preview/mixkit-woman-doing-yoga-on-the-beach-3341-large.mp4",
    },
    {
      id: 5,
      name: "Chloé",
      age: 27,
      distance: "4 km",
      bio: "Professeure de danse. J'adore sortir et découvrir de nouveaux endroits.",
      images: [
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      ],
      video:
        "https://assets.mixkit.co/videos/preview/mixkit-woman-dancing-under-neon-lights-1230-large.mp4",
    },
    {
      id: 6,
      name: "Manon",
      age: 29,
      distance: "6 km",
      bio: "Journaliste. Passionnée de photographie et de voyages en train.",
      images: [
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
      ],
      video:
        "https://assets.mixkit.co/videos/preview/mixkit-woman-in-a-swimsuit-walking-on-the-beach-3343-large.mp4",
    },
  ];

  // Loading messages
  const loadingMessages = [
    "Préparation de votre expérience de rencontre...",
    "Recherche de profils compatibles près de chez vous...",
    "Analyse de vos préférences...",
    "Chargement des derniers profils...",
    "Presque terminé...",
    "Prêt à trouver l'amour !",
  ];

  // Simulate loading
  document.addEventListener("DOMContentLoaded", function () {
    const loadingScreen = document.querySelector(".loading-screen");
    const progressBar = document.querySelector(".progress");
    const loadingMessage = document.querySelector(".loading-message");
    const splashScreen = document.querySelector(".splash-screen");
    const appContainer = document.querySelector(".app-container");

    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 10;
      if (progress > 100) progress = 100;
      progressBar.style.width = `${progress}%`;

      // Change loading message randomly
      if (Math.random() < 0.2) {
        const randomIndex = Math.floor(
          Math.random() * loadingMessages.length
        );
        loadingMessage.textContent = loadingMessages[randomIndex];
      }

      if (progress >= 100) {
        clearInterval(interval);
        loadingScreen.classList.add("hidden");

        // Show splash screen for 2 seconds
        setTimeout(() => {
          splashScreen.classList.add("hidden");
          appContainer.classList.remove("hidden");
          initializeApp();
        }, 2000);
      }
    }, 300);
  });

  // Initialize the app
  function initializeApp() {
    const cardContainer = document.querySelector(".card-container");
    const likeBtn = document.getElementById("like-btn");
    const dislikeBtn = document.getElementById("dislike-btn");
    const matchModal = document.querySelector(".match-modal");
    const closeMatchModal = document.querySelector(".close-match-modal");
    let currentCardIndex = 0;
    let isAnimating = false;

    // Shuffle profiles
    const shuffledProfiles = [...profiles].sort(() => Math.random() - 0.5);

    // Create cards
    shuffledProfiles.forEach((profile, index) => {
      const card = createCard(profile, index);
      cardContainer.appendChild(card);
    });

    // Set up swipe events
    setupSwipeEvents();

    // Like button click
    likeBtn.addEventListener("click", () => {
      if (isAnimating) return;
      swipeRight();
    });

    // Dislike button click
    dislikeBtn.addEventListener("click", () => {
      if (isAnimating) return;
      swipeLeft();
    });

    // Close match modal
    closeMatchModal.addEventListener("click", () => {
      matchModal.classList.remove("active");
    });

    // Create a card element
    function createCard(profile, index) {
      const card = document.createElement("div");
      card.className =
        "card absolute w-full h-full bg-white rounded-2xl overflow-hidden";
      card.style.zIndex = profiles.length - index;
      card.dataset.profileId = profile.id;

      // Randomly decide if this card will have a video or image
      const useVideo = Math.random() > 0.5;

      if (useVideo && profile.video) {
        // Video card
        card.innerHTML = `
                    <div class="video-container">
                        <video loop muted>
                            <source src="${profile.video}" type="video/mp4">
                        </video>
                        <div class="video-control">
                            <i class="fas fa-volume-mute"></i>
                        </div>
                    </div>
                    <div class="profile-badge">
                        <i class="fas fa-video"></i>
                        <span>VIDÉO</span>
                    </div>
                    <div class="profile-info">
                        <h3 class="profile-name">${profile.name}, ${profile.age}</h3>
                        <p class="profile-bio">${profile.bio}</p>
                    </div>
                `;

        // Add video controls
        const video = card.querySelector("video");
        const videoControl = card.querySelector(".video-control");
        const videoIcon = card.querySelector(".video-control i");

        videoControl.addEventListener("click", () => {
          if (video.muted) {
            video.muted = false;
            videoIcon.classList.remove("fa-volume-mute");
            videoIcon.classList.add("fa-volume-up");
          } else {
            video.muted = true;
            videoIcon.classList.remove("fa-volume-up");
            videoIcon.classList.add("fa-volume-mute");
          }
        });

        // Play video when card is at top
        if (index === 0) {
          setTimeout(() => {
            video.play().catch((e) => console.log(e));
          }, 500);
        }
      } else {
        // Image card
        const randomImageIndex = Math.floor(
          Math.random() * profile.images.length
        );
        card.innerHTML = `
                    <div class="w-full h-full bg-cover bg-center" style="background-image: url('${profile.images[randomImageIndex]}')"></div>
                    <div class="profile-badge">
                        <i class="fas fa-image"></i>
                        <span>PHOTO</span>
                    </div>
                    <div class="profile-info">
                        <h3 class="profile-name">${profile.name}, ${profile.age}</h3>
                        <p class="profile-bio">${profile.bio}</p>
                    </div>
                `;
      }

      return card;
    }

    // Set up swipe events for the top card
    function setupSwipeEvents() {
      const cards = document.querySelectorAll(".card");
      if (cards.length === 0) return;

      const topCard = cards[0];
      let startX, startY, moveX, moveY;
      let isDragging = false;

      topCard.addEventListener("mousedown", startDrag);
      topCard.addEventListener("touchstart", startDrag);

      function startDrag(e) {
        if (isAnimating) return;

        isDragging = true;
        const clientX =
          e.type === "mousedown" ? e.clientX : e.touches[0].clientX;
        const clientY =
          e.type === "mousedown" ? e.clientY : e.touches[0].clientY;

        startX = clientX;
        startY = clientY;

        document.addEventListener("mousemove", drag);
        document.addEventListener("touchmove", drag);
        document.addEventListener("mouseup", endDrag);
        document.addEventListener("touchend", endDrag);
      }

      function drag(e) {
        if (!isDragging) return;

        const clientX =
          e.type === "mousemove" ? e.clientX : e.touches[0].clientX;
        const clientY =
          e.type === "mousemove" ? e.clientY : e.touches[0].clientY;

        moveX = clientX - startX;
        moveY = clientY - startY;

        // Calculate rotation based on horizontal movement
        const rotate = moveX * 0.1;

        // Apply transform
        topCard.style.transform = `translateX(${moveX}px) translateY(${moveY}px) rotate(${rotate}deg)`;

        // Change opacity based on distance from center
        const distance = Math.abs(moveX);
        const opacity = 1 - Math.min(distance / 200, 0.8);
        topCard.style.opacity = opacity;
      }

      function endDrag() {
        if (!isDragging) return;

        isDragging = false;
        document.removeEventListener("mousemove", drag);
        document.removeEventListener("touchmove", drag);
        document.removeEventListener("mouseup", endDrag);
        document.removeEventListener("touchend", endDrag);

        // Check if swipe distance is enough to trigger action
        if (Math.abs(moveX) > 100) {
          if (moveX > 0) {
            swipeRight();
          } else {
            swipeLeft();
          }
        } else {
          // Return card to center
          topCard.style.transition = "all 0.3s ease";
          topCard.style.transform = "translateX(0) translateY(0) rotate(0)";
          topCard.style.opacity = "1";

          setTimeout(() => {
            topCard.style.transition = "";
          }, 300);
        }
      }
    }

    // Swipe right (like)
    function swipeRight() {
      if (isAnimating) return;
      isAnimating = true;

      const cards = document.querySelectorAll(".card");
      if (cards.length === 0) return;

      const topCard = cards[0];
      topCard.classList.add("swipe-right");

      // Random chance to match (30%)
      const isMatch = Math.random() < 0.3;

      if (isMatch) {
        const profileName = shuffledProfiles[currentCardIndex].name;
        document.querySelector(".match-name").textContent = profileName;

        setTimeout(() => {
          matchModal.classList.add("active");
        }, 800);
      }

      // Move to next card
      setTimeout(() => {
        topCard.remove();
        currentCardIndex++;

        // If there are more cards, set up swipe events for the new top card
        if (currentCardIndex < shuffledProfiles.length) {
          setupSwipeEvents();

          // Play video if next card has one
          const nextCard = document.querySelector(".card");
          if (nextCard) {
            const video = nextCard.querySelector("video");
            if (video) {
              video.play().catch((e) => console.log(e));
            }
          }
        } else {
          // No more cards
          cardContainer.innerHTML = `
                        <div class="w-full h-full flex flex-col items-center justify-center bg-white rounded-2xl p-6 text-center">
                            <i class="fas fa-heart-broken text-5xl text-gray-400 mb-4"></i>
                            <h3 class="text-xl font-bold mb-2">Plus de profils pour le moment</h3>
                            <p class="text-gray-600 mb-6">Revenez plus tard pour découvrir de nouvelles personnes.</p>
                            <button class="gradient-bg text-white py-3 px-6 rounded-full font-medium" onclick="location.reload()">
                                <i class="fas fa-sync-alt mr-2"></i> Recharger
                            </button>
                        </div>
                    `;
        }

        isAnimating = false;
      }, 500);
    }

    // Swipe left (dislike)
    function swipeLeft() {
      if (isAnimating) return;
      isAnimating = true;

      const cards = document.querySelectorAll(".card");
      if (cards.length === 0) return;

      const topCard = cards[0];
      topCard.classList.add("swipe-left");

      // Move to next card
      setTimeout(() => {
        topCard.remove();
        currentCardIndex++;

        // If there are more cards, set up swipe events for the new top card
        if (currentCardIndex < shuffledProfiles.length) {
          setupSwipeEvents();

          // Play video if next card has one
          const nextCard = document.querySelector(".card");
          if (nextCard) {
            const video = nextCard.querySelector("video");
            if (video) {
              video.play().catch((e) => console.log(e));
            }
          }
        } else {
          // No more cards
          cardContainer.innerHTML = `
                        <div class="w-full h-full flex flex-col items-center justify-center bg-white rounded-2xl p-6 text-center">
                            <i class="fas fa-heart-broken text-5xl text-gray-400 mb-4"></i>
                            <h3 class="text-xl font-bold mb-2">Plus de profils pour le moment</h3>
                            <p class="text-gray-600 mb-6">Revenez plus tard pour découvrir de nouvelles personnes.</p>
                            <button class="gradient-bg text-white py-3 px-6 rounded-full font-medium" onclick="location.reload()">
                                <i class="fas fa-sync-alt mr-2"></i> Recharger
                            </button>
                        </div>
                    `;
        }

        isAnimating = false;
      }, 500);
    }
  }