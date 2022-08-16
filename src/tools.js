
const statusMap = [{
    id: 100,
    type: '吃喝',
    subType: {
        1: '大餐',
        2: '简餐',
        3: '零食',
        4: '外卖',
        5: '水果'
    }
},
{
    id: 200,
    type: '生活',
    subType: {
        1: '网络话费',
        2: '水电燃气',
        3: '房租物业',
        4: '维修'
    }
}, {
    id: 300,
    type: '购物',
    subType: {
        1: '必需',
        2: '刚好',
        3: '剁手',
    },
}, {
    id: 400,
    type: '出行',
    subType: {
        1: '打车',
        2: '地铁',
        3: '骑车',
        4: '其他出行',
    }
}, {
    id: 500,
    type: '情感',
    subType: {
        1: '亲人',
        2: '同事',
        3: '其他情感',
    },
}, {
    id: 600,
    type: '提升',
    subType: {
        1: '课程',
    }
}, {
    id: 700,
    type: '娱乐',
    subType: {
        1: '电影',
        2: '旅游'
    }
}
]

const dayTotal = {
    day: 22,
    month: 12,
    year: 2021,
    dayCost: [
        {
            type: 101,
            cost: `${Math.random() * 100}`.slice(0, 4),
            tips: '',
            time: new Date().getTime()
        }
    ]
}
const totalData = [
    // {
    //     date: '2020-05-12',
    //     currentDayCost: [{
    //         type: '吃喝',
    //         subType: [{
    //                 txt: '大餐',
    //                 cost: `${Math.random()*100}`.slice(0, 4),
    //                 tips: '',
    //                 time: ''
    //             },
    //             {
    //                 txt: '简餐',
    //                 cost: `${Math.random()*100}`.slice(0, 4)

    //             },
    //             {
    //                 txt: '零食',
    //                 cost: `${Math.random()*100}`.slice(0, 4)
    //             }
    //         ]
    //     }, {
    //         type: '生活',
    //         subType: [{
    //                 txt: '话费',
    //                 cost: `${Math.random()*100}`.slice(0, 4)
    //             },
    //             {
    //                 txt: '水费',
    //                 cost: `${Math.random()*100}`.slice(0, 4)
    //             },
    //             {
    //                 txt: '电费',
    //                 cost: `${Math.random()*100}`.slice(0, 4)
    //             },
    //             {
    //                 txt: '燃气费',
    //                 cost: `${Math.random()*100}`.slice(0, 4)
    //             },
    //             {
    //                 txt: '网费',
    //                 cost: `${Math.random()*100}`.slice(0, 4)
    //             },
    //             {
    //                 txt: '房租及物业',
    //                 cost: `${Math.random()*100}`.slice(0, 4)
    //             }, {
    //                 txt: '维修',
    //                 cost: `${Math.random()*100}`.slice(0, 4)
    //             }
    //         ]
    //     }, {
    //         type: '购物',
    //         subType: [{
    //                 txt: '必需',
    //                 cost: `${Math.random()*100}`.slice(0, 4)

    //             },
    //             {
    //                 txt: '刚好',
    //                 cost: `${Math.random()*100}`.slice(0, 4)
    //             },
    //             {
    //                 txt: '剁手',
    //                 cost: `${Math.random()*100}`.slice(0, 4)
    //             }
    //         ]
    //     }, {
    //         type: '出行',
    //         subType: [{
    //                 txt: '打车',
    //                 cost: `${Math.random()*100}`.slice(0, 4)
    //             },
    //             {
    //                 txt: '地铁',
    //                 cost: `${Math.random()*100}`.slice(0, 4)
    //             },
    //             {
    //                 txt: '骑车',
    //                 cost: `${Math.random()*100}`.slice(0, 4)
    //             },
    //             {
    //                 txt: '其他出行',
    //                 cost: `${Math.random()*100}`.slice(0, 4)
    //             }
    //         ]
    //     }, {
    //         type: '情感',
    //         subType: [{
    //             txt: '亲人',
    //             cost: `${Math.random()*100}`.slice(0, 4)
    //         }, {
    //             txt: '情侣',
    //             cost: `${Math.random()*100}`.slice(0, 4)
    //         }, {
    //             txt: '同事',
    //             cost: `${Math.random()*100}`.slice(0, 4)
    //         }, {
    //             txt: '其他情感',
    //             cost: `${Math.random()*100}`.slice(0, 4)
    //         }]
    //     }, {
    //         type: '提升',
    //         subType: [{
    //             txt: '课程',
    //             cost: `${Math.random()*100}`.slice(0, 4)
    //         }]
    //     }, {
    //         type: '娱乐',
    //         subType: [{
    //             txt: '电影',
    //             cost: `${Math.random()*100}`.slice(0, 4)
    //         }]
    //     }],
    // }, {
    //     date: '2020-05-13',
    //     currentDayCost: [{
    //         type: '吃喝',
    //         subType: [{
    //             txt: '零食',
    //             cost: 10
    //         }, {
    //             txt: '大餐',
    //             cost: 10
    //         }, {
    //             txt: '简餐',
    //             cost: 10
    //         }, {
    //             txt: '简餐',
    //             cost: 10
    //         }]
    //     }, {
    //         type: '出行',
    //         subType: [{
    //                 txt: '打车',
    //                 cost: 10
    //             },
    //             {
    //                 txt: '地铁',
    //                 cost: 10
    //             },
    //             {
    //                 txt: '骑车',
    //                 cost: 10
    //             },
    //             {
    //                 txt: '其他出行',
    //                 cost: 10
    //             }
    //         ]
    //     }]
    // }, 
]



export default {
    totalData,
    statusMap,
    dayTotal
}