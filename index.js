function openPopup() {
    document.getElementById("popupContainer").style.display = "block";
    document.getElementById("overlay").style.display = "block";   
}
function closePopup() {
    document.getElementById("popupContainer").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}

function openPopup() {
    document.getElementById("popupContainerr").style.display = "block";
    document.getElementById("overlay").style.display = "block";   
}
function closePopup() {
    document.getElementById("popupContainerr").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}

document.getElementById('open-sidebar').addEventListener('click', function() {
    document.getElementById('sidebar').classList.add('open');
});

document.getElementById('close-sidebar').addEventListener('click', function() {
    document.getElementById('sidebar').classList.remove('open');
});

let sidebarLinks = document.querySelectorAll('.sidebar-link');
sidebarLinks.forEach(link => {
    link.addEventListener('click', function() {
        document.getElementById('sidebar').classList.remove('open');
    });
});
let currentIndex = 0;
const images = document.querySelectorAll('.image-container img');
const texts = [
    'Feel free to communicate with us',
    'For business of every size and scope',
];
const textOverlay = document.querySelector('.text-overlay');
function changeImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
    textOverlay.style.opacity = 0;
    setTimeout(() => {
        textOverlay.textContent = texts[currentIndex];
        textOverlay.style.opacity = 1;
    }, 500); // Wait for the image transition halfway before changing the text
}
setInterval(changeImage, 10000);

// Modal functionality
const modal = document.getElementById("team-modal");
const closeModal = document.querySelector(".close");
const modalName = document.getElementById("modal-name");
const modalPosition = document.getElementById("modal-position");
const modalDescription = document.getElementById("modal-description");

// Example team data (for modal content)
const teamData = {
  1: {
    name: "Solaja Olufemi",
    position: "CEO",
    description: "BLA BLA BLA BLA."
  },
  2: {
    name: "Solaja Adejoke",
    position: "MD",
    description: "BLA BLA BLA BLA BLA BLA BLA BLA."
  },
  3: {
    name: "DOE",
    position: "P",
    description: "BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA."
  }
};

// Open modal with team member info
document.querySelectorAll(".view-more-btn").forEach(button => {
  button.addEventListener("click", function() {
    const memberId = this.closest(".team-card").getAttribute("data-member");
    const memberData = teamData[memberId];

    modalName.textContent = memberData.name;
    modalPosition.textContent = memberData.position;
    modalDescription.textContent = memberData.description;

    modal.style.display = "block";
  });
});

// Close the modal
closeModal.addEventListener("click", function() {
  modal.style.display = "none";
});

// Close modal by clicking outside of it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
