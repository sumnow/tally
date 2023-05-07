<template>
    <div>
        <div class="fix-top">
            <van-nav-bar
                fixed
                :title="headerTitle"
                :left-text="leftText"
                right-text="选择时间"
                @click-left="onClickLeft"
                @click-right="onClickRight"
            />
        </div>
        <div class="fix-middle" :style="styleObj">
            <van-form validate-first>
                <div v-for="(item, index) in list" :key="index">
                    <edit-module
                        :info="list[list.length - 1 - index]"
                        :list="list"
                        :colIndex="list.length - 1 - index"
                    />
                </div>
            </van-form>
        </div>
        <van-popup v-model="show" position="bottom" :style="{ height: '30%' }">
            <div class="timepick">
                <van-datetime-picker
                    safe-area-inset-bottom
                    v-model="currentDate"
                    type="date"
                    title="选择年月日"
                    :filter="filter"
                    @change="changePickTime"
                    @confirm="confrimPickTime"
                    @cancel="cancelPickTime"
                />
            </div>
        </van-popup>
    </div>
</template>

<script>
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
    Field,
    Form,
} from "vant";
import EditModule from "../components/EditModule.vue";
import obj from "../tools.js";
export default {
    data() {
        return {
            columns: [],
            showKeyboard: false,
            showPicker: false,
            pattern: /\d+(\.\d+|)/,
            value1: 0,
            tips: "",
            list: [],
            typeVal: "",
            totalData: [],
            show: false,
            currentDate: new Date(),
            totalCost: 0,
            leftText: "保存",
        };
    },
    computed: {
        titleDate() {
            return this.$store.state.titleDate;
        },
        headerTitle() {
            return this.titleDate + " ¥" + this.thisTotal;
        },
        db() {
            return this.$store.state.db;
        },
        styleObj() {
            return `height: ${window.outerHeight - 96}px`;
        },
        thisTotal() {
            if (this.db[this.titleDate] && this.db[this.titleDate].totalCost) {
                return this.db[this.titleDate].totalCost;
            } else {
                return 0;
            }
        },
    },
    watch: {
        titleDate(val) {
            this.filterData();
            this.$router.push({
                query: { date: val },
            });
            return val;
        },
        db: {
            deep: true,
            handler: function (e) {
                if (e && e[this.titleDate]) {
                    e[this.titleDate].totalCost = this.list.reduce(
                        (a, b) => a + parseFloat(b.cost),
                        0
                    );
                    console.log("change123", e);
                    this.filterData();
                }
                return e;
            },
        },
    },
    components: {
        vanrCol: Col,
        vanRow: Row,
        vanNavBar: NavBar,
        vanDatetimePicker: DatetimePicker,
        vanPopup: Popup,
        vanTabbar: Tabbar,
        vanTabbarItem: TabbarItem,
        vanField: Field,
        vanForm: Form,
        EditModule,
    },

    methods: {
        onInput() {},
        onDelete() {},
        onConfirm(e) {
            this.typeVal = e;
            console.log(e);
        },
        filterData() {
            console.log("切换日期到", this.titleDate);
            if (this.db[this.titleDate]) {
                this.list = this.db[this.titleDate].currentDayCost;
            } else {
                Toast(`${this.titleDate}无数据`);
                this.$set(this.db, this.titleDate, {
                    totalCost: 0,
                    currentDayCost: [],
                });
                this.list = this.db[this.titleDate].currentDayCost;
            }
            if (this.list.length === 0) {
                this.list.push({
                    txt: "",
                    cost: 0,
                    message: "",
                });
            }
        },
        filter(type, options) {
            if (type === "day") {
                return options.filter((option) => option % 1 === 0);
            }
            return options;
        },
        onClickLeft() {
            Toast("save success");
            const lastEle = this.list[list.length - 1];
            if (!lastEle.type) {
                this.list.push({
                    txt: "",
                    cost: 0,
                    message: "",
                });
            }
            this.saveData();
        },
        onClickRight() {
            this.show = true;
        },
        changePickTime() {},
        confrimPickTime(e) {
            this.$store.commit("changeDate", formatDate(e));
            this.currentDate = e;
            this.show = false;
        },
        cancelPickTime() {
            this.show = false;
        },
        showPopup() {
            this.show = true;
        },
        saveData() {
            console.log(this.db);
            this.db[this.titleDate] = {
                currentDayCost: this.list,
                totalCost: this.totalCost,
            };
            lsg("db", this.db);
        },
    },
    mounted() {
        console.log(`query is ${this.$route.query}`);
        if (this.$route.query.date) {
            this.$store.commit("changeDate", this.$route.query.date);
        }
        this.currentDate = new Date(this.titleDate);
        if (!this.db[this.titleDate]) {
            this.list = [
                {
                    txt: "",
                    cost: 0,
                },
            ];
        } else {
            this.list = this.db[this.titleDate]["currentDayCost"];
        }
        console.log(2314, this.db);
    },
};
</script>