<template>
  <div class="radar-chart-container">
    <Radar v-if="chartData && chartOptions" :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { Radar } from 'vue-chartjs';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const props = defineProps({
  efficacite: { type: Number, required: true },
  acceptabilite: { type: Number, required: true },
  perennite: { type: Number, required: true },
  color: { type: String, default: '#D6C27A' }
});

const chartData = computed(() => {
  return {
    labels: ['Efficacité', 'Acceptabilité', 'Pérennité'],
    datasets: [
      {
        label: 'Impact (1-3)',
        backgroundColor: props.color + '40', // Adding slight transparency if hex
        borderColor: props.color,
        pointBackgroundColor: props.color,
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: props.color,
        data: [props.efficacite, props.acceptabilite, props.perennite]
      }
    ]
  };
});

const chartOptions = computed(() => {
  return {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 1000,
      easing: 'easeOutQuart'
    },
    scales: {
      r: {
        angleLines: {
          color: 'rgba(0, 0, 0, 0.1)'
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.1)'
        },
        pointLabels: {
          color: '#333',
          font: {
            size: 11,
            family: "'Trebuchet MS', sans-serif",
            weight: 'bold'
          }
        },
        ticks: {
          stepSize: 1,
          min: 0,
          max: 3,
          display: false
        }
      }
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        backgroundColor: '#000',
        titleFont: { size: 13 },
        bodyFont: { size: 14, weight: 'bold' },
        callbacks: {
          label: (context) => {
            return ` Valeur : ${context.raw} / 3`;
          }
        }
      }
    }
  };
});
</script>

<style scoped>
.radar-chart-container {
  position: relative;
  height: 200px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>