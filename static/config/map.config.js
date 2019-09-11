(function () {
  /**
 * 地图（天地图）配置文件
 */
  var mapOptions = {
    zoom: 9,
    minZoom: 3,
    maxZoom: 18,
    center: [120.152, 30.285],
    attribution: false,
    spatialReference: {
      projection: 'EPSG:4326'
    },
    zoomControl: {
      position: {
        bottom: 70,
        left: 10
      },
      slider: false,
      zoomLevel: false
    },
    scaleControl: {
      position: {
        bottom: 40,
        left: 10
      },
      maxWidth: 50,
      metric: true,
      imperial: false
    }
  }
  var baseLayers = [
    {
      id: 'vec_c',
      layerType: 'TileLayer',
      tileSystem: [1, -1, -180, 90],
      urlTemplate: 'http://t{s}.tianditu.gov.cn/DataServer?T=vec_c&tk=4f62e1d82bd46e2ff470b291c2260156&x={x}&y={y}&l={z}',
      subdomains: ['1', '2', '3', '4', '5'],
      visible: true,
      crossOrigin: 'anonymous'
    },
    {
      id: 'cva_c',
      layerType: 'TileLayer',
      tileSystem: [1, -1, -180, 90],
      urlTemplate: 'http://t{s}.tianditu.gov.cn/DataServer?T=cva_c&tk=4f62e1d82bd46e2ff470b291c2260156&x={x}&y={y}&l={z}',
      subdomains: ['1', '2', '3', '4', '5'],
      visible: true,
      crossOrigin: 'anonymous'
    },
    {
      id: 'img_c',
      layerType: 'TileLayer',
      tileSystem: [1, -1, -180, 90],
      urlTemplate: 'http://t{s}.tianditu.gov.cn/DataServer?T=img_c&tk=4f62e1d82bd46e2ff470b291c2260156&x={x}&y={y}&l={z}',
      subdomains: ['1', '2', '3', '4', '5'],
      visible: false,
      crossOrigin: 'anonymous'
    },
    {
      id: 'cia_c',
      layerType: 'TileLayer',
      tileSystem: [1, -1, -180, 90],
      urlTemplate: 'http://t{s}.tianditu.gov.cn/DataServer?T=cia_c&tk=4f62e1d82bd46e2ff470b291c2260156&x={x}&y={y}&l={z}',
      subdomains: ['1', '2', '3', '4', '5'],
      visible: false,
      crossOrigin: 'anonymous'
    },
    {
      id: 'ter_c',
      layerType: 'TileLayer',
      tileSystem: [1, -1, -180, 90],
      urlTemplate: 'http://t{s}.tianditu.gov.cn/DataServer?T=ter_c&tk=4f62e1d82bd46e2ff470b291c2260156&x={x}&y={y}&l={z}',
      subdomains: ['1', '2', '3', '4', '5'],
      visible: false,
      crossOrigin: 'anonymous'
    },
    {
      id: 'cta_c',
      layerType: 'TileLayer',
      tileSystem: [1, -1, -180, 90],
      urlTemplate: 'http://t{s}.tianditu.gov.cn/DataServer?T=cta_c&tk=4f62e1d82bd46e2ff470b291c2260156&x={x}&y={y}&l={z}',
      subdomains: ['1', '2', '3', '4', '5'],
      visible: false,
      crossOrigin: 'anonymous'
    }
  ]

  // ----------------------通用部分----------------------------
  var layers = [
    {
      id: 'label_layer',
      layerType: 'VectorLayer'
    },
    {
      id: 'plot_layer',
      layerType: 'VectorLayer'
    },
    {
      id: 'buffer_layer',
      layerType: 'VectorLayer'
    },
    {
      id: 'heat_layer',
      layerType: 'HeatLayer',
      radius: 80,
      blur: 30,
      gradient: { 0.4: 'blue', 0.65: 'lime', 1: 'red' }
    },
    {
      id: 'cluster_layer',
      layerType: 'ClusterLayer',
      noClusterWithOneMarker: true,
      maxClusterZoom: 16,
      symbol: {
        markerType: 'ellipse',
        markerFill: {
          property: 'count',
          type: 'interval',
          stops: [
            [0, 'rgb(0, 115, 206)'],
            [9, 'rgb(0, 115, 206)'],
            [99, 'rgb(0, 115, 206)']
          ]
        },
        markerFillOpacity: 0.7,
        markerLineOpacity: 1,
        markerLineWidth: 1,
        markerLineColor: '#fff',
        markerWidth: {
          property: 'count',
          type: 'interval',
          stops: [[0, 40], [9, 50], [99, 60]]
        },
        markerHeight: {
          property: 'count',
          type: 'interval',
          stops: [[0, 40], [9, 50], [99, 60]]
        }
      },
      textSymbol: {
        'textFill': '#fff',
        'textFaceName': '"microsoft yahei"',
        'textSize': 16,
        'textDx': 0,
        'textDy': 4
      },
      drawClusterText: true,
      geometryEvents: true,
      single: true
    }
  ]
  var services = {
    baseServiceUrl: 'http://106.37.227.20:8081/ntwcf'
  }

  return {
    mapOptions: mapOptions,
    baseLayers: baseLayers,
    layers: layers,
    services: services
  }
})()
