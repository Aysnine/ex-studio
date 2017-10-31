
$(document).ready(() => {
  $('select.hd-nav-lang').change(ev => {
    location.replace('?lang=' + ev.target.value);
  });
});

var swiper = new Swiper('.swiper-container', {
  speed: 600,
  parallax: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});

var ctx = document.getElementById("def-chart");
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
    datasets: [{
      label: 'ETH',
      data: [32, 45, 78, 34, 50, 80, 94, 34, 67, 34, 67, 43, 34, 50, 80, 94, 34, 67, 34, 67, 43, 34, 50, 80, 94, 34, 67, 34, 67, 43],
      backgroundColor: 'rgba(77, 182, 172, 0.5)',
      borderColor: '#fff',
      borderWidth: 1,
      fill: 'start'
    }]
  },
  options: {
    // legend: false,
    title: false,
    responsive: true,
    maintainAspectRatio: false
  }
});