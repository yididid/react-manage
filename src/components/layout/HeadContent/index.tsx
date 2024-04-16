import { useEffect } from 'react';
 
const DynamicMeta = ({name}:{name:string}, {content}:{content:string}) => {
  useEffect(() => {
    // 创建meta元素
    const meta = document.createElement('meta');
    meta.setAttribute('name', name);
    meta.setAttribute('content', content);
 
    // 将meta元素添加到head中
    document.head.appendChild(meta);
 
    // 清理函数，组件卸载时移除meta元素
    return () => {
      document.head.removeChild(meta);
    };
  }, [name, content]); // 依赖项数组，空数组意味着只在组件挂载时运行一次
 
  return null; // 因为我们不渲染任何内容，所以返回null
};
 
export default DynamicMeta;