document.getElementById('searchBar').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const jobs = document.querySelectorAll('.job-list a');

    jobs.forEach(job => {
        if (job.textContent.toLowerCase().includes(query)) {
            job.style.display = 'block';
        } else {
            job.style.display = 'none';
        }
    });
});

// Additional functionalities can be added here.
