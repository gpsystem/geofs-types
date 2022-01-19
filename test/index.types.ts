import { Definition } from "../typings/geofs/aircraftDefinition";

const definition: Definition = [
  {
    mass: 60000,
    dragFactor: 4.8,
    gearTravelTime: 9,
    flapsTravelTime: 3,
    flapsSteps: 8,
    flapsPositions: [0, 1, 2, 5, 10, 15, 25, 30, 40],
    airbrakesTravelTime: 0.5,
    reverse: true,
    cockpitShadowMapMaxDistance: 50,
    zeroRPMAltitude: 90000,
    minRPM: 1000,
    maxRPM: 10000,
    driveRatio: 0.25,
    engineInertia: 1,
    startupTime: 15,
    shutdownTime: 30,
    startAltitude: 3.1,
    startTilt: 2,
    minimumSpeed: 200,
    autopilot: {
      pitchAnglePID: [0.02, 0.002, 0.08],
      elevatorPitchPID: [0.02, 0.001, 0.0000001],
      bankAnglePID: [0.1, 0.001, 0.01],
      aileronsRollPID: [0.1, 0.001, 0.0000001],
      throttlePID: [0.1, 0, 0],
    },
    instruments: {
      airspeedJet: {
        animations: [
          {
            value: "view",
            type: "show",
            notEq: "cockpit",
          },
        ],
      },
      attitudeJet: {
        animations: [
          {
            value: "view",
            type: "show",
            notEq: "cockpit",
          },
        ],
      },
      altitude: {
        animations: [
          {
            value: "view",
            type: "show",
            notEq: "cockpit",
          },
        ],
      },
      varioJet: {
        animations: [
          {
            value: "view",
            type: "show",
            notEq: "cockpit",
          },
        ],
      },
      compass: {
        animations: [
          {
            value: "view",
            type: "show",
            notEq: "cockpit",
          },
        ],
      },
      rpmJet: {
        animations: [
          {
            value: "view",
            type: "show",
            notEq: "cockpit",
          },
        ],
      },
      spoilers: "",
      brakes: "",
      gear: "",
      flaps: "",
      pfd: {
        overlay: {
          url: "images/instruments/a380pfd/a380pfd.png",
          size: {
            x: 200,
            y: 200,
          },
          anchor: {
            x: 256,
            y: 256,
          },
          position: {
            x: 0,
            y: 0,
          },
          drawOrder: 1,
          rescale: true,
          rescalePosition: true,
          overlays: [
            {
              animations: [
                {
                  type: "rotate",
                  value: "aroll",
                  ratio: -1,
                  min: -180,
                  max: 180,
                },
                {
                  type: "translateY",
                  value: "atilt",
                  ratio: -2,
                  offset: 330,
                  min: -90,
                  max: 90,
                },
              ],
              url: "images/instruments/attitude-jet-hand.png",
              anchor: {
                x: 100,
                y: 70,
              },
              size: {
                x: 180,
                y: null,
              },
              position: {
                x: -16,
                y: 8,
              },
              drawOrder: 0,
              iconFrame: {
                x: 200,
                y: 140,
              },
            },
            {
              animations: [
                {
                  type: "translateY",
                  value: "kias",
                  ratio: 2.1,
                  offset: 0,
                  min: 0,
                  max: 1200,
                },
              ],
              url: "images/instruments/a380pfd/kias.png",
              anchor: {
                x: 0,
                y: 100,
              },
              size: {
                x: 30,
                y: 100,
              },
              position: {
                x: -98,
                y: 14,
              },
              iconFrame: {
                x: 40,
                y: 170,
              },
              drawOrder: 1,
            },
            {
              animations: [
                {
                  type: "translateY",
                  function:
                    "{return geofs.animation.values['altThousands'] = geofs.animation.values['altitude'] % 10000}",
                  ratio: 0.2385,
                  offset: 260,
                  min: 0,
                  max: 100000,
                },
              ],
              url: "images/instruments/a380pfd/altitude.png",
              anchor: {
                x: 0,
                y: 0,
              },
              size: {
                x: 15,
                y: null,
              },
              position: {
                x: 51,
                y: -44,
              },
              iconFrame: {
                x: 32,
                y: 220,
              },
              drawOrder: 1,
            },
            {
              animations: [
                {
                  type: "translateY",
                  value: "altThousands",
                  ratio: 0.238,
                  offset: 75,
                  min: 0,
                  max: 100000,
                },
                {
                  type: "translateX",
                  function:
                    "{return Math.floor(geofs.animation.values['altitude'] % 100000 / 10000); }",
                  ratio: -22.7,
                  min: 0,
                  max: 100000,
                },
              ],
              name: "altten",
              url: "images/instruments/a380pfd/altitudetens.png",
              anchor: {
                x: 0,
                y: 0,
              },
              size: {
                x: 100,
                y: null,
              },
              position: {
                x: 47,
                y: -44,
              },
              iconFrame: {
                x: 10,
                y: 220,
              },
              drawOrder: 1,
            },
            {
              animations: [
                {
                  type: "rotate",
                  function:
                    "{geofs.animation.values['climbrateABS'] = Math.abs(geofs.animation.values['climbrate']); geofs.animation.values['climbrateLog'] = Math.sign(geofs.animation.values['climbrate']) * Math.log(geofs.animation.values['climbrateABS']); return geofs.animation.values['climbrateLog']}",
                  ratio: -8.6,
                  offset: 0,
                  min: -8.7,
                  max: 8.7,
                },
                {
                  type: "scaleX",
                  value: "climbrateABS",
                  ratio: 0.005,
                  offset: 0,
                  min: 1500,
                  max: 5000,
                },
                {
                  type: "moveY",
                  value: "climbrateLog",
                  ratio: 3.8,
                  offset: 0,
                  min: -8.7,
                  max: 8.7,
                },
              ],
              url: "images/instruments/a380pfd/vario.png",
              anchor: {
                x: 50,
                y: 2,
              },
              size: {
                x: 10,
                y: 2,
              },
              position: {
                x: 90,
                y: 7,
              },
              drawOrder: 1,
            },
            {
              url: "images/instruments/a380pfd/altitude-mask.png",
              anchor: {
                x: 0,
                y: 0,
              },
              size: {
                x: 30,
                y: null,
              },
              position: {
                x: 43,
                y: -1,
              },
              drawOrder: 1,
            },
            {
              animations: [
                {
                  type: "translateY",
                  function: "{return geofs.animation.values['altitude'] % 100}",
                  ratio: 0.83,
                  offset: 0,
                },
              ],
              url: "images/instruments/a380pfd/tenfeet.png",
              anchor: {
                x: 0,
                y: 0,
              },
              size: {
                x: 9,
                y: null,
              },
              position: {
                x: 62,
                y: 1,
              },
              iconFrame: {
                x: 20,
                y: 35,
              },
              drawOrder: 2,
            },
            {
              animations: [
                {
                  type: "translateY",
                  function:
                    "{return Math.floor(geofs.animation.values['altitude'] % 1000 / 100)}",
                  ratio: 23,
                  offset: 5,
                },
              ],
              url: "images/instruments/a380pfd/digits.png",
              anchor: {
                x: 0,
                y: 0,
              },
              size: {
                x: 6,
                y: null,
              },
              position: {
                x: 55,
                y: 2,
              },
              iconFrame: {
                x: 11,
                y: 23,
              },
              drawOrder: 2,
            },
            {
              animations: [
                {
                  type: "translateY",
                  function:
                    "{return Math.floor(geofs.animation.values['altitude'] % 10000 / 1000)}",
                  ratio: 23,
                  offset: 5,
                },
              ],
              url: "images/instruments/a380pfd/digits.png",
              anchor: {
                x: 0,
                y: 0,
              },
              size: {
                x: 6,
                y: null,
              },
              position: {
                x: 50,
                y: 2,
              },
              iconFrame: {
                x: 11,
                y: 23,
              },
              drawOrder: 2,
            },
            {
              animations: [
                {
                  type: "translateY",
                  function:
                    "{return Math.floor(geofs.animation.values['altitude'] % 100000 / 10000)}",
                  ratio: 23,
                  offset: 5,
                },
              ],
              url: "images/instruments/a380pfd/digits.png",
              anchor: {
                x: 0,
                y: 0,
              },
              size: {
                x: 6,
                y: null,
              },
              position: {
                x: 45,
                y: 2,
              },
              iconFrame: {
                x: 11,
                y: 23,
              },
              drawOrder: 2,
            },
            {
              animations: [
                {
                  type: "translateX",
                  value: "heading360",
                  ratio: -2.64,
                  offset: 0,
                },
              ],
              url: "images/instruments/a380pfd/compass.png",
              anchor: {
                x: 0,
                y: 0,
              },
              size: {
                x: 600,
                y: null,
              },
              position: {
                x: -60,
                y: -87,
              },
              iconFrame: {
                x: 160,
                y: 25,
              },
              drawOrder: 1,
            },
          ],
        },
        cockpit: {
          position: [-0.51, 15.2, 0.94],
          scale: 1.1,
        },
        animations: [
          {
            value: "view",
            type: "show",
            eq: "cockpit",
          },
        ],
      },
    },
    parts: [
      {
        name: "root",
        type: "root",
        position: [0, -1, 0],
        model: "737.gltf",
        textures: [
          {
            index: 3,
            filename: "texture_",
          },
        ],
        animations: [
          {
            type: "justhide",
            value: "view",
            eq: "cockpit",
          },
        ],
      },
      {
        name: "body",
        type: "airfoil",
        position: [0, 0, 0],
        area: 30,
        forceDirection: "X",
        points: {
          forceSourcePoint: [0, 10, 0],
        },
        buoyancy: 60000,
        collisionPoints: [
          [0, -15, 9.8],
          [-17.2, -4.2, 1.1],
          [17.2, -4.2, 1.1],
          [-5.7, 5, -2.1],
          [5.7, 5, -2.1],
          [-7.3, -17, 2.4],
          [7.3, -17, 2.4],
          [0, 17.2, 0],
          [0, -10, -0.5],
        ],
      },
      {
        name: "leftwing",
        type: "airfoil",
        node: "wingLeft0",
        position: null,
        area: 62,
        forceDirection: "Z",
        points: {
          forceSourcePoint: [-7, 3, -1],
        },
        stallIncidence: 11,
        zeroLiftIncidence: 12,
        rotation: [-2, -5, 0],
        stalls: true,
        animations: [
          {
            type: "rotate",
            axis: "Y",
            function:
              "{return geofs.aircraft.instance.parts['leftwing'].lift;}",
            ratio: -0.000005,
            offset: 3,
            fmax: 1,
            fmin: -5,
          },
        ],
      },
      {
        name: "leftwing1",
        type: "none",
        node: "wingLeft1",
        animations: [
          {
            type: "rotate",
            axis: "Y",
            function:
              "{return geofs.aircraft.instance.parts['leftwing'].lift;}",
            ratio: -0.000006,
            offset: 2,
            fmax: 2,
            fmin: -5,
          },
        ],
      },
      {
        name: "leftwing2",
        type: "none",
        node: "wingLeft2",
        animations: [
          {
            type: "rotate",
            axis: "Y",
            function:
              "{return geofs.aircraft.instance.parts['leftwing'].lift;}",
            ratio: -0.000007,
            offset: 1,
            fmax: 3,
            fmin: -5,
          },
        ],
      },
      {
        name: "aileron_left",
        type: "airfoil",
        node: "aileron_left",
        area: 4,
        position: [-14, -3, 1],
        forceDirection: "Z",
        points: {
          forceSourcePoint: [0, 0, 0],
        },
        animations: [
          {
            type: "rotate",
            axis: "X",
            value: "roll",
            ratio: -30,
          },
        ],
      },
      {
        name: "outboard_flap_left_1",
        type: "airfoil",
        node: "outboard_flap_left_1",
        area: 17,
        forceDirection: "Z",
        points: {
          forceSourcePoint: [0, 4, -2],
        },
        animations: [
          {
            type: "rotate",
            axis: "X",
            value: "flapsPosition",
            ratio: -0.6,
          },
          {
            type: "translate",
            axis: "Y",
            value: "flapsPosition",
            ratio: -0.0025,
          },
          {
            type: "translate",
            axis: "Z",
            value: "flapsPosition",
            ratio: -0.0003,
          },
        ],
      },
      {
        name: "outboard_flap_left_2",
        node: "outboard_flap_left_2",
        animations: [
          {
            type: "rotate",
            axis: "X",
            value: "flapsPosition",
            ratio: -0.6,
          },
          {
            type: "translate",
            axis: "Y",
            value: "flapsPosition",
            ratio: -0.0012,
          },
        ],
      },
      {
        name: "flap_faring_left_1",
        node: "flap_faring_left_1",
        animations: [
          {
            type: "rotate",
            axis: "X",
            value: "flapsPosition",
            ratio: -0.7,
          },
        ],
      },
      {
        name: "flap_faring_left_2",
        node: "flap_faring_left_2",
        animations: [
          {
            type: "rotate",
            axis: "X",
            value: "flapsPosition",
            ratio: -0.7,
          },
        ],
      },
      {
        name: "inboard_flap_left_1",
        node: "inboard_flap_left_1",
        animations: [
          {
            type: "rotate",
            axis: "X",
            value: "flapsPosition",
            ratio: -0.6,
          },
          {
            type: "translate",
            axis: "Y",
            value: "flapsPosition",
            ratio: -0.0025,
          },
          {
            type: "translate",
            axis: "Z",
            value: "flapsPosition",
            ratio: -0.0003,
          },
        ],
      },
      {
        name: "inboard_flap_left_2",
        node: "inboard_flap_left_2",
        animations: [
          {
            type: "rotate",
            axis: "X",
            value: "flapsPosition",
            ratio: -0.6,
          },
          {
            type: "translate",
            axis: "Y",
            value: "flapsPosition",
            ratio: -0.0012,
          },
        ],
      },
      {
        name: "flap_faring_left_3",
        node: "flap_faring_left_3",
        animations: [
          {
            type: "rotate",
            axis: "X",
            value: "flapsPosition",
            ratio: -0.4,
          },
        ],
      },
      {
        name: "slat_left",
        node: "slat_left",
        animations: [
          {
            type: "rotate",
            axis: "X",
            value: "flapsPosition",
            ratio: 0.7,
          },
          {
            type: "translate",
            axis: "Y",
            value: "flapsPosition",
            ratio: 0.0014,
          },
        ],
      },
      {
        name: "slat_left1",
        node: "slat_left1",
        animations: [
          {
            type: "rotate",
            axis: "X",
            value: "flapsPosition",
            ratio: 0.7,
          },
          {
            type: "translate",
            axis: "Y",
            value: "flapsPosition",
            ratio: 0.0014,
          },
        ],
      },
      {
        name: "kreuger_left_1",
        node: "kreuger_left_1",
        animations: [
          {
            type: "rotate",
            axis: "X",
            value: "flapsPosition",
            ratio: -100,
            fmin: -100,
          },
        ],
      },
      {
        name: "spoiler_left_airfoil",
        type: "airfoil",
        liftFactor: 0,
        dragFactor: 15,
        forceDirection: "Z",
        position: [-7, -1, 0],
        points: {
          forceSourcePoint: [0, 0, 0],
        },
        animations: [
          {
            type: "rotate",
            axis: "X",
            value: "airbrakesPosition",
            ratio: 90,
          },
        ],
      },
      {
        name: "spoiler_left_1",
        node: "spoiler_left_1",
        animations: [
          {
            type: "rotate",
            axis: "X",
            value: "airbrakesPosition",
            ratio: -65,
          },
        ],
      },
      {
        name: "spoiler_left_2",
        node: "spoiler_left_2",
        animations: [
          {
            type: "rotate",
            axis: "X",
            value: "airbrakesPosition",
            ratio: -45,
          },
        ],
      },
      {
        name: "spoiler_left_3",
        node: "spoiler_left_3",
        animations: [
          {
            type: "rotate",
            axis: "X",
            value: "airbrakesPosition",
            ratio: -50,
          },
          {
            type: "rotate",
            axis: "X",
            value: "roll",
            ratio: 15,
            negthreshold: -0.2,
          },
        ],
      },
      {
        name: "spoiler_left_4",
        node: "spoiler_left_4",
        animations: [
          {
            type: "rotate",
            axis: "X",
            value: "airbrakesPosition",
            ratio: -50,
          },
          {
            type: "rotate",
            axis: "X",
            value: "roll",
            ratio: 15,
            negthreshold: -0.2,
          },
        ],
      },
      {
        name: "spoiler_left_5",
        node: "spoiler_left_5",
        animations: [
          {
            type: "rotate",
            axis: "X",
            value: "airbrakesPosition",
            ratio: -50,
          },
          {
            type: "rotate",
            axis: "X",
            value: "roll",
            ratio: 20,
            negthreshold: -0.4,
          },
        ],
      },
      {
        name: "spoiler_left_6",
        node: "spoiler_left_6",
        animations: [
          {
            type: "rotate",
            axis: "X",
            value: "airbrakesPosition",
            ratio: 50,
          },
        ],
      },
      {
        name: "spoileractu_left_1",
        node: "spoileractu_left_1",
        animations: [
          {
            type: "rotate",
            axis: "X",
            value: "airbrakesPosition",
            ratio: 65,
          },
        ],
      },
      {
        name: "spoileractu_left_2",
        node: "spoileractu_left_2",
        animations: [
          {
            type: "rotate",
            axis: "X",
            value: "airbrakesPosition",
            ratio: 45,
          },
        ],
      },
      {
        name: "rightwing",
        type: "airfoil",
        node: "wingRight0",
        area: 62,
        forceDirection: "Z",
        points: {
          forceSourcePoint: [7, 3, -1],
        },
        stallIncidence: 11,
        zeroLiftIncidence: 12,
        rotation: [-2, 5, 0],
        stalls: true,
        animations: [
          {
            type: "rotate",
            axis: "Y",
            function:
              "{return geofs.aircraft.instance.parts['rightwing'].lift;}",
            ratio: 0.000005,
            offset: -3,
            fmax: 5,
            fmin: -1,
          },
        ],
      },
      {
        name: "rightwing1",
        type: "none",
        node: "wingRight1",
        animations: [
          {
            type: "rotate",
            axis: "Y",
            function:
              "{return geofs.aircraft.instance.parts['rightwing'].lift;}",
            ratio: 0.000006,
            offset: -2,
            fmax: 5,
            fmin: -2,
          },
        ],
      },
      {
        name: "rightwing2",
        type: "none",
        node: "wingRight2",
        animations: [
          {
            type: "rotate",
            axis: "Y",
            function:
              "{return geofs.aircraft.instance.parts['rightwing'].lift;}",
            ratio: 0.000007,
            offset: -1,
            fmax: 5,
            fmin: -3,
          },
        ],
      },
      {
        name: "aileron_right",
        type: "airfoil",
        node: "aileron_right",
        area: 4,
        position: [14, -3, 1],
        forceDirection: "Z",
        points: {
          forceSourcePoint: [0, 0, 0],
        },
        animations: [
          {
            type: "rotate",
            axis: "X",
            value: "roll",
            ratio: 30,
          },
        ],
      },
      {
        name: "outboard_flap_right_1",
        type: "airfoil",
        node: "outboard_flap_right_1",
        area: 17,
        forceDirection: "Z",
        points: {
          forceSourcePoint: [0, 4, -2],
        },
        animations: [
          {
            type: "rotate",
            axis: "X",
            value: "flapsPosition",
            ratio: -0.6,
          },
          {
            type: "translate",
            axis: "Y",
            value: "flapsPosition",
            ratio: -0.0025,
          },
          {
            type: "translate",
            axis: "Z",
            value: "flapsPosition",
            ratio: -0.0003,
          },
        ],
      },
      {
        name: "outboard_flap_right_2",
        node: "outboard_flap_right_2",
        animations: [
          {
            type: "rotate",
            axis: "X",
            value: "flapsPosition",
            ratio: -0.6,
          },
          {
            type: "translate",
            axis: "Y",
            value: "flapsPosition",
            ratio: -0.0012,
          },
        ],
      },
      {
        name: "flap_faring_right_1",
        node: "flap_faring_right_1",
        animations: [
          {
            type: "rotate",
            axis: "X",
            value: "flapsPosition",
            ratio: -0.7,
          },
        ],
      },
      {
        name: "flap_faring_right_2",
        node: "flap_faring_right_2",
        animations: [
          {
            type: "rotate",
            axis: "X",
            value: "flapsPosition",
            ratio: -0.7,
          },
        ],
      },
      {
        name: "inboard_flap_right_1",
        node: "inboard_flap_right_1",
        animations: [
          {
            type: "rotate",
            axis: "X",
            value: "flapsPosition",
            ratio: -0.6,
          },
          {
            type: "translate",
            axis: "Y",
            value: "flapsPosition",
            ratio: -0.0025,
          },
          {
            type: "translate",
            axis: "Z",
            value: "flapsPosition",
            ratio: -0.0003,
          },
        ],
      },
      {
        name: "inboard_flap_right_2",
        node: "inboard_flap_right_2",
        animations: [
          {
            type: "rotate",
            axis: "X",
            value: "flapsPosition",
            ratio: -0.6,
          },
          {
            type: "translate",
            axis: "Y",
            value: "flapsPosition",
            ratio: -0.0012,
          },
        ],
      },
      {
        name: "flap_faring_right_3",
        node: "flap_faring_right_3",
        animations: [
          {
            type: "rotate",
            axis: "X",
            value: "flapsPosition",
            ratio: -0.4,
          },
        ],
      },
      {
        name: "slat_right",
        node: "slat_right",
        animations: [
          {
            type: "rotate",
            axis: "X",
            value: "flapsPosition",
            ratio: 0.7,
          },
          {
            type: "translate",
            axis: "Y",
            value: "flapsPosition",
            ratio: 0.0014,
          },
        ],
      },
      {
        name: "slat_right1",
        node: "slat_right1",
        animations: [
          {
            type: "rotate",
            axis: "X",
            value: "flapsPosition",
            ratio: 0.7,
          },
          {
            type: "translate",
            axis: "Y",
            value: "flapsPosition",
            ratio: 0.0014,
          },
        ],
      },
      {
        name: "kreuger_right_1",
        node: "kreuger_right_1",
        animations: [
          {
            type: "rotate",
            axis: "X",
            value: "flapsPosition",
            ratio: -100,
            fmin: -100,
          },
        ],
      },
      {
        name: "spoiler_right_airfoil",
        type: "airfoil",
        liftFactor: 0,
        dragFactor: 15,
        forceDirection: "Z",
        position: [7, -1, 0],
        points: {
          forceSourcePoint: [0, 0, 0],
        },
        animations: [
          {
            type: "rotate",
            axis: "X",
            value: "airbrakesPosition",
            ratio: 90,
          },
        ],
      },
      {
        name: "spoiler_right_1",
        node: "spoiler_right_1",
        animations: [
          {
            type: "rotate",
            axis: "X",
            value: "airbrakesPosition",
            ratio: -65,
          },
        ],
      },
      {
        name: "spoiler_right_2",
        node: "spoiler_right_2",
        animations: [
          {
            type: "rotate",
            axis: "X",
            value: "airbrakesPosition",
            ratio: -45,
          },
        ],
      },
      {
        name: "spoiler_right_3",
        node: "spoiler_right_3",
        animations: [
          {
            type: "rotate",
            axis: "X",
            value: "airbrakesPosition",
            ratio: -50,
          },
          {
            type: "rotate",
            axis: "X",
            value: "roll",
            ratio: -15,
            threshold: 0.2,
          },
        ],
      },
      {
        name: "spoiler_right_4",
        node: "spoiler_right_4",
        animations: [
          {
            type: "rotate",
            axis: "X",
            value: "airbrakesPosition",
            ratio: -50,
          },
          {
            type: "rotate",
            axis: "X",
            value: "roll",
            ratio: -15,
            threshold: 0.2,
          },
        ],
      },
      {
        name: "spoiler_right_5",
        node: "spoiler_right_5",
        animations: [
          {
            type: "rotate",
            axis: "X",
            value: "airbrakesPosition",
            ratio: -50,
          },
          {
            type: "rotate",
            axis: "X",
            value: "roll",
            ratio: -20,
            threshold: 0.4,
          },
        ],
      },
      {
        name: "spoiler_right_6",
        node: "spoiler_right_6",
        animations: [
          {
            type: "rotate",
            axis: "X",
            value: "airbrakesPosition",
            ratio: 50,
          },
        ],
      },
      {
        name: "spoileractu_right_1",
        node: "spoileractu_right_1",
        animations: [
          {
            type: "rotate",
            axis: "X",
            value: "airbrakesPosition",
            ratio: 65,
          },
        ],
      },
      {
        name: "spoileractu_right_2",
        node: "spoileractu_right_2",
        animations: [
          {
            type: "rotate",
            axis: "X",
            value: "airbrakesPosition",
            ratio: 45,
          },
        ],
      },
      {
        name: "horizontalstab",
        type: "airfoil",
        position: null,
        area: 25,
        forceDirection: "Z",
        points: {
          forceSourcePoint: [0, -15, 1.2],
        },
        rotation: [0, 0, 0],
      },
      {
        name: "verticalstab",
        type: "airfoil",
        position: null,
        area: 25,
        forceDirection: "X",
        points: {
          forceSourcePoint: [0, -11, 3],
        },
      },
      {
        name: "elevator_left",
        type: "airfoil",
        node: "elevator_left",
        area: 4,
        forceDirection: "Z",
        points: {
          forceSourcePoint: [0, -0.3, 0],
        },
        animations: [
          {
            type: "rotate",
            axis: "X",
            value: "pitch",
            ratio: 25,
          },
        ],
      },
      {
        name: "elevator_right",
        type: "airfoil",
        node: "elevator_right",
        area: 4,
        forceDirection: "Z",
        points: {
          forceSourcePoint: [0, -0.3, 0],
        },
        animations: [
          {
            type: "rotate",
            axis: "X",
            value: "pitch",
            ratio: 25,
          },
        ],
      },
      {
        name: "rudder",
        type: "airfoil",
        node: "rudder",
        area: 16,
        forceDirection: "X",
        points: {
          forceSourcePoint: [0, -0.4, 0],
        },
        animations: [
          {
            type: "rotate",
            axis: "Z",
            value: "yaw",
            ratio: -23,
          },
        ],
      },
      {
        name: "gear_left",
        node: "gear_left",
        position: [-3.0229, 0.460219, -0.529798],
        animations: [
          {
            type: "rotate",
            axis: "Y",
            value: "gearPosition",
            ratio: 85,
          },
        ],
      },
      {
        name: "gear_left_suspension",
        type: "wheel",
        node: "gear_left_suspension",
        parent: "gear_left",
        position: [0.0920701, -0.297434, -1.93198],
        collisionPoints: [[0, 0, -0.65]],
        suspension: {
          motion: "translate",
          axis: "Z",
          ratio: 1,
          stiffness: 35,
          damping: 5,
        },
      },
      {
        name: "gear_actuator_left",
        node: "gear_actuator_left",
        animations: [
          {
            type: "rotate",
            axis: "Y",
            value: "gearPosition",
            ratio: 35,
          },
        ],
      },
      {
        name: "gear_actuator_left_2",
        node: "gear_actuator_left_2",
        animations: [
          {
            type: "rotate",
            axis: "Y",
            value: "gearPosition",
            ratio: -180,
          },
        ],
      },
      {
        name: "gear_actuator_left_3",
        node: "gear_actuator_left_3",
        animations: [
          {
            type: "rotate",
            axis: "Y",
            value: "gearPosition",
            ratio: 200,
            fmax: 150,
          },
        ],
      },
      {
        name: "gear_door_left_1",
        node: "gear_door_left_1",
        animations: [
          {
            type: "rotate",
            axis: "Y",
            value: "gearPosition",
            ratio: 83,
          },
        ],
      },
      {
        name: "gear_door_left_2",
        node: "gear_door_left_2",
        animations: [
          {
            type: "rotate",
            axis: "Y",
            value: "gearPosition",
            ratio: 44,
          },
        ],
      },
      {
        name: "gear_door_left_3",
        node: "gear_door_left_3",
        animations: [
          {
            type: "rotate",
            axis: "Y",
            value: "gearPosition",
            ratio: 85,
          },
        ],
      },
      {
        name: "wheels_left",
        type: "none",
        node: "wheels_left",
        animations: [
          {
            type: "rotate",
            axis: "X",
            value: "gear_left_suspensionRotation",
            ratio: 2,
          },
        ],
      },
      {
        name: "gear_right",
        node: "gear_right",
        position: [3.0229, 0.460219, -0.529798],
        animations: [
          {
            type: "rotate",
            axis: "Y",
            value: "gearPosition",
            ratio: -85,
          },
        ],
      },
      {
        name: "gear_right_suspension",
        type: "wheel",
        node: "gear_right_suspension",
        parent: "gear_right",
        position: [-0.0989017, -0.297434, -1.93198],
        collisionPoints: [[0, 0, -0.65]],
        suspension: {
          motion: "translate",
          axis: "Z",
          ratio: 1,
          stiffness: 35,
          damping: 5,
        },
      },
      {
        name: "gear_actuator_right",
        node: "gear_actuator_right",
        animations: [
          {
            type: "rotate",
            axis: "Y",
            value: "gearPosition",
            ratio: -35,
          },
        ],
      },
      {
        name: "gear_actuator_right_2",
        node: "gear_actuator_right_2",
        animations: [
          {
            type: "rotate",
            axis: "Y",
            value: "gearPosition",
            ratio: 180,
          },
        ],
      },
      {
        name: "gear_actuator_right_3",
        node: "gear_actuator_right_3",
        animations: [
          {
            type: "rotate",
            axis: "Y",
            value: "gearPosition",
            ratio: -200,
            fmin: -150,
          },
        ],
      },
      {
        name: "gear_door_right_1",
        node: "gear_door_right_1",
        animations: [
          {
            type: "rotate",
            axis: "Y",
            value: "gearPosition",
            ratio: -83,
          },
        ],
      },
      {
        name: "gear_door_right_2",
        node: "gear_door_right_2",
        animations: [
          {
            type: "rotate",
            axis: "Y",
            value: "gearPosition",
            ratio: -44,
          },
        ],
      },
      {
        name: "gear_door_right_3",
        node: "gear_door_right_3",
        animations: [
          {
            type: "rotate",
            axis: "Y",
            value: "gearPosition",
            ratio: -85,
          },
        ],
      },
      {
        name: "wheels_right",
        type: "none",
        node: "wheels_right",
        animations: [
          {
            type: "rotate",
            axis: "X",
            value: "gear_right_suspensionRotation",
            ratio: -2,
          },
        ],
      },
      {
        name: "nose_leg",
        node: "nose_leg",
        position: [0, 13.3, 0],
        animations: [
          {
            type: "rotate",
            axis: "X",
            value: "gearPosition",
            ratio: -110,
            delay: -0.5,
          },
        ],
      },
      {
        name: "nose_suspension",
        type: "wheel",
        node: "nose_suspension",
        parent: "nose_leg",
        animations: [
          {
            type: "rotate",
            axis: "Z",
            value: "yaw",
            ratio: 30,
          },
        ],
        position: [-0.0530271, 0.0145693, -1.16691],
        collisionPoints: [[0, 0, -1.5]],
        suspension: {
          motion: "translate",
          axis: "Z",
          ratio: 1,
          stiffness: 6,
          damping: 2,
        },
      },
      {
        name: "front_wheels",
        type: "none",
        node: "front_wheels",
        animations: [
          {
            type: "rotate",
            axis: "X",
            value: "nose_suspensionRotation",
            ratio: 4,
          },
        ],
      },
      {
        name: "retract_rod_nose_leg",
        node: "retract_rod_nose_leg",
        animations: [
          {
            type: "rotate",
            axis: "X",
            value: "gearPosition",
            ratio: 110,
            delay: -0.5,
          },
        ],
      },
      {
        name: "front_gear_door_left",
        node: "front_gear_door_left",
        animations: [
          {
            type: "rotate",
            axis: "Y",
            value: "gearPosition",
            ratio: 71,
            delay: 0.5,
          },
        ],
      },
      {
        name: "front_gear_door_right",
        node: "front_gear_door_right",
        animations: [
          {
            type: "rotate",
            axis: "Y",
            value: "gearPosition",
            ratio: -69,
            delay: 0.5,
          },
        ],
      },
      {
        name: "geardrag",
        type: "airfoil",
        position: [0, 0, 0],
        liftFactor: 0,
        dragFactor: 7,
        forceDirection: "Z",
        points: {
          forceSourcePoint: [0, 0, 0],
        },
        animations: [
          {
            type: "rotate",
            frame: "parent",
            axis: "X",
            value: "gearPosition",
            ratio: -90,
          },
        ],
        rotation: [90, 0, 0],
      },
      {
        name: "engine1",
        type: "engine",
        thrust: 120000,
        reverseThrust: 40000,
        forceDirection: "Y",
        contrail: true,
        points: {
          forceSourcePoint: [-5.1, 3, -1.3],
          contrailAnchor: [-5.1, -30, -1.3],
        },
      },
      {
        name: "fan_left",
        node: "fan_left",
        animations: [
          {
            type: "rotate",
            axis: "Y",
            value: "prop",
            ratio: -1,
          },
        ],
      },
      {
        name: "reverse_left",
        node: "reverse_left",
        animations: [
          {
            type: "translate",
            axis: [0, 1, 0],
            value: "thrust",
            min: -50000,
            max: 1,
            ratio: 0.000008,
          },
        ],
      },
      {
        name: "engine2",
        type: "engine",
        thrust: 120000,
        reverseThrust: 40000,
        forceDirection: "Y",
        contrail: true,
        points: {
          forceSourcePoint: [5.1, 3, -1.3],
          contrailAnchor: [5.1, -30, -1.3],
        },
      },
      {
        name: "fan_right",
        node: "fan_right",
        animations: [
          {
            type: "rotate",
            axis: "Y",
            value: "prop",
            ratio: -1,
          },
        ],
      },
      {
        name: "reverse_right",
        node: "reverse_right",
        animations: [
          {
            type: "translate",
            axis: [0, 1, 0],
            value: "thrust",
            min: -50000,
            max: 1,
            ratio: 0.000008,
          },
        ],
      },
      {
        name: "leftlight",
        light: "red",
        animations: [
          {
            type: "show",
            value: "night",
          },
        ],
        position: [-16.8, -5.2, 2],
      },
      {
        name: "rightlight",
        light: "green",
        animations: [
          {
            type: "show",
            value: "night",
          },
        ],
        position: [16.8, -5.2, 2],
      },
      {
        name: "strobe1",
        light: "white",
        animations: [
          {
            type: "show",
            value: "strobe",
          },
        ],
        position: [-17, -3.5, 2],
      },
      {
        name: "strobe2",
        light: "white",
        animations: [
          {
            type: "show",
            value: "strobe",
          },
        ],
        position: [17, -3.5, 2],
      },
      {
        name: "strobe3",
        light: "white",
        animations: [
          {
            type: "show",
            value: "strobe2",
          },
        ],
        position: [0, -15.6, 2.2],
      },
    ],
    contactProperties: {
      wheel: {
        frictionCoef: 5,
        dynamicFriction: 0.01,
        rollingFriction: 0.00001,
        lockSpeed: 0.008,
        damping: 1,
      },
      frame: {
        frictionCoef: 2,
        dynamicFriction: 0.01,
        damping: 1,
      },
      airfoil: {
        frictionCoef: 2,
        dynamicFriction: 0.01,
        damping: 1,
      },
    },
    soundSet: "player",
    sounds: [
      {
        id: "rpm1",
        file: "sounds/737/rpm0.ogg",
        effects: {
          volume: {
            value: "rpm",
            ramp: [800, 950, 2500, 3500],
          },
          pitch: {
            value: "rpm",
            ramp: [0, 20000, 20000, 20000],
            ratio: 1,
            offset: 1,
          },
        },
      },
      {
        id: "rpm2",
        file: "sounds/737/rpm1.ogg",
        effects: {
          volume: {
            value: "rpm",
            ramp: [1000, 2500, 10000, 10000],
          },
          pitch: {
            value: "rpm",
            ramp: [0, 20000, 20000, 20000],
            ratio: 1.5,
            offset: 1,
          },
        },
      },
      {
        id: "rpm3",
        file: "sounds/737/rpm2.ogg",
        effects: {
          volume: {
            value: "rpm",
            ramp: [6000, 20000, 20000, 20000],
          },
          pitch: {
            value: "rpm",
            ramp: [1000, 20000, 20000, 20000],
            ratio: 1,
            offset: 1,
          },
        },
      },
      {
        id: "rolling",
        file: "sounds/tyres/rolling1.ogg",
        fadeDuration: 500,
        effects: {
          volume: {
            value: "rollingSpeed",
            ramp: [0, 50, 1000, 1000],
          },
        },
      },
      {
        id: "touch1",
        file: "sounds/tyres/touch1.ogg",
        effects: {
          start: {
            value: "maxAngularVRatio",
            gt: 300,
          },
        },
      },
      {
        id: "startup",
        file: "sounds/737/startup.ogg",
      },
      {
        id: "shutdown",
        file: "sounds/737/shutdown.ogg",
      },
    ],
    cameras: {
      follow: {
        distance: 60,
      },
      cockpit: {
        offsetBounds: [-0.2, 1, -0.5, 0.5, -0.5, 0.2],
        position: [-0.5, 14.5, 1.3],
        orientation: [0, -12, 0],
        FOV: 1.5,
      },
      "Wheels back": {
        position: [0, -8, -2.5],
        orientation: [0, 0, 0],
      },
      "Wheels front": {
        position: [0, 8, -2.5],
        orientation: [180, 0, 0],
      },
      "Left wing": {
        position: [-2, -3, 1.5],
        orientation: [-80, -10, 0],
      },
      "Right wing": {
        position: [2, -3, 1.5],
        orientation: [80, -10, 0],
      },
      Tail: {
        position: [0, -13, 8],
        orientation: [0, -20, 0],
      },
    },
    cockpitModel: true,
    shadowBox: [20, 18],
  },
];

console.log(definition ? "success" : "fail"); // here to disable unused value
