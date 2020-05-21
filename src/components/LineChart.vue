<template>
  <div class>
    <div class="chart" ref="chart"></div>
  </div>
</template>

<script>
export default {
  name: "LineChart",
  data() {
    return {};
  },
  props: ["lineChartData",'day'],
  computed: {
    titleDate() {
      return this.$store.state.titleDate;
    }
  },
  watch: {
    titleDate(val) {
      this.setOptions();
      return val;
    },
    lineChartData: {
      deep: true,
      handler() {
        // this.setOptions();
      }
    }
  },
  mounted() {
    this.initCharts();
  },
  methods: {
    initCharts() {
      this.chart = $E.init(this.$refs.chart);
      this.setOptions();
    },
    handelrData(obj) {
      if (obj) {
        const _total = Object.values(obj).reduce((a, b) => a + b.totalCost, 0);
        const opt = {
          title: {
            text: `${this.day}前一周消费`,
            show: true,
            subtext: `${_total}元`
          },
          xAxis: {
            type: "category",
            data: Object.keys(obj)
          },
          yAxis: {
            type: "value"
          },
          series: [
            {
              label: {
                normal: {
                  show: true,
                  position: "top"
                }
              },
              data: Object.values(obj).map(e => e.totalCost),
              type: "line"
            }
          ]
        };
        return opt;
      } else {
        return {
          title: {
            text: `${this.day}前一周消费`,
            show: true,
            subtext: `0元`
          },
          xAxis: {
            type: "category",
            data: ["竟然一周都没有消费"]
          },
          yAxis: {
            type: "value"
          },
          series: [
            {
              data: [0],
              type: "line"
            }
          ]
        };
      }
    },
    setOptions() {
      const opt = this.handelrData(this.lineChartData);
      console.log("aetaa", opt);
      this.chart.setOption(opt);
    }
  }
};
</script>

<style>
.chart {
  width: 100vw;
  height: 60vw;
}
</style>
