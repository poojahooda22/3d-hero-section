import React from 'react';
import clsx from 'clsx';
import styles from './button.module.css';

const Button: React.FC = () => (
  <button className={clsx(styles.button, styles.buttonItem)}>
    {/* coloured background “blob” */}
    <span className={styles.buttonBg}>
      <span className={styles.buttonBgLayers}>
        <span
          className={clsx(
            styles.buttonBgLayer,
            styles.buttonBgLayer1,
            styles.buttonBgLayerPurple
          )}
        />
        <span
          className={clsx(
            styles.buttonBgLayer,
            styles.buttonBgLayer2,
            styles.buttonBgLayerTurquoise
          )}
        />
        <span
          className={clsx(
            styles.buttonBgLayer,
            styles.buttonBgLayer3,
            styles.buttonBgLayerYellow
          )}
        />
      </span>
    </span>

    {/* label */}
    <span className={styles.buttonInner}>
      <span className={styles.buttonInnerStatic}>Book a demo</span>
      <span className={styles.buttonInnerHover}>Book a demo</span>
    </span>
  </button>
);

export default Button;

