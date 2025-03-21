var ctx = document.getElementById('skillsChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ['Python', 'Machine Learning', 'Data Science', 'SQL', 'Power BI', 'Prompt Engineering'],
        datasets: [{
            label: 'Skill Level',
            data: [90, 85, 80, 75, 70, 65],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 2
        }]
    }
});

      