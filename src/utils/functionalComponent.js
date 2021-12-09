export default function functionalComponent(jsx, components) {
  return {
    components,
    render() {
      return jsx;
    },
  };
}
