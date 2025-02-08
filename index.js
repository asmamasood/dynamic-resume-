document.getElementById("resumeForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
  
    // Get user inputs
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const linkedin = document.getElementById("linkedin").value;
    const github = document.getElementById("github").value;
    const education = document.getElementById("education").value.split("\n");
    const experience = document.getElementById("experience").value.split("\n");
    const skills = document.getElementById("skills").value.split(",");
  
    // Display user data in the resume
    document.getElementById("display-name").textContent = name;
    document.getElementById("display-email").textContent = email;
    document.getElementById("display-email").href = `mailto:${email}`;
    document.getElementById("display-linkedin").textContent = linkedin;
    document.getElementById("display-linkedin").href = linkedin;
    document.getElementById("display-github").textContent = github;
    document.getElementById("display-github").href = github;
  
    const educationList = document.getElementById("display-education");
    educationList.innerHTML = ""; // Clear previous entries
    education.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      educationList.appendChild(li);
    });
  
    const experienceList = document.getElementById("display-experience");
    experienceList.innerHTML = ""; // Clear previous entries
    experience.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      experienceList.appendChild(li);
    });
  
    const skillsList = document.getElementById("display-skills");
    skillsList.innerHTML = ""; // Clear previous entries
    skills.forEach((skill) => {
      const li = document.createElement("li");
      li.textContent = skill.trim();
      skillsList.appendChild(li);
    });
  
    // Show the resume container
    document.getElementById("resume-container").style.display = "flex";
  });
  