import styles from './service.module.css'
import s1 from '../../../../public/assets/img1.jpg'
import s2 from '../../../../public/assets/s2.png'
import s3 from '../../../../public/assets/s3.png'
import s4 from '../../../../public/assets/s4.png'
import Image from 'next/image'

const data = [
    {
        img: s1,
        title: "AI Hybrid",
        subtitle: "Advertising",
        video: "/assets/liveEvent.mp4"
    },
    {
        img: s2,
        title: "Budget-Friendly",
        subtitle: "Brand Films",
        video: "/assets/socmed.mp4"
    },
    {
        img: s3,
        title: "Product Ads",
        subtitle: "& Social Media",
        video: "/assets/corp.mp4"
    },
    {
        img: s4,
        title: "Visual Development",
        subtitle: "& Creative Direction",
        video: "/assets/event.mp4"
    },
]

export default function Service() {
    return (
        <div className={styles.service} id='services'>
            <h1>What We Do</h1>
            <div className={styles.container}>
                {
                    data.map((item, index) => (
                        <div className={styles.card} key={index}>
                            <video
                                autoPlay
                                loop
                                muted
                                className={styles.video}
                            >
                                <source
                                    id='webm'
                                    src={item.video}
                                    type='video/mp4'
                                />
                            </video>
                            {/* <Image
                                src={item.img}
                                alt={item.title}
                                width={800}
                                height={800}
                            /> */}
                            <div className={styles.text}>
                                <h2>{item.title}</h2>
                                <p>{item.subtitle}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}