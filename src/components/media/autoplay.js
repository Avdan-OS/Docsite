import React from "react";

export default function AutoPlay({src}) {
    React.useEffect(() => {
        const video = document.querySelectorAll('video');
        video.forEach(vid => {
            vid.play();
        });
    }, []);
    
    return (
        <>
            <video style={{width: "100%"}} loop muted>
                <source src={src} type="video/webm" />
                Showcase video could not be loaded.
            </video>
        </>
    )
} 