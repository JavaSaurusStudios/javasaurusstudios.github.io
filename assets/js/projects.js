// Fetch the project data from the external JSON file
fetch('data/projects.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to load projects.json');
        }
        return response.json();
    })
    .then(projects => {
        // Dynamically generate HTML for each project
        const projectsContainer = document.getElementById("projects-container");

        projects.forEach((project) => {
            const section = document.createElement("section");

            section.innerHTML = `
                <span class="icon solid major fa-code"></span>
                <img id="project-img" style="height:128px;width:128px" src="${project.imgSrc}">
                <h3 id="project-title">${project.title}</h3>
                <p id="project-desc">${project.description}</p>
            `;

            projectsContainer.appendChild(section);
        });
    })
    .catch(error => {
        console.error('Error loading projects:', error);
    });
