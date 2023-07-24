import { Gallery } from "react-grid-gallery";
import ResearchPaper from "../ResearchPaper/ResearchPaper";


const PhotoGallery = () => {
    const images = [
        {
           src: "https://plus.unsplash.com/premium_photo-1682974406944-099e0b2a7ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JhZHVhdGlvbiUyMGNlcmVtb255fGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
           width: 320,
           height: 174,
        },
        {
           src: "https://images.unsplash.com/photo-1610998042928-13115b30c5e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fGdyYWR1YXRpb24lMjBjZXJlbW9ueXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
           width: 300,
           height: 402,
        },
        {
           src: "https://images.unsplash.com/photo-1496317899792-9d7dbcd928a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGdyYWR1YXRpb24lMjBjZXJlbW9ueXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
           width: 500,
           height: 500,
        },
        {
            src: "https://media.istockphoto.com/id/1429433359/photo/university-graduation.webp?b=1&s=170667a&w=0&k=20&c=1XICRgb48Vd_E393WmqNCa1ioD4Y0fXO4EyFJTc9hp4=",
            width: 320,
            height: 174,
        },
        {
            src: "https://media.istockphoto.com/id/1349302576/photo/happy-graduate-student-holding-his-diploma-on-graduation-day.webp?b=1&s=170667a&w=0&k=20&c=Rr9c4Evpt3SU3qxVjmUvjYD8JDRomWT_DeKmSg9CuEw=",
            width: 300,
            height: 174,
        },
        {
            src: "https://images.unsplash.com/photo-1496469888073-80de7e952517?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGdyYWR1YXRpb24lMjBjZXJlbW9ueXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
            width: 320,
            height: 174,
         },
        {
            src: "https://media.istockphoto.com/id/1346691472/photo/excited-african-american-college-graduate-with-his-family-after-the-graduation-ceremony.webp?b=1&s=170667a&w=0&k=20&c=_FSKYXeeDnQwn3QrulWbA5F8PPBheSRVW5CJM3ptuks=",
            width: 250,
            height: 174,
         },
        {
            src: "https://images.unsplash.com/photo-1627556704353-016baeb12c79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGdyYWR1YXRpb24lMjBjZXJlbW9ueXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
            width: 250,
            height: 174,
         },
        {
            src: "https://images.unsplash.com/photo-1627556704243-5f0771d90783?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fGdyYWR1YXRpb24lMjBjZXJlbW9ueXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
            width: 250,
            height: 174,
         },
        {
            src: "https://plus.unsplash.com/premium_photo-1682974406927-ee2873c3d59a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGdyYWR1YXRpb24lMjBjZXJlbW9ueXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
            width: 250,
            height: 174,
         },
     ];
     
    return (
        <div className="my-10">
            <h1 className="text-center text-3xl font-bold my-10 text-pink-600">Graduation Ceremony</h1>
            <Gallery images={images} />
            <ResearchPaper></ResearchPaper>
        </div>
    );
};

export default PhotoGallery;