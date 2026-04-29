'use client'

import { useState } from 'react';
import styles from './showcase.module.css';
import Image from 'next/image';
import { projects } from '../../data/projects';
import { YouTubeEmbed } from '@next/third-parties/google';

export default function Showcase() {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [visibleProjects, setVisibleProjects] = useState(4); // Initial number of visible projects

    const handleCardClick = (videoId) => {
        setSelectedVideo(videoId);
    };

    const handleClosePopup = () => {
        setSelectedVideo(null);
    };

    const handlePopupClick = (e) => {
        // Prevent closing the popup when clicking inside the video
        e.stopPropagation();
    };

    // const handleLoadMore = () => {
    //     setVisibleProjects(visibleProjects + 3); // Increment visible projects by 3
    // };

    return (
        <div className={styles.showcase} id='works'>
            <div className={styles.head}>
                <h1>Showcase</h1>
                <p>Crafted with perfection and one in a trillion collection</p>
            </div>
            <div className={styles.container}>
                {projects.slice(0, visibleProjects).map((item, index) => (
                    <div className={styles.card} key={index} onClick={() => handleCardClick(item.youtube)}>
                        <div className={styles.box}>
                            <Image
                                // src={`http://img.youtube.com/vi/${item.youtube}/1.jpg`}
                                src={item.img}
                                alt={item.title}
                                width={300}
                                height={500}
                            />
                        </div>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                    </div>
                ))}
            </div>

            {/* {visibleProjects < projects.length && (
                <button className={styles.loadBtn} onClick={handleLoadMore}><b>Load More</b></button>
            )} */}

            {selectedVideo && (
                <div className={styles.popup} onClick={handleClosePopup}>
                    <div className={styles.popupContent} onClick={handlePopupClick}>
                        <YouTubeEmbed
                            videoid={selectedVideo}
                            height={"100%"}
                            params="controls=0"
                            playlabel='Play'
                            style='border-radius:10px;'
                        />
                    </div>
                </div>
            )}
        </div>
    );
}