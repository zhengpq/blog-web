export const transforType = (type) => {
  switch (type) {
    case 'reprint':
      return '转载'
    case 'translate':
      return '翻译'
    default:
      return '原创'
  }
}