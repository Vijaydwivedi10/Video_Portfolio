import React, { useState } from 'react';
import '../css/Portfolio.css';

// Importing Images
import Cipla_Work_Overview from '../ImagesVideos/CIPLA_GRAPHIC_WORK_NN.png';
import Thumbnail_B from '../ImagesVideos/Thumbnail_B.png';
import Thumbnail_OM from '../ImagesVideos/Thumbnail_OM.png';
import Thumbnail_OF from '../ImagesVideos/Thumbnail_OF.png';
import Thumbnail_YM from '../ImagesVideos/Thumbnail_YM.png';
import Thumbnail_YF from '../ImagesVideos/Thumbnail_YF.png';
import Kroop from '../ImagesVideos/Kroop.png';
import Viz from '../ImagesVideos/Viz.jpg';
import Thumbnail_CA from '../ImagesVideos/Thumbnail_CA.png';
import Thumbnail_Q from '../ImagesVideos/Thumbnail_Q.png';
import PHD_Home from '../ImagesVideos/PHD_Home.png';
import besideyou from '../ImagesVideos/besideyou.png';
import PHD_Post from '../ImagesVideos/PHD_Post.png';
import PHD_Jobposting from '../ImagesVideos/PHD_Jobposting.png';
import PHD_Applicants from '../ImagesVideos/PHD_Applicants.png';
import PHD_Jobdetails from '../ImagesVideos/PHD_Jobdetails.png';
import PHD_Expereinces from '../ImagesVideos/PHD_Expereinces.png';
import PHD_Applied from '../ImagesVideos/PHD_Applied.png';
import PHD_Interview from '../ImagesVideos/PHD_Interview.png';
import Sleeky from '../ImagesVideos/Sleeky.jpg';
import Graphics_11 from '../ImagesVideos/Graphics_11.png';
import Before_After from '../ImagesVideos/Before_After.jpg';
import Motion from '../ImagesVideos/Motion.jpg';


