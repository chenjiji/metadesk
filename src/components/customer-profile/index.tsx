import React, { useState } from 'react';
import styles from './index.less';
import profile1_0 from './images/profile1_0.png';
import profile1_1 from './images/profile1_1.png';
import profile1_2 from './images/profile1_2.png';
import profile2_1 from './images/profile2_0.png';
import profile3_1 from './images/profile3_0.png';
import profile4_1 from './images/profile4_0.png';

export default function ({ left = 650, top = 244, visible = true, isDraged }: { left: number, top: number, visible: boolean, isDraged: boolean }) {
    const [src, setSrc] = useState<string>(profile1_1);
    return (
        <div className={styles.customerProfile} style={{ top: top + 'px', left: left + 'px', display: visible ? 'block' : 'none' }}>
            <div className={styles.tabs}>
                <div className={styles.div1} onClick={() => { setSrc(profile1_1) }}></div>
                <div className={styles.div2} onClick={() => { setSrc(profile2_1) }}></div>
                <div className={styles.div3} onClick={() => { setSrc(profile3_1) }}></div>
                <div className={styles.div4} onClick={() => { setSrc(profile4_1) }}></div>
            </div>
            <img src={(src === profile1_1 && isDraged) ? profile1_2 : src} />
        </div>
    );
}