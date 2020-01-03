import React from 'react';
import styles from './profileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div className={styles.img}><img alt=""
                                             src="https://d13qmi8c46i38w.cloudfront.net/media/UCPthyssenkruppAG/assets.files/media/unternehmen/unternehmensstruktur/industrial-solutions/rs82753_rs82753_pdhpp_in_port_said_nachts_hpr_image_w2000_h670.jpg"/>
            </div>
            <div className={styles.description}>
                Ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;