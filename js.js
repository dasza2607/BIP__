const cells = document.querySelectorAll(".col-3");
cells.forEach((cell) => {
  cell.style.borderRadius = "15px";
  cell.style.width = "370px"
  cell.addEventListener("mouseenter", function() {
    cell.style.backgroundColor = "orange";
  });

  cell.addEventListener("mouseleave", function() {
    cell.style.backgroundColor = "";
  });
});


const buttons = document.querySelectorAll('.custom-button');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const link = button.querySelector('a').getAttribute('href');
    window.location.href = link;
  });
});

////
const footerMedia = document.querySelector("[data-my]");
footerMedia.textContent = "Znajdzisz nas na" + " ";
footerMedia.style.fontWeight = "bold";

const createIconLink = (iconClass, linkUrl) => {
    const iconLink = document.createElement("a");
    iconLink.href = linkUrl;
    iconLink.target = "_blank";
    
    const iconElement = document.createElement("i");
    iconElement.className = iconClass;
    iconElement.style.color = "#ffffff";
    iconElement.style.marginLeft = "10px";
    
    iconLink.appendChild(iconElement);
    
    return iconLink;
};

const instagramLink = createIconLink("fa-brands fa-instagram fa-2x", "https://www.instagram.com/");
const twitterLink = createIconLink("fa-brands fa-twitter fa-2x", "https://twitter.com/");
const youtubeLink = createIconLink("fa-brands fa-youtube fa-2x", "https://www.youtube.com/");

footerMedia.append(instagramLink, twitterLink, youtubeLink);
