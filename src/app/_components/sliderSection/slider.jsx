import Marquee from "react-fast-marquee";
import Image from 'next/image'
import styles from './slider.module.css'
import { data } from '../../data/clientIcons'

export default function Slider() {
    return (
        <div className={styles.slider}>
            <b>We've worked with great companies</b>
            <Marquee
                gradient={true}
                speed={60}
                pauseOnFocus={true}
            >
                {
                    data.map((item, index) => (
                        <div key={index} className={styles.imgContainer}>
                            <Image
                                src={item.img}
                                alt={item.title}
                                width={500}
                                height={500}
                            />
                        </div>
                    ))
                }
            </Marquee>

            <Marquee
                gradient={true}
                speed={60}
                pauseOnFocus={true}
                direction="right"
            >
                {
                    data.map((item, index) => (
                        <div key={index} className={styles.imgContainer}>
                            <Image
                                src={item.img}
                                alt={item.title}
                                width={500}
                                height={500}
                            />
                        </div>
                    ))
                }
            </Marquee>
        </div>
    )
}