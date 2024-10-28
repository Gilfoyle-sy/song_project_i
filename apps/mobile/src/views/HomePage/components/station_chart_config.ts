export const stationData = {
  responsive: false,
  theme: 'hack',
  customPalette: [],
  useCssAnimation: true,
  useBlurOnHover: true,
  userOptions: {
    show: false,
    buttons: {
      tooltip: false,
      pdf: false,
      csv: false,
      img: false,
      table: false,
      labels: false,
      fullscreen: false,
      sort: false,
      stack: false,
      animation: false
    },
    buttonTitles: {
      open: 'Open options',
      close: 'Close options',
      tooltip: 'Toggle tooltip',
      pdf: 'Download PDF',
      csv: 'Download CSV',
      img: 'Download PNG',
      table: 'Toggle table',
      labels: 'Toggle labels',
      fullscreen: 'Toggle fullscreen'
    }
  },
  translations: { total: 'Total', average: 'Average' },
  table: {
    show: false,
    responsiveBreakpoint: 400,
    th: { backgroundColor: '#FFFFFF', color: '#1A1A1A', outline: 'none' },
    td: {
      backgroundColor: '#FFFFFF',
      color: '#1A1A1A',
      outline: 'none',
      roundingValue: 0,
      roundingPercentage: 0
    },
    columnNames: { series: 'Series', value: 'Value', percentage: 'Percentage' }
  },
  style: {
    fontFamily: 'inherit',
    chart: {
      useGradient: false,
      gradientIntensity: '0',
      backgroundColor: '#ffffff',
      color: '#1A1A1A',
      layout: {
        labels: {
          dataLabels: {
            show: true,
            useLabelSlots: false,
            hideUnderValue: 0,
            prefix: '',
            suffix: ''
          },
          value: { rounding: 0, show: true, formatter: null },
          percentage: { color: '#1A1A1A', bold: false, fontSize: 16, rounding: 0, formatter: null },
          name: { color: '#1A1A1A', bold: false, fontSize: 15 },
          hollow: {
            show: true,
            total: {
              show: true,
              bold: false,
              fontSize: 15,
              color: '#AAAAAA',
              text: '电站数量',
              offsetY: -6,
              value: {
                color: '#1A1A1A',
                fontSize: 24,
                bold: true,
                suffix: '',
                prefix: '',
                offsetY: 8,
                rounding: 0,
                formatter: null
              }
            },
            average: {
              show: false,
              bold: false,
              fontSize: 18,
              color: '#AAAAAA',
              text: 'Average',
              offsetY: 0,
              value: {
                color: '#1A1A1A',
                fontSize: 18,
                bold: true,
                suffix: '',
                prefix: '',
                offsetY: 0,
                rounding: 0,
                formatter: null
              }
            }
          }
        },
        donut: { strokeWidth: '52', borderWidth: '4', useShadow: true, shadowColor: '#2083df' }
      },
      comments: { show: true, showInTooltip: true, width: 100, offsetY: 0, offsetX: 0 },
      legend: {
        show: true,
        bold: false,
        backgroundColor: '#FFFFFF',
        color: '#1A1A1A',
        fontSize: 12,
        roundingValue: 0,
        roundingPercentage: 0
      },
      tooltip: {
        show: true,
        color: '#1A1A1A',
        backgroundColor: '#ffffff',
        fontSize: 14,
        customFormat: null,
        borderRadius: 4,
        borderColor: '#e1e5e8',
        borderWidth: 1,
        backgroundOpacity: 100,
        position: 'center',
        offsetY: 24,
        showValue: true,
        showPercentage: true,
        roundingValue: 0,
        roundingPercentage: 0
      },
      title: {
        text: '',
        color: '#1A1A1A',
        fontSize: 20,
        bold: true,
        textAlign: 'center',
        paddingLeft: 0,
        paddingRight: 0,
        subtitle: { color: '#A1A1A1', text: '', fontSize: 16, bold: false }
      }
    }
  }
}
