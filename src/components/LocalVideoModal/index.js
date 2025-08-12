import React, { useState, useRef } from 'react';
import './style.css';

const LocalVideoModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const videoRef = useRef(null);

    const openModal = () => {
        setIsOpen(true);
        // Auto-play video when modal opens
        setTimeout(() => {
            if (videoRef.current) {
                videoRef.current.play();
            }
        }, 100);
    };

    const closeModal = () => {
        setIsOpen(false);
        // Pause video when modal closes
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    };

    return (
        <>
            {/* Video Button */}
            <div className="video-btn">
                <ul>
                    <li>
                        <button className="wrap" onClick={openModal}>
                            <i className="fi flaticon-play" aria-hidden="true"></i>
                        </button>
                    </li>
                </ul>
            </div>

            {/* Modal Overlay */}
            {isOpen && (
                <div className="local-video-modal-overlay" onClick={handleBackdropClick}>
                    <div className="local-video-modal-content">
                        <button className="close-btn" onClick={closeModal}>
                            <i className="fi flaticon-close"></i>
                        </button>
                        <div className="video-container">
                            <video
                                ref={videoRef}
                                className="construction-video"
                                controls
                                preload="metadata"
                            >
                                <source src="/construction-update-video.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default LocalVideoModal;
