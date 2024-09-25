const form = document.getElementById('resume-form');

const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const phoneField = document.getElementById('phone');
const summaryField = document.getElementById('summary');
const educationSection = document.getElementById('education-section');
const experienceSection = document.getElementById('experience-section');

const previewName = document.getElementById('preview-name');
const previewEmail = document.getElementById('preview-email');
const previewPhone = document.getElementById('preview-phone');
const previewSummary = document.getElementById('preview-summary');
const previewEducation = document.getElementById('preview-education');
const previewExperience = document.getElementById('preview-experience');
nameField.addEventListener('input', () => {
    previewName.textContent = nameField.value;
    toggleResumePreview();
});

emailField.addEventListener('input', () => {
    previewEmail.textContent = emailField.value;
    toggleResumePreview();
});

phoneField.addEventListener('input', () => {
    previewPhone.textContent = phoneField.value;
    toggleResumePreview();
});

summaryField.addEventListener('input', () => {
    previewSummary.textContent = summaryField.value;
    toggleResumePreview();
});
document.getElementById('add-education-btn').addEventListener('click', () => {
    const educationRow = document.createElement('input');
    educationRow.type = 'text';
    educationRow.placeholder = 'Enter education details';
    educationSection.appendChild(educationRow);

    educationRow.addEventListener('input', updateEducation);
});

function updateEducation() {
    previewEducation.innerHTML = '';
    Array.from(educationSection.children).forEach((eduInput) => {
        const p = document.createElement('p');
        p.textContent = eduInput.value;
        previewEducation.appendChild(p);
    });
    toggleResumePreview();
}
document.getElementById('add-experience-btn').addEventListener('click', () => {
    const experienceRow = document.createElement('input');
    experienceRow.type = 'text';
    experienceRow.placeholder = 'Enter experience details';
    experienceSection.appendChild(experienceRow);

    experienceRow.addEventListener('input', updateExperience);
});

function updateExperience() {
    previewExperience.innerHTML = '';
    Array.from(experienceSection.children).forEach((expInput) => {
        const p = document.createElement('p');
        p.textContent = expInput.value;
        previewExperience.appendChild(p);
    });
    toggleResumePreview();
}
function toggleResumePreview() {
    const resumePreview = document.getElementById('resume-preview');
    if (nameField.value || emailField.value || phoneField.value || summaryField.value) {
        resumePreview.classList.add('active');
    } else {
        resumePreview.classList.remove('active');
    }
}
document.getElementById('clear-form-btn').addEventListener('click', () => {
    form.reset();
    previewName.textContent = '';
    previewEmail.textContent = '';
    previewPhone.textContent = '';
    previewSummary.textContent = '';
    previewEducation.innerHTML = '';
    previewExperience.innerHTML = '';
    toggleResumePreview();
});
const skillCheckboxes = document.querySelectorAll('#skills-section input[type="checkbox"]');

skillCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', updateSkills);
});

function updateSkills() {
    const previewSkills = document.getElementById('preview-skills');
    previewSkills.innerHTML = '';  
    let selectedSkills = [];

    skillCheckboxes.forEach(skill => {
        if (skill.checked) {
            selectedSkills.push(skill.value);
        }
    });

    if (selectedSkills.length > 0) {
        previewSkills.innerHTML = selectedSkills.join(', ');
    } else {
        previewSkills.innerHTML = 'No skills selected.';
    }
    toggleResumePreview();
}
