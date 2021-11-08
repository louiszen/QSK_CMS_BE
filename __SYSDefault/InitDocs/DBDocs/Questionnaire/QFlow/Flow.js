const moment = require("moment");
const { v1 } = require("uuid");

const doc = {
  _id: v1(),
  refID: "Flow",
  description: "3 Jun 2021",
  version: 3,
  lastUpdate: moment("2021/06/03", "YYYY/MM/DD").toISOString(),
  effective: {
    Start: moment("2021/06/03", "YYYY/MM/DD").toISOString(),
    End: null,
  },
  flow: [
    {
      id: "66ca18c0-1c1e-11ec-a9a4-e3a765f690ba",
      type: "Tube_Src",
      data: {
        inner: "Severity 1",
        severity: 1
      },
      position: {
        x: -30,
        y: 19,
      },
    },
    {
      id: "66ca18c1-1c1e-11ec-a9a4-e3a765f690ba",
      type: "Tube_Src",
      data: {
        inner: "Severity 2",
        severity: 2
      },
      position: {
        x: 747,
        y: -26.999999999999996,
      },
    },
    {
      id: "66ca18c2-1c1e-11ec-a9a4-e3a765f690ba",
      type: "Tube_Src",
      data: {
        inner: "Severity 3",
        severity: 3
      },
      position: {
        x: -215,
        y: 703,
      },
    },
    {
      id: "66ca18c5-1c1e-11ec-a9a4-e3a765f690ba",
      type: "Tube_Src",
      data: {
        inner: "Severity 99",
        severity: 99
      },
      position: {
        x: 638,
        y: 926,
      },
    },
    {
      id: "78701250-1c1e-11ec-b994-3733cedb813a",
      type: "Rect_YesNo",
      data: {
        selected: "_QHKR",
      },
      position: {
        x: -35.39430688470557,
        y: 128.77707733118183,
      },
    },
    {
      id: "7e5d40c0-1c1e-11ec-b994-3733cedb813a",
      source: "66ca18c0-1c1e-11ec-a9a4-e3a765f690ba",
      sourceHandle: null,
      target: "78701250-1c1e-11ec-b994-3733cedb813a",
      targetHandle: "in",
      style: {
        stroke: "rgba(29,29,29,0.75)",
        strokeWidth: 3,
      },
      animated: true,
    },
    {
      id: "87263ef0-1c1e-11ec-b994-3733cedb813a",
      type: "Rect_YesNo",
      data: {
        selected: "QVaccinated",
      },
      position: {
        x: -258.86691171311986,
        y: 289.0939515380052,
      },
    },
    {
      id: "965dd090-1c1e-11ec-b994-3733cedb813a",
      source: "78701250-1c1e-11ec-b994-3733cedb813a",
      sourceHandle: "yes",
      target: "87263ef0-1c1e-11ec-b994-3733cedb813a",
      targetHandle: "in",
      style: {
        stroke: "rgba(85,136,38,0.75)",
        strokeWidth: 3,
      },
      animated: true,
    },
    {
      id: "973f2fe0-1c1e-11ec-b994-3733cedb813a",
      type: "Tube_End",
      data: {
        selected: "Req0",
      },
      position: {
        x: 20.47361414128534,
        y: 473.05596793859445,
      },
    },
    {
      id: "9b9bfa50-1c1e-11ec-b994-3733cedb813a",
      source: "78701250-1c1e-11ec-b994-3733cedb813a",
      sourceHandle: "no",
      target: "973f2fe0-1c1e-11ec-b994-3733cedb813a",
      targetHandle: null,
      style: {
        stroke: "rgba(163,1,8,0.75)",
        strokeWidth: 3,
      },
      animated: true,
    },
    {
      id: "a3782780-1c1e-11ec-b994-3733cedb813a",
      source: "87263ef0-1c1e-11ec-b994-3733cedb813a",
      sourceHandle: "no",
      target: "973f2fe0-1c1e-11ec-b994-3733cedb813a",
      targetHandle: null,
      style: {
        stroke: "rgba(163,1,8,0.75)",
        strokeWidth: 3,
      },
      animated: true,
    },
    {
      id: "ac4173d0-1c1e-11ec-b994-3733cedb813a",
      type: "Tube_End",
      data: {
        selected: "Req1",
      },
      position: {
        x: -346.9405195155807,
        y: 482.679811579598,
      },
    },
    {
      id: "af83f4a0-1c1e-11ec-b994-3733cedb813a",
      source: "87263ef0-1c1e-11ec-b994-3733cedb813a",
      sourceHandle: "yes",
      target: "ac4173d0-1c1e-11ec-b994-3733cedb813a",
      targetHandle: null,
      style: {
        stroke: "rgba(85,136,38,0.75)",
        strokeWidth: 3,
      },
      animated: true,
    },
    {
      id: "cb8e4ce0-1c1e-11ec-b994-3733cedb813a",
      type: "Rect_YesNo",
      data: {
        selected: "_QHKR",
      },
      position: {
        x: 679.7907403482552,
        y: 117.0431752690302,
      },
    },
    {
      id: "d0278410-1c1e-11ec-b994-3733cedb813a",
      source: "66ca18c1-1c1e-11ec-a9a4-e3a765f690ba",
      sourceHandle: null,
      target: "cb8e4ce0-1c1e-11ec-b994-3733cedb813a",
      targetHandle: "in",
      style: {
        stroke: "rgba(29,29,29,0.75)",
        strokeWidth: 3,
      },
      animated: true,
    },
    {
      id: "dc836d00-1c1e-11ec-b994-3733cedb813a",
      type: "Rect_YesNo",
      data: {
        selected: "QVaccinated",
      },
      position: {
        x: 491.64165117811046,
        y: 329.07179509046864,
      },
    },
    {
      id: "e15ae5b0-1c1e-11ec-b994-3733cedb813a",
      type: "Rect_YesNo",
      data: {
        selected: "QVaccinated",
      },
      position: {
        x: 1046.3535056991768,
        y: 324.0792032620389,
      },
    },
    {
      id: "e4b6e1f0-1c1e-11ec-b994-3733cedb813a",
      source: "cb8e4ce0-1c1e-11ec-b994-3733cedb813a",
      sourceHandle: "yes",
      target: "dc836d00-1c1e-11ec-b994-3733cedb813a",
      targetHandle: "in",
      style: {
        stroke: "rgba(85,136,38,0.75)",
        strokeWidth: 3,
      },
      animated: true,
    },
    {
      id: "e5de7200-1c1e-11ec-b994-3733cedb813a",
      source: "cb8e4ce0-1c1e-11ec-b994-3733cedb813a",
      sourceHandle: "no",
      target: "e15ae5b0-1c1e-11ec-b994-3733cedb813a",
      targetHandle: "in",
      style: {
        stroke: "rgba(163,1,8,0.75)",
        strokeWidth: 3,
      },
      animated: true,
    },
    {
      id: "ec754df0-1c1e-11ec-b994-3733cedb813a",
      type: "Tube_End",
      data: {
        selected: "Req2",
      },
      position: {
        x: 475.23733873324954,
        y: 579.391635760106,
      },
    },
    {
      id: "f39c5bf0-1c1e-11ec-b994-3733cedb813a",
      source: "dc836d00-1c1e-11ec-b994-3733cedb813a",
      sourceHandle: "yes",
      target: "ec754df0-1c1e-11ec-b994-3733cedb813a",
      targetHandle: null,
      style: {
        stroke: "rgba(85,136,38,0.75)",
        strokeWidth: 3,
      },
      animated: true,
    },
    {
      id: "f5492190-1c1e-11ec-b994-3733cedb813a",
      source: "e15ae5b0-1c1e-11ec-b994-3733cedb813a",
      sourceHandle: "yes",
      target: "ec754df0-1c1e-11ec-b994-3733cedb813a",
      targetHandle: null,
      style: {
        stroke: "rgba(85,136,38,0.75)",
        strokeWidth: 3,
      },
      animated: true,
    },
    {
      id: "f8f40120-1c1e-11ec-b994-3733cedb813a",
      type: "Tube_End",
      data: {
        selected: "Req3",
      },
      position: {
        x: 721.8624801283868,
        y: 700.8311151875289,
      },
    },
    {
      id: "fe551c30-1c1e-11ec-b994-3733cedb813a",
      source: "dc836d00-1c1e-11ec-b994-3733cedb813a",
      sourceHandle: "no",
      target: "f8f40120-1c1e-11ec-b994-3733cedb813a",
      targetHandle: null,
      style: {
        stroke: "rgba(163,1,8,0.75)",
        strokeWidth: 3,
      },
      animated: true,
    },
    {
      id: "008c2070-1c1f-11ec-b994-3733cedb813a",
      type: "Tube_End",
      data: {
        selected: "Req0",
      },
      position: {
        x: 1029.058934302284,
        y: 589.6232823075484,
      },
    },
    {
      id: "03ed73e0-1c1f-11ec-b994-3733cedb813a",
      source: "e15ae5b0-1c1e-11ec-b994-3733cedb813a",
      sourceHandle: "no",
      target: "008c2070-1c1f-11ec-b994-3733cedb813a",
      targetHandle: null,
      style: {
        stroke: "rgba(163,1,8,0.75)",
        strokeWidth: 3,
      },
      animated: true,
    },
    {
      id: "0d0618b0-1c1f-11ec-b994-3733cedb813a",
      type: "Rect_YesNo",
      data: {
        selected: "_QHKR",
      },
      position: {
        x: -251.3757946548327,
        y: 876.1656955237128,
      },
    },
    {
      id: "11482f30-1c1f-11ec-b994-3733cedb813a",
      source: "66ca18c2-1c1e-11ec-a9a4-e3a765f690ba",
      sourceHandle: null,
      target: "0d0618b0-1c1f-11ec-b994-3733cedb813a",
      targetHandle: "in",
      style: {
        stroke: "rgba(29,29,29,0.75)",
        strokeWidth: 3,
      },
      animated: true,
    },
    {
      id: "1616a730-1c1f-11ec-b994-3733cedb813a",
      type: "Rect_YesNo",
      data: {
        selected: "QVaccinated",
      },
      position: {
        x: -271.7744136321792,
        y: 1076.7100457573597,
      },
    },
    {
      id: "1d9990d0-1c1f-11ec-b994-3733cedb813a",
      source: "0d0618b0-1c1f-11ec-b994-3733cedb813a",
      sourceHandle: "yes",
      target: "1616a730-1c1f-11ec-b994-3733cedb813a",
      targetHandle: "in",
      style: {
        stroke: "rgba(85,136,38,0.75)",
        strokeWidth: 3,
      },
      animated: true,
    },
    {
      id: "1e9f8f20-1c1f-11ec-b994-3733cedb813a",
      source: "0d0618b0-1c1f-11ec-b994-3733cedb813a",
      sourceHandle: "no",
      target: "1616a730-1c1f-11ec-b994-3733cedb813a",
      targetHandle: "in",
      style: {
        stroke: "rgba(163,1,8,0.75)",
        strokeWidth: 3,
      },
      animated: true,
    },
    {
      id: "232390a0-1c1f-11ec-b994-3733cedb813a",
      type: "Tube_End",
      data: {
        selected: "Req4",
      },
      position: {
        x: -448.6008784073092,
        y: 1279.2264164489222,
      },
    },
    {
      id: "249cea30-1c1f-11ec-b994-3733cedb813a",
      type: "Tube_End",
      data: {
        selected: "Req5",
      },
      position: {
        x: -78.8654511094552,
        y: 1271.6488491793261,
      },
    },
    {
      id: "28e60590-1c1f-11ec-b994-3733cedb813a",
      source: "1616a730-1c1f-11ec-b994-3733cedb813a",
      sourceHandle: "yes",
      target: "232390a0-1c1f-11ec-b994-3733cedb813a",
      targetHandle: null,
      style: {
        stroke: "rgba(85,136,38,0.75)",
        strokeWidth: 3,
      },
      animated: true,
    },
    {
      id: "2a2f0050-1c1f-11ec-b994-3733cedb813a",
      source: "1616a730-1c1f-11ec-b994-3733cedb813a",
      sourceHandle: "no",
      target: "249cea30-1c1f-11ec-b994-3733cedb813a",
      targetHandle: null,
      style: {
        stroke: "rgba(163,1,8,0.75)",
        strokeWidth: 3,
      },
      animated: true,
    },
    {
      id: "34f9c1f0-1c1f-11ec-b994-3733cedb813a",
      type: "Rect_YesNo",
      data: {
        selected: "_QHKR",
      },
      position: {
        x: 631.2858355836223,
        y: 1082.7248528998734,
      },
    },
    {
      id: "3b0fd520-1c1f-11ec-b994-3733cedb813a",
      source: "66ca18c5-1c1e-11ec-a9a4-e3a765f690ba",
      sourceHandle: null,
      target: "34f9c1f0-1c1f-11ec-b994-3733cedb813a",
      targetHandle: "in",
      style: {
        stroke: "rgba(29,29,29,0.75)",
        strokeWidth: 3,
      },
      animated: true,
    },
    {
      id: "3f8dbc20-1c1f-11ec-b994-3733cedb813a",
      type: "Rect_YesNo",
      data: {
        selected: "QReturn2HK",
      },
      position: {
        x: 432.90582833613473,
        y: 1301.1214587978363,
      },
    },
    {
      id: "459b1cc0-1c1f-11ec-b994-3733cedb813a",
      source: "34f9c1f0-1c1f-11ec-b994-3733cedb813a",
      sourceHandle: "yes",
      target: "3f8dbc20-1c1f-11ec-b994-3733cedb813a",
      targetHandle: "in",
      style: {
        stroke: "rgba(85,136,38,0.75)",
        strokeWidth: 3,
      },
      animated: true,
    },
    {
      id: "5abd1db0-1c1f-11ec-b994-3733cedb813a",
      type: "Tube_End",
      data: {
        selected: "Req6",
      },
      position: {
        x: 199.17439357559303,
        y: 1515.6314053243445,
      },
    },
    {
      id: "6132b600-1c1f-11ec-b994-3733cedb813a",
      source: "3f8dbc20-1c1f-11ec-b994-3733cedb813a",
      sourceHandle: "yes",
      target: "5abd1db0-1c1f-11ec-b994-3733cedb813a",
      targetHandle: null,
      style: {
        stroke: "rgba(85,136,38,0.75)",
        strokeWidth: 3,
      },
      animated: true,
    },
    {
      id: "65ce5e30-1c1f-11ec-b994-3733cedb813a",
      type: "Rect_YesNo",
      data: {
        selected: "QVaccinated",
      },
      position: {
        x: 640.4549406632235,
        y: 1482.4618621252657,
      },
    },
    {
      id: "6d0b8c40-1c1f-11ec-b994-3733cedb813a",
      source: "3f8dbc20-1c1f-11ec-b994-3733cedb813a",
      sourceHandle: "no",
      target: "65ce5e30-1c1f-11ec-b994-3733cedb813a",
      targetHandle: "in",
      style: {
        stroke: "rgba(163,1,8,0.75)",
        strokeWidth: 3,
      },
      animated: true,
    },
    {
      id: "6ee24810-1c1f-11ec-b994-3733cedb813a",
      source: "34f9c1f0-1c1f-11ec-b994-3733cedb813a",
      sourceHandle: "no",
      target: "65ce5e30-1c1f-11ec-b994-3733cedb813a",
      targetHandle: "in",
      style: {
        stroke: "rgba(163,1,8,0.75)",
        strokeWidth: 3,
      },
      animated: true,
    },
    {
      id: "6ff27f90-1c1f-11ec-b994-3733cedb813a",
      type: "Tube_End",
      data: {
        selected: "Req7",
      },
      position: {
        x: 490.86180906540494,
        y: 1699.3618368205157,
      },
    },
    {
      id: "70740ba0-1c1f-11ec-b994-3733cedb813a",
      type: "Tube_End",
      data: {
        selected: "Req8",
      },
      position: {
        x: 844.109596038548,
        y: 1705.0966892094382,
      },
    },
    {
      id: "78f9e650-1c1f-11ec-b994-3733cedb813a",
      source: "65ce5e30-1c1f-11ec-b994-3733cedb813a",
      sourceHandle: "yes",
      target: "6ff27f90-1c1f-11ec-b994-3733cedb813a",
      targetHandle: null,
      style: {
        stroke: "rgba(85,136,38,0.75)",
        strokeWidth: 3,
      },
      animated: true,
    },
    {
      id: "7a105f60-1c1f-11ec-b994-3733cedb813a",
      source: "65ce5e30-1c1f-11ec-b994-3733cedb813a",
      sourceHandle: "no",
      target: "70740ba0-1c1f-11ec-b994-3733cedb813a",
      targetHandle: null,
      style: {
        stroke: "rgba(163,1,8,0.75)",
        strokeWidth: 3,
      },
      animated: true,
    },
  ],
};

module.exports = doc;