<template>
    <div>
        <van-swipe-cell>
            <!-- <template #left>
        <van-button square type="primary" text="添加" @click="addEdit" />
      </template>-->
            <van-field
                readonly
                clickable
                name="picker"
                :value="info.txt"
                label="选择器"
                right-icon="bag-o"
                @blur="onBlur"
                placeholder="请选择类别"
                @click="showPicker = true"
            />
            <van-field
                v-model="info.cost"
                label="金额"
                name="pattern"
                right-icon="bill-o"
                type="number"
                placeholder="校验金额"
                @blur="onBlur"
                :rules="[{ pattern, message: '请输入正确内容' }]"
            />
            <van-field
                v-model="info.message"
                rows="1"
                autosize
                right-icon="comment-o"
                label="留言"
                type="textarea"
                @blur="onBlur"
                placeholder="请输入留言"
                show-word-limit
            />
            <template #right>
                <van-button
                    style="height: 100%"
                    square
                    type="danger"
                    text="删除"
                    @click="deleteEdit"
                />
            </template>
        </van-swipe-cell>
        <!-- <div class="wrapper"> -->
        <van-divider dashed>{{ textLine }}</van-divider>
        <van-popup
            v-model="showPicker"
            position="bottom"
            safe-area-inset-bottom
        >
            <van-picker
                safe-area-inset-bottom
                show-toolbar
                :columns="columns"
                @change="onChange"
                @confirm="onConfirm"
                @cancel="showPicker = false"
            />
        </van-popup>
        <!-- </div> -->
    </div>
</template>

<script>
import obj from "../tools";
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
export default {
    data() {
        return {
            columns: [],
            statusMap: {},
            // { values: ["大餐", "简餐", "零食", "外卖", "水果"] }
            showKeyboard: false,
            showPicker: false,
            pattern: /\d+(\.\d+|)/,
            value1: 0,
            tips: "",
            typeVal: 1,
        };
    },
    computed: {
        textLine() {
            return this.colIndex == 0 ? "我是底线" : "我是分割线";
        },
    },
    props: ["info", "colIndex", "list"],
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
    },

    created() {
        this.columns = obj.statusMap.map((e) => {
            const l = {
                text: e.type,
                id: e.id,
                children: [],
            };
            for (const [k, v] of Object.entries(e.subType)) {
                l.children.push({ id: k + l.id, text: v });
                this.statusMap[v] = k;
            }
            return l;
        });
    },
    methods: {
        onInput() {},
        onDelete() {},
        onConfirm(e) {
            this.info.txt = e[1];
            this.showPicker = false;
        },
        onChange(picker, values) {
            console.log(values);
        },
        onBlur() {
            // if (this.info.cost && this.info.typeVal[1]) {
            //   lsg("hello", this.info);
            // }
        },
        addEdit() {},
        deleteEdit() {
            this.list.splice(this.colIndex, 1);
        },
    },
    mounted() {
        // this.columns = [
        //   { values: Object.keys(this.columnsMap) },
        //   { values: this.columnsMap[Object.keys(this.columnsMap)[0]] }
        // ];
    },
};
</script>
<style>
.wrapper {
    background-color: #eee;
    padding: 10px 0;
}
</style>