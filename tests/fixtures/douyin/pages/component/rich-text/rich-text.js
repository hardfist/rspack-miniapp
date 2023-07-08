const htmlSnip = `<div class="div_class">
  <h1>Title</h1>
  <p class="p">
    Life is&nbsp;<i>like</i>&nbsp;a box of
    <b>&nbsp;chocolates</b>.
  </p>
</div>
`;
const nodes = [{
  name: 'div',
  attrs: {
    class: 'div_class',
    style: 'line-height: 60px; color: red;'
  },
  children: [{
    type: 'text',
    text: 'You never know what you\'re gonna get.'
  }]
}];
const nodeSnip = `Page({
  data: {
    nodes: ${JSON.stringify(nodes, null, 2)}
  }
})
`;
Page({
  data: {
    htmlSnip,
    nodeSnip,
    renderedByHtml: false,
    renderedByNode: false,
    nodes
  },

  renderHtml() {
    this.setData({
      renderedByHtml: true
    });
  },

  renderNode() {
    this.setData({
      renderedByNode: true
    });
  },

});