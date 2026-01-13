// 使用 Vite 的 import.meta.glob 来导入所有图片和视频资源
const modules = import.meta.glob('./*.{png,jpg,jpeg,gif,webm,mp4}', { 
  eager: true, 
  as: 'url' 
});

// 将导入的模块转换为更易用的对象格式
export default Object.keys(modules).reduce((acc, key) => {
  // 从路径中提取文件名
  const name = key.replace('./', '');
  acc[name] = modules[key];
  return acc;
}, {} as Record<string, string>);
