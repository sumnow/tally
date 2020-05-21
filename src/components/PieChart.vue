<template>
  <div class>
    <div class="chart" ref="chart"></div>
  </div>
</template>

<script>
export default {
  name: "PieChart",
  data() {
    return {};
  },
  props: ["pieChartData"],
  computed: {
    titleDate() {
      return this.$store.state.titleDate;
    }
  },
  watch: {
    titleDate(val) {
      this.$nextTick(e => {
        this.$forceUpdate();
      });
      console.log("state", val, this.pieChartData);
      return val;
    },
    pieChartData: {
      deep: true,
      handler() {
        this.setOptions();
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
      obj.forEach(e => {
        e.totalCost = e.subType.reduce((a, b) => a + b.cost, 0);
      });
      const optLegendData = [];
      const innerData = [];
      const outData = [];
      obj.forEach(e => {
        innerData.push({
          name: e.type,
          value: e.totalCost
        });
        e.subType.forEach(el => {
          optLegendData.push(el.txt);
          outData.push({
            name: el.txt,
            value: el.cost
          });
        });
      });
      const opt = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          // orient: "vertical",
          // left: 10,
          // data: optLegendData
        },
        series: [
          {
            name: `${this.titleDate}`,
            type: "pie",
            selectedMode: "single",
            radius: [0, "30%"],
            label: {
              position: "inner"
            },
            labelLine: {
              show: false
            },
            data: innerData
          },
          {
            name: `${this.titleDate}`,
            type: "pie",
            radius: ["40%", "55%"],
            label: {
              formatter: "{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ",
              backgroundColor: "#eee",
              borderColor: "#aaa",
              borderWidth: 1,
              borderRadius: 4,
              // shadowBlur:3,
              // shadowOffsetX: 2,
              // shadowOffsetY: 2,
              // shadowColor: '#999',
              // padding: [0, 7],
              rich: {
                a: {
                  color: "#999",
                  lineHeight: 22,
                  align: "center"
                },
                // abg: {
                //     backgroundColor: '#333',
                //     width: '100%',
                //     align: 'right',
                //     height: 22,
                //     borderRadius: [4, 4, 0, 0]
                // },
                hr: {
                  borderColor: "#aaa",
                  width: "100%",
                  borderWidth: 0.5,
                  height: 0
                },
                b: {
                  fontSize: 16,
                  lineHeight: 33
                },
                per: {
                  color: "#eee",
                  backgroundColor: "#334455",
                  padding: [2, 4],
                  borderRadius: 2
                }
              }
            },
            data: outData
          }
        ]
      };
      return opt;
    },
    setOptions() {
      const opt = this.handelrData(this.pieChartData.thisdayCost);
      this.chart.setOption(opt);
    }
  }
};
</script>

<style>
.chart {
  width: 100vw;
  height: 100vw;
}
</style>
