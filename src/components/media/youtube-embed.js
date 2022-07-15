import React from "react";

export default function AutoPlay({src}) {
    React.useEffect(() => {
        const video = document.querySelectorAll('video');
        video.forEach(vid => {
            vid.play();
        });
    }, []);
    
    return (
        <div style={{width: "100%", aspectRatio: "16/9"}}>
            <iframe
                style={{width: "100%", height: "100%"}}
                src={src}
                title="Introducing AvdanOS (Concept)" 
                // @ts-ignore
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>
        </div>
    )
} 