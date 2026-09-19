import React from 'react';
import styles from './styles.module.css';

/**
 * Badge-Small
 * Figma 325:21447 · 3 variants — 명세: components/06-indicators/badge-small.md
 *
 * ⚠️ `gray` variant는 --label-normal(#525256)을 사용합니다. Badge-Medium의
 *    gray(--status-neutral-label #6D7281)보다 진한 의도된 차이입니다 (대비 6.95:1).
 */

const VARIANT_CLASS = {
  blue: styles.blue,
  gray: styles.gray,
  red: styles.red,
};

export default function BadgeSmall({ variant = 'blue', children = '텍스트' }) {
  const variantClass = VARIANT_CLASS[variant] ?? styles.blue;

  return (
    <span className={`${styles.badge} ${variantClass}`}>
      <span className={`text-body-4-semibold ${styles.label}`}>{children}</span>
    </span>
  );
}
