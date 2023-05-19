import React from 'react'
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesUp } from '@fortawesome/free-solid-svg-icons';

function BtnSubir() {

    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const position = window.pageYOffset;
            setScrollPosition(position);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "auto"
        });
    };

    return (
        <div>
            {scrollPosition > 1000 && (
                <div className="fixed-bottom d-flex justify-content-end float-sm-end">
                    <button className="btn btnsubir btn-lg me-5 mb-5" onClick={handleScrollToTop}>
                        <FontAwesomeIcon icon={faAnglesUp} size="lg" style={{color: "#2c00db",}}/>
                    </button>
                </div>
            )}
        </div>
    )
}

export default BtnSubir