function Portfolio() {
    const [showVideo, setShowVideo] = useState(Array(10).fill(false)); // Adjust array size for total videos

    const handleVideoClick = (index) => {
        const newShowVideo = [...showVideo];
        newShowVideo[index] = !newShowVideo[index];
        setShowVideo(newShowVideo);
    };

    return (
        <section id="portfolio" className="portfolio">
            {/* Main heading */}
            <div className="main-heading">
                <h1>EXPERIENCE</h1>
            </div>

            {/* CIPLA Work */}
            <div className="section cipla-work">
                <h2>CIPLA Work</h2>
                <div className="cipla-content">
                    <img
                        src={Cipla_Work_Overview}
                        alt="CIPLA Work Overview"
                        className="work-image"
                        style={{
                            width: '90%', // Set the desired width
                            height: 'auto', // Maintain aspect ratio
                            borderRadius: '12px', // Rounded corners
                            marginBottom: '4px',
                            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)', // Enhanced shadow effect
                        }}
                    />

                    {/* Video 1 */}
                    <div className="video">
                        <h3>CIPLA Sample Video 1</h3>
                        <div className="iframe-container">
                            {!showVideo[0] ? (
                                <img
                                    src={Thumbnail_OM} // Use your poster image here for Video 1
                                    alt="Video Thumbnail"
                                    onClick={() => handleVideoClick(0)}
                                    style={{ cursor: 'pointer', width: '100%', height: 'auto' }} />
                            ) : (
                                <iframe
                                    title="U1"
                                    className="video-player"
                                    src="https://drive.google.com/file/d/1p9RNdoAXVPatszYiEBrZoV5NeK0lvU0A/preview"
                                    allow="autoplay; fullscreen"
                                    allowFullScreen>
                                </iframe>
                            )}
                        </div>
                    </div>

                    {/* Video 2 */}
                    <div className="video">
                        <h3>CIPLA Sample Video 2</h3>
                        <div className="iframe-container">
                            {!showVideo[1] ? (
                                <img
                                    src={Thumbnail_OM} // Use your poster image here for Video 2
                                    alt="Video Thumbnail"
                                    onClick={() => handleVideoClick(1)}
                                    style={{ cursor: 'pointer', width: '100%', height: 'auto' }} />
                            ) : (
                                <iframe
                                    title="U2"
                                    className="video-player"
                                    src="https://drive.google.com/file/d/1ugU8Qjo4wV8MpdGVcPz1HZ2VMSk8MSXG/preview"
                                    allow="autoplay; fullscreen"
                                    allowFullScreen>
                                </iframe>
                            )}
                        </div>
                    </div>

                    {/* Video 3 */}
                    <div className="video">
                        <h3>CIPLA Sample Video 3</h3>
                        <div className="iframe-container">
                            {!showVideo[2] ? (
                                <img
                                    src={Thumbnail_YF} // Use your poster image here for Video 3
                                    alt="Video Thumbnail"
                                    onClick={() => handleVideoClick(2)}
                                    style={{ cursor: 'pointer', width: '100%', height: 'auto' }} />
                            ) : (
                                <iframe
                                    title="U3"
                                    className="video-player"
                                    src="https://drive.google.com/file/d/1ArMk3NuQmxM0UOjS07JE9jKWfFVBHWap/preview"
                                    allow="autoplay; fullscreen"
                                    allowFullScreen>
                                </iframe>
                            )}
                        </div>
                    </div>

                    {/* Video 4 */}
                    <div className="video">
                        <h3>CIPLA Sample Video 4</h3>
                        <div className="iframe-container">
                            {!showVideo[3] ? (
                                <img
                                    src={Thumbnail_B} // Use your poster image here for Video 4
                                    alt="Video Thumbnail"
                                    onClick={() => handleVideoClick(3)}
                                    style={{ cursor: 'pointer', width: '100%', height: 'auto' }} />
                            ) : (
                                <iframe
                                    title="U4"
                                    className="video-player"
                                    src="https://drive.google.com/file/d/1Gn6ggcEif27xehYauppvrWYVf90Fl5xL/preview"
                                    allow="autoplay; fullscreen"
                                    allowFullScreen>
                                </iframe>
                            )}
                        </div>
                    </div>

                    {/* Video 5 */}
                    <div className="video">
                        <h3>CIPLA Sample Video 5</h3>
                        <div className="iframe-container">
                            {!showVideo[4] ? (
                                <img
                                    src={Thumbnail_OF} // Use your poster image here for Video 5
                                    alt="Video Thumbnail"
                                    onClick={() => handleVideoClick(4)}
                                    style={{ cursor: 'pointer', width: '100%', height: 'auto' }} />
                            ) : (
                                <iframe
                                    title="U5"
                                    className="video-player"
                                    src="https://drive.google.com/file/d/1t6q5jghEaQ92T-E6Toy-xqGdZpLKSJLg/preview"
                                    allow="autoplay; fullscreen"
                                    allowFullScreen>
                                </iframe>
                            )}
                        </div>
                    </div>

                    {/* Video 6 */}
                    <div className="video">
                        <h3>CIPLA Sample Video 6</h3>
                        <div className="iframe-container">
                            {!showVideo[5] ? (
                                <img
                                    src={Thumbnail_YF} // Use your poster image here for Video 6
                                    alt="Video Thumbnail"
                                    onClick={() => handleVideoClick(5)}
                                    style={{ cursor: 'pointer', width: '100%', height: 'auto' }} />
                            ) : (
                                <iframe
                                    title="U6"
                                    className="video-player"
                                    src="https://drive.google.com/file/d/1ep7Xf2GmojuEpffZeA55MJZ11YGe5UUV/preview"
                                    allow="autoplay; fullscreen"
                                    allowFullScreen>
                                </iframe>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Kroop AI Work */}
            <div className="section kroopai-work">
                <h2>Kroop AI Work</h2>
                <div className="kroopai-content">

                    {/* Kroop AI Video 1 */}
                    <div className="video">
                        <h3>Logo Animation Video</h3>
                        <div className="iframe-container">
                            {!showVideo[6] ? (
                                <img
                                    src={Kroop} // Use your poster image here for Kroop AI Video 1
                                    alt="Video Thumbnail"
                                    onClick={() => handleVideoClick(6)}
                                    style={{ cursor: 'pointer', width: '100%', height: 'auto' }} />
                            ) : (
                                <iframe
                                    title="U7"
                                    className="video-player"
                                    src="https://drive.google.com/file/d/1XpijUN6c2BLQjt4hiU52NuEFFn-RZ_cL/preview"
                                    allow="autoplay; fullscreen"
                                    allowFullScreen>
                                </iframe>
                            )}
                        </div>
                    </div>

                    {/* Kroop AI Video 2 */}
                    <div className="video">
                        <h3>Quick Video Presentation</h3>
                        <div className="iframe-container">
                            {!showVideo[7] ? (
                                <img
                                    src={Thumbnail_Q} // Use your poster image here for Kroop AI Video 2
                                    alt="Video Thumbnail"
                                    onClick={() => handleVideoClick(7)}
                                    style={{ cursor: 'pointer', width: '100%', height: 'auto' }} />
                            ) : (
                                <iframe
                                    title="U8"
                                    className="video-player"
                                    src="https://drive.google.com/file/d/1om4rM0LWO8hqPyzPjESJQZ6H9UW8mHEx/preview"
                                    allow="autoplay; fullscreen"
                                    allowFullScreen>
                                </iframe>
                            )}
                        </div>
                    </div>

                    {/* Kroop AI Video 3 */}
                    <div className="video">
                        <h3>Custom Animation video</h3>
                        <div className="iframe-container">
                            {!showVideo[8] ? (
                                <img
                                    src={Thumbnail_CA} // Use your poster image here for Kroop AI Video 3
                                    alt="Video Thumbnail"
                                    onClick={() => handleVideoClick(8)}
                                    style={{ cursor: 'pointer', width: '100%', height: 'auto' }} />
                            ) : (
                                <iframe
                                    title="U9"
                                    className="video-player"
                                    src="https://drive.google.com/file/d/1a1jHxmnG-NXK53VhKYfaOLgQ0Qqd9-1T/preview"
                                    allow="autoplay; fullscreen"
                                    allowFullScreen>
                                </iframe>
                            )}
                        </div>
                    </div>

                    {/* Kroop AI Video 4 */}
                    <div className="video">
                        <h3>Motion Graphics Video</h3>
                        <div className="iframe-container">
                            {!showVideo[9] ? (
                                <img
                                    src={Viz} // Use your poster image here for Kroop AI Video 4
                                    alt="Video Thumbnail"
                                    onClick={() => handleVideoClick(9)}
                                    style={{ cursor: 'pointer', width: '100%', height: 'auto' }} />
                            ) : (
                                <iframe
                                    title="U10"
                                    className="video-player"
                                    src="https://drive.google.com/file/d/1REmpxCvG5R1UQMd6AhtRLer04_7CefH8/preview"
                                    allow="autoplay; fullscreen"
                                    allowFullScreen>
                                </iframe>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Comparison Section */}
            {/* Comparison Section */}
<div className="section Comparison">
    <h2>Comparison Reels</h2>
    <div className="comparison-videos">
        {[
            {
                title: "Before After Video",
                src: "https://drive.google.com/file/d/18uKJz5qZHh-fr4hLe3A_J9MIjMfPFYZg/preview",
                thumbnail: Before_After // Use your specific thumbnail image for this video
            },
            {
                title: "Animation Tutorial",
                src: "https://drive.google.com/file/d/1YiTqX5_aItKKCjmC1jRg9dW0Wifmou_V/preview",
                thumbnail: Motion // Use your specific thumbnail image for this video
            }
        ].map((video, index) => (
            <div className="video" key={index}>
                <h3>{video.title}</h3>
                <div className="iframe-container">
                    {!showVideo[index + 10] ? (
                        <img
                            src={video.thumbnail} // Use the thumbnail from the video object
                            alt="Video Thumbnail"
                            onClick={() => handleVideoClick(index + 10)}
                            style={{ cursor: 'pointer', width: '100%', height: 'auto' }} />
                    ) : (
                        <iframe
                            title="U12"
                            className="video-player"
                            src={video.src}
                            allow="autoplay; fullscreen"
                            allowFullScreen>
                        </iframe>
                    )}
                </div>
            </div>
        ))}
    </div>
</div>



         
            {/* Graphic Designing Section */}
            <div className="section graphic-design">
    <h2>Graphic Design Work</h2>
    <div className="graphic-images">
        <div className="column-1">
            <img
                src={besideyou}
                alt="CIPLA Work Overview"
                className="work-image"
            />
            
        </div>
        <div className="column-2">
            <img
                src={PHD_Home}
                alt="CIPLA Work Overview"
                className="work-image"
            />
            <img
                src={PHD_Post}
                alt="CIPLA Work Overview"
                className="work-image"
            />
            <img
                src={PHD_Jobposting}
                alt="CIPLA Work Overview"
                className="work-image"
            />
            <img
                src={PHD_Applicants}
                alt="CIPLA Work Overview"
                className="work-image"
            />
            </div>
            <div className="column-3">
            <img
                src={PHD_Expereinces}
                alt="CIPLA Work Overview"
                className="work-image"
            />
            <img
                src={PHD_Jobdetails}
                alt="CIPLA Work Overview"
                className="work-image"
            />

<img
                src={PHD_Interview}
                alt="CIPLA Work Overview"
                className="work-image"
            />

<img
                src={PHD_Applied}
                alt="CIPLA Work Overview"
                className="work-image"
            />

            </div>

            <div className="column-4">
            
            <img
                src={Sleeky}
                alt="CIPLA Work Overview"
                className="work-image"
            />
            <img
                src={Graphics_11}
                alt="CIPLA Work Overview"
                className="work-image"
            />

<img
                src={Thumbnail_OF}
                alt="CIPLA Work Overview"
                className="work-image"
            />
            <img
                src={Thumbnail_OM}
                alt="CIPLA Work Overview"
                className="work-image"
            />
            <img
                src={Thumbnail_YM}
                alt="CIPLA Work Overview"
                className="work-image"
            />
            <img
                src={Thumbnail_YM}
                alt="CIPLA Work Overview"
                className="work-image"
            />
            <img
                src={Thumbnail_B}
                alt="CIPLA Work Overview"
                className="work-image"
            />
        </div>
    </div>
</div>


        </section>
    );
}

export default Portfolio;
