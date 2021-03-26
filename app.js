linkdiv = document.getElementById('my-links')

links = [
  {
    concept: "Página oficial",
    link: "https://hackzone2021.netlify.app",
  },
  {
    concept: "Instagram",
    link: "https://instagram.com/hackzone2021",
  },
  {
    concept: "Github",
    link: "https://github.com/Hackzone2021",
  },
  {
    concept: "Discord",
    link: "https://discord.gg/kfedqqbV8X",
  },
];

links.forEach(link => {
    let linker = `
     <a href="${link.link}">
        <div class="col-12 my-link text-center">
            <p class='link-text'>
            ${link.concept}
            </p>
        </div>
      </a>
    `;
    
    linkdiv.innerHTML += linker
});
