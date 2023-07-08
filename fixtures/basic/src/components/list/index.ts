type ListProps = {
  source?: any[]
}

Component<{
  classPrefix?: string,
  list?: any[],
}>({
  data: {
    classPrefix: 'dt-list',
    list: [],
  },
  props: {
    source: [],
  } as ListProps,
  deriveDataFromProps(nextProp: ListProps) {
    this.setData({
      list: nextProp.source
    })
  }
})