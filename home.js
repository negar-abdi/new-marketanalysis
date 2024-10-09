// تعریف متغیرها
const zincButton = document.getElementById('zinc-button');
const zincMenu = document.getElementById('zinc-menu');

// افزودن رویداد کلیک به دکمه
zincButton.addEventListener('click', () => {
  zincMenu.classList.toggle('show');
});

// افزودن رویداد کلیک خارج از منو برای بستن آن
window.addEventListener('click', (event) => {
  if (!event.target.matches('#zinc-button, #zinc-menu *')) {
    zincMenu.classList.remove('show');
  }
});

















// HTML Structure
/*<>// HTML Structure*/
  {/* <nav>
    <ul id="menu">
      <li    class="undefined styles_activeStyle__C6FOV" id="1" role="option"
      aria-selected="true" tabindex="0"><a href="https://www.new-marketanalysis.com/pwa">zinc (Coming soon)</a></li>
      <li      class="undefined false" id="2" role="option" aria-selected="false"
       tabindex="0"><a href="">Option 2</a></li>
      <li><a href="#">Option 3</a></li>
    </ul>
  </nav><div id="chart-container"></div></> */}

{/* <nav>
<ul class="styles_options___jY_p styles_ul__9Mdlj false selectedOption  boxColor"
                                            role="listbox" tabindex="-1" aria-activedescendant="zinc    (Coming soon)">
                                            <li class="styles_disabled__Cx6Pt" id="0" role="option"
                                                aria-selected="false" tabindex="0"></li>
                                            <li class="undefined styles_activeStyle__C6FOV" id="1" role="option"
                                                aria-selected="true" tabindex="0">zinc (Coming soon)</li>
                                            <li class="undefined false" id="2" role="option" aria-selected="false"
                                                tabindex="0">lead (Coming soon)</li>
                                            <li class="undefined false" id="3" role="option" aria-selected="false"
                                                tabindex="0">billet (Coming soon)</li>
                                            <li class="undefined false" id="4" role="option" aria-selected="false"
                                                tabindex="0">aluminum (Coming soon)</li>
                                            <li class="undefined false" id="5" role="option" aria-selected="false"
                                                tabindex="0">copper (Coming soon)</li>
                                            <li class="undefined false" id="6" role="option" aria-selected="false"
                                                tabindex="0">iron ore </li>
                                        </ul>
  </nav><div id="chart-container"></div></>









// JavaScript Code
// Initialize the menu
const menu = document.getElementById('menu');
const menuItems = menu.getElementsByTagName('a');

// Initialize the chart container
const chartContainer = d3.select('#chart-container');

// Define the chart data for each menu option
const chartData = {
  'Option 1': [10, 20, 30, 40, 50],
  'Option 2': [20, 30, 40, 50, 60],
  'Option 3': [30, 40, 50, 60, 70]
};

// Function to update the chart
function updateChart(data) {
  // Use D3.js to create the chart
  // ...
}

// Add event listeners to the menu items
for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener('click', (event) => {
    event.preventDefault();
    const selectedOption = event.target.textContent;
    updateChart(chartData[selectedOption]);
  });
} */}


















// // Add your JavaScript code here
// const ChartOptions = {
//     option1: {
//       labels: ['Option 1', 'Option 2', 'Option 3'],
//       data: [50, 30, 20]
//     },
//     option2: {
//       labels: ['Option A', 'Option B', 'Option C'],
//       data: [40, 35, 25]
//     },
//     option3: {
//       labels: ['Choice 1', 'Choice 2', 'Choice 3'],
//       data: [45, 30, 25]
//     }
//   };
  
//   const chartContainer = document.querySelector('.chart-container');
//   const chartOptions = document.querySelectorAll('.chart-options button');
  
//   let myChart;
  
//   function createChart(chartData) {
//     if (myChart) {
//       myChart.destroy();
//     }
  
//     const ctx = chartContainer.getContext('2d');
//     myChart = new Chart(ctx, {
//       type: 'pie',
//       data: {
//         labels: chartData.labels,
//         datasets: [{
//           label: 'Market Share',
//           data: chartData.data,
//           backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
//         }]
//       },
//       options: {
//         responsive: true,
//         maintainAspectRatio: false
//       }
//     });
//   }
  
//   chartOptions.forEach(button => {
//     button.addEventListener('click', () => {
//       const chartName = button.dataset.chart;
//       createChart(chartOptions[chartName]);
//     });
//   });
  
//   // Initialize the chart with the first option
//   createChart(chartOptions.option1);
  