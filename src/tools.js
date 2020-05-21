const moduleData = [{
        txt: '大餐',
        cost: 0,
    },
    {
        txt: '简餐',
        cost: 0
    },
    {
        txt: '零食',
        cost: 0
    },
    {
        txt: '话费',
        cost: 0
    },
    {
        txt: '水费',
        cost: 0
    },
    {
        txt: '电费',
        cost: 0
    },
    {
        txt: '燃气费',
        cost: 0
    },
    {
        txt: '网费',
        cost: 0
    },
    {
        txt: '房租及物业',
        cost: 0
    }, {
        txt: '维修',
        cost: 0
    },
    {
        txt: '必需',
        cost: 0
    },
    {
        txt: '刚好',
        cost: 0
    },
    {
        txt: '剁手',
        cost: 0
    },
    {
        txt: '打车',
        cost: 0
    },
    {
        txt: '地铁',
        cost: 0
    },
    {
        txt: '骑车',
        cost: 0
    },
    {
        txt: '其他出行',
        cost: 0
    }, {
        txt: '亲人',
        cost: 0
    }, {
        txt: '情侣',
        cost: 0
    }, {
        txt: '同事',
        cost: 0
    }, {
        txt: '其他情感',
        cost: 0
    }, {
        txt: '课程',
        cost: 0

    }, {
        txt: '电影',
        cost: 0
    }
]
const statusMap = [{
        type: '吃喝',
        subType: [{
            txt: '大餐'
        }, {
            txt: '简餐'
        }, {
            txt: '零食'
        }, {
            txt: '外卖'
        }, {
            txt: '水果'
        }]
    },
    {
        type: '生活',
        subType: [{
                txt: '话费',
            },
            {
                txt: '必需品',
            },
            {
                txt: '水费',
            },
            {
                txt: '电费',
            },
            {
                txt: '燃气费',
            },
            {
                txt: '网费',
            },
            {
                txt: '房租物业',
            }, {
                txt: '维修',
            }
        ]
    }, {
        type: '购物',
        subType: [{
                txt: '必需',

            },
            {
                txt: '刚好',
            },
            {
                txt: '剁手',
            }
        ]
    }, {
        type: '出行',
        subType: [{
                txt: '打车',
            },
            {
                txt: '地铁',
            },
            {
                txt: '骑车',
            },
            {
                txt: '其他出行',
            }
        ]
    }, {
        type: '人情',
        subType: [{
            txt: '亲人',
        },  {
            txt: '同事',
        }, {
            txt: '其他情感',
        }]
    }, {
        type: '提升',
        subType: [{
            txt: '课程',
        }]
    }, {
        type: '娱乐',
        subType: [{
            txt: '电影',
        }]
    }
]

const totalData = [
    // {
    //     date: '2020-05-12',
    //     thisdayCost: [{
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
    //     thisdayCost: [{
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
    moduleData
}