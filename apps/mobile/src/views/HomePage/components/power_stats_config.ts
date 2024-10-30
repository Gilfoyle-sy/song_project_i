export const _monthConfig = {
  theme: '',
  customPalette: [],
  style: {
    fontFamily: 'inherit',
    backgroundColor: '#FFFFFF',
    animation: { show: true, animationFrames: 60 },
    bar: { gradient: { show: false, intensity: 40, underlayerColor: '#FFFFFF' } },
    legend: {
      show: true,
      textAlign: 'left',
      fontSize: 12,
      margin: '6px 0 0 0',
      name: { color: '#1A1A1A', bold: false },
      value: {
        show: false,
        bold: false,
        color: '#1A1A1A',
        prefix: '',
        suffix: '',
        rounding: 0,
        formatter: null
      },
      percentage: { show: true, bold: true, color: '#1A1A1A', rounding: 1 }
    },
    title: {
      text: '本月统计',
      color: '#1A1A1A',
      fontSize: 16,
      bold: true,
      textAlign: 'left',
      paddingLeft: 0,
      paddingRight: 0,
      subtitle: { color: '#A1A1A1', text: '', fontSize: 12, bold: false },
      margin: '0 0 6px 0'
    }
  }
}

export const _yearConfig = {
  theme: '',
  customPalette: [],
  style: {
    fontFamily: 'inherit',
    backgroundColor: '#FFFFFF',
    animation: { show: true, animationFrames: 60 },
    bar: { gradient: { show: false, intensity: 40, underlayerColor: '#FFFFFF' } },
    legend: {
      show: true,
      textAlign: 'left',
      fontSize: 12,
      margin: '6px 0 0 0',
      name: { color: '#1A1A1A', bold: false },
      value: {
        show: false,
        bold: false,
        color: '#1A1A1A',
        prefix: '',
        suffix: '',
        rounding: 0,
        formatter: null
      },
      percentage: { show: true, bold: true, color: '#1A1A1A', rounding: 1 }
    },
    title: {
      text: '全年统计',
      color: '#1A1A1A',
      fontSize: 16,
      bold: true,
      textAlign: 'left',
      paddingLeft: 0,
      paddingRight: 0,
      subtitle: { color: '#A1A1A1', text: '', fontSize: 12, bold: false },
      margin: '0 0 6px 0'
    }
  }
}
