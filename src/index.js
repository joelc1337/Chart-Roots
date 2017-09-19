
$(function(){
 
    console.log('hi');
    function createChart(data){
        var ctx = document.getElementById("myChart").getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: data,
                datasets: [{
                    label: '# of Votes',
                    data: data
                }]
            },
            options: {
                responsive: true,
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
        });
    }

    function roots(max){

        var roots = []

        for(i = 1; i <= max; i++){
            roots.push(i*2);
        }

        console.log(roots);
        return roots
    }

    createChart(roots(50));

});