import { useEffect, useRef } from 'react';

export const useScrollAnimation = () => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Intersection Observerの設定（パフォーマンス最適化）
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // クラスを追加するだけ（状態管理なし）
          element.classList.add('is-visible');
          // 一度表示されたら監視を解除
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.05, // より早めにトリガー
        rootMargin: '0px 0px -50px 0px', // 少し早めに表示
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return elementRef;
};

