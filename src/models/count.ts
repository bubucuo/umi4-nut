// 全局共享数据示例
import { useState } from 'react';

const useCount = () => {
  const [count, setCount] = useState<number>(0);
  return {
    count,
    setCount,
  };
};

export default useCount;
