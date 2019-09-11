(function () {
  return {
    layers: [
      {
        id: 'WXY',
        label: '危险源',
        sys: 'fxfx',
        children: [
          {
            id: 'WXY_JiaYouZhan',
            label: '加油站',
            typeCode: ['22A11']
          },
          {
            id: 'WXY_JiaQiZhan',
            label: '加气站',
            typeCode: ['22A13']
          },
          {
            id: 'WXY_WeiHuaPinQiYe',
            label: '危化品企业',
            typeCode: []
          },
          {
            id: 'WXY_ShiGuZaiNan',
            label: '事故灾难',
            typeCode: [
              '22000',
              '22A00',
              '22A01',
              '22A02',
              '22A03',
              '22A04',
              '22A05',
              '22A06',
              '22A07',
              '22A08',
              '22A09',
              '22A10',
              '22A11',
              '22A12',
              '22A13',
              '22A99',
              '22B99',
              '22C00',
              '22C01',
              '22C02',
              '22Y00'
            ]
          },
          {
            id: 'WXY_GongGongWeiSheng',
            label: '公共卫生',
            typeCode: ['23000', '23B00', '23C00', '23D00', '23Y00']
          },
          {
            id: 'WXY_SheHuiAnQuanYinHuan',
            label: '社会安全隐患',
            typeCode: [
              '24000',
              '24A00',
              '24B00',
              '24C00',
              '24D00',
              '24E00',
              '24F00',
              '24Y00'
            ]
          }
        ]
      },
      {
        id: 'FXYHD',
        label: '风险隐患点',
        sys: 'yjbz',
        children: [
          {
            id: 'WXY_ZiRanZaiHaiFengXianQu',
            label: '自然灾害风险区',
            typeCode: [
              '21E01',
              '21G01',
              '21Y00',
              '21000',
              '21A00',
              '21A01',
              '21A02',
              '21A51',
              '21B03',
              '21B06',
              '21B14',
              '21B08',
              '21B11',
              '21B12',
              '21D00',
              '21D01',
              '21D03',
              '21D04',
              '21D05',
              '21D06',
              '21D99',
              '21G00'
            ]
          }
        ]
      },
      {
        id: 'DZZH',
        label: '地质灾害',
        sys: 'yjbz',
        children: [
          {
            id: 'WXY_HuaPoQu',
            label: '滑坡区'
          },
          {
            id: 'WXY_BengTaQu',
            label: '崩塌区'
          },
          {
            id: 'WXY_NiShiLiuQu',
            label: '泥石流区'
          },
          {
            id: 'WXY_TaXianQu',
            label: '塌陷区'
          }
        ]
      },
      {
        id: 'YSZY_YunShuZiYuan',
        label: '运输资源',
        sys: 'yjbz',
        children: [
          {
            id: 'YSZY_DaoLuYunShu',
            label: '道路运输',
            typeCode: ['45A00']
          },
          {
            id: 'YSZY_TieLuYunShu',
            label: '铁路运输',
            typeCode: ['45B00']
          },
          {
            id: 'YSZY_HangKongQiYe',
            label: '航空企业',
            typeCode: ['45C00']
          }
        ]
      },
      {
        id: 'FHMB',
        label: '防护目标',
        sys: 'yjbz',
        children: [
          {
            id: 'FHMB_XueXiao1',
            label: '高等学校'
          },
          {
            id: 'FHMB_XueXiao2',
            label: '中学'
          },
          {
            id: 'FHMB_XueXiao3',
            label: '小学'
          },
          {
            id: 'FHMB_XueXiao4',
            label: '幼儿园'
          },
          {
            id: 'FHMB_XueXiao5',
            label: '其它学校'
          },
          {
            id: 'FHMB_DangZhengJunJiGuan',
            label: '党政军机关'
          },
          {
            id: 'FHMB_XinWenGuangBoJiGou',
            label: '新闻广播机构'
          },
          {
            id: 'FHMB_JinRongJiGou',
            label: '金融机构'
          },
          {
            id: 'FHMB_KeYanJiGou',
            label: '科研机构'
          },
          {
            id: 'FHMB_ZhongYaoChangSuo',
            label: '重要场所'
          },
          {
            id: 'FHMB_GongZhongJuJiChangSuo',
            label: '公众聚集场所'
          },
          {
            id: 'FHMB_FengJiengMingShengQu',
            label: '旅游景区'
          },
          {
            id: 'FHMB_ZhongYaoShengTaiQu',
            label: '重要生态区'
          },
          {
            id: 'FHMB_WHPCar',
            label: '危化品车辆'
          }
        ]
      },
      {
        id: 'JCTZ',
        label: '监测台站',
        sys: 'yjbz',
        children: [
          {
            id: 'JCTZ_JianCeTaiZhan',
            label: '一般监测台站'
          },
          {
            id: 'JCTZ_ShiuWenJianCeTaiZhan',
            label: '水文监测台站'
          },
          {
            id: 'JCTZ_ShiuKuJianCeTaiZhan',
            label: '水库监测台站'
          },
          {
            id: 'JCTZ_QiXiangJianCeTaiZhan',
            label: '雨情监测台站'
          }
        ]
      },
      {
        id: 'YLJG_Zong',
        label: '医疗机构',
        sys: 'yjbz',
        children: [
          {
            id: 'YLJG_YiJi',
            label: '一级医疗机构'
          },
          {
            id: 'YLJG_ErJi',
            label: '二级医疗机构'
          },
          {
            id: 'YLJG_SanJi',
            label: '三级医疗机构'
          },
          {
            id: 'YLJG_QiTa',
            label: '其他医疗机构'
          }
        ]
      },
      {
        id: 'JYDW_JiuYuanDuiWu',
        label: '救援队伍',
        sys: 'yjbz',
        children: [
          {
            id: 'JYDW_JiuYuanDuiWu',
            label: '救援队伍'
          }
        ]
      },
      {
        id: 'BNCS_BiNanChangSuo',
        label: '避难场所',
        sys: 'yjbz',
        children: [
          {
            id: 'BNCS_GongYuan',
            label: '公园'
          },
          {
            id: 'BNCS_GuangChang',
            label: '广场'
          },
          {
            id: 'BNCS_BiZaiDian',
            label: '避灾点'
          },
          {
            id: 'BNCS_JiuZhuGuanLiZhan',
            label: '救助管理站'
          },
          {
            id: 'BNCS_LvDi',
            label: '绿地'
          },
          {
            id: 'BNCS_QiTa',
            label: '其它避难场所'
          }
        ]
      },
      {
        id: 'MZJ_WuZiChuBeiKu',
        label: '物资储备库',
        sys: 'yjbz',
        children: [
          {
            id: 'MZJ_ZhengFuChuBeiKu',
            label: '政府储备库',
            typeCode: ['43A00']
          },
          {
            id: 'MZJ_QiYeChuBeiKu',
            label: '企业储备库',
            typeCode: ['43A01']
          },
          {
            id: 'MZJ_YingJiWuZiYuZhuangBei',
            label: '应急物资与装备',
            typeCode: ['49000']
          }
        ]
      },
      {
        id: 'DATAVIEW_TXBZ',
        label: '通讯保障',
        sys: 'yjbz',
        children: [
          {
            id: 'DATAVIEW_TXBZ',
            label: '通讯保障',
            typeCode: ['44B00', '44C00', '44D00', '44E00', '44F00', '44Z00']
          }
        ]
      }
    ]
  }
})()
