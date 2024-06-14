export default function Header(){
    return (
        <div className="flex flex-col justify-center gap-4">
            <div className="rounded-full w-14 h-14 bg-secondary">Home</div>
            <div className="rounded-full w-14 h-14 bg-accent">About Me</div>
            <div className="rounded-full w-14 h-14 bg-accent">My Portfolio</div>
            <div className="rounded-full w-14 h-14 bg-accent">Contact</div>
            <div className="rounded-full w-14 h-14 bg-accent">My Blog</div>
        </div>
    );
}