const YouTubePlayer = ({ videoId, title }: { videoId: string; title: string }) => {
    return (
        <div className="w-full max-w-3xl mx-auto py-12">
            <h2 className="text-2xl font-semibold text-center mb-4">{title}</h2>
            <div className="relative pb-9/16">
                <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={title}
                />
            </div>
        </div>
    );
};

export default YouTubePlayer;
