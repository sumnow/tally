<template>
    <div>
        <div class="fix-top">
            <van-nav-bar fixed :title="titleDate" />
        </div>
        <div class="fix-middle" :style="styleObj">
            <div
                class="line-wrap"
                :class="[
                    item.finishTime && item.finishTime > 0 ? 'finished' : '',
                ]"
                v-for="(item, index) in eventList"
                :key="index"
            >
                <div
                    class="line-mask"
                    v-if="item.finishTime && item.finishTime > 0"
                ></div>
                <div class="line-inner">
                    <div>
                        {{ item.event }}
                        {{
                            item.finishTime
                                ? new Date(item.finishTime).toLocaleString()
                                : ""
                        }}
                    </div>
                    <div class="btn-mark-time">
                        <div class="circle btn" @click="finishTask(index)">
                            完成
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Total",
    data() {
        return {
            ur: {},
            eventList: [
                { event: "M起床", finishTime: 0 },
                { event: "W起床", finishTime: 0 },
                { event: "出发", finishTime: 0 },
                { event: "W送公司", finishTime: 0 },
                { event: "M到公司", finishTime: 0 },
                { event: "M下班", finishTime: 0 },
                { event: "W下班", finishTime: 0 },
                { event: "接到W", finishTime: 0 },
                { event: "M到家", finishTime: 0 },
                { event: "W到家", finishTime: 0 },
                { event: "睡觉", finishTime: 0 },
            ],
        };
    },
    computed: {
        styleObj() {
            return `height: ${window.outerHeight - 96}px`;
        },
        titleDate() {
            return this.$store.state.titleDate;
        },
    },
    methods: {
        finishTask(index) {
            const sortFunction = (arr) => {};
            this.eventList[index].finishTime = new Date().getTime();
            this.eventList = this.eventList.sort(
                (a, b) => a.finishTime - b.finishTime
            );
            this.ur[this.titleDate] = this.eventList;
            lsg("ur", this.ur);
        },
    },
    mounted() {
        const ur = lsg("ur");
        if (ur) {
            this.ur = ur;
            if (this.titleDate && this.ur[this.titleDate]) {
                this.eventList = this.ur[this.titleDate];
            } else {
                this.ur = {};
                this.ur[this.titleDate] = this.eventList;
            }
        } else {
            this.ur = {};
            this.ur[this.titleDate] = this.eventList;
        }
    },
};
</script>

<style scoped>
.line-wrap {
    position: relative;
}
.line-inner {
    display: flex;
    justify-content: space-between;
    margin: 2vw;
    font-size: 4vw;
    line-height: 8vw;
    height: 8vw;
    text-align: left;
}
.line-mask {
    position: absolute;
    width: 100vw;
    height: 8vw;
    background-color: rgba(255, 255, 255, 0.8);
}
.btn-mark-time {
    display: flex;
    justify-content: space-between;
    width: 28vw;
    height: 8vw;
}
.btn-mark-time .btn {
    width: 12vw;
    height: 8vw;

    text-align: center;
    font-size: 3vw;
    color: #fff;
    background-color: #1989fa;
    border-radius: 0.5vw;
}
.btn-mark-time .btn.success {
    color: #07c160;
}
.btn-mark-time .btn.skip {
    color: #000;
    background-color: #eee;
}
</style>