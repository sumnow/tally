<template>
    <div>
        <van-field label="Version" value="Beta 0.1.2" readonly></van-field>
        <van-field
            label="ID"
            v-model="userInfo.userId"
            @blur="setUserId"
        ></van-field>
        <van-field
            label="Family"
            v-model="userInfo.familyId"
            @blur="setFamilyId"
        ></van-field>
        <van-field label="Storage" :value="limit" readonly />
        <van-divider dashed>分割</van-divider>

        <van-field label="Import" v-model="val" />
        <van-button type="primary" size="large" @click="importData"
            >Import Data</van-button
        >
        <van-divider dashed>分割</van-divider>
        <van-button type="primary" size="large" @click="showData"
            >Checkout Data</van-button
        >
        <van-field
            v-model="infoDb"
            rows="1"
            label="数据"
            type="textarea"
            readonly
        />
    </div>
</template>

<script>
import { Toast } from "vant";
export default {
    name: "",
    data() {
        return {
            infoDb: "",
            val: "",
            userInfo: {
                userId: undefined,
                familyId: undefined,
            },
        };
    },
    created() {
        if (lsg("userInfo")) {
            this.userInfo = lsg('userInfo')
        }
    },
    computed: {
        limit() {
            if (!window.localStorage) {
                console.log("浏览器不支持localStorage");
            }
            var size = 0;
            for (let item in window.localStorage) {
                if (window.localStorage.hasOwnProperty(item)) {
                    size += window.localStorage.getItem(item).length;
                }
            }

            return (size / 1024).toFixed(2) + "KB";
        },
        titleDate() {
            return this.$store.state.titleDate;
        },
        db() {
            return this.$store.state.db;
        },
    },
    methods: {
        setUserId() {
            if (this.userInfo.familyId) {
                lsg("userInfo", this.userInfo);
            }
        },
        setFamilyId() {
            if (this.userInfo.userId) {
                lsg("userInfo", this.userInfo);
            }
        },
        showData() {
            this.infoDb = JSON.stringify(lsg("db"));
            function createAndDownloadFile(fileName, content) {
                var aTag = document.createElement("a");
                var blob = new Blob([content]);
                aTag.download = fileName;
                aTag.href = URL.createObjectURL(blob);
                aTag.click();
                URL.revokeObjectURL(blob);
            }
            if (this.infoDb != "null") {
                createAndDownloadFile(
                    `tally-file-${new Date().getTime()}`,
                    this.infoDb
                );
            }
        },
        saveData() {
            const _arr = Object.keys(this.db);
            const obj = {};
            for (let i = _arr.length - 1; i >= 0; i--) {
                if (this.db[_arr[i]].totalCost === 0) {
                    console.log("删除某日空数据", _arr[i]);
                } else {
                    let _temp = [];
                    this.db[_arr[i]].thisdayCost.forEach((e) => {
                        if (e.cost !== 0) {
                            _temp.push(e);
                        }
                    });
                    obj[_arr[i]] = {
                        totalCost: this.db[_arr[i]].totalCost,
                        thisdayCost: _temp,
                    };
                }
                console.log(obj);
            }

            lsg("db", obj);
        },
        importData() {
            console.log(this.val);
            if (this.val) {
                try {
                    const obj = JSON.parse(this.val);
                    if (typeof obj != "object") {
                        throw new Error("转话错误");
                    }
                    lsg("db", obj);
                } catch {
                    Toast("处理失败");
                }
            }
        },
    },
};
</script>