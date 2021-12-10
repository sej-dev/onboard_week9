/**
 * @param {jsx} 렌더링할 jsx
 * @returns {object} 컴포넌트의 option 객체
 */
export default function functionalComponent(jsx) {
  return {
    render() {
      return jsx;
    },
  };
}
