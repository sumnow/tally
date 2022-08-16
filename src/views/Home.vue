<template>
    <div class="home">
        <!-- <div class="fix-middle" :style="styleObj"> -->
        <van-row>
            <div style="background: #f7f8fa">
                <van-col span="24">
                    <router-view />
                </van-col>
            </div>
        </van-row>
        <!-- </div> -->
        <div class="fix-bottom">
            <van-tabbar
                v-model="active"
                @change="onChange"
                safe-area-inset-bottom
            >
                <van-tabbar-item name="Edit" icon="edit"></van-tabbar-item>
                <van-tabbar-item name="Base" icon="home-o"></van-tabbar-item>
                <van-tabbar-item name="Total" icon="star-o"></van-tabbar-item>
                <van-tabbar-item
                    name="Setting"
                    icon="setting-o"
                ></van-tabbar-item>
            </van-tabbar>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import {
    Col,
    Row,
    NavBar,
    Toast,
    DatetimePicker,
    Popup,
    Tabbar,
    TabbarItem,
    Picker,
} from "vant";
import PieChart from "../components/PieChart.vue";
import BarChart from "../components/BarChart.vue";

export default {
    name: "Home",
    components: {
        vanrCol: Col,
        vanRow: Row,
        vanNavBar: NavBar,
        vanDatetimePicker: DatetimePicker,
        vanPopup: Popup,
        vanTabbar: Tabbar,
        vanTabbarItem: TabbarItem,
        vanPicker: Picker,
        BarChart,
        PieChart,
    },
    data() {
        return {
            active: "Edit",
            lastActive: "",
            isEdit: false,
            show: false,
            leftText: "",
            currentDate: new Date(),
        };
    },
    computed: {
        titleDate() {
            return this.$store.state.titleDate;
        },
        styleObj() {
            return `height: ${window.outerHeight - 96}px`;
        },
    },
    watch: {
        $route(to, from) {
            console.log("路由", to, from);
            // this.lastActive = from.name;
            // this.active = to.name;
        },
    },
    mounted() {
        console.log("获取数据", lsg("db"));
        // this.$router.replace('Edit')
        // lsg("db", [
        //   {
        //     date: "2020-05-14",
        //     currentDayCost: [
        //       { txt: "地铁", cost: 20 },
        //       { txt: "零食", cost: 100 }
        //     ]
        //   }
        // ]);
        this.$store.state.db = lsg("db") || {};
        this.$store.commit("changeDB", this.$store.state.db);
    },
    methods: {
        pastDate(date, n = 1) {
            return formatDate(
                new Date(new Date(date).getTime() - n * 24 * 60 * 60 * 1000)
            );
        },
        onChange(index) {
            this.$router.push(`/${index}`);
        },
        swipeHandler(e) {
            const direction = e.direction;
            console.log(direction);
            switch (direction) {
                case "Left":
                    this.$store.commit(
                        "changeDate",
                        this.pastDate(this.titleDate, -1)
                    );
                    break;
                case "Right":
                    this.$store.commit(
                        "changeDate",
                        this.pastDate(this.titleDate, 1)
                    );
                    break;
            }
            return;
        },
        // filter(type, options) {
        //   if (type === "day") {
        //     return options.filter(option => option % 1 === 0);
        //   }
        //   return options;
        // },
        // onClickLeft() {
        //   Toast("待开发");
        //   if (this.$route.name == "Edit") {
        //     this.$store.commit("changeDB");
        //   }
        //   // this.$router.go(-1);
        // },
        // onClickRight() {
        //   this.show = true;
        // },
        // changePickTime() {
        //   // console.log(123);
        // },
        // confrimPickTime(e) {
        //   this.$store.commit("changeDate", formatDate(e));
        //   this.show = false;
        // },
        // cancelPickTime() {
        //   // console.log(1);
        //   this.show = false;
        // },
        // showPopup() {
        //   this.show = true;
        // }
    },
};
</script>


<style>
.home {
    display: flex;
    width: 100vw;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    overflow: hidden;
    flex-direction: column;
}
.fix-top {
    position: absolute;
    top: 0;
    width: 100vw;
    height: 46px;
}
/* .fix-bottom {
  position: absolute;
  width: 100vw;
  bottom: 0;
  height: 50px;
} */
.fix-middle {
    padding-top: 46px;
    /* height: calc(100% - 96px); */
    overflow-y: auto;
}
</style>