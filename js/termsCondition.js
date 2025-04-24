const sections = [
  {
    heading: "1. Accuracy And Validity Of Information: ",
    content: `Proin eget tortor risus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Quisque velit nisi,
            pretium ut lacinia in elementum id enim. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.
            Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
            Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo eget malesuada.
            Donec rutrum congue leo eget malesuada. Pellentesque in ipsum id orci porta dapibus. Curabitur aliquet quam id ut
            lacinia in elementum id enim. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi leo eget
            malesuada.`,
  },
  {
    heading: "2. Availability: ",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, odio sequi! Nam consectetur, officiis
            ipsam explicabo tempore placeat! Voluptas molestiae pariatur necessitatibus consectetur, ullam aut esse amet
            debitis sint culpa. orem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, odio Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Vitae mollitia laborum assumenda beatae minima enim quis dolores, pariatur, at
            perferendis sit dolore modi nostrum eum ea voluptatem`,
    content2: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, placeat? Culpa ab est nemo perspiciatis
            quam, nesciunt reprehenderit voluptate id error corrupti doloremque exercitationem quis, iusto debitis velit
            eveniet ea. ipsum dolor sit amet consectetur, adipisicing elit. Ut, placeat? Culpa ab est nemo perspiciatis quam,
            nesciunt reprehenderit`,
  },
  {
    heading: "3. Third Party Websites:",
    content: `Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus suscipit tortor eget felis porttitor volutpat. Nulla quis lorem ut libero malesuada feugiat. Nulla porttitor accumsan tincidunt. Sed porttitor lectus nibh. Pellentesque in ipsum id orci porta dapibus.Nulla quis lorem ut libero malesuada feugiat. Proin eget tortor risus. Nulla porttitor accumsan tinci dunt. Donec rutrum congue leo eget malesuada. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus magna justo.`,
    content2: `Quisque velit nisi, pretium ut lacinia in, elementum id enim. Proin eget tortor risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet quam id dui posuere blandit. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.`,
  },
  {
    heading: "4. Copyright And Intellectual Property:",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, odio sequi! Nam consectetur, officiis
            ipsam explicabo tempore placeat! Voluptas molestiae pariatur necessitatibus consectetur, ullam aut esse amet
            debitis sint culpa. orem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, odio Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Vitae mollitia laborum assumenda beatae minima enim quis dolores, pariatur, at
            perferendis sit dolore modi nostrum eum ea voluptatem`,
    content2: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, placeat? Culpa ab est nemo perspiciatis
            quam, nesciunt reprehenderit voluptate id error corrupti doloremque exercitationem quis, iusto debitis velit
            eveniet ea. ipsum dolor sit amet consectetur, adipisicing elit. Ut, placeat? Culpa ab est nemo perspiciatis quam,
            nesciunt reprehenderit`,
  },

  {
    heading: "5. Termination Of Contract:",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, odio sequi! Nam consectetur, officiis
            ipsam explicabo tempore placeat! Voluptas molestiae pariatur necessitatibus consectetur, ullam aut esse amet
            debitis sint culpa. orem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, odio Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Vitae mollitia laborum assumenda beatae minima enim quis dolores, pariatur, at
            perferendis sit dolore modi nostrum eum ea voluptatem`,
    content2: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, placeat? Culpa ab est nemo perspiciatis
            quam, nesciunt reprehenderit voluptate id error corrupti doloremque exercitationem quis, iusto debitis velit
            eveniet ea. ipsum dolor sit amet consectetur, adipisicing elit. Ut, placeat? Culpa ab est nemo perspiciatis quam,
            nesciunt reprehenderit`,
  },
  {
    heading: "6. Limitation Of Liability:",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, odio sequi! Nam consectetur, officiis
            ipsam explicabo tempore placeat! Voluptas molestiae pariatur necessitatibus consectetur, ullam aut esse amet
            debitis sint culpa. orem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, odio Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Vitae mollitia laborum assumenda beatae minima enim quis dolores, pariatur, at
            perferendis sit dolore modi nostrum eum ea voluptatem`,
    content2: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, placeat? Culpa ab est nemo perspiciatis
            quam, nesciunt reprehenderit voluptate id error corrupti doloremque exercitationem quis, iusto debitis velit
            eveniet ea. ipsum dolor sit amet consectetur, adipisicing elit. Ut, placeat? Culpa ab est nemo perspiciatis quam,
            nesciunt reprehenderit`,
  },
];

const container = document.getElementById("sectionContainer");

sections.forEach((section) => {
  const sectionDiv = document.createElement("div");
  sectionDiv.className = "p-4"; // Border removed, padding retained
  sectionDiv.style.color = "";

  sectionDiv.innerHTML = `
        <h4 class="fw-bold mb-3">${section.heading}</h4>
        <p>${section.content}</p>
        ${section.content2 ? `<p>${section.content2}</p>` : ""}
    `;
  container.appendChild(sectionDiv);
});
