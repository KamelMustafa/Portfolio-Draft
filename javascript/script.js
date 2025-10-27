<<<<<<< HEAD
fetch("http://localhost:1337/api/myprojects?populate=*")
  .then((res) => res.json())
  .then((json) => {
    const projects = json.data;
    console.log(projects); // Check your GitHub project data here
  });
projects.forEach((item) => {
  const { title, description, techStack, liveLink, githubLink, image } =
    item.attributes;
  const imgUrl = image?.data?.attributes?.url
    ? `http://localhost:1337${image.data.attributes.url}`
    : "";

  const card = document.createElement("div");
  card.className = "project-card";
  card.innerHTML = `
    <img src="${imgUrl}" alt="${title}" />
    <h3>${title}</h3>
    <p>${description}</p>
    <p><strong>Tech:</strong> ${techStack}</p>
    <a href="${liveLink}" target="_blank">Live Site</a>
    <a href="${githubLink}" target="_blank">GitHub</a>
  `;
  document.getElementById("projects").appendChild(card);
});
gsap.to(".project-card", {
  scrollTrigger: {
    trigger: ".project-card",
    start: "top 90%",
    toggleActions: "play none none none",
  },
  opacity: 1,
  y: 0,
  duration: 0.6,
  ease: "power2.out",
});

=======
>>>>>>> 8a119c3b7679e57cc4cad09a500eacb950344a01
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};